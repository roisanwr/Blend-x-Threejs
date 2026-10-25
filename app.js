import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FORKLIFT_B64 } from './forklift_data.js';

const statusBadge = document.getElementById('status-badge');
const container = document.getElementById('canvas-container');
const telPos = document.getElementById('tel-pos');
const telFork = document.getElementById('tel-fork');
const telPallet = document.getElementById('tel-pallet');
const forkSlider = document.getElementById('fork-slider');
const hudToast = document.getElementById('hud-toast');

function showToast(msg) {
  if (hudToast) {
    hudToast.textContent = msg;
  }
}

function logError(msg) {
  console.error(msg);
  if (statusBadge) {
    statusBadge.textContent = '⚠️ ' + msg;
    statusBadge.style.background = '#7f1d1d';
    statusBadge.style.color = '#fca5a5';
  }
}

// ============================================================================
// 1. THREE.JS SCENE & CAMERA
// ============================================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0f141c');

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.15, 100);
camera.position.set(3.6, 2.35, -3.8);

// ============================================================================
// 2. GUARANTEED 3D CANVAS SOFTWARE RENDERER (WORKS 100% WITHOUT WEBGL / GPU)
// ============================================================================
class Software3DRenderer {
  constructor(parentEl) {
    this.domElement = document.createElement('canvas');
    this.ctx = this.domElement.getContext('2d', { alpha: false });
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.subdividedCache = new WeakMap();
    this.triPool = [];
    this.triCount = 0;

    if (parentEl) {
      parentEl.innerHTML = '';
      parentEl.appendChild(this.domElement);
    }
    this.setSize(this.width, this.height);
  }

  setSize(w, h) {
    this.width = w;
    this.height = h;
    this.domElement.width = Math.floor(w * this.dpr);
    this.domElement.height = Math.floor(h * this.dpr);
    this.domElement.style.width = w + 'px';
    this.domElement.style.height = h + 'px';
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  getSubdividedGeometry(mesh) {
    const geom = mesh.geometry;
    if (this.subdividedCache.has(geom)) {
      return this.subdividedCache.get(geom);
    }

    const pos = geom.attributes.position;
    const norm = geom.attributes.normal;
    const idx = geom.index;
    const tris = [];
    const maxEdge = 0.42;

    const splitTri = (ax, ay, az, bx, by, bz, cx, cy, cz, nx, ny, nz, depth) => {
      const dab = Math.hypot(ax - bx, ay - by, az - bz);
      const dbc = Math.hypot(bx - cx, by - cy, bz - cz);
      const dca = Math.hypot(cx - ax, cy - ay, cz - az);
      const m = Math.max(dab, dbc, dca);

      if (m <= maxEdge || depth >= 4) {
        tris.push(ax, ay, az, bx, by, bz, cx, cy, cz, nx, ny, nz);
        return;
      }
      if (dab === m) {
        const mx = (ax + bx) * 0.5, my = (ay + by) * 0.5, mz = (az + bz) * 0.5;
        splitTri(ax, ay, az, mx, my, mz, cx, cy, cz, nx, ny, nz, depth + 1);
        splitTri(mx, my, mz, bx, by, bz, cx, cy, cz, nx, ny, nz, depth + 1);
      } else if (dbc === m) {
        const mx = (bx + cx) * 0.5, my = (by + cy) * 0.5, mz = (bz + cz) * 0.5;
        splitTri(ax, ay, az, bx, by, bz, mx, my, mz, nx, ny, nz, depth + 1);
        splitTri(ax, ay, az, mx, my, mz, cx, cy, cz, nx, ny, nz, depth + 1);
      } else {
        const mx = (cx + ax) * 0.5, my = (cy + ay) * 0.5, mz = (cz + az) * 0.5;
        splitTri(ax, ay, az, bx, by, bz, mx, my, mz, nx, ny, nz, depth + 1);
        splitTri(mx, my, mz, bx, by, bz, cx, cy, cz, nx, ny, nz, depth + 1);
      }
    };

    const count = idx ? idx.count : pos.count;
    for (let i = 0; i < count; i += 3) {
      const a = idx ? idx.getX(i) : i;
      const b = idx ? idx.getX(i + 1) : i + 1;
      const c = idx ? idx.getX(i + 2) : i + 2;

      const ax = pos.getX(a), ay = pos.getY(a), az = pos.getZ(a);
      const bx = pos.getX(b), by = pos.getY(b), bz = pos.getZ(b);
      const cx = pos.getX(c), cy = pos.getY(c), cz = pos.getZ(c);

      let nx = 0, ny = 1, nz = 0;
      if (norm) {
        nx = (norm.getX(a) + norm.getX(b) + norm.getX(c)) / 3;
        ny = (norm.getY(a) + norm.getY(b) + norm.getY(c)) / 3;
        nz = (norm.getZ(a) + norm.getZ(b) + norm.getZ(c)) / 3;
        const len = Math.hypot(nx, ny, nz) || 1;
        nx /= len; ny /= len; nz /= len;
      }
      splitTri(ax, ay, az, bx, by, bz, cx, cy, cz, nx, ny, nz, 0);
    }

    const arr = new Float32Array(tris);
    this.subdividedCache.set(geom, arr);
    return arr;
  }

  projectLine3D(x1, y1, z1, x2, y2, z2, viewMat, f, aspect, halfW, halfH) {
    const e = viewMat.elements;
    let vx1 = e[0] * x1 + e[4] * y1 + e[8] * z1 + e[12];
    let vy1 = e[1] * x1 + e[5] * y1 + e[9] * z1 + e[13];
    let vz1 = e[2] * x1 + e[6] * y1 + e[10] * z1 + e[14];

    let vx2 = e[0] * x2 + e[4] * y2 + e[8] * z2 + e[12];
    let vy2 = e[1] * x2 + e[5] * y2 + e[9] * z2 + e[13];
    let vz2 = e[2] * x2 + e[6] * y2 + e[10] * z2 + e[14];

    const near = -0.18;
    if (vz1 > near && vz2 > near) return null;

    if (vz1 > near) {
      const t = (near - vz1) / (vz2 - vz1);
      vx1 += (vx2 - vx1) * t;
      vy1 += (vy2 - vy1) * t;
      vz1 = near;
    } else if (vz2 > near) {
      const t = (near - vz2) / (vz1 - vz2);
      vx2 += (vx1 - vx2) * t;
      vy2 += (vy1 - vy2) * t;
      vz2 = near;
    }

    const sx1 = halfW + (vx1 / -vz1) * (f / aspect) * halfW;
    const sy1 = halfH - (vy1 / -vz1) * f * halfH;
    const sx2 = halfW + (vx2 / -vz2) * (f / aspect) * halfW;
    const sy2 = halfH - (vy2 / -vz2) * f * halfH;
    return [sx1, sy1, sx2, sy2];
  }

  drawGroundShadowDisc(cx, cz, rx, rz, heading, viewMat, f, aspect, halfW, halfH, alpha) {
    const ctx = this.ctx;
    const segs = 20;
    const cosH = Math.cos(heading), sinH = Math.sin(heading);
    const e = viewMat.elements;
    ctx.beginPath();
    let started = false;
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      const lx = Math.cos(a) * rx;
      const lz = Math.sin(a) * rz;
      const wx = cx + lx * cosH + lz * sinH;
      const wz = cz - lx * sinH + lz * cosH;
      const wy = 0.002;
      const vx = e[0] * wx + e[4] * wy + e[8] * wz + e[12];
      const vy = e[1] * wx + e[5] * wy + e[9] * wz + e[13];
      const vz = e[2] * wx + e[6] * wy + e[10] * wz + e[14];
      if (vz >= -0.18) continue;
      const sx = halfW + (vx / -vz) * (f / aspect) * halfW;
      const sy = halfH - (vy / -vz) * f * halfH;
      if (!started) {
        ctx.moveTo(sx, sy);
        started = true;
      } else {
        ctx.lineTo(sx, sy);
      }
    }
    if (started) {
      ctx.closePath();
      ctx.fillStyle = `rgba(5, 8, 13, ${alpha})`;
      ctx.fill();
    }
  }

  render(sceneObj, cam) {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const halfW = w * 0.5;
    const halfH = h * 0.5;

    sceneObj.updateMatrixWorld(true);
    cam.updateMatrixWorld(true);
    cam.matrixWorldInverse.copy(cam.matrixWorld).invert();

    // 1. Background gradient
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#0b1017');
    grad.addColorStop(0.55, '#131b26');
    grad.addColorStop(1, '#182230');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const viewMat = cam.matrixWorldInverse;
    const f = 1.0 / Math.tan((cam.fov * Math.PI / 180) * 0.5);
    const aspect = cam.aspect;

    // 2. 3D Floor Grid
    ctx.lineWidth = 1;
    const gridExtent = 14;
    for (let i = -gridExtent; i <= gridExtent; i++) {
      const isCenter = i === 0;
      ctx.strokeStyle = isCenter ? 'rgba(100, 116, 139, 0.45)' : 'rgba(51, 65, 85, 0.35)';

      const l1 = this.projectLine3D(i, 0, -gridExtent, i, 0, gridExtent, viewMat, f, aspect, halfW, halfH);
      if (l1) {
        ctx.beginPath();
        ctx.moveTo(l1[0], l1[1]);
        ctx.lineTo(l1[2], l1[3]);
        ctx.stroke();
      }

      const l2 = this.projectLine3D(-gridExtent, 0, i, gridExtent, 0, i, viewMat, f, aspect, halfW, halfH);
      if (l2) {
        ctx.beginPath();
        ctx.moveTo(l2[0], l2[1]);
        ctx.lineTo(l2[2], l2[3]);
        ctx.stroke();
      }
    }

    // 3. Target Delivery Zone Box on Floor (at X=0, Z=-4.2)
    const zoneCorners = [
      [-0.85, 0.005, -3.4],
      [0.85, 0.005, -3.4],
      [0.85, 0.005, -4.8],
      [-0.85, 0.005, -4.8],
    ];
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.55)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      const c1 = zoneCorners[i];
      const c2 = zoneCorners[(i + 1) % 4];
      const seg = this.projectLine3D(c1[0], c1[1], c1[2], c2[0], c2[1], c2[2], viewMat, f, aspect, halfW, halfH);
      if (seg) {
        ctx.beginPath();
        ctx.moveTo(seg[0], seg[1]);
        ctx.lineTo(seg[2], seg[3]);
        ctx.stroke();
      }
    }

    // 4. Ground Contact Shadows under Forklift and Pallet
    if (forkliftRoot) {
      this.drawGroundShadowDisc(
        forkliftRoot.position.x,
        forkliftRoot.position.z,
        0.78,
        1.45,
        forkliftRoot.rotation.y,
        viewMat, f, aspect, halfW, halfH, 0.45
      );
    }
    if (palletGroup) {
      const pw = new THREE.Vector3();
      palletGroup.getWorldPosition(pw);
      this.drawGroundShadowDisc(
        pw.x,
        pw.z,
        0.72,
        0.58,
        forkliftRoot ? forkliftRoot.rotation.y : 0,
        viewMat, f, aspect, halfW, halfH, 0.35
      );
    }

    // 5. Collect & Project 3D Triangles from GLTF Model
    this.triCount = 0;
    const ve = viewMat.elements;

    // Light directions in world space (normalized)
    // Key light from top-front-left, Fill light from top-back-right
    const lx1 = -0.42, ly1 = 0.78, lz1 = -0.46;
    const lx2 = 0.55, ly2 = 0.60, lz2 = 0.58;

    sceneObj.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      if (obj.userData.skipSoftwareRender) return;

      const subTris = this.getSubdividedGeometry(obj);
      const me = obj.matrixWorld.elements;

      // Material base color
      const mat = obj.material;
      const baseR = mat && mat.color ? mat.color.r : 0.7;
      const baseG = mat && mat.color ? mat.color.g : 0.7;
      const baseB = mat && mat.color ? mat.color.b : 0.7;
      const isEmissiveLight = mat && (mat.name === 'M_Headlight' || mat.name === 'M_Taillight');

      // Normal matrix (upper 3x3 of matrixWorld, assuming uniform scale)
      const m00 = me[0], m01 = me[1], m02 = me[2];
      const m10 = me[4], m11 = me[5], m12 = me[6];
      const m20 = me[8], m21 = me[9], m22 = me[10];
      const tx = me[12], ty = me[13], tz = me[14];

      for (let i = 0, n = subTris.length; i < n; i += 12) {
        const ax = subTris[i], ay = subTris[i + 1], az = subTris[i + 2];
        const bx = subTris[i + 3], by = subTris[i + 4], bz = subTris[i + 5];
        const cx = subTris[i + 6], cy = subTris[i + 7], cz = subTris[i + 8];
        const lnx = subTris[i + 9], lny = subTris[i + 10], lnz = subTris[i + 11];

        // World coordinates
        const wax = m00 * ax + m10 * ay + m20 * az + tx;
        const way = m01 * ax + m11 * ay + m21 * az + ty;
        const waz = m02 * ax + m12 * ay + m22 * az + tz;

        const wbx = m00 * bx + m10 * by + m20 * bz + tx;
        const wby = m01 * bx + m11 * by + m21 * bz + ty;
        const wbz = m02 * bx + m12 * by + m22 * bz + tz;

        const wcx = m00 * cx + m10 * cy + m20 * cz + tx;
        const wcy = m01 * cx + m11 * cy + m21 * cz + ty;
        const wcz = m02 * cx + m12 * cy + m22 * cz + tz;

        // Camera space coordinates
        const vax = ve[0] * wax + ve[4] * way + ve[8] * waz + ve[12];
        const vay = ve[1] * wax + ve[5] * way + ve[9] * waz + ve[13];
        const vaz = ve[2] * wax + ve[6] * way + ve[10] * waz + ve[14];

        const vbx = ve[0] * wbx + ve[4] * wby + ve[8] * wbz + ve[12];
        const vby = ve[1] * wbx + ve[5] * wby + ve[9] * wbz + ve[13];
        const vbz = ve[2] * wbx + ve[6] * wby + ve[10] * wbz + ve[14];

        const vcx = ve[0] * wcx + ve[4] * wcy + ve[8] * wcz + ve[12];
        const vcy = ve[1] * wcx + ve[5] * wcy + ve[9] * wcz + ve[13];
        const vcz = ve[2] * wcx + ve[6] * wcy + ve[10] * wcz + ve[14];

        // Near-plane check
        if (vaz > -0.15 || vbz > -0.15 || vcz > -0.15) continue;

        // Screen projection
        const invZa = 1.0 / -vaz;
        const invZb = 1.0 / -vbz;
        const invZc = 1.0 / -vcz;

        const sxa = halfW + (vax * invZa) * (f / aspect) * halfW;
        const sya = halfH - (vay * invZa) * f * halfH;
        const sxb = halfW + (vbx * invZb) * (f / aspect) * halfW;
        const syb = halfH - (vby * invZb) * f * halfH;
        const sxc = halfW + (vcx * invZc) * (f / aspect) * halfW;
        const syc = halfH - (vcy * invZc) * f * halfH;

        // 2D Backface culling (CCW in 3D projects to negative cross product in Y-down screen coords)
        const cross = (sxb - sxa) * (syc - sya) - (syb - sya) * (sxc - sxa);
        if (cross >= 0) continue;

        // Frustum bounds check
        if ((sxa < 0 && sxb < 0 && sxc < 0) || (sxa > w && sxb > w && sxc > w) ||
            (sya < 0 && syb < 0 && syc < 0) || (sya > h && syb > h && syc > h)) {
          continue;
        }

        // World normal
        let wnx = m00 * lnx + m10 * lny + m20 * lnz;
        let wny = m01 * lnx + m11 * lny + m21 * lnz;
        let wnz = m02 * lnx + m12 * lny + m22 * lnz;
        const nLen = Math.hypot(wnx, wny, wnz) || 1;
        wnx /= nLen; wny /= nLen; wnz /= nLen;

        // Lighting calculation
        let r, g, b;
        if (isEmissiveLight) {
          r = Math.min(255, Math.floor(baseR * 255));
          g = Math.min(255, Math.floor(baseG * 255));
          b = Math.min(255, Math.floor(baseB * 255));
        } else {
          const diff1 = Math.max(0, wnx * lx1 + wny * ly1 + wnz * lz1);
          const diff2 = Math.max(0, wnx * lx2 + wny * ly2 + wnz * lz2);
          const hemi = 0.34 + 0.18 * (wny * 0.5 + 0.5);
          const shade = Math.min(1.22, hemi + diff1 * 0.58 + diff2 * 0.25);

          // Convert linear-ish GLTF material color to vibrant sRGB
          const sr = Math.pow(baseR, 0.82) * shade;
          const sg = Math.pow(baseG, 0.82) * shade;
          const sb = Math.pow(baseB, 0.82) * shade;

          r = Math.min(255, Math.max(0, Math.floor(sr * 255)));
          g = Math.min(255, Math.max(0, Math.floor(sg * 255)));
          b = Math.min(255, Math.max(0, Math.floor(sb * 255)));
        }

        const avgZ = (vaz + vbz + vcz) * 0.333333;

        let item = this.triPool[this.triCount];
        if (!item) {
          item = { sxa: 0, sya: 0, sxb: 0, syb: 0, sxc: 0, syc: 0, z: 0, color: '' };
          this.triPool[this.triCount] = item;
        }
        item.sxa = sxa; item.sya = sya;
        item.sxb = sxb; item.syb = syb;
        item.sxc = sxc; item.syc = syc;
        item.z = avgZ;
        item.color = `rgb(${r},${g},${b})`;
        this.triCount++;
      }
    });

    // Sort back-to-front (more negative Z is further from camera)
    const activeTris = this.triPool.slice(0, this.triCount);
    activeTris.sort((a, b) => a.z - b.z);

    // Draw triangles with seam-free edge join
    ctx.lineJoin = 'round';
    ctx.lineWidth = 0.65;
    for (let i = 0, len = activeTris.length; i < len; i++) {
      const t = activeTris[i];
      ctx.fillStyle = t.color;
      ctx.strokeStyle = t.color;
      ctx.beginPath();
      ctx.moveTo(t.sxa, t.sya);
      ctx.lineTo(t.sxb, t.syb);
      ctx.lineTo(t.sxc, t.syc);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }
}

const renderer = new Software3DRenderer(container);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.target.set(0, 0.75, -0.5);
controls.maxPolarAngle = Math.PI / 2 - 0.03;
controls.minDistance = 1.8;
controls.maxDistance = 18;

// ============================================================================
// 3. STATE & FORKLIFT HIERARCHY
// ============================================================================
let forkliftRoot = null;
let forksGroup = null;
let palletGroup = null;
let steeringWheelMesh = null;
let hydraulicPistonMesh = null;
let yellowMaterials = [];
let wheels = []; // { mesh, steerPivot, isRear, radius }

const state = {
  // Position & orientation of forklift in world space
  x: 0.0,
  z: 0.0,
  heading: 0.0, // radians; 0 faces -Z

  // Velocities & targets for both continuous hold and click-impulse
  speed: 0.0,
  steerInput: 0.0,
  wheelSteerAngle: 0.0,

  // Impulse targets when clicking buttons
  impulseDistance: 0.0,
  impulseTurn: 0.0,

  // Fork height (0.05m ground to 1.40m raised)
  forkY: 0.05,
  targetForkY: 0.05,

  // Pallet carrying state
  isCarryingPallet: false,
  followCam: true,

  // Active held inputs
  keys: {
    fwd: false,
    rev: false,
    left: false,
    right: false,
    liftUp: false,
    liftDown: false
  }
};

function b64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// ============================================================================
// 4. LOAD & ENHANCE FORKLIFT GLTF MODEL
// ============================================================================
function setupLoadedModel(gltf) {
  const model = gltf.scene;
  scene.add(model);

  const rawWheels = [];

  model.traverse((child) => {
    if (child.isMesh) {
      if (child.material && (
        child.material.name.includes('M_Forklift_Yellow') ||
        child.material.name.includes('M_Wheel_Rim')
      )) {
        if (!yellowMaterials.includes(child.material)) {
          yellowMaterials.push(child.material);
        }
      }
    }
    if (child.name === 'Forklift_Root') forkliftRoot = child;
    if (child.name === 'Forklift_Forks') forksGroup = child;
    if (child.name === 'Pallet_Wood') palletGroup = child;
    if (child.name === 'Steering_Wheel') steeringWheelMesh = child;
    if (child.name === 'Lift_Hydraulic_Piston') hydraulicPistonMesh = child;
    if (child.name === 'Wheel_FL' || child.name === 'Wheel_FR' ||
        child.name === 'Wheel_RL' || child.name === 'Wheel_RR') {
      rawWheels.push(child);
    }
  });

  // Wrap each wheel in a steering pivot and add visual spoke bars so rotation is clearly visible
  const spokeMat = new THREE.MeshStandardMaterial({
    name: 'M_Spoke_Dark',
    color: new THREE.Color('#1e293b')
  });

  rawWheels.forEach((wMesh) => {
    const isRear = wMesh.name.startsWith('Wheel_R');
    const radius = isRear ? 0.24 : 0.28;
    const width = isRear ? 0.18 : 0.20;

    // Create a pivot group at the wheel's position inside Forklift_Root
    const pivot = new THREE.Group();
    pivot.name = wMesh.name + '_SteerPivot';
    pivot.position.copy(wMesh.position);
    wMesh.parent.add(pivot);

    wMesh.position.set(0, 0, 0);
    pivot.add(wMesh);

    // Add 2 crossed spoke bars on the outer/inner rim of the wheel so spinning is unmistakable
    const barGeo1 = new THREE.BoxGeometry(radius * 1.15, width * 1.14, 0.035);
    const bar1 = new THREE.Mesh(barGeo1, spokeMat);
    wMesh.add(bar1);

    const barGeo2 = new THREE.BoxGeometry(0.035, width * 1.14, radius * 1.15);
    const bar2 = new THREE.Mesh(barGeo2, spokeMat);
    wMesh.add(bar2);

    wheels.push({
      mesh: wMesh,
      steerPivot: pivot,
      isRear,
      radius
    });
  });

  if (statusBadge) {
    statusBadge.textContent = '🟢 3D Model Aktif';
    statusBadge.style.color = '#4ade80';
    statusBadge.style.background = '#14261c';
    statusBadge.style.borderColor = 'rgba(74, 222, 128, 0.35)';
  }

  window.app = { scene, camera, renderer, forkliftRoot, forksGroup, palletGroup, state };
}

try {
  const loader = new GLTFLoader();
  const buffer = b64ToArrayBuffer(FORKLIFT_B64);
  loader.parse(buffer, '', (gltf) => {
    setupLoadedModel(gltf);
  }, (err) => {
    logError('Parse Gagal: ' + (err?.message || err));
  });
} catch (e) {
  logError('Init Gagal: ' + e.message);
}

// ============================================================================
// 5. PALLET PICKUP & DROPOFF MECHANICS
// ============================================================================
function getForkBladeWorldCenter() {
  if (!forksGroup) return new THREE.Vector3(0, 0, -1.28);
  // Fork blades center is at local (0, 0.02, -0.64) inside Forklift_Forks
  const localCenter = new THREE.Vector3(0, 0.02, -0.64);
  return localCenter.applyMatrix4(forksGroup.matrixWorld);
}

function getPalletWorldPos() {
  if (!palletGroup) return new THREE.Vector3(0, 0, -1.28);
  const p = new THREE.Vector3();
  palletGroup.getWorldPosition(p);
  return p;
}

function attachPalletToForks(snapAlign = false) {
  if (!forksGroup || !palletGroup || state.isCarryingPallet) return false;
  forksGroup.updateMatrixWorld(true);
  palletGroup.updateMatrixWorld(true);

  if (snapAlign) {
    forksGroup.add(palletGroup);
    // Place pallet neatly on top of fork blades (local z = -0.64 is center of blades)
    palletGroup.position.set(0, -0.02, -0.64);
    palletGroup.rotation.set(0, 0, 0);
  } else {
    forksGroup.attach(palletGroup);
    // Keep pallet resting cleanly on the blades
    palletGroup.position.y = -0.02;
    palletGroup.rotation.x = 0;
    palletGroup.rotation.z = 0;
  }

  state.isCarryingPallet = true;
  showToast('📦 Pallet terangkat di atas garpu! Gunakan W/A/S/D untuk memindahkan pallet.');
  return true;
}

function detachPalletToFloor() {
  if (!palletGroup || !state.isCarryingPallet) return;
  scene.attach(palletGroup);
  palletGroup.position.y = 0.0;
  palletGroup.rotation.x = 0;
  palletGroup.rotation.z = 0;
  state.isCarryingPallet = false;
  showToast('📥 Pallet diletakkan di lantai! Kamu bisa mundur (S) atau angkat kembali (Q).');
}

function checkPalletProximityAndSync() {
  if (!forksGroup || !palletGroup) return;

  const forkCenter = getForkBladeWorldCenter();
  const palletPos = getPalletWorldPos();
  const distXZ = Math.hypot(forkCenter.x - palletPos.x, forkCenter.z - palletPos.z);

  // Automatic pickup when forks rise above 0.085m while under/near the pallet
  if (!state.isCarryingPallet && state.forkY >= 0.085 && distXZ < 0.95) {
    attachPalletToForks(distXZ < 0.65);
  }

  // Automatic dropoff when forks lower to the ground (<= 0.07m)
  if (state.isCarryingPallet && state.forkY <= 0.07) {
    detachPalletToFloor();
  }

  // Update telemetry UI
  if (telPallet) {
    if (state.isCarryingPallet) {
      telPallet.textContent = 'Diangkut';
      telPallet.style.color = '#4ade80';
    } else if (distXZ < 0.95) {
      telPallet.textContent = 'Siap Angkat';
      telPallet.style.color = '#fbbf24';
    } else {
      telPallet.textContent = `Jarak ${distXZ.toFixed(1)}m`;
      telPallet.style.color = '#94a3b8';
    }
  }
}

// ============================================================================
// 6. USER CONTROLS (BUTTONS + KEYBOARD + SLIDER)
// ============================================================================
function bindHoldAndImpulseButton(btnId, keyName, onClickImpulse) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  let downTime = 0;

  const startHold = (e) => {
    e.preventDefault();
    downTime = performance.now();
    state.keys[keyName] = true;
    btn.classList.add('active-pressed');
  };

  const endHold = (e) => {
    if (!state.keys[keyName]) return;
    e.preventDefault();
    state.keys[keyName] = false;
    btn.classList.remove('active-pressed');
    const elapsed = performance.now() - downTime;
    // If tapped/clicked briefly (< 240ms), also apply a smooth step impulse
    if (elapsed < 240 && onClickImpulse) {
      onClickImpulse();
    }
  };

  btn.addEventListener('mousedown', startHold);
  btn.addEventListener('touchstart', startHold, { passive: false });
  window.addEventListener('mouseup', endHold);
  window.addEventListener('touchend', endHold);
  btn.addEventListener('mouseleave', endHold);
}

// Drive Forward (Maju)
bindHoldAndImpulseButton('btn-drive-fwd', 'fwd', () => {
  state.impulseDistance = Math.min(state.impulseDistance + 0.75, 2.0);
});

// Drive Reverse (Mundur)
bindHoldAndImpulseButton('btn-drive-rev', 'rev', () => {
  state.impulseDistance = Math.max(state.impulseDistance - 0.75, -2.0);
});

// Turn Left (Belok Kiri)
bindHoldAndImpulseButton('btn-turn-left', 'left', () => {
  state.impulseTurn = Math.min(state.impulseTurn + (Math.PI / 8), Math.PI / 2);
});

// Turn Right (Belok Kanan)
bindHoldAndImpulseButton('btn-turn-right', 'right', () => {
  state.impulseTurn = Math.max(state.impulseTurn - (Math.PI / 8), -Math.PI / 2);
});

// Lift Up (Naikkan Garpu / Pallet)
bindHoldAndImpulseButton('btn-lift-up', 'liftUp', () => {
  // If tapped once, step up or lift to carry height
  if (state.targetForkY < 0.4) {
    state.targetForkY = 0.65;
  } else {
    state.targetForkY = Math.min(1.40, state.targetForkY + 0.45);
  }
  // If near pallet, ensure pallet engages smoothly
  const forkCenter = getForkBladeWorldCenter();
  const palletPos = getPalletWorldPos();
  if (!state.isCarryingPallet && Math.hypot(forkCenter.x - palletPos.x, forkCenter.z - palletPos.z) < 1.15) {
    attachPalletToForks(true);
  }
});

// Lift Down (Turunkan Garpu / Pallet)
bindHoldAndImpulseButton('btn-lift-down', 'liftDown', () => {
  if (state.targetForkY > 0.75) {
    state.targetForkY = 0.45;
  } else {
    state.targetForkY = 0.05;
  }
});

// Fork Height Slider
forkSlider?.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  if (!isNaN(val)) {
    state.targetForkY = val;
  }
});

// Instant Snap / Toggle Pallet Button
document.getElementById('btn-snap-pallet')?.addEventListener('click', () => {
  if (state.isCarryingPallet) {
    state.targetForkY = 0.05;
    detachPalletToFloor();
  } else {
    if (state.targetForkY < 0.25) {
      state.targetForkY = 0.55;
    }
    attachPalletToForks(true);
  }
});

// Reset Position Button
document.getElementById('btn-reset')?.addEventListener('click', () => {
  if (state.isCarryingPallet) {
    detachPalletToFloor();
  }
  state.x = 0.0;
  state.z = 0.0;
  state.heading = 0.0;
  state.speed = 0.0;
  state.impulseDistance = 0.0;
  state.impulseTurn = 0.0;
  state.forkY = 0.05;
  state.targetForkY = 0.05;

  if (forkliftRoot) {
    forkliftRoot.position.set(0, 0, 0);
    forkliftRoot.rotation.set(0, 0, 0);
  }
  if (forksGroup) {
    forksGroup.position.y = 0.05;
  }
  if (palletGroup) {
    scene.add(palletGroup);
    palletGroup.position.set(0, 0, -1.28);
    palletGroup.rotation.set(0, 0, 0);
  }
  controls.target.set(0, 0.75, -0.5);
  camera.position.set(3.6, 2.35, -3.8);
  showToast('🔄 Posisi Forklift & Pallet di-reset ke posisi awal.');
});

// Follow Camera Toggle
const btnCamFollow = document.getElementById('btn-cam-follow');
btnCamFollow?.addEventListener('click', () => {
  state.followCam = !state.followCam;
  btnCamFollow.textContent = state.followCam ? '🎥 Follow: ON' : '🎥 Follow: OFF';
});

// Body Color Picker
document.querySelectorAll('.color-dot').forEach((dot) => {
  dot.addEventListener('click', (e) => {
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
    e.currentTarget.classList.add('selected');
    const hex = e.currentTarget.getAttribute('data-color');
    yellowMaterials.forEach((mat) => {
      mat.color.set(hex);
    });
  });
});

// Keyboard Controls (WASD + Arrows + Q/E + Space/Shift)
const keyMap = {
  KeyW: 'fwd', ArrowUp: 'fwd',
  KeyS: 'rev', ArrowDown: 'rev',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
  KeyQ: 'liftUp', Space: 'liftUp', KeyR: 'liftUp',
  KeyE: 'liftDown', ShiftLeft: 'liftDown', ShiftRight: 'liftDown', KeyF: 'liftDown'
};

const keyToBtnId = {
  fwd: 'btn-drive-fwd',
  rev: 'btn-drive-rev',
  left: 'btn-turn-left',
  right: 'btn-turn-right',
  liftUp: 'btn-lift-up',
  liftDown: 'btn-lift-down'
};

window.addEventListener('keydown', (e) => {
  const action = keyMap[e.code];
  if (action) {
    e.preventDefault();
    state.keys[action] = true;
    document.getElementById(keyToBtnId[action])?.classList.add('active-pressed');
  }
});

window.addEventListener('keyup', (e) => {
  const action = keyMap[e.code];
  if (action) {
    e.preventDefault();
    state.keys[action] = false;
    document.getElementById(keyToBtnId[action])?.classList.remove('active-pressed');
  }
});

// ============================================================================
// 7. MAIN SIMULATION & ANIMATION LOOP
// ============================================================================
let lastTime = performance.now();

function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  const delta = Math.min(Math.max((now - lastTime) / 1000, 0.001), 0.1);
  lastTime = now;

  // 1. Fork Lifting / Lowering
  const liftSpeed = 0.85; // meters per second when holding Q/E
  if (state.keys.liftUp) {
    state.targetForkY = Math.min(1.40, state.targetForkY + liftSpeed * delta);
  }
  if (state.keys.liftDown) {
    state.targetForkY = Math.max(0.05, state.targetForkY - liftSpeed * delta);
  }

  if (Math.abs(state.forkY - state.targetForkY) > 0.0005) {
    state.forkY += (state.targetForkY - state.forkY) * Math.min(delta * 7.0, 1.0);
    if (forksGroup) {
      forksGroup.position.y = state.forkY;
    }
    if (hydraulicPistonMesh) {
      // Extend hydraulic chrome piston proportionally as forks rise
      hydraulicPistonMesh.position.y = 1.35 + (state.forkY - 0.05) * 0.48;
    }
  }
  if (forkSlider && Math.abs(parseFloat(forkSlider.value) - state.forkY) > 0.01) {
    forkSlider.value = state.forkY.toFixed(2);
  }

  // 2. Steering (Belok Kiri & Belok Kanan)
  let turnRate = 0;
  const maxTurnSpeed = 1.65; // rad/sec
  if (state.keys.left) turnRate += maxTurnSpeed;
  if (state.keys.right) turnRate -= maxTurnSpeed;

  // Visual wheel steer angle
  const targetSteerAngle = (state.keys.left ? 0.45 : 0) + (state.keys.right ? -0.45 : 0) +
    Math.max(-0.45, Math.min(0.45, state.impulseTurn * 1.2));
  state.wheelSteerAngle += (targetSteerAngle - state.wheelSteerAngle) * Math.min(delta * 10, 1.0);

  wheels.forEach((w) => {
    if (w.isRear) {
      // Rear wheels steer (in a forklift, rear wheels turn opposite to heading turn direction)
      w.steerPivot.rotation.y = -state.wheelSteerAngle;
    } else {
      w.steerPivot.rotation.y = state.wheelSteerAngle * 0.35;
    }
  });
  if (steeringWheelMesh) {
    steeringWheelMesh.rotation.y = state.wheelSteerAngle * 3.0;
  }

  // Apply continuous turn + click-impulse turn
  let dHeading = turnRate * delta;
  if (Math.abs(state.impulseTurn) > 0.001) {
    const stepTurn = state.impulseTurn * Math.min(delta * 6.5, 1.0);
    dHeading += stepTurn;
    state.impulseTurn -= stepTurn;
  }
  state.heading += dHeading;

  // 3. Driving Forward & Reverse (Maju & Mundur)
  const maxDriveSpeed = 2.6; // m/s
  let targetSpeed = 0;
  if (state.keys.fwd) targetSpeed += maxDriveSpeed;
  if (state.keys.rev) targetSpeed -= maxDriveSpeed;

  state.speed += (targetSpeed - state.speed) * Math.min(delta * 8.0, 1.0);

  let moveDist = state.speed * delta;
  if (Math.abs(state.impulseDistance) > 0.001) {
    const stepDist = state.impulseDistance * Math.min(delta * 6.0, 1.0);
    moveDist += stepDist;
    state.impulseDistance -= stepDist;
  }

  if (Math.abs(moveDist) > 0.00005 || Math.abs(dHeading) > 0.00005) {
    // At heading = 0, forward is -Z: (-sin(heading), 0, -cos(heading))
    const fwdX = -Math.sin(state.heading);
    const fwdZ = -Math.cos(state.heading);

    const dx = fwdX * moveDist;
    const dz = fwdZ * moveDist;

    // Keep within warehouse floor bounds (-12m to +12m)
    state.x = Math.max(-12, Math.min(12, state.x + dx));
    state.z = Math.max(-12, Math.min(12, state.z + dz));

    if (forkliftRoot) {
      forkliftRoot.position.x = state.x;
      forkliftRoot.position.z = state.z;
      forkliftRoot.rotation.y = state.heading;
    }

    // Follow camera smoothly tracks forklift translation
    if (state.followCam && controls) {
      camera.position.x += dx;
      camera.position.z += dz;
      controls.target.x += dx;
      controls.target.z += dz;
    }

    // Spin all 4 wheels around their local cylinder Y axle
    wheels.forEach((w) => {
      const spin = (moveDist / w.radius);
      w.mesh.rotateY(-spin);
    });
  }

  // 4. Check Pallet Engagement & Update Telemetry
  checkPalletProximityAndSync();

  if (telPos) {
    telPos.textContent = `${state.x.toFixed(1)}, ${state.z.toFixed(1)}`;
  }
  if (telFork) {
    telFork.textContent = `${state.forkY.toFixed(2)} m`;
  }

  // 5. Update Camera Controls & Render 3D Scene
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
