var JM={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},GM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var jI=1;var VI=3,_z=0;var xz=2;var EI=0,HI=1,KI=2;var fz=1,hz=2,gz=3,mz=4,pz=5,lz=6,dz=7;var BI=301,uz=302;var vI=306,jw=1000,cz=1001,iz=1002,LP=1003,sz=1004;var nz=1005;var Vw=1006,oz=1007;var XP=1008;var az=2300,YP=2301;var rz=0,Ew=1,Aw=2;var bM="srgb",_A="srgb-linear";function dD(A){for(let M=A.length-1;M>=0;--M)if(A[M]>=65535)return!0;return!1}function uD(A){return ArrayBuffer.isView(A)&&!(A instanceof DataView)}function QP(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}var fC={},tM=null;function yz(...A){let M="THREE."+A.shift();if(tM)tM("log",M,...A);else console.log(M,...A)}function FI(A){let M=A[0];if(typeof M==="string"&&M.startsWith("TSL:")){let w=A[1];if(w&&w.isStackTrace)A[0]+=" "+w.getLocation();else A[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return A}function d(...A){A=FI(A);let M="THREE."+A.shift();if(tM)tM("warn",M,...A);else{let w=A[0];if(w&&w.isStackTrace)console.warn(w.getError(M));else console.warn(M,...A)}}function o(...A){A=FI(A);let M="THREE."+A.shift();if(tM)tM("error",M,...A);else{let w=A[0];if(w&&w.isStackTrace)console.error(w.getError(M));else console.error(M,...A)}}function aM(...A){let M=A.join(" ");if(M in fC)return;fC[M]=!0,d(...A)}class LM{addEventListener(A,M){if(this._listeners===void 0)this._listeners={};let w=this._listeners;if(w[A]===void 0)w[A]=[];if(w[A].indexOf(M)===-1)w[A].push(M)}hasEventListener(A,M){let w=this._listeners;if(w===void 0)return!1;return w[A]!==void 0&&w[A].indexOf(M)!==-1}removeEventListener(A,M){let w=this._listeners;if(w===void 0)return;let P=w[A];if(P!==void 0){let z=P.indexOf(M);if(z!==-1)P.splice(z,1)}}dispatchEvent(A){let M=this._listeners;if(M===void 0)return;let w=M[A.type];if(w!==void 0){A.target=this;let P=w.slice(0);for(let z=0,C=P.length;z<C;z++)P[z].call(this,A);A.target=null}}}var CA=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hC=1234567,Xw=Math.PI/180,eM=180/Math.PI;function bA(){let A=Math.random()*4294967295|0,M=Math.random()*4294967295|0,w=Math.random()*4294967295|0,P=Math.random()*4294967295|0;return(CA[A&255]+CA[A>>8&255]+CA[A>>16&255]+CA[A>>24&255]+"-"+CA[M&255]+CA[M>>8&255]+"-"+CA[M>>16&15|64]+CA[M>>24&255]+"-"+CA[w&63|128]+CA[w>>8&255]+"-"+CA[w>>16&255]+CA[w>>24&255]+CA[P&255]+CA[P>>8&255]+CA[P>>16&255]+CA[P>>24&255]).toLowerCase()}function b(A,M,w){return Math.max(M,Math.min(w,A))}function tz(A,M){return(A%M+M)%M}function cD(A,M,w,P,z){return P+(A-M)*(z-P)/(w-M)}function iD(A,M,w){if(A!==M)return(w-A)/(M-A);else return 0}function Yw(A,M,w){return(1-w)*A+w*M}function sD(A,M,w,P){return Yw(A,M,1-Math.exp(-w*P))}function nD(A,M=1){return M-Math.abs(tz(A,M*2)-M)}function oD(A,M,w){if(A<=M)return 0;if(A>=w)return 1;return A=(A-M)/(w-M),A*A*(3-2*A)}function aD(A,M,w){if(A<=M)return 0;if(A>=w)return 1;return A=(A-M)/(w-M),A*A*A*(A*(A*6-15)+10)}function rD(A,M){return A+Math.floor(Math.random()*(M-A+1))}function tD(A,M){return A+Math.random()*(M-A)}function eD(A){return A*(0.5-Math.random())}function A9(A){if(A!==void 0)hC=A;let M=hC+=1831565813;return M=Math.imul(M^M>>>15,M|1),M^=M+Math.imul(M^M>>>7,M|61),((M^M>>>14)>>>0)/4294967296}function M9(A){return A*Xw}function w9(A){return A*eM}function P9(A){return A>0&&Number.isInteger(A)&&2**Math.round(Math.log2(A))===A}function z9(A){return Math.pow(2,Math.ceil(Math.log(A)/Math.LN2))}function C9(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}function I9(A,M,w,P,z){let{cos:C,sin:I}=Math,D=C(w/2),O=I(w/2),T=C((M+P)/2),Z=I((M+P)/2),N=C((M-P)/2),U=I((M-P)/2),W=C((P-M)/2),Q=I((P-M)/2);switch(z){case"XYX":A.set(D*Z,O*N,O*U,D*T);break;case"YZY":A.set(O*U,D*Z,O*N,D*T);break;case"ZXZ":A.set(O*N,O*U,D*Z,D*T);break;case"XZX":A.set(D*Z,O*Q,O*W,D*T);break;case"YXY":A.set(O*W,D*Z,O*Q,D*T);break;case"ZYZ":A.set(O*Q,O*W,D*Z,D*T);break;default:d("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+z)}}function yA(A,M){switch(M.constructor){case Float32Array:return A;case Uint32Array:return A/4294967295;case Uint16Array:return A/65535;case Uint8Array:case Uint8ClampedArray:return A/255;case Int32Array:return Math.max(A/2147483647,-1);case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function l(A,M){switch(M.constructor){case Float32Array:return A;case Uint32Array:return Math.round(A*4294967295);case Uint16Array:return Math.round(A*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(A*255);case Int32Array:return Math.round(A*2147483647);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Hw={DEG2RAD:Xw,RAD2DEG:eM,generateUUID:bA,clamp:b,euclideanModulo:tz,mapLinear:cD,inverseLerp:iD,lerp:Yw,damp:sD,pingpong:nD,smoothstep:oD,smootherstep:aD,randInt:rD,randFloat:tD,randFloatSpread:eD,seededRandom:A9,degToRad:M9,radToDeg:w9,isPowerOfTwo:P9,ceilPowerOfTwo:z9,floorPowerOfTwo:C9,setQuaternionFromProperEuler:I9,normalize:l,denormalize:yA};class ${static{$.prototype.isVector2=!0}constructor(A=0,M=0){this.x=A,this.y=M}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,M){return this.x=A,this.y=M,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,M){switch(A){case 0:this.x=M;break;case 1:this.y=M;break;default:throw Error("THREE.Vector2: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,M){return this.x=A.x+M.x,this.y=A.y+M.y,this}addScaledVector(A,M){return this.x+=A.x*M,this.y+=A.y*M,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,M){return this.x=A.x-M.x,this.y=A.y-M.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){let M=this.x,w=this.y,P=A.elements;return this.x=P[0]*M+P[3]*w+P[6],this.y=P[1]*M+P[4]*w+P[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,M){return this.x=b(this.x,A.x,M.x),this.y=b(this.y,A.y,M.y),this}clampScalar(A,M){return this.x=b(this.x,A,M),this.y=b(this.y,A,M),this}clampLength(A,M){let w=this.length();return this.divideScalar(w||1).multiplyScalar(b(w,A,M))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){let M=Math.sqrt(this.lengthSq()*A.lengthSq());if(M===0)return Math.PI/2;let w=this.dot(A)/M;return Math.acos(b(w,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let M=this.x-A.x,w=this.y-A.y;return M*M+w*w}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,M){return this.x+=(A.x-this.x)*M,this.y+=(A.y-this.y)*M,this}lerpVectors(A,M,w){return this.x=A.x+(M.x-A.x)*w,this.y=A.y+(M.y-A.y)*w,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,M=0){return this.x=A[M],this.y=A[M+1],this}toArray(A=[],M=0){return A[M]=this.x,A[M+1]=this.y,A}fromBufferAttribute(A,M){return this.x=A.getX(M),this.y=A.getY(M),this}rotateAround(A,M){let w=Math.cos(M),P=Math.sin(M),z=this.x-A.x,C=this.y-A.y;return this.x=z*w-C*P+A.x,this.y=z*P+C*w+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ZA{constructor(A=0,M=0,w=0,P=1){this.isQuaternion=!0,this._x=A,this._y=M,this._z=w,this._w=P}static slerpFlat(A,M,w,P,z,C,I){let D=w[P+0],O=w[P+1],T=w[P+2],Z=w[P+3],N=z[C+0],U=z[C+1],W=z[C+2],Q=z[C+3];if(Z!==Q||D!==N||O!==U||T!==W){let J=D*N+O*U+T*W+Z*Q;if(J<0)N=-N,U=-U,W=-W,Q=-Q,J=-J;let G=1-I;if(J<0.9995){let X=Math.acos(J),j=Math.sin(X);G=Math.sin(G*X)/j,I=Math.sin(I*X)/j,D=D*G+N*I,O=O*G+U*I,T=T*G+W*I,Z=Z*G+Q*I}else{D=D*G+N*I,O=O*G+U*I,T=T*G+W*I,Z=Z*G+Q*I;let X=1/Math.sqrt(D*D+O*O+T*T+Z*Z);D*=X,O*=X,T*=X,Z*=X}}A[M]=D,A[M+1]=O,A[M+2]=T,A[M+3]=Z}static multiplyQuaternionsFlat(A,M,w,P,z,C){let I=w[P],D=w[P+1],O=w[P+2],T=w[P+3],Z=z[C],N=z[C+1],U=z[C+2],W=z[C+3];return A[M]=I*W+T*Z+D*U-O*N,A[M+1]=D*W+T*N+O*Z-I*U,A[M+2]=O*W+T*U+I*N-D*Z,A[M+3]=T*W-I*Z-D*N-O*U,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,M,w,P){return this._x=A,this._y=M,this._z=w,this._w=P,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,M=!0){let{_x:w,_y:P,_z:z,_order:C}=A,I=Math.cos,D=Math.sin,O=I(w/2),T=I(P/2),Z=I(z/2),N=D(w/2),U=D(P/2),W=D(z/2);switch(C){case"XYZ":this._x=N*T*Z+O*U*W,this._y=O*U*Z-N*T*W,this._z=O*T*W+N*U*Z,this._w=O*T*Z-N*U*W;break;case"YXZ":this._x=N*T*Z+O*U*W,this._y=O*U*Z-N*T*W,this._z=O*T*W-N*U*Z,this._w=O*T*Z+N*U*W;break;case"ZXY":this._x=N*T*Z-O*U*W,this._y=O*U*Z+N*T*W,this._z=O*T*W+N*U*Z,this._w=O*T*Z-N*U*W;break;case"ZYX":this._x=N*T*Z-O*U*W,this._y=O*U*Z+N*T*W,this._z=O*T*W-N*U*Z,this._w=O*T*Z+N*U*W;break;case"YZX":this._x=N*T*Z+O*U*W,this._y=O*U*Z+N*T*W,this._z=O*T*W-N*U*Z,this._w=O*T*Z-N*U*W;break;case"XZY":this._x=N*T*Z-O*U*W,this._y=O*U*Z-N*T*W,this._z=O*T*W+N*U*Z,this._w=O*T*Z+N*U*W;break;default:d("Quaternion: .setFromEuler() encountered an unknown order: "+C)}if(M===!0)this._onChangeCallback();return this}setFromAxisAngle(A,M){let w=M/2,P=Math.sin(w);return this._x=A.x*P,this._y=A.y*P,this._z=A.z*P,this._w=Math.cos(w),this._onChangeCallback(),this}setFromRotationMatrix(A){let M=A.elements,w=M[0],P=M[4],z=M[8],C=M[1],I=M[5],D=M[9],O=M[2],T=M[6],Z=M[10],N=w+I+Z;if(N>0){let U=0.5/Math.sqrt(N+1);this._w=0.25/U,this._x=(T-D)*U,this._y=(z-O)*U,this._z=(C-P)*U}else if(w>I&&w>Z){let U=2*Math.sqrt(1+w-I-Z);this._w=(T-D)/U,this._x=0.25*U,this._y=(P+C)/U,this._z=(z+O)/U}else if(I>Z){let U=2*Math.sqrt(1+I-w-Z);this._w=(z-O)/U,this._x=(P+C)/U,this._y=0.25*U,this._z=(D+T)/U}else{let U=2*Math.sqrt(1+Z-w-I);this._w=(C-P)/U,this._x=(z+O)/U,this._y=(D+T)/U,this._z=0.25*U}return this._onChangeCallback(),this}setFromUnitVectors(A,M){let w=A.dot(M)+1;if(w<0.00000001)if(w=0,Math.abs(A.x)>Math.abs(A.z))this._x=-A.y,this._y=A.x,this._z=0,this._w=w;else this._x=0,this._y=-A.z,this._z=A.y,this._w=w;else this._x=A.y*M.z-A.z*M.y,this._y=A.z*M.x-A.x*M.z,this._z=A.x*M.y-A.y*M.x,this._w=w;return this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(b(this.dot(A),-1,1)))}rotateTowards(A,M){let w=this.angleTo(A);if(w===0)return this;let P=Math.min(1,M/w);return this.slerp(A,P),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();if(A===0)this._x=0,this._y=0,this._z=0,this._w=1;else A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A;return this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,M){let{_x:w,_y:P,_z:z,_w:C}=A,I=M._x,D=M._y,O=M._z,T=M._w;return this._x=w*T+C*I+P*O-z*D,this._y=P*T+C*D+z*I-w*O,this._z=z*T+C*O+w*D-P*I,this._w=C*T-w*I-P*D-z*O,this._onChangeCallback(),this}slerp(A,M){let{_x:w,_y:P,_z:z,_w:C}=A,I=this.dot(A);if(I<0)w=-w,P=-P,z=-z,C=-C,I=-I;let D=1-M;if(I<0.9995){let O=Math.acos(I),T=Math.sin(O);D=Math.sin(D*O)/T,M=Math.sin(M*O)/T,this._x=this._x*D+w*M,this._y=this._y*D+P*M,this._z=this._z*D+z*M,this._w=this._w*D+C*M,this._onChangeCallback()}else this._x=this._x*D+w*M,this._y=this._y*D+P*M,this._z=this._z*D+z*M,this._w=this._w*D+C*M,this.normalize();return this}slerpQuaternions(A,M,w){return this.copy(A).slerp(M,w)}random(){let A=2*Math.PI*Math.random(),M=2*Math.PI*Math.random(),w=Math.random(),P=Math.sqrt(1-w),z=Math.sqrt(w);return this.set(P*Math.sin(A),P*Math.cos(A),z*Math.sin(M),z*Math.cos(M))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,M=0){return this._x=A[M],this._y=A[M+1],this._z=A[M+2],this._w=A[M+3],this._onChangeCallback(),this}toArray(A=[],M=0){return A[M]=this._x,A[M+1]=this._y,A[M+2]=this._z,A[M+3]=this._w,A}fromBufferAttribute(A,M){return this._x=A.getX(M),this._y=A.getY(M),this._z=A.getZ(M),this._w=A.getW(M),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(A=0,M=0,w=0){this.x=A,this.y=M,this.z=w}set(A,M,w){if(w===void 0)w=this.z;return this.x=A,this.y=M,this.z=w,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,M){switch(A){case 0:this.x=M;break;case 1:this.y=M;break;case 2:this.z=M;break;default:throw Error("THREE.Vector3: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,M){return this.x=A.x+M.x,this.y=A.y+M.y,this.z=A.z+M.z,this}addScaledVector(A,M){return this.x+=A.x*M,this.y+=A.y*M,this.z+=A.z*M,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,M){return this.x=A.x-M.x,this.y=A.y-M.y,this.z=A.z-M.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,M){return this.x=A.x*M.x,this.y=A.y*M.y,this.z=A.z*M.z,this}applyEuler(A){return this.applyQuaternion(gC.setFromEuler(A))}applyAxisAngle(A,M){return this.applyQuaternion(gC.setFromAxisAngle(A,M))}applyMatrix3(A){let M=this.x,w=this.y,P=this.z,z=A.elements;return this.x=z[0]*M+z[3]*w+z[6]*P,this.y=z[1]*M+z[4]*w+z[7]*P,this.z=z[2]*M+z[5]*w+z[8]*P,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){let M=this.x,w=this.y,P=this.z,z=A.elements,C=1/(z[3]*M+z[7]*w+z[11]*P+z[15]);return this.x=(z[0]*M+z[4]*w+z[8]*P+z[12])*C,this.y=(z[1]*M+z[5]*w+z[9]*P+z[13])*C,this.z=(z[2]*M+z[6]*w+z[10]*P+z[14])*C,this}applyQuaternion(A){let M=this.x,w=this.y,P=this.z,z=A.x,C=A.y,I=A.z,D=A.w,O=2*(C*P-I*w),T=2*(I*M-z*P),Z=2*(z*w-C*M);return this.x=M+D*O+C*Z-I*T,this.y=w+D*T+I*O-z*Z,this.z=P+D*Z+z*T-C*O,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){let M=this.x,w=this.y,P=this.z,z=A.elements;return this.x=z[0]*M+z[4]*w+z[8]*P,this.y=z[1]*M+z[5]*w+z[9]*P,this.z=z[2]*M+z[6]*w+z[10]*P,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,M){return this.x=b(this.x,A.x,M.x),this.y=b(this.y,A.y,M.y),this.z=b(this.z,A.z,M.z),this}clampScalar(A,M){return this.x=b(this.x,A,M),this.y=b(this.y,A,M),this.z=b(this.z,A,M),this}clampLength(A,M){let w=this.length();return this.divideScalar(w||1).multiplyScalar(b(w,A,M))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,M){return this.x+=(A.x-this.x)*M,this.y+=(A.y-this.y)*M,this.z+=(A.z-this.z)*M,this}lerpVectors(A,M,w){return this.x=A.x+(M.x-A.x)*w,this.y=A.y+(M.y-A.y)*w,this.z=A.z+(M.z-A.z)*w,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,M){let{x:w,y:P,z}=A,C=M.x,I=M.y,D=M.z;return this.x=P*D-z*I,this.y=z*C-w*D,this.z=w*I-P*C,this}projectOnVector(A){let M=A.lengthSq();if(M===0)return this.set(0,0,0);let w=A.dot(this)/M;return this.copy(A).multiplyScalar(w)}projectOnPlane(A){return Tz.copy(this).projectOnVector(A),this.sub(Tz)}reflect(A){return this.sub(Tz.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){let M=Math.sqrt(this.lengthSq()*A.lengthSq());if(M===0)return Math.PI/2;let w=this.dot(A)/M;return Math.acos(b(w,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let M=this.x-A.x,w=this.y-A.y,P=this.z-A.z;return M*M+w*w+P*P}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,M,w){let P=Math.sin(M)*A;return this.x=P*Math.sin(w),this.y=Math.cos(M)*A,this.z=P*Math.cos(w),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,M,w){return this.x=A*Math.sin(M),this.y=w,this.z=A*Math.cos(M),this}setFromMatrixPosition(A){let M=A.elements;return this.x=M[12],this.y=M[13],this.z=M[14],this}setFromMatrixScale(A){let M=this.setFromMatrixColumn(A,0).length(),w=this.setFromMatrixColumn(A,1).length(),P=this.setFromMatrixColumn(A,2).length();return this.x=M,this.y=w,this.z=P,this}setFromMatrixColumn(A,M){return this.fromArray(A.elements,M*4)}setFromMatrix3Column(A,M){return this.fromArray(A.elements,M*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,M=0){return this.x=A[M],this.y=A[M+1],this.z=A[M+2],this}toArray(A=[],M=0){return A[M]=this.x,A[M+1]=this.y,A[M+2]=this.z,A}fromBufferAttribute(A,M){return this.x=A.getX(M),this.y=A.getY(M),this.z=A.getZ(M),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let A=Math.random()*Math.PI*2,M=Math.random()*2-1,w=Math.sqrt(1-M*M);return this.x=w*Math.cos(A),this.y=M,this.z=w*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Tz=new L,gC=new ZA;class S{static{S.prototype.isMatrix3=!0}constructor(A,M,w,P,z,C,I,D,O){if(this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0)this.set(A,M,w,P,z,C,I,D,O)}set(A,M,w,P,z,C,I,D,O){let T=this.elements;return T[0]=A,T[1]=P,T[2]=I,T[3]=M,T[4]=z,T[5]=D,T[6]=w,T[7]=C,T[8]=O,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){let M=this.elements,w=A.elements;return M[0]=w[0],M[1]=w[1],M[2]=w[2],M[3]=w[3],M[4]=w[4],M[5]=w[5],M[6]=w[6],M[7]=w[7],M[8]=w[8],this}extractBasis(A,M,w){return A.setFromMatrix3Column(this,0),M.setFromMatrix3Column(this,1),w.setFromMatrix3Column(this,2),this}setFromMatrix4(A){let M=A.elements;return this.set(M[0],M[4],M[8],M[1],M[5],M[9],M[2],M[6],M[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,M){let w=A.elements,P=M.elements,z=this.elements,C=w[0],I=w[3],D=w[6],O=w[1],T=w[4],Z=w[7],N=w[2],U=w[5],W=w[8],Q=P[0],J=P[3],G=P[6],X=P[1],j=P[4],E=P[7],K=P[2],H=P[5],V=P[8];return z[0]=C*Q+I*X+D*K,z[3]=C*J+I*j+D*H,z[6]=C*G+I*E+D*V,z[1]=O*Q+T*X+Z*K,z[4]=O*J+T*j+Z*H,z[7]=O*G+T*E+Z*V,z[2]=N*Q+U*X+W*K,z[5]=N*J+U*j+W*H,z[8]=N*G+U*E+W*V,this}multiplyScalar(A){let M=this.elements;return M[0]*=A,M[3]*=A,M[6]*=A,M[1]*=A,M[4]*=A,M[7]*=A,M[2]*=A,M[5]*=A,M[8]*=A,this}determinant(){let A=this.elements,M=A[0],w=A[1],P=A[2],z=A[3],C=A[4],I=A[5],D=A[6],O=A[7],T=A[8];return M*C*T-M*I*O-w*z*T+w*I*D+P*z*O-P*C*D}invert(){let A=this.elements,M=A[0],w=A[1],P=A[2],z=A[3],C=A[4],I=A[5],D=A[6],O=A[7],T=A[8],Z=T*C-I*O,N=I*D-T*z,U=O*z-C*D,W=M*Z+w*N+P*U;if(W===0)return this.set(0,0,0,0,0,0,0,0,0);let Q=1/W;return A[0]=Z*Q,A[1]=(P*O-T*w)*Q,A[2]=(I*w-P*C)*Q,A[3]=N*Q,A[4]=(T*M-P*D)*Q,A[5]=(P*z-I*M)*Q,A[6]=U*Q,A[7]=(w*D-O*M)*Q,A[8]=(C*M-w*z)*Q,this}transpose(){let A,M=this.elements;return A=M[1],M[1]=M[3],M[3]=A,A=M[2],M[2]=M[6],M[6]=A,A=M[5],M[5]=M[7],M[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){let M=this.elements;return A[0]=M[0],A[1]=M[3],A[2]=M[6],A[3]=M[1],A[4]=M[4],A[5]=M[7],A[6]=M[2],A[7]=M[5],A[8]=M[8],this}setUvTransform(A,M,w,P,z,C,I){let D=Math.cos(z),O=Math.sin(z);return this.set(w*D,w*O,-w*(D*C+O*I)+C+A,-P*O,P*D,-P*(-O*C+D*I)+I+M,0,0,1),this}scale(A,M){return aM("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zz.makeScale(A,M)),this}rotate(A){return aM("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zz.makeRotation(-A)),this}translate(A,M){return aM("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zz.makeTranslation(A,M)),this}makeTranslation(A,M){if(A.isVector2)this.set(1,0,A.x,0,1,A.y,0,0,1);else this.set(1,0,A,0,1,M,0,0,1);return this}makeRotation(A){let M=Math.cos(A),w=Math.sin(A);return this.set(M,-w,0,w,M,0,0,0,1),this}makeScale(A,M){return this.set(A,0,0,0,M,0,0,0,1),this}equals(A){let M=this.elements,w=A.elements;for(let P=0;P<9;P++)if(M[P]!==w[P])return!1;return!0}fromArray(A,M=0){for(let w=0;w<9;w++)this.elements[w]=A[w+M];return this}toArray(A=[],M=0){let w=this.elements;return A[M]=w[0],A[M+1]=w[1],A[M+2]=w[2],A[M+3]=w[3],A[M+4]=w[4],A[M+5]=w[5],A[M+6]=w[6],A[M+7]=w[7],A[M+8]=w[8],A}clone(){return new this.constructor().fromArray(this.elements)}}var Zz=new S,mC=new S().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),pC=new S().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function D9(){let A={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(z,C,I){if(this.enabled===!1||C===I||!C||!I)return z;if(this.spaces[C].transfer==="srgb")z.r=eA(z.r),z.g=eA(z.g),z.b=eA(z.b);if(this.spaces[C].primaries!==this.spaces[I].primaries)z.applyMatrix3(this.spaces[C].toXYZ),z.applyMatrix3(this.spaces[I].fromXYZ);if(this.spaces[I].transfer==="srgb")z.r=rM(z.r),z.g=rM(z.g),z.b=rM(z.b);return z},workingToColorSpace:function(z,C){return this.convert(z,this.workingColorSpace,C)},colorSpaceToWorking:function(z,C){return this.convert(z,C,this.workingColorSpace)},getPrimaries:function(z){return this.spaces[z].primaries},getTransfer:function(z){if(z==="")return"linear";return this.spaces[z].transfer},getToneMappingMode:function(z){return this.spaces[z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(z,C=this.workingColorSpace){return z.fromArray(this.spaces[C].luminanceCoefficients)},define:function(z){Object.assign(this.spaces,z)},_getMatrix:function(z,C,I){return z.copy(this.spaces[C].toXYZ).multiply(this.spaces[I].fromXYZ)},_getDrawingBufferColorSpace:function(z){return this.spaces[z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(z=this.workingColorSpace){return this.spaces[z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(z,C){return aM("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),A.workingToColorSpace(z,C)},toWorkingColorSpace:function(z,C){return aM("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),A.colorSpaceToWorking(z,C)}},M=[0.64,0.33,0.3,0.6,0.15,0.06],w=[0.2126,0.7152,0.0722],P=[0.3127,0.329];return A.define({["srgb-linear"]:{primaries:M,whitePoint:P,transfer:"linear",toXYZ:mC,fromXYZ:pC,luminanceCoefficients:w,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:M,whitePoint:P,transfer:"srgb",toXYZ:mC,fromXYZ:pC,luminanceCoefficients:w,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),A}var OA=D9();function eA(A){return A<0.04045?A*0.0773993808:Math.pow(A*0.9478672986+0.0521327014,2.4)}function rM(A){return A<0.0031308?A*12.92:1.055*Math.pow(A,0.41666)-0.055}var hM;class ez{static getDataURL(A,M="image/png"){if(/^data:/i.test(A.src))return A.src;if(typeof HTMLCanvasElement>"u")return A.src;let w;if(A instanceof HTMLCanvasElement)w=A;else{if(hM===void 0)hM=QP("canvas");hM.width=A.width,hM.height=A.height;let P=hM.getContext("2d");if(A instanceof ImageData)P.putImageData(A,0,0);else P.drawImage(A,0,0,A.width,A.height);w=hM}return w.toDataURL(M)}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let M=QP("canvas");M.width=A.width,M.height=A.height;let w=M.getContext("2d");w.drawImage(A,0,0,A.width,A.height);let P=w.getImageData(0,0,A.width,A.height),z=P.data;for(let C=0;C<z.length;C++)z[C]=eA(z[C]/255)*255;return w.putImageData(P,0,0),M}else if(A.data){let M=A.data.slice(0);for(let w=0;w<M.length;w++)if(M instanceof Uint8Array||M instanceof Uint8ClampedArray)M[w]=Math.floor(eA(M[w]/255)*255);else M[w]=eA(M[w]);return{data:M,width:A.width,height:A.height}}else return d("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}var O9=0;class AC{constructor(A=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:O9++}),this.uuid=bA(),this.data=A,this.dataReady=!0,this.version=0}getSize(A){let M=this.data;if(typeof HTMLVideoElement<"u"&&M instanceof HTMLVideoElement)A.set(M.videoWidth,M.videoHeight,0);else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)A.set(M.displayWidth,M.displayHeight,0);else if(M!==null)A.set(M.width,M.height,M.depth||0);else A.set(0,0,0);return A}set needsUpdate(A){if(A===!0)this.version++}toJSON(A){let M=A===void 0||typeof A==="string";if(!M&&A.images[this.uuid]!==void 0)return A.images[this.uuid];let w={uuid:this.uuid,url:""},P=this.data;if(P!==null){let z;if(Array.isArray(P)){z=[];for(let C=0,I=P.length;C<I;C++)if(P[C].isDataTexture)z.push(Nz(P[C].image));else z.push(Nz(P[C]))}else z=Nz(P);w.url=z}if(!M)A.images[this.uuid]=w;return w}}function Nz(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap)return ez.getDataURL(A);else if(A.data)return{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name};else return d("Texture: Unable to serialize Texture."),{}}var T9=0,Uz=new L;class LA extends LM{constructor(A=LA.DEFAULT_IMAGE,M=LA.DEFAULT_MAPPING,w=1001,P=1001,z=1006,C=1008,I=1023,D=1009,O=LA.DEFAULT_ANISOTROPY,T=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:T9++}),this.uuid=bA(),this.name="",this.source=new AC(A),this.mipmaps=[],this.mapping=M,this.channel=0,this.wrapS=w,this.wrapT=P,this.magFilter=z,this.minFilter=C,this.anisotropy=O,this.format=I,this.internalFormat=null,this.type=D,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new S,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=T,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=A&&A.depth&&A.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uz).x}get height(){return this.source.getSize(Uz).y}get depth(){return this.source.getSize(Uz).z}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(A,M){this.updateRanges.push({start:A,count:M})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.normalized=A.normalized,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.renderTarget=A.renderTarget,this.isRenderTargetTexture=A.isRenderTargetTexture,this.isArrayTexture=A.isArrayTexture,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}setValues(A){for(let M in A){let w=A[M];if(w===void 0){d(`Texture.setValues(): parameter '${M}' has value of undefined.`);continue}let P=this[M];if(P===void 0){d(`Texture.setValues(): property '${M}' does not exist.`);continue}if(P&&w&&(P.isVector2&&w.isVector2))P.copy(w);else if(P&&w&&(P.isVector3&&w.isVector3))P.copy(w);else if(P&&w&&(P.isMatrix3&&w.isMatrix3))P.copy(w);else this[M]=w}}toJSON(A){let M=A===void 0||typeof A==="string";if(!M&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];let w={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)w.userData=this.userData;if(!M)A.textures[this.uuid]=w;return w}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==300)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case 1000:A.x=A.x-Math.floor(A.x);break;case 1001:A.x=A.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(A.x)%2)===1)A.x=Math.ceil(A.x)-A.x;else A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case 1000:A.y=A.y-Math.floor(A.y);break;case 1001:A.y=A.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(A.y)%2)===1)A.y=Math.ceil(A.y)-A.y;else A.y=A.y-Math.floor(A.y);break}if(this.flipY)A.y=1-A.y;return A}set needsUpdate(A){if(A===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(A){if(A===!0)this.pmremVersion++}}LA.DEFAULT_IMAGE=null;LA.DEFAULT_MAPPING=300;LA.DEFAULT_ANISOTROPY=1;class KA{static{KA.prototype.isVector4=!0}constructor(A=0,M=0,w=0,P=1){this.x=A,this.y=M,this.z=w,this.w=P}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,M,w,P){return this.x=A,this.y=M,this.z=w,this.w=P,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,M){switch(A){case 0:this.x=M;break;case 1:this.y=M;break;case 2:this.z=M;break;case 3:this.w=M;break;default:throw Error("THREE.Vector4: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,M){return this.x=A.x+M.x,this.y=A.y+M.y,this.z=A.z+M.z,this.w=A.w+M.w,this}addScaledVector(A,M){return this.x+=A.x*M,this.y+=A.y*M,this.z+=A.z*M,this.w+=A.w*M,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,M){return this.x=A.x-M.x,this.y=A.y-M.y,this.z=A.z-M.z,this.w=A.w-M.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){let M=this.x,w=this.y,P=this.z,z=this.w,C=A.elements;return this.x=C[0]*M+C[4]*w+C[8]*P+C[12]*z,this.y=C[1]*M+C[5]*w+C[9]*P+C[13]*z,this.z=C[2]*M+C[6]*w+C[10]*P+C[14]*z,this.w=C[3]*M+C[7]*w+C[11]*P+C[15]*z,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);let M=Math.sqrt(1-A.w*A.w);if(M<0.0001)this.x=1,this.y=0,this.z=0;else this.x=A.x/M,this.y=A.y/M,this.z=A.z/M;return this}setAxisAngleFromRotationMatrix(A){let M,w,P,z,C=0.01,I=0.1,D=A.elements,O=D[0],T=D[4],Z=D[8],N=D[1],U=D[5],W=D[9],Q=D[2],J=D[6],G=D[10];if(Math.abs(T-N)<0.01&&Math.abs(Z-Q)<0.01&&Math.abs(W-J)<0.01){if(Math.abs(T+N)<0.1&&Math.abs(Z+Q)<0.1&&Math.abs(W+J)<0.1&&Math.abs(O+U+G-3)<0.1)return this.set(1,0,0,0),this;M=Math.PI;let j=(O+1)/2,E=(U+1)/2,K=(G+1)/2,H=(T+N)/4,V=(Z+Q)/4,Y=(W+J)/4;if(j>E&&j>K)if(j<0.01)w=0,P=0.707106781,z=0.707106781;else w=Math.sqrt(j),P=H/w,z=V/w;else if(E>K)if(E<0.01)w=0.707106781,P=0,z=0.707106781;else P=Math.sqrt(E),w=H/P,z=Y/P;else if(K<0.01)w=0.707106781,P=0.707106781,z=0;else z=Math.sqrt(K),w=V/z,P=Y/z;return this.set(w,P,z,M),this}let X=Math.sqrt((J-W)*(J-W)+(Z-Q)*(Z-Q)+(N-T)*(N-T));if(Math.abs(X)<0.001)X=1;return this.x=(J-W)/X,this.y=(Z-Q)/X,this.z=(N-T)/X,this.w=Math.acos((O+U+G-1)/2),this}setFromMatrixPosition(A){let M=A.elements;return this.x=M[12],this.y=M[13],this.z=M[14],this.w=M[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,M){return this.x=b(this.x,A.x,M.x),this.y=b(this.y,A.y,M.y),this.z=b(this.z,A.z,M.z),this.w=b(this.w,A.w,M.w),this}clampScalar(A,M){return this.x=b(this.x,A,M),this.y=b(this.y,A,M),this.z=b(this.z,A,M),this.w=b(this.w,A,M),this}clampLength(A,M){let w=this.length();return this.divideScalar(w||1).multiplyScalar(b(w,A,M))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,M){return this.x+=(A.x-this.x)*M,this.y+=(A.y-this.y)*M,this.z+=(A.z-this.z)*M,this.w+=(A.w-this.w)*M,this}lerpVectors(A,M,w){return this.x=A.x+(M.x-A.x)*w,this.y=A.y+(M.y-A.y)*w,this.z=A.z+(M.z-A.z)*w,this.w=A.w+(M.w-A.w)*w,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,M=0){return this.x=A[M],this.y=A[M+1],this.z=A[M+2],this.w=A[M+3],this}toArray(A=[],M=0){return A[M]=this.x,A[M+1]=this.y,A[M+2]=this.z,A[M+3]=this.w,A}fromBufferAttribute(A,M){return this.x=A.getX(M),this.y=A.getY(M),this.z=A.getZ(M),this.w=A.getW(M),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h{static{h.prototype.isMatrix4=!0}constructor(A,M,w,P,z,C,I,D,O,T,Z,N,U,W,Q,J){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0)this.set(A,M,w,P,z,C,I,D,O,T,Z,N,U,W,Q,J)}set(A,M,w,P,z,C,I,D,O,T,Z,N,U,W,Q,J){let G=this.elements;return G[0]=A,G[4]=M,G[8]=w,G[12]=P,G[1]=z,G[5]=C,G[9]=I,G[13]=D,G[2]=O,G[6]=T,G[10]=Z,G[14]=N,G[3]=U,G[7]=W,G[11]=Q,G[15]=J,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new h().fromArray(this.elements)}copy(A){let M=this.elements,w=A.elements;return M[0]=w[0],M[1]=w[1],M[2]=w[2],M[3]=w[3],M[4]=w[4],M[5]=w[5],M[6]=w[6],M[7]=w[7],M[8]=w[8],M[9]=w[9],M[10]=w[10],M[11]=w[11],M[12]=w[12],M[13]=w[13],M[14]=w[14],M[15]=w[15],this}copyPosition(A){let M=this.elements,w=A.elements;return M[12]=w[12],M[13]=w[13],M[14]=w[14],this}setFromMatrix3(A){let M=A.elements;return this.set(M[0],M[3],M[6],0,M[1],M[4],M[7],0,M[2],M[5],M[8],0,0,0,0,1),this}extractBasis(A,M,w){if(this.determinantAffine()===0)return A.set(1,0,0),M.set(0,1,0),w.set(0,0,1),this;return A.setFromMatrixColumn(this,0),M.setFromMatrixColumn(this,1),w.setFromMatrixColumn(this,2),this}makeBasis(A,M,w){return this.set(A.x,M.x,w.x,0,A.y,M.y,w.y,0,A.z,M.z,w.z,0,0,0,0,1),this}extractRotation(A){if(A.determinantAffine()===0)return this.identity();let M=this.elements,w=A.elements,P=1/gM.setFromMatrixColumn(A,0).length(),z=1/gM.setFromMatrixColumn(A,1).length(),C=1/gM.setFromMatrixColumn(A,2).length();return M[0]=w[0]*P,M[1]=w[1]*P,M[2]=w[2]*P,M[3]=0,M[4]=w[4]*z,M[5]=w[5]*z,M[6]=w[6]*z,M[7]=0,M[8]=w[8]*C,M[9]=w[9]*C,M[10]=w[10]*C,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,this}makeRotationFromEuler(A){let M=this.elements,w=A.x,P=A.y,z=A.z,C=Math.cos(w),I=Math.sin(w),D=Math.cos(P),O=Math.sin(P),T=Math.cos(z),Z=Math.sin(z);if(A.order==="XYZ"){let N=C*T,U=C*Z,W=I*T,Q=I*Z;M[0]=D*T,M[4]=-D*Z,M[8]=O,M[1]=U+W*O,M[5]=N-Q*O,M[9]=-I*D,M[2]=Q-N*O,M[6]=W+U*O,M[10]=C*D}else if(A.order==="YXZ"){let N=D*T,U=D*Z,W=O*T,Q=O*Z;M[0]=N+Q*I,M[4]=W*I-U,M[8]=C*O,M[1]=C*Z,M[5]=C*T,M[9]=-I,M[2]=U*I-W,M[6]=Q+N*I,M[10]=C*D}else if(A.order==="ZXY"){let N=D*T,U=D*Z,W=O*T,Q=O*Z;M[0]=N-Q*I,M[4]=-C*Z,M[8]=W+U*I,M[1]=U+W*I,M[5]=C*T,M[9]=Q-N*I,M[2]=-C*O,M[6]=I,M[10]=C*D}else if(A.order==="ZYX"){let N=C*T,U=C*Z,W=I*T,Q=I*Z;M[0]=D*T,M[4]=W*O-U,M[8]=N*O+Q,M[1]=D*Z,M[5]=Q*O+N,M[9]=U*O-W,M[2]=-O,M[6]=I*D,M[10]=C*D}else if(A.order==="YZX"){let N=C*D,U=C*O,W=I*D,Q=I*O;M[0]=D*T,M[4]=Q-N*Z,M[8]=W*Z+U,M[1]=Z,M[5]=C*T,M[9]=-I*T,M[2]=-O*T,M[6]=U*Z+W,M[10]=N-Q*Z}else if(A.order==="XZY"){let N=C*D,U=C*O,W=I*D,Q=I*O;M[0]=D*T,M[4]=-Z,M[8]=O*T,M[1]=N*Z+Q,M[5]=C*T,M[9]=U*Z-W,M[2]=W*Z-U,M[6]=I*T,M[10]=Q*Z+N}return M[3]=0,M[7]=0,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Z9,A,N9)}lookAt(A,M,w){let P=this.elements;if(JA.subVectors(A,M),JA.lengthSq()===0)JA.z=1;if(JA.normalize(),OM.crossVectors(w,JA),OM.lengthSq()===0){if(Math.abs(w.z)===1)JA.x+=0.0001;else JA.z+=0.0001;JA.normalize(),OM.crossVectors(w,JA)}return OM.normalize(),lw.crossVectors(JA,OM),P[0]=OM.x,P[4]=lw.x,P[8]=JA.x,P[1]=OM.y,P[5]=lw.y,P[9]=JA.y,P[2]=OM.z,P[6]=lw.z,P[10]=JA.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,M){let w=A.elements,P=M.elements,z=this.elements,C=w[0],I=w[4],D=w[8],O=w[12],T=w[1],Z=w[5],N=w[9],U=w[13],W=w[2],Q=w[6],J=w[10],G=w[14],X=w[3],j=w[7],E=w[11],K=w[15],H=P[0],V=P[4],Y=P[8],v=P[12],k=P[1],R=P[5],x=P[9],q=P[13],m=P[2],y=P[6],MA=P[10],r=P[14],t=P[3],c=P[7],i=P[11],e=P[15];return z[0]=C*H+I*k+D*m+O*t,z[4]=C*V+I*R+D*y+O*c,z[8]=C*Y+I*x+D*MA+O*i,z[12]=C*v+I*q+D*r+O*e,z[1]=T*H+Z*k+N*m+U*t,z[5]=T*V+Z*R+N*y+U*c,z[9]=T*Y+Z*x+N*MA+U*i,z[13]=T*v+Z*q+N*r+U*e,z[2]=W*H+Q*k+J*m+G*t,z[6]=W*V+Q*R+J*y+G*c,z[10]=W*Y+Q*x+J*MA+G*i,z[14]=W*v+Q*q+J*r+G*e,z[3]=X*H+j*k+E*m+K*t,z[7]=X*V+j*R+E*y+K*c,z[11]=X*Y+j*x+E*MA+K*i,z[15]=X*v+j*q+E*r+K*e,this}multiplyScalar(A){let M=this.elements;return M[0]*=A,M[4]*=A,M[8]*=A,M[12]*=A,M[1]*=A,M[5]*=A,M[9]*=A,M[13]*=A,M[2]*=A,M[6]*=A,M[10]*=A,M[14]*=A,M[3]*=A,M[7]*=A,M[11]*=A,M[15]*=A,this}determinant(){let A=this.elements,M=A[0],w=A[4],P=A[8],z=A[12],C=A[1],I=A[5],D=A[9],O=A[13],T=A[2],Z=A[6],N=A[10],U=A[14],W=A[3],Q=A[7],J=A[11],G=A[15],X=D*U-O*N,j=I*U-O*Z,E=I*N-D*Z,K=C*U-O*T,H=C*N-D*T,V=C*Z-I*T;return M*(Q*X-J*j+G*E)-w*(W*X-J*K+G*H)+P*(W*j-Q*K+G*V)-z*(W*E-Q*H+J*V)}determinantAffine(){let A=this.elements,M=A[0],w=A[4],P=A[8],z=A[1],C=A[5],I=A[9],D=A[2],O=A[6],T=A[10];return M*(C*T-I*O)-w*(z*T-I*D)+P*(z*O-C*D)}transpose(){let A=this.elements,M;return M=A[1],A[1]=A[4],A[4]=M,M=A[2],A[2]=A[8],A[8]=M,M=A[6],A[6]=A[9],A[9]=M,M=A[3],A[3]=A[12],A[12]=M,M=A[7],A[7]=A[13],A[13]=M,M=A[11],A[11]=A[14],A[14]=M,this}setPosition(A,M,w){let P=this.elements;if(A.isVector3)P[12]=A.x,P[13]=A.y,P[14]=A.z;else P[12]=A,P[13]=M,P[14]=w;return this}invert(){let A=this.elements,M=A[0],w=A[1],P=A[2],z=A[3],C=A[4],I=A[5],D=A[6],O=A[7],T=A[8],Z=A[9],N=A[10],U=A[11],W=A[12],Q=A[13],J=A[14],G=A[15],X=M*I-w*C,j=M*D-P*C,E=M*O-z*C,K=w*D-P*I,H=w*O-z*I,V=P*O-z*D,Y=T*Q-Z*W,v=T*J-N*W,k=T*G-U*W,R=Z*J-N*Q,x=Z*G-U*Q,q=N*G-U*J,m=X*q-j*x+E*R+K*k-H*v+V*Y;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/m;return A[0]=(I*q-D*x+O*R)*y,A[1]=(P*x-w*q-z*R)*y,A[2]=(Q*V-J*H+G*K)*y,A[3]=(N*H-Z*V-U*K)*y,A[4]=(D*k-C*q-O*v)*y,A[5]=(M*q-P*k+z*v)*y,A[6]=(J*E-W*V-G*j)*y,A[7]=(T*V-N*E+U*j)*y,A[8]=(C*x-I*k+O*Y)*y,A[9]=(w*k-M*x-z*Y)*y,A[10]=(W*H-Q*E+G*X)*y,A[11]=(Z*E-T*H-U*X)*y,A[12]=(I*v-C*R-D*Y)*y,A[13]=(M*R-w*v+P*Y)*y,A[14]=(Q*j-W*K-J*X)*y,A[15]=(T*K-Z*j+N*X)*y,this}scale(A){let M=this.elements,w=A.x,P=A.y,z=A.z;return M[0]*=w,M[4]*=P,M[8]*=z,M[1]*=w,M[5]*=P,M[9]*=z,M[2]*=w,M[6]*=P,M[10]*=z,M[3]*=w,M[7]*=P,M[11]*=z,this}getMaxScaleOnAxis(){let A=this.elements,M=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],w=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],P=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(M,w,P))}makeTranslation(A,M,w){if(A.isVector3)this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1);else this.set(1,0,0,A,0,1,0,M,0,0,1,w,0,0,0,1);return this}makeRotationX(A){let M=Math.cos(A),w=Math.sin(A);return this.set(1,0,0,0,0,M,-w,0,0,w,M,0,0,0,0,1),this}makeRotationY(A){let M=Math.cos(A),w=Math.sin(A);return this.set(M,0,w,0,0,1,0,0,-w,0,M,0,0,0,0,1),this}makeRotationZ(A){let M=Math.cos(A),w=Math.sin(A);return this.set(M,-w,0,0,w,M,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,M){let w=Math.cos(M),P=Math.sin(M),z=1-w,C=A.x,I=A.y,D=A.z,O=z*C,T=z*I;return this.set(O*C+w,O*I-P*D,O*D+P*I,0,O*I+P*D,T*I+w,T*D-P*C,0,O*D-P*I,T*D+P*C,z*D*D+w,0,0,0,0,1),this}makeScale(A,M,w){return this.set(A,0,0,0,0,M,0,0,0,0,w,0,0,0,0,1),this}makeShear(A,M,w,P,z,C){return this.set(1,w,z,0,A,1,C,0,M,P,1,0,0,0,0,1),this}compose(A,M,w){let P=this.elements,z=M._x,C=M._y,I=M._z,D=M._w,O=z+z,T=C+C,Z=I+I,N=z*O,U=z*T,W=z*Z,Q=C*T,J=C*Z,G=I*Z,X=D*O,j=D*T,E=D*Z,K=w.x,H=w.y,V=w.z;return P[0]=(1-(Q+G))*K,P[1]=(U+E)*K,P[2]=(W-j)*K,P[3]=0,P[4]=(U-E)*H,P[5]=(1-(N+G))*H,P[6]=(J+X)*H,P[7]=0,P[8]=(W+j)*V,P[9]=(J-X)*V,P[10]=(1-(N+Q))*V,P[11]=0,P[12]=A.x,P[13]=A.y,P[14]=A.z,P[15]=1,this}decompose(A,M,w){let P=this.elements;A.x=P[12],A.y=P[13],A.z=P[14];let z=this.determinantAffine();if(z===0)return w.set(1,1,1),M.identity(),this;let C=gM.set(P[0],P[1],P[2]).length(),I=gM.set(P[4],P[5],P[6]).length(),D=gM.set(P[8],P[9],P[10]).length();if(z<0)C=-C;kA.copy(this);let O=1/C,T=1/I,Z=1/D;return kA.elements[0]*=O,kA.elements[1]*=O,kA.elements[2]*=O,kA.elements[4]*=T,kA.elements[5]*=T,kA.elements[6]*=T,kA.elements[8]*=Z,kA.elements[9]*=Z,kA.elements[10]*=Z,M.setFromRotationMatrix(kA),w.x=C,w.y=I,w.z=D,this}makePerspective(A,M,w,P,z,C,I=2000,D=!1){let O=this.elements,T=2*z/(M-A),Z=2*z/(w-P),N=(M+A)/(M-A),U=(w+P)/(w-P),W,Q;if(D)W=z/(C-z),Q=C*z/(C-z);else if(I===2000)W=-(C+z)/(C-z),Q=-2*C*z/(C-z);else if(I===2001)W=-C/(C-z),Q=-C*z/(C-z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+I);return O[0]=T,O[4]=0,O[8]=N,O[12]=0,O[1]=0,O[5]=Z,O[9]=U,O[13]=0,O[2]=0,O[6]=0,O[10]=W,O[14]=Q,O[3]=0,O[7]=0,O[11]=-1,O[15]=0,this}makeOrthographic(A,M,w,P,z,C,I=2000,D=!1){let O=this.elements,T=2/(M-A),Z=2/(w-P),N=-(M+A)/(M-A),U=-(w+P)/(w-P),W,Q;if(D)W=1/(C-z),Q=C/(C-z);else if(I===2000)W=-2/(C-z),Q=-(C+z)/(C-z);else if(I===2001)W=-1/(C-z),Q=-z/(C-z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+I);return O[0]=T,O[4]=0,O[8]=0,O[12]=N,O[1]=0,O[5]=Z,O[9]=0,O[13]=U,O[2]=0,O[6]=0,O[10]=W,O[14]=Q,O[3]=0,O[7]=0,O[11]=0,O[15]=1,this}equals(A){let M=this.elements,w=A.elements;for(let P=0;P<16;P++)if(M[P]!==w[P])return!1;return!0}fromArray(A,M=0){for(let w=0;w<16;w++)this.elements[w]=A[w+M];return this}toArray(A=[],M=0){let w=this.elements;return A[M]=w[0],A[M+1]=w[1],A[M+2]=w[2],A[M+3]=w[3],A[M+4]=w[4],A[M+5]=w[5],A[M+6]=w[6],A[M+7]=w[7],A[M+8]=w[8],A[M+9]=w[9],A[M+10]=w[10],A[M+11]=w[11],A[M+12]=w[12],A[M+13]=w[13],A[M+14]=w[14],A[M+15]=w[15],A}}var gM=new L,kA=new h,Z9=new L(0,0,0),N9=new L(1,1,1),OM=new L,lw=new L,JA=new L,lC=new h,dC=new ZA;class MM{constructor(A=0,M=0,w=0,P=MM.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=M,this._z=w,this._order=P}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,M,w,P=this._order){return this._x=A,this._y=M,this._z=w,this._order=P,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,M=this._order,w=!0){let P=A.elements,z=P[0],C=P[4],I=P[8],D=P[1],O=P[5],T=P[9],Z=P[2],N=P[6],U=P[10];switch(M){case"XYZ":if(this._y=Math.asin(b(I,-1,1)),Math.abs(I)<0.9999999)this._x=Math.atan2(-T,U),this._z=Math.atan2(-C,z);else this._x=Math.atan2(N,O),this._z=0;break;case"YXZ":if(this._x=Math.asin(-b(T,-1,1)),Math.abs(T)<0.9999999)this._y=Math.atan2(I,U),this._z=Math.atan2(D,O);else this._y=Math.atan2(-Z,z),this._z=0;break;case"ZXY":if(this._x=Math.asin(b(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-Z,U),this._z=Math.atan2(-C,O);else this._y=0,this._z=Math.atan2(D,z);break;case"ZYX":if(this._y=Math.asin(-b(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(N,U),this._z=Math.atan2(D,z);else this._x=0,this._z=Math.atan2(-C,O);break;case"YZX":if(this._z=Math.asin(b(D,-1,1)),Math.abs(D)<0.9999999)this._x=Math.atan2(-T,O),this._y=Math.atan2(-Z,z);else this._x=0,this._y=Math.atan2(I,U);break;case"XZY":if(this._z=Math.asin(-b(C,-1,1)),Math.abs(C)<0.9999999)this._x=Math.atan2(N,O),this._y=Math.atan2(I,z);else this._x=Math.atan2(-T,U),this._y=0;break;default:d("Euler: .setFromRotationMatrix() encountered an unknown order: "+M)}if(this._order=M,w===!0)this._onChangeCallback();return this}setFromQuaternion(A,M,w){return lC.makeRotationFromQuaternion(A),this.setFromRotationMatrix(lC,M,w)}setFromVector3(A,M=this._order){return this.set(A.x,A.y,A.z,M)}reorder(A){return dC.setFromEuler(this),this.setFromQuaternion(dC,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){if(this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0)this._order=A[3];return this._onChangeCallback(),this}toArray(A=[],M=0){return A[M]=this._x,A[M+1]=this._y,A[M+2]=this._z,A[M+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}MM.DEFAULT_ORDER="XYZ";class MC{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}var U9=0,uC=new L,mM=new ZA,sA=new h,dw=new L,Zw=new L,W9=new L,Q9=new ZA,cC=new L(1,0,0),iC=new L(0,1,0),sC=new L(0,0,1),nC={type:"added"},J9={type:"removed"},pM={type:"childadded",child:null},Wz={type:"childremoved",child:null};class n extends LM{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:U9++}),this.uuid=bA(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let A=new L,M=new MM,w=new ZA,P=new L(1,1,1);function z(){w.setFromEuler(M,!1)}function C(){M.setFromQuaternion(w,void 0,!1)}M._onChange(z),w._onChange(C),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:M},quaternion:{configurable:!0,enumerable:!0,value:w},scale:{configurable:!0,enumerable:!0,value:P},modelViewMatrix:{value:new h},normalMatrix:{value:new S}}),this.matrix=new h,this.matrixWorld=new h,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new MC,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,M){this.quaternion.setFromAxisAngle(A,M)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,M){return mM.setFromAxisAngle(A,M),this.quaternion.multiply(mM),this}rotateOnWorldAxis(A,M){return mM.setFromAxisAngle(A,M),this.quaternion.premultiply(mM),this}rotateX(A){return this.rotateOnAxis(cC,A)}rotateY(A){return this.rotateOnAxis(iC,A)}rotateZ(A){return this.rotateOnAxis(sC,A)}translateOnAxis(A,M){return uC.copy(A).applyQuaternion(this.quaternion),this.position.add(uC.multiplyScalar(M)),this}translateX(A){return this.translateOnAxis(cC,A)}translateY(A){return this.translateOnAxis(iC,A)}translateZ(A){return this.translateOnAxis(sC,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(sA.copy(this.matrixWorld).invert())}lookAt(A,M,w){if(A.isVector3)dw.copy(A);else dw.set(A,M,w);let P=this.parent;if(this.updateWorldMatrix(!0,!1),Zw.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)sA.lookAt(Zw,dw,this.up);else sA.lookAt(dw,Zw,this.up);if(this.quaternion.setFromRotationMatrix(sA),P)sA.extractRotation(P.matrixWorld),mM.setFromRotationMatrix(sA),this.quaternion.premultiply(mM.invert())}add(A){if(arguments.length>1){for(let M=0;M<arguments.length;M++)this.add(arguments[M]);return this}if(A===this)return o("Object3D.add: object can't be added as a child of itself.",A),this;if(A&&A.isObject3D)A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(nC),pM.child=A,this.dispatchEvent(pM),pM.child=null;else o("Object3D.add: object not an instance of THREE.Object3D.",A);return this}remove(A){if(arguments.length>1){for(let w=0;w<arguments.length;w++)this.remove(arguments[w]);return this}let M=this.children.indexOf(A);if(M!==-1)A.parent=null,this.children.splice(M,1),A.dispatchEvent(J9),Wz.child=A,this.dispatchEvent(Wz),Wz.child=null;return this}removeFromParent(){let A=this.parent;if(A!==null)A.remove(this);return this}clear(){return this.remove(...this.children)}attach(A){if(this.updateWorldMatrix(!0,!1),sA.copy(this.matrixWorld).invert(),A.parent!==null)A.parent.updateWorldMatrix(!0,!1),sA.multiply(A.parent.matrixWorld);return A.applyMatrix4(sA),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(nC),pM.child=A,this.dispatchEvent(pM),pM.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,M){if(this[A]===M)return this;for(let w=0,P=this.children.length;w<P;w++){let C=this.children[w].getObjectByProperty(A,M);if(C!==void 0)return C}return}getObjectsByProperty(A,M,w=[]){if(this[A]===M)w.push(this);let P=this.children;for(let z=0,C=P.length;z<C;z++)P[z].getObjectsByProperty(A,M,w);return w}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zw,A,W9),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zw,Q9,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let M=this.matrixWorld.elements;return A.set(M[8],M[9],M[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(A){A(this);let M=this.children;for(let w=0,P=M.length;w<P;w++)M[w].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);let M=this.children;for(let w=0,P=M.length;w<P;w++)M[w].traverseVisible(A)}traverseAncestors(A){let M=this.parent;if(M!==null)A(M),M.traverseAncestors(A)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let A=this.pivot;if(A!==null){let{x:M,y:w,z:P}=A,z=this.matrix.elements;z[12]+=M-z[0]*M-z[4]*w-z[8]*P,z[13]+=w-z[1]*M-z[5]*w-z[9]*P,z[14]+=P-z[2]*M-z[6]*w-z[10]*P}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||A){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,A=!0}let M=this.children;for(let w=0,P=M.length;w<P;w++)M[w].updateMatrixWorld(A)}updateWorldMatrix(A,M,w=!1){let P=this.parent;if(A===!0&&P!==null)P.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||w){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,w=!0}if(M===!0){let z=this.children;for(let C=0,I=z.length;C<I;C++)z[C].updateWorldMatrix(!1,!0,w)}}toJSON(A){let M=A===void 0||typeof A==="string",w={};if(M)A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},w.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let P={};if(P.uuid=this.uuid,P.type=this.type,P.name=this.name,P.castShadow=this.castShadow,P.receiveShadow=this.receiveShadow,P.visible=this.visible,P.frustumCulled=this.frustumCulled,P.renderOrder=this.renderOrder,P.static=this.static,P.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)P.userData=this.userData;if(P.layers=this.layers.mask,P.matrix=this.matrix.toArray(),P.up=this.up.toArray(),this.pivot!==null)P.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)P.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)P.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(P.type="InstancedMesh",P.count=this.count,P.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)P.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(P.type="BatchedMesh",P.perObjectFrustumCulled=this.perObjectFrustumCulled,P.sortObjects=this.sortObjects,P.drawRanges=this._drawRanges,P.reservedRanges=this._reservedRanges,P.geometryInfo=this._geometryInfo.map((I)=>({...I,boundingBox:I.boundingBox?I.boundingBox.toJSON():void 0,boundingSphere:I.boundingSphere?I.boundingSphere.toJSON():void 0})),P.instanceInfo=this._instanceInfo.map((I)=>({...I})),P.availableInstanceIds=this._availableInstanceIds.slice(),P.availableGeometryIds=this._availableGeometryIds.slice(),P.nextIndexStart=this._nextIndexStart,P.nextVertexStart=this._nextVertexStart,P.geometryCount=this._geometryCount,P.maxInstanceCount=this._maxInstanceCount,P.maxVertexCount=this._maxVertexCount,P.maxIndexCount=this._maxIndexCount,P.geometryInitialized=this._geometryInitialized,P.matricesTexture=this._matricesTexture.toJSON(A),P.indirectTexture=this._indirectTexture.toJSON(A),this._colorsTexture!==null)P.colorsTexture=this._colorsTexture.toJSON(A);if(this.boundingSphere!==null)P.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)P.boundingBox=this.boundingBox.toJSON()}function z(I,D){if(I[D.uuid]===void 0)I[D.uuid]=D.toJSON(A);return D.uuid}if(this.isScene){if(this.background){if(this.background.isColor)P.background=this.background.toJSON();else if(this.background.isTexture)P.background=this.background.toJSON(A).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)P.environment=this.environment.toJSON(A).uuid}else if(this.isMesh||this.isLine||this.isPoints){P.geometry=z(A.geometries,this.geometry);let I=this.geometry.parameters;if(I!==void 0&&I.shapes!==void 0){let D=I.shapes;if(Array.isArray(D))for(let O=0,T=D.length;O<T;O++){let Z=D[O];z(A.shapes,Z)}else z(A.shapes,D)}}if(this.isSkinnedMesh){if(P.bindMode=this.bindMode,P.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)z(A.skeletons,this.skeleton),P.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let I=[];for(let D=0,O=this.material.length;D<O;D++)I.push(z(A.materials,this.material[D]));P.material=I}else P.material=z(A.materials,this.material);if(this.children.length>0){P.children=[];for(let I=0;I<this.children.length;I++)P.children.push(this.children[I].toJSON(A).object)}if(this.animations.length>0){P.animations=[];for(let I=0;I<this.animations.length;I++){let D=this.animations[I];P.animations.push(z(A.animations,D))}}if(M){let I=C(A.geometries),D=C(A.materials),O=C(A.textures),T=C(A.images),Z=C(A.shapes),N=C(A.skeletons),U=C(A.animations),W=C(A.nodes);if(I.length>0)w.geometries=I;if(D.length>0)w.materials=D;if(O.length>0)w.textures=O;if(T.length>0)w.images=T;if(Z.length>0)w.shapes=Z;if(N.length>0)w.skeletons=N;if(U.length>0)w.animations=U;if(W.length>0)w.nodes=W}return w.object=P,w;function C(I){let D=[];for(let O in I){let T=I[O];delete T.metadata,D.push(T)}return D}}clone(A){return new this.constructor().copy(this,A)}copy(A,M=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.pivot=A.pivot!==null?A.pivot.clone():null,this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.static=A.static,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),M===!0)for(let w=0;w<A.children.length;w++){let P=A.children[w];this.add(P.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}n.DEFAULT_UP=new L(0,1,0);n.DEFAULT_MATRIX_AUTO_UPDATE=!0;n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class XM extends n{constructor(){super();this.isGroup=!0,this.type="Group"}}var RI={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},TM={h:0,s:0,l:0},uw={h:0,s:0,l:0};function Qz(A,M,w){if(w<0)w+=1;if(w>1)w-=1;if(w<0.16666666666666666)return A+(M-A)*6*w;if(w<0.5)return M;if(w<0.6666666666666666)return A+(M-A)*6*(0.6666666666666666-w);return A}class _{constructor(A,M,w){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,M,w)}set(A,M,w){if(M===void 0&&w===void 0){let P=A;if(P&&P.isColor)this.copy(P);else if(typeof P==="number")this.setHex(P);else if(typeof P==="string")this.setStyle(P)}else this.setRGB(A,M,w);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,M="srgb"){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,OA.colorSpaceToWorking(this,M),this}setRGB(A,M,w,P=OA.workingColorSpace){return this.r=A,this.g=M,this.b=w,OA.colorSpaceToWorking(this,P),this}setHSL(A,M,w,P=OA.workingColorSpace){if(A=tz(A,1),M=b(M,0,1),w=b(w,0,1),M===0)this.r=this.g=this.b=w;else{let z=w<=0.5?w*(1+M):w+M-w*M,C=2*w-z;this.r=Qz(C,z,A+0.3333333333333333),this.g=Qz(C,z,A),this.b=Qz(C,z,A-0.3333333333333333)}return OA.colorSpaceToWorking(this,P),this}setStyle(A,M="srgb"){function w(z){if(z===void 0)return;if(parseFloat(z)<1)d("Color: Alpha component of "+A+" will be ignored.")}let P;if(P=/^(\w+)\(([^\)]*)\)/.exec(A)){let z,C=P[1],I=P[2];switch(C){case"rgb":case"rgba":if(z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(I))return w(z[4]),this.setRGB(Math.min(255,parseInt(z[1],10))/255,Math.min(255,parseInt(z[2],10))/255,Math.min(255,parseInt(z[3],10))/255,M);if(z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(I))return w(z[4]),this.setRGB(Math.min(100,parseInt(z[1],10))/100,Math.min(100,parseInt(z[2],10))/100,Math.min(100,parseInt(z[3],10))/100,M);break;case"hsl":case"hsla":if(z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(I))return w(z[4]),this.setHSL(parseFloat(z[1])/360,parseFloat(z[2])/100,parseFloat(z[3])/100,M);break;default:d("Color: Unknown color model "+A)}}else if(P=/^\#([A-Fa-f\d]+)$/.exec(A)){let z=P[1],C=z.length;if(C===3)return this.setRGB(parseInt(z.charAt(0),16)/15,parseInt(z.charAt(1),16)/15,parseInt(z.charAt(2),16)/15,M);else if(C===6)return this.setHex(parseInt(z,16),M);else d("Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,M);return this}setColorName(A,M="srgb"){let w=RI[A.toLowerCase()];if(w!==void 0)this.setHex(w,M);else d("Color: Unknown color "+A);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=eA(A.r),this.g=eA(A.g),this.b=eA(A.b),this}copyLinearToSRGB(A){return this.r=rM(A.r),this.g=rM(A.g),this.b=rM(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A="srgb"){return OA.workingToColorSpace(IA.copy(this),A),Math.round(b(IA.r*255,0,255))*65536+Math.round(b(IA.g*255,0,255))*256+Math.round(b(IA.b*255,0,255))}getHexString(A="srgb"){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,M=OA.workingColorSpace){OA.workingToColorSpace(IA.copy(this),M);let{r:w,g:P,b:z}=IA,C=Math.max(w,P,z),I=Math.min(w,P,z),D,O,T=(I+C)/2;if(I===C)D=0,O=0;else{let Z=C-I;switch(O=T<=0.5?Z/(C+I):Z/(2-C-I),C){case w:D=(P-z)/Z+(P<z?6:0);break;case P:D=(z-w)/Z+2;break;case z:D=(w-P)/Z+4;break}D/=6}return A.h=D,A.s=O,A.l=T,A}getRGB(A,M=OA.workingColorSpace){return OA.workingToColorSpace(IA.copy(this),M),A.r=IA.r,A.g=IA.g,A.b=IA.b,A}getStyle(A="srgb"){OA.workingToColorSpace(IA.copy(this),A);let{r:M,g:w,b:P}=IA;if(A!=="srgb")return`color(${A} ${M.toFixed(3)} ${w.toFixed(3)} ${P.toFixed(3)})`;return`rgb(${Math.round(M*255)},${Math.round(w*255)},${Math.round(P*255)})`}offsetHSL(A,M,w){return this.getHSL(TM),this.setHSL(TM.h+A,TM.s+M,TM.l+w)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,M){return this.r=A.r+M.r,this.g=A.g+M.g,this.b=A.b+M.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,M){return this.r+=(A.r-this.r)*M,this.g+=(A.g-this.g)*M,this.b+=(A.b-this.b)*M,this}lerpColors(A,M,w){return this.r=A.r+(M.r-A.r)*w,this.g=A.g+(M.g-A.g)*w,this.b=A.b+(M.b-A.b)*w,this}lerpHSL(A,M){this.getHSL(TM),A.getHSL(uw);let w=Yw(TM.h,uw.h,M),P=Yw(TM.s,uw.s,M),z=Yw(TM.l,uw.l,M);return this.setHSL(w,P,z),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){let M=this.r,w=this.g,P=this.b,z=A.elements;return this.r=z[0]*M+z[3]*w+z[6]*P,this.g=z[1]*M+z[4]*w+z[7]*P,this.b=z[2]*M+z[5]*w+z[8]*P,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,M=0){return this.r=A[M],this.g=A[M+1],this.b=A[M+2],this}toArray(A=[],M=0){return A[M]=this.r,A[M+1]=this.g,A[M+2]=this.b,A}fromBufferAttribute(A,M){return this.r=A.getX(M),this.g=A.getY(M),this.b=A.getZ(M),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var IA=new _;_.NAMES=RI;class jP extends n{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new MM,this.environmentIntensity=1,this.environmentRotation=new MM,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,M){if(super.copy(A,M),A.background!==null)this.background=A.background.clone();if(A.environment!==null)this.environment=A.environment.clone();if(A.fog!==null)this.fog=A.fog.clone();if(this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null)this.overrideMaterial=A.overrideMaterial.clone();return this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){let M=super.toJSON(A);if(this.fog!==null)M.object.fog=this.fog.toJSON();return M.object.backgroundBlurriness=this.backgroundBlurriness,M.object.backgroundIntensity=this.backgroundIntensity,M.object.backgroundRotation=this.backgroundRotation.toArray(),M.object.environmentIntensity=this.environmentIntensity,M.object.environmentRotation=this.environmentRotation.toArray(),M}}var qA=new L,nA=new L,Jz=new L,oA=new L,lM=new L,dM=new L,oC=new L,Gz=new L,Lz=new L,Xz=new L,Yz=new KA,jz=new KA,Vz=new KA;class HA{constructor(A=new L,M=new L,w=new L){this.a=A,this.b=M,this.c=w}static getNormal(A,M,w,P){P.subVectors(w,M),qA.subVectors(A,M),P.cross(qA);let z=P.lengthSq();if(z>0)return P.multiplyScalar(1/Math.sqrt(z));return P.set(0,0,0)}static getBarycoord(A,M,w,P,z){qA.subVectors(P,M),nA.subVectors(w,M),Jz.subVectors(A,M);let C=qA.dot(qA),I=qA.dot(nA),D=qA.dot(Jz),O=nA.dot(nA),T=nA.dot(Jz),Z=C*O-I*I;if(Z===0)return z.set(0,0,0),null;let N=1/Z,U=(O*D-I*T)*N,W=(C*T-I*D)*N;return z.set(1-U-W,W,U)}static containsPoint(A,M,w,P){if(this.getBarycoord(A,M,w,P,oA)===null)return!1;return oA.x>=0&&oA.y>=0&&oA.x+oA.y<=1}static getInterpolation(A,M,w,P,z,C,I,D){if(this.getBarycoord(A,M,w,P,oA)===null){if(D.x=0,D.y=0,"z"in D)D.z=0;if("w"in D)D.w=0;return null}return D.setScalar(0),D.addScaledVector(z,oA.x),D.addScaledVector(C,oA.y),D.addScaledVector(I,oA.z),D}static getInterpolatedAttribute(A,M,w,P,z,C){return Yz.setScalar(0),jz.setScalar(0),Vz.setScalar(0),Yz.fromBufferAttribute(A,M),jz.fromBufferAttribute(A,w),Vz.fromBufferAttribute(A,P),C.setScalar(0),C.addScaledVector(Yz,z.x),C.addScaledVector(jz,z.y),C.addScaledVector(Vz,z.z),C}static isFrontFacing(A,M,w,P){return qA.subVectors(w,M),nA.subVectors(A,M),qA.cross(nA).dot(P)<0}set(A,M,w){return this.a.copy(A),this.b.copy(M),this.c.copy(w),this}setFromPointsAndIndices(A,M,w,P){return this.a.copy(A[M]),this.b.copy(A[w]),this.c.copy(A[P]),this}setFromAttributeAndIndices(A,M,w,P){return this.a.fromBufferAttribute(A,M),this.b.fromBufferAttribute(A,w),this.c.fromBufferAttribute(A,P),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return qA.subVectors(this.c,this.b),nA.subVectors(this.a,this.b),qA.cross(nA).length()*0.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(A){return HA.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,M){return HA.getBarycoord(A,this.a,this.b,this.c,M)}getInterpolation(A,M,w,P,z){return HA.getInterpolation(A,this.a,this.b,this.c,M,w,P,z)}containsPoint(A){return HA.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return HA.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,M){let w=this.a,P=this.b,z=this.c,C,I;lM.subVectors(P,w),dM.subVectors(z,w),Gz.subVectors(A,w);let D=lM.dot(Gz),O=dM.dot(Gz);if(D<=0&&O<=0)return M.copy(w);Lz.subVectors(A,P);let T=lM.dot(Lz),Z=dM.dot(Lz);if(T>=0&&Z<=T)return M.copy(P);let N=D*Z-T*O;if(N<=0&&D>=0&&T<=0)return C=D/(D-T),M.copy(w).addScaledVector(lM,C);Xz.subVectors(A,z);let U=lM.dot(Xz),W=dM.dot(Xz);if(W>=0&&U<=W)return M.copy(z);let Q=U*O-D*W;if(Q<=0&&O>=0&&W<=0)return I=O/(O-W),M.copy(w).addScaledVector(dM,I);let J=T*W-U*Z;if(J<=0&&Z-T>=0&&U-W>=0)return oC.subVectors(z,P),I=(Z-T)/(Z-T+(U-W)),M.copy(P).addScaledVector(oC,I);let G=1/(J+Q+N);return C=Q*G,I=N*G,M.copy(w).addScaledVector(lM,C).addScaledVector(dM,I)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}class BA{constructor(A=new L(1/0,1/0,1/0),M=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=M}set(A,M){return this.min.copy(A),this.max.copy(M),this}setFromArray(A){this.makeEmpty();for(let M=0,w=A.length;M<w;M+=3)this.expandByPoint(SA.fromArray(A,M));return this}setFromBufferAttribute(A){this.makeEmpty();for(let M=0,w=A.count;M<w;M++)this.expandByPoint(SA.fromBufferAttribute(A,M));return this}setFromPoints(A){this.makeEmpty();for(let M=0,w=A.length;M<w;M++)this.expandByPoint(A[M]);return this}setFromCenterAndSize(A,M){let w=SA.copy(M).multiplyScalar(0.5);return this.min.copy(A).sub(w),this.max.copy(A).add(w),this}setFromObject(A,M=!1){return this.makeEmpty(),this.expandByObject(A,M)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,M=!1){A.updateWorldMatrix(!1,!1);let w=A.geometry;if(w!==void 0){let z=w.getAttribute("position");if(M===!0&&z!==void 0&&A.isInstancedMesh!==!0)for(let C=0,I=z.count;C<I;C++){if(A.isMesh===!0)A.getVertexPosition(C,SA);else SA.fromBufferAttribute(z,C);SA.applyMatrix4(A.matrixWorld),this.expandByPoint(SA)}else{if(A.boundingBox!==void 0){if(A.boundingBox===null)A.computeBoundingBox();cw.copy(A.boundingBox)}else{if(w.boundingBox===null)w.computeBoundingBox();cw.copy(w.boundingBox)}cw.applyMatrix4(A.matrixWorld),this.union(cw)}}let P=A.children;for(let z=0,C=P.length;z<C;z++)this.expandByObject(P[z],M);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,M){return M.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,SA),SA.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let M,w;if(A.normal.x>0)M=A.normal.x*this.min.x,w=A.normal.x*this.max.x;else M=A.normal.x*this.max.x,w=A.normal.x*this.min.x;if(A.normal.y>0)M+=A.normal.y*this.min.y,w+=A.normal.y*this.max.y;else M+=A.normal.y*this.max.y,w+=A.normal.y*this.min.y;if(A.normal.z>0)M+=A.normal.z*this.min.z,w+=A.normal.z*this.max.z;else M+=A.normal.z*this.max.z,w+=A.normal.z*this.min.z;return M<=-A.constant&&w>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Nw),iw.subVectors(this.max,Nw),uM.subVectors(A.a,Nw),cM.subVectors(A.b,Nw),iM.subVectors(A.c,Nw),ZM.subVectors(cM,uM),NM.subVectors(iM,cM),qM.subVectors(uM,iM);let M=[0,-ZM.z,ZM.y,0,-NM.z,NM.y,0,-qM.z,qM.y,ZM.z,0,-ZM.x,NM.z,0,-NM.x,qM.z,0,-qM.x,-ZM.y,ZM.x,0,-NM.y,NM.x,0,-qM.y,qM.x,0];if(!Ez(M,uM,cM,iM,iw))return!1;if(M=[1,0,0,0,1,0,0,0,1],!Ez(M,uM,cM,iM,iw))return!1;return sw.crossVectors(ZM,NM),M=[sw.x,sw.y,sw.z],Ez(M,uM,cM,iM,iw)}clampPoint(A,M){return M.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,SA).distanceTo(A)}getBoundingSphere(A){if(this.isEmpty())A.makeEmpty();else this.getCenter(A.center),A.radius=this.getSize(SA).length()*0.5;return A}intersect(A){if(this.min.max(A.min),this.max.min(A.max),this.isEmpty())this.makeEmpty();return this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){if(this.isEmpty())return this;return aA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),aA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),aA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),aA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),aA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),aA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),aA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),aA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(aA),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(A){return this.min.fromArray(A.min),this.max.fromArray(A.max),this}}var aA=[new L,new L,new L,new L,new L,new L,new L,new L],SA=new L,cw=new BA,uM=new L,cM=new L,iM=new L,ZM=new L,NM=new L,qM=new L,Nw=new L,iw=new L,sw=new L,SM=new L;function Ez(A,M,w,P,z){for(let C=0,I=A.length-3;C<=I;C+=3){SM.fromArray(A,C);let D=z.x*Math.abs(SM.x)+z.y*Math.abs(SM.y)+z.z*Math.abs(SM.z),O=M.dot(SM),T=w.dot(SM),Z=P.dot(SM);if(Math.max(-Math.max(O,T,Z),Math.min(O,T,Z))>D)return!1}return!0}var AA=new L,nw=new $,G9=0;class TA extends LM{constructor(A,M,w=!1){super();if(Array.isArray(A))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G9++}),this.name="",this.array=A,this.itemSize=M,this.count=A!==void 0?A.length/M:0,this.normalized=w,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(A){if(A===!0)this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,M){this.updateRanges.push({start:A,count:M})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,M,w){A*=this.itemSize,w*=M.itemSize;for(let P=0,z=this.itemSize;P<z;P++)this.array[A+P]=M.array[w+P];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let M=0,w=this.count;M<w;M++)nw.fromBufferAttribute(this,M),nw.applyMatrix3(A),this.setXY(M,nw.x,nw.y);else if(this.itemSize===3)for(let M=0,w=this.count;M<w;M++)AA.fromBufferAttribute(this,M),AA.applyMatrix3(A),this.setXYZ(M,AA.x,AA.y,AA.z);return this}applyMatrix4(A){for(let M=0,w=this.count;M<w;M++)AA.fromBufferAttribute(this,M),AA.applyMatrix4(A),this.setXYZ(M,AA.x,AA.y,AA.z);return this}applyNormalMatrix(A){for(let M=0,w=this.count;M<w;M++)AA.fromBufferAttribute(this,M),AA.applyNormalMatrix(A),this.setXYZ(M,AA.x,AA.y,AA.z);return this}transformDirection(A){for(let M=0,w=this.count;M<w;M++)AA.fromBufferAttribute(this,M),AA.transformDirection(A),this.setXYZ(M,AA.x,AA.y,AA.z);return this}set(A,M=0){return this.array.set(A,M),this}getComponent(A,M){let w=this.array[A*this.itemSize+M];if(this.normalized)w=yA(w,this.array);return w}setComponent(A,M,w){if(this.normalized)w=l(w,this.array);return this.array[A*this.itemSize+M]=w,this}getX(A){let M=this.array[A*this.itemSize];if(this.normalized)M=yA(M,this.array);return M}setX(A,M){if(this.normalized)M=l(M,this.array);return this.array[A*this.itemSize]=M,this}getY(A){let M=this.array[A*this.itemSize+1];if(this.normalized)M=yA(M,this.array);return M}setY(A,M){if(this.normalized)M=l(M,this.array);return this.array[A*this.itemSize+1]=M,this}getZ(A){let M=this.array[A*this.itemSize+2];if(this.normalized)M=yA(M,this.array);return M}setZ(A,M){if(this.normalized)M=l(M,this.array);return this.array[A*this.itemSize+2]=M,this}getW(A){let M=this.array[A*this.itemSize+3];if(this.normalized)M=yA(M,this.array);return M}setW(A,M){if(this.normalized)M=l(M,this.array);return this.array[A*this.itemSize+3]=M,this}setXY(A,M,w){if(A*=this.itemSize,this.normalized)M=l(M,this.array),w=l(w,this.array);return this.array[A+0]=M,this.array[A+1]=w,this}setXYZ(A,M,w,P){if(A*=this.itemSize,this.normalized)M=l(M,this.array),w=l(w,this.array),P=l(P,this.array);return this.array[A+0]=M,this.array[A+1]=w,this.array[A+2]=P,this}setXYZW(A,M,w,P,z){if(A*=this.itemSize,this.normalized)M=l(M,this.array),w=l(w,this.array),P=l(P,this.array),z=l(z,this.array);return this.array[A+0]=M,this.array[A+1]=w,this.array[A+2]=P,this.array[A+3]=z,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return A.name=this.name,A.usage=this.usage,A.gpuType=this.gpuType,A}dispose(){this.dispatchEvent({type:"dispose"})}}class wC extends TA{constructor(A,M,w){super(new Uint16Array(A),M,w)}}class PC extends TA{constructor(A,M,w){super(new Uint32Array(A),M,w)}}class AM extends TA{constructor(A,M,w){super(new Float32Array(A),M,w)}}var L9=new BA,Uw=new L,Hz=new L;class XA{constructor(A=new L,M=-1){this.isSphere=!0,this.center=A,this.radius=M}set(A,M){return this.center.copy(A),this.radius=M,this}setFromPoints(A,M){let w=this.center;if(M!==void 0)w.copy(M);else L9.setFromPoints(A).getCenter(w);let P=0;for(let z=0,C=A.length;z<C;z++)P=Math.max(P,w.distanceToSquared(A[z]));return this.radius=Math.sqrt(P),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){let M=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=M*M}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,M){let w=this.center.distanceToSquared(A);if(M.copy(A),w>this.radius*this.radius)M.sub(this.center).normalize(),M.multiplyScalar(this.radius).add(this.center);return M}getBoundingBox(A){if(this.isEmpty())return A.makeEmpty(),A;return A.set(this.center,this.center),A.expandByScalar(this.radius),A}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Uw.subVectors(A,this.center);let M=Uw.lengthSq();if(M>this.radius*this.radius){let w=Math.sqrt(M),P=(w-this.radius)*0.5;this.center.addScaledVector(Uw,P/w),this.radius+=P}return this}union(A){if(A.isEmpty())return this;if(this.isEmpty())return this.copy(A),this;if(this.center.equals(A.center)===!0)this.radius=Math.max(this.radius,A.radius);else Hz.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Uw.copy(A.center).add(Hz)),this.expandByPoint(Uw.copy(A.center).sub(Hz));return this}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(A){return this.radius=A.radius,this.center.fromArray(A.center),this}}var X9=0,EA=new h,Kz=new n,sM=new L,GA=new BA,Ww=new BA,PA=new L;class xA extends LM{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X9++}),this.uuid=bA(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(A){if(Array.isArray(A))this.index=new((dD(A))?PC:wC)(A,1);else this.index=A;return this}setIndirect(A,M=0){return this.indirect=A,this.indirectOffset=M,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,M){return this.attributes[A]=M,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,M,w=0){this.groups.push({start:A,count:M,materialIndex:w})}clearGroups(){this.groups=[]}setDrawRange(A,M){this.drawRange.start=A,this.drawRange.count=M}applyMatrix4(A){let M=this.attributes.position;if(M!==void 0)M.applyMatrix4(A),M.needsUpdate=!0;let w=this.attributes.normal;if(w!==void 0){let z=new S().getNormalMatrix(A);w.applyNormalMatrix(z),w.needsUpdate=!0}let P=this.attributes.tangent;if(P!==void 0)P.transformDirection(A),P.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(A){return EA.makeRotationFromQuaternion(A),this.applyMatrix4(EA),this}rotateX(A){return EA.makeRotationX(A),this.applyMatrix4(EA),this}rotateY(A){return EA.makeRotationY(A),this.applyMatrix4(EA),this}rotateZ(A){return EA.makeRotationZ(A),this.applyMatrix4(EA),this}translate(A,M,w){return EA.makeTranslation(A,M,w),this.applyMatrix4(EA),this}scale(A,M,w){return EA.makeScale(A,M,w),this.applyMatrix4(EA),this}lookAt(A){return Kz.lookAt(A),Kz.updateMatrix(),this.applyMatrix4(Kz.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sM).negate(),this.translate(sM.x,sM.y,sM.z),this}setFromPoints(A){let M=this.getAttribute("position");if(M===void 0){let w=[];for(let P=0,z=A.length;P<z;P++){let C=A[P];w.push(C.x,C.y,C.z||0)}this.setAttribute("position",new AM(w,3))}else{let w=Math.min(A.length,M.count);for(let P=0;P<w;P++){let z=A[P];M.setXYZ(P,z.x,z.y,z.z||0)}if(A.length>M.count)d("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");M.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new BA;let A=this.attributes.position,M=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){o("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),M)for(let w=0,P=M.length;w<P;w++){let z=M[w];if(GA.setFromBufferAttribute(z),this.morphTargetsRelative)PA.addVectors(this.boundingBox.min,GA.min),this.boundingBox.expandByPoint(PA),PA.addVectors(this.boundingBox.max,GA.max),this.boundingBox.expandByPoint(PA);else this.boundingBox.expandByPoint(GA.min),this.boundingBox.expandByPoint(GA.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))o('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new XA;let A=this.attributes.position,M=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){o("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(A){let w=this.boundingSphere.center;if(GA.setFromBufferAttribute(A),M)for(let z=0,C=M.length;z<C;z++){let I=M[z];if(Ww.setFromBufferAttribute(I),this.morphTargetsRelative)PA.addVectors(GA.min,Ww.min),GA.expandByPoint(PA),PA.addVectors(GA.max,Ww.max),GA.expandByPoint(PA);else GA.expandByPoint(Ww.min),GA.expandByPoint(Ww.max)}GA.getCenter(w);let P=0;for(let z=0,C=A.count;z<C;z++)PA.fromBufferAttribute(A,z),P=Math.max(P,w.distanceToSquared(PA));if(M)for(let z=0,C=M.length;z<C;z++){let I=M[z],D=this.morphTargetsRelative;for(let O=0,T=I.count;O<T;O++){if(PA.fromBufferAttribute(I,O),D)sM.fromBufferAttribute(A,O),PA.add(sM);P=Math.max(P,w.distanceToSquared(PA))}}if(this.boundingSphere.radius=Math.sqrt(P),isNaN(this.boundingSphere.radius))o('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let A=this.index,M=this.attributes;if(A===null||M.position===void 0||M.normal===void 0||M.uv===void 0){o("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:w,normal:P,uv:z}=M,C=this.getAttribute("tangent");if(C===void 0||C.count!==w.count)C=new TA(new Float32Array(4*w.count),4),this.setAttribute("tangent",C);let I=[],D=[];for(let Y=0;Y<w.count;Y++)I[Y]=new L,D[Y]=new L;let O=new L,T=new L,Z=new L,N=new $,U=new $,W=new $,Q=new L,J=new L;function G(Y,v,k){O.fromBufferAttribute(w,Y),T.fromBufferAttribute(w,v),Z.fromBufferAttribute(w,k),N.fromBufferAttribute(z,Y),U.fromBufferAttribute(z,v),W.fromBufferAttribute(z,k),T.sub(O),Z.sub(O),U.sub(N),W.sub(N);let R=1/(U.x*W.y-W.x*U.y);if(!isFinite(R))return;Q.copy(T).multiplyScalar(W.y).addScaledVector(Z,-U.y).multiplyScalar(R),J.copy(Z).multiplyScalar(U.x).addScaledVector(T,-W.x).multiplyScalar(R),I[Y].add(Q),I[v].add(Q),I[k].add(Q),D[Y].add(J),D[v].add(J),D[k].add(J)}let X=this.groups;if(X.length===0)X=[{start:0,count:A.count}];for(let Y=0,v=X.length;Y<v;++Y){let k=X[Y],R=k.start,x=k.count;for(let q=R,m=R+x;q<m;q+=3)G(A.getX(q+0),A.getX(q+1),A.getX(q+2))}let j=new L,E=new L,K=new L,H=new L;function V(Y){K.fromBufferAttribute(P,Y),H.copy(K);let v=I[Y];j.copy(v),j.sub(K.multiplyScalar(K.dot(v))).normalize(),E.crossVectors(H,v);let R=E.dot(D[Y])<0?-1:1;C.setXYZW(Y,j.x,j.y,j.z,R)}for(let Y=0,v=X.length;Y<v;++Y){let k=X[Y],R=k.start,x=k.count;for(let q=R,m=R+x;q<m;q+=3)V(A.getX(q+0)),V(A.getX(q+1)),V(A.getX(q+2))}this._transformed=!0}computeVertexNormals(){let A=this.index,M=this.getAttribute("position");if(M!==void 0){let w=this.getAttribute("normal");if(w===void 0||w.count!==M.count)w=new TA(new Float32Array(M.count*3),3),this.setAttribute("normal",w);else for(let N=0,U=w.count;N<U;N++)w.setXYZ(N,0,0,0);let P=new L,z=new L,C=new L,I=new L,D=new L,O=new L,T=new L,Z=new L;if(A)for(let N=0,U=A.count;N<U;N+=3){let W=A.getX(N+0),Q=A.getX(N+1),J=A.getX(N+2);P.fromBufferAttribute(M,W),z.fromBufferAttribute(M,Q),C.fromBufferAttribute(M,J),T.subVectors(C,z),Z.subVectors(P,z),T.cross(Z),I.fromBufferAttribute(w,W),D.fromBufferAttribute(w,Q),O.fromBufferAttribute(w,J),I.add(T),D.add(T),O.add(T),w.setXYZ(W,I.x,I.y,I.z),w.setXYZ(Q,D.x,D.y,D.z),w.setXYZ(J,O.x,O.y,O.z)}else for(let N=0,U=M.count;N<U;N+=3)P.fromBufferAttribute(M,N+0),z.fromBufferAttribute(M,N+1),C.fromBufferAttribute(M,N+2),T.subVectors(C,z),Z.subVectors(P,z),T.cross(Z),w.setXYZ(N+0,T.x,T.y,T.z),w.setXYZ(N+1,T.x,T.y,T.z),w.setXYZ(N+2,T.x,T.y,T.z);this.normalizeNormals(),w.needsUpdate=!0}}normalizeNormals(){let A=this.attributes.normal;for(let M=0,w=A.count;M<w;M++)PA.fromBufferAttribute(A,M),PA.normalize(),A.setXYZ(M,PA.x,PA.y,PA.z)}toNonIndexed(){function A(I,D){let{array:O,itemSize:T,normalized:Z}=I,N=new O.constructor(D.length*T),U=0,W=0;for(let Q=0,J=D.length;Q<J;Q++){if(I.isInterleavedBufferAttribute)U=D[Q]*I.data.stride+I.offset;else U=D[Q]*T;for(let G=0;G<T;G++)N[W++]=O[U++]}return new TA(N,T,Z)}if(this.index===null)return d("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let M=new xA,w=this.index.array,P=this.attributes;for(let I in P){let D=P[I],O=A(D,w);M.setAttribute(I,O)}let z=this.morphAttributes;for(let I in z){let D=[],O=z[I];for(let T=0,Z=O.length;T<Z;T++){let N=O[T],U=A(N,w);D.push(U)}M.morphAttributes[I]=D}M.morphTargetsRelative=this.morphTargetsRelative;let C=this.groups;for(let I=0,D=C.length;I<D;I++){let O=C[I];M.addGroup(O.start,O.count,O.materialIndex)}return M}toJSON(){let A={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,A.name=this.name,Object.keys(this.userData).length>0)A.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let D=this.parameters;for(let O in D)if(D[O]!==void 0)A[O]=D[O];return A}A.data={attributes:{}};let M=this.index;if(M!==null)A.data.index={type:M.array.constructor.name,array:Array.prototype.slice.call(M.array)};let w=this.attributes;for(let D in w){let O=w[D];A.data.attributes[D]=O.toJSON(A.data)}let P={},z=!1;for(let D in this.morphAttributes){let O=this.morphAttributes[D],T=[];for(let Z=0,N=O.length;Z<N;Z++){let U=O[Z];T.push(U.toJSON(A.data))}if(T.length>0)P[D]=T,z=!0}if(z)A.data.morphAttributes=P,A.data.morphTargetsRelative=this.morphTargetsRelative;let C=this.groups;if(C.length>0)A.data.groups=JSON.parse(JSON.stringify(C));let I=this.boundingSphere;if(I!==null)A.data.boundingSphere=I.toJSON();return A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let M={};this.name=A.name;let w=A.index;if(w!==null)this.setIndex(w.clone());let P=A.attributes;for(let O in P){let T=P[O];this.setAttribute(O,T.clone(M))}let z=A.morphAttributes;for(let O in z){let T=[],Z=z[O];for(let N=0,U=Z.length;N<U;N++)T.push(Z[N].clone(M));this.morphAttributes[O]=T}this.morphTargetsRelative=A.morphTargetsRelative;let C=A.groups;for(let O=0,T=C.length;O<T;O++){let Z=C[O];this.addGroup(Z.start,Z.count,Z.materialIndex)}let I=A.boundingBox;if(I!==null)this.boundingBox=I.clone();let D=A.boundingSphere;if(D!==null)this.boundingSphere=D.clone();return this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this._transformed=A._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kw{constructor(A,M){this.isInterleavedBuffer=!0,this.array=A,this.stride=M,this.count=A!==void 0?A.length/M:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=bA()}onUploadCallback(){}set needsUpdate(A){if(A===!0)this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,M){this.updateRanges.push({start:A,count:M})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,M,w){A*=this.stride,w*=M.stride;for(let P=0,z=this.stride;P<z;P++)this.array[A+P]=M.array[w+P];return this}set(A,M=0){return this.array.set(A,M),this}clone(A){if(A.arrayBuffers===void 0)A.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=bA();if(A.arrayBuffers[this.array.buffer._uuid]===void 0)A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let M=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),w=new this.constructor(M,this.stride);return w.setUsage(this.usage),w}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){if(A.arrayBuffers===void 0)A.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=bA();if(A.arrayBuffers[this.array.buffer._uuid]===void 0)A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let M={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return M.usage=this.usage,M}}var DA=new L;class Mw{constructor(A,M,w,P=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=M,this.offset=w,this.normalized=P}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let M=0,w=this.data.count;M<w;M++)DA.fromBufferAttribute(this,M),DA.applyMatrix4(A),this.setXYZ(M,DA.x,DA.y,DA.z);return this}applyNormalMatrix(A){for(let M=0,w=this.count;M<w;M++)DA.fromBufferAttribute(this,M),DA.applyNormalMatrix(A),this.setXYZ(M,DA.x,DA.y,DA.z);return this}transformDirection(A){for(let M=0,w=this.count;M<w;M++)DA.fromBufferAttribute(this,M),DA.transformDirection(A),this.setXYZ(M,DA.x,DA.y,DA.z);return this}getComponent(A,M){let w=this.array[A*this.data.stride+this.offset+M];if(this.normalized)w=yA(w,this.array);return w}setComponent(A,M,w){if(this.normalized)w=l(w,this.array);return this.data.array[A*this.data.stride+this.offset+M]=w,this}setX(A,M){if(this.normalized)M=l(M,this.array);return this.data.array[A*this.data.stride+this.offset]=M,this}setY(A,M){if(this.normalized)M=l(M,this.array);return this.data.array[A*this.data.stride+this.offset+1]=M,this}setZ(A,M){if(this.normalized)M=l(M,this.array);return this.data.array[A*this.data.stride+this.offset+2]=M,this}setW(A,M){if(this.normalized)M=l(M,this.array);return this.data.array[A*this.data.stride+this.offset+3]=M,this}getX(A){let M=this.data.array[A*this.data.stride+this.offset];if(this.normalized)M=yA(M,this.array);return M}getY(A){let M=this.data.array[A*this.data.stride+this.offset+1];if(this.normalized)M=yA(M,this.array);return M}getZ(A){let M=this.data.array[A*this.data.stride+this.offset+2];if(this.normalized)M=yA(M,this.array);return M}getW(A){let M=this.data.array[A*this.data.stride+this.offset+3];if(this.normalized)M=yA(M,this.array);return M}setXY(A,M,w){if(A=A*this.data.stride+this.offset,this.normalized)M=l(M,this.array),w=l(w,this.array);return this.data.array[A+0]=M,this.data.array[A+1]=w,this}setXYZ(A,M,w,P){if(A=A*this.data.stride+this.offset,this.normalized)M=l(M,this.array),w=l(w,this.array),P=l(P,this.array);return this.data.array[A+0]=M,this.data.array[A+1]=w,this.data.array[A+2]=P,this}setXYZW(A,M,w,P,z){if(A=A*this.data.stride+this.offset,this.normalized)M=l(M,this.array),w=l(w,this.array),P=l(P,this.array),z=l(z,this.array);return this.data.array[A+0]=M,this.data.array[A+1]=w,this.data.array[A+2]=P,this.data.array[A+3]=z,this}clone(A){if(A===void 0){yz("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let M=[];for(let w=0;w<this.count;w++){let P=w*this.data.stride+this.offset;for(let z=0;z<this.itemSize;z++)M.push(this.data.array[P+z])}return new TA(new this.array.constructor(M),this.itemSize,this.normalized)}else{if(A.interleavedBuffers===void 0)A.interleavedBuffers={};if(A.interleavedBuffers[this.data.uuid]===void 0)A.interleavedBuffers[this.data.uuid]=this.data.clone(A);return new Mw(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(A){if(A===void 0){yz("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let M=[];for(let w=0;w<this.count;w++){let P=w*this.data.stride+this.offset;for(let z=0;z<this.itemSize;z++)M.push(this.data.array[P+z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:M,normalized:this.normalized}}else{if(A.interleavedBuffers===void 0)A.interleavedBuffers={};if(A.interleavedBuffers[this.data.uuid]===void 0)A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var Bz=new L,Y9=new L,j9=new S;class $A{constructor(A=new L(1,0,0),M=0){this.isPlane=!0,this.normal=A,this.constant=M}set(A,M){return this.normal.copy(A),this.constant=M,this}setComponents(A,M,w,P){return this.normal.set(A,M,w),this.constant=P,this}setFromNormalAndCoplanarPoint(A,M){return this.normal.copy(A),this.constant=-M.dot(this.normal),this}setFromCoplanarPoints(A,M,w){let P=Bz.subVectors(w,M).cross(Y9.subVectors(A,M)).normalize();return this.setFromNormalAndCoplanarPoint(P,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){let A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,M){return M.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,M,w=!0){let P=A.delta(Bz),z=this.normal.dot(P);if(z===0){if(this.distanceToPoint(A.start)===0)return M.copy(A.start);return null}let C=-(A.start.dot(this.normal)+this.constant)/z;if(w===!0&&(C<0||C>1))return null;return M.copy(A.start).addScaledVector(P,C)}intersectsLine(A){let M=this.distanceToPoint(A.start),w=this.distanceToPoint(A.end);return M<0&&w>0||w<0&&M>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,M){let w=M||j9.getNormalMatrix(A),P=this.coplanarPoint(Bz).applyMatrix4(A),z=this.normal.applyMatrix3(w).normalize();return this.constant=-P.dot(z),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(A){return this.normal.fromArray(A.normal),this.constant=A.constant,this}}var V9=0;class mA extends LM{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:V9++}),this.uuid=bA(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){if(this._alphaTest>0!==A>0)this.version++;this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A===void 0)return;for(let M in A){let w=A[M];if(w===void 0){d(`Material: parameter '${M}' has value of undefined.`);continue}let P=this[M];if(P===void 0){d(`Material: '${M}' is not a property of THREE.${this.type}.`);continue}if(P&&P.isColor)P.set(w);else if(P&&P.isVector2&&(w&&w.isVector2)||P&&P.isEuler&&(w&&w.isEuler)||P&&P.isVector3&&(w&&w.isVector3))P.copy(w);else this[M]=w}}toJSON(A){let M=A===void 0||typeof A==="string";if(M)A={textures:{},images:{}};let w={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(w.uuid=this.uuid,w.type=this.type,w.blending=this.blending,w.side=this.side,w.shadowSide=this.shadowSide,w.vertexColors=this.vertexColors,w.opacity=this.opacity,w.transparent=this.transparent,w.blendSrc=this.blendSrc,w.blendDst=this.blendDst,w.blendEquation=this.blendEquation,w.blendSrcAlpha=this.blendSrcAlpha,w.blendDstAlpha=this.blendDstAlpha,w.blendEquationAlpha=this.blendEquationAlpha,w.blendColor=this.blendColor.getHex(),w.blendAlpha=this.blendAlpha,w.depthFunc=this.depthFunc,w.depthTest=this.depthTest,w.depthWrite=this.depthWrite,w.colorWrite=this.colorWrite,w.clipIntersection=this.clipIntersection,w.clipShadows=this.clipShadows,w.stencilWriteMask=this.stencilWriteMask,w.stencilFunc=this.stencilFunc,w.stencilRef=this.stencilRef,w.stencilFuncMask=this.stencilFuncMask,w.stencilFail=this.stencilFail,w.stencilZFail=this.stencilZFail,w.stencilZPass=this.stencilZPass,w.stencilWrite=this.stencilWrite,w.polygonOffset=this.polygonOffset,w.polygonOffsetFactor=this.polygonOffsetFactor,w.polygonOffsetUnits=this.polygonOffsetUnits,w.dithering=this.dithering,w.alphaTest=this.alphaTest,w.alphaHash=this.alphaHash,w.alphaToCoverage=this.alphaToCoverage,w.premultipliedAlpha=this.premultipliedAlpha,w.forceSinglePass=this.forceSinglePass,w.allowOverride=this.allowOverride,w.visible=this.visible,w.toneMapped=this.toneMapped,w.name=this.name,this.color&&this.color.isColor)w.color=this.color.getHex();if(this.roughness!==void 0)w.roughness=this.roughness;if(this.metalness!==void 0)w.metalness=this.metalness;if(this.sheen!==void 0)w.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)w.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)w.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)w.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)w.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)w.specular=this.specular.getHex();if(this.specularIntensity!==void 0)w.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)w.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)w.shininess=this.shininess;if(this.clearcoat!==void 0)w.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)w.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)w.clearcoatMap=this.clearcoatMap.toJSON(A).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)w.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)w.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,w.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)w.sheenColorMap=this.sheenColorMap.toJSON(A).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)w.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(A).uuid;if(this.dispersion!==void 0)w.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)w.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)w.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)w.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)w.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)w.iridescenceMap=this.iridescenceMap.toJSON(A).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)w.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid;if(this.anisotropy!==void 0)w.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)w.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)w.anisotropyMap=this.anisotropyMap.toJSON(A).uuid;if(this.map&&this.map.isTexture)w.map=this.map.toJSON(A).uuid;if(this.matcap&&this.matcap.isTexture)w.matcap=this.matcap.toJSON(A).uuid;if(this.alphaMap&&this.alphaMap.isTexture)w.alphaMap=this.alphaMap.toJSON(A).uuid;if(this.lightMap&&this.lightMap.isTexture)w.lightMap=this.lightMap.toJSON(A).uuid,w.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)w.aoMap=this.aoMap.toJSON(A).uuid,w.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)w.bumpMap=this.bumpMap.toJSON(A).uuid,w.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)w.normalMap=this.normalMap.toJSON(A).uuid,w.normalMapType=this.normalMapType,w.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)w.displacementMap=this.displacementMap.toJSON(A).uuid,w.displacementScale=this.displacementScale,w.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)w.roughnessMap=this.roughnessMap.toJSON(A).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)w.metalnessMap=this.metalnessMap.toJSON(A).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)w.emissiveMap=this.emissiveMap.toJSON(A).uuid;if(this.specularMap&&this.specularMap.isTexture)w.specularMap=this.specularMap.toJSON(A).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)w.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)w.specularColorMap=this.specularColorMap.toJSON(A).uuid;if(this.envMap&&this.envMap.isTexture){if(w.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0)w.combine=this.combine}if(this.envMapRotation!==void 0)w.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)w.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)w.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)w.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)w.gradientMap=this.gradientMap.toJSON(A).uuid;if(this.transmission!==void 0)w.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)w.transmissionMap=this.transmissionMap.toJSON(A).uuid;if(this.thickness!==void 0)w.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)w.thicknessMap=this.thicknessMap.toJSON(A).uuid;if(this.attenuationDistance!==void 0)w.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)w.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)w.size=this.size;if(this.sizeAttenuation!==void 0)w.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)w.clippingPlanes=this.clippingPlanes.map((z)=>z.toJSON());if(this.rotation!==void 0)w.rotation=this.rotation;if(this.depthPacking!==void 0)w.depthPacking=this.depthPacking;if(this.linewidth!==void 0)w.linewidth=this.linewidth;if(this.linecap!==void 0)w.linecap=this.linecap;if(this.linejoin!==void 0)w.linejoin=this.linejoin;if(this.dashSize!==void 0)w.dashSize=this.dashSize;if(this.gapSize!==void 0)w.gapSize=this.gapSize;if(this.scale!==void 0)w.scale=this.scale;if(this.wireframe!==void 0)w.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)w.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)w.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)w.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)w.flatShading=this.flatShading;if(this.fog!==void 0)w.fog=this.fog;if(Object.keys(this.userData).length>0)w.userData=this.userData;function P(z){let C=[];for(let I in z){let D=z[I];delete D.metadata,C.push(D)}return C}if(M){let z=P(A.textures),C=P(A.images);if(z.length>0)w.textures=z;if(C.length>0)w.images=C}return w}fromJSON(A,M){if(A.uuid!==void 0)this.uuid=A.uuid;if(A.name!==void 0)this.name=A.name;if(A.color!==void 0&&this.color!==void 0)this.color.setHex(A.color);if(A.roughness!==void 0)this.roughness=A.roughness;if(A.metalness!==void 0)this.metalness=A.metalness;if(A.sheen!==void 0)this.sheen=A.sheen;if(A.sheenColor!==void 0)this.sheenColor=new _().setHex(A.sheenColor);if(A.sheenRoughness!==void 0)this.sheenRoughness=A.sheenRoughness;if(A.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(A.emissive);if(A.specular!==void 0&&this.specular!==void 0)this.specular.setHex(A.specular);if(A.specularIntensity!==void 0)this.specularIntensity=A.specularIntensity;if(A.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(A.specularColor);if(A.shininess!==void 0)this.shininess=A.shininess;if(A.clearcoat!==void 0)this.clearcoat=A.clearcoat;if(A.clearcoatRoughness!==void 0)this.clearcoatRoughness=A.clearcoatRoughness;if(A.dispersion!==void 0)this.dispersion=A.dispersion;if(A.retroreflectivity!==void 0)this.retroreflectivity=A.retroreflectivity;if(A.iridescence!==void 0)this.iridescence=A.iridescence;if(A.iridescenceIOR!==void 0)this.iridescenceIOR=A.iridescenceIOR;if(A.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=A.iridescenceThicknessRange;if(A.transmission!==void 0)this.transmission=A.transmission;if(A.thickness!==void 0)this.thickness=A.thickness;if(A.attenuationDistance!==void 0)this.attenuationDistance=A.attenuationDistance;if(A.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(A.attenuationColor);if(A.anisotropy!==void 0)this.anisotropy=A.anisotropy;if(A.anisotropyRotation!==void 0)this.anisotropyRotation=A.anisotropyRotation;if(A.fog!==void 0)this.fog=A.fog;if(A.flatShading!==void 0)this.flatShading=A.flatShading;if(A.blending!==void 0)this.blending=A.blending;if(A.combine!==void 0)this.combine=A.combine;if(A.side!==void 0)this.side=A.side;if(A.shadowSide!==void 0)this.shadowSide=A.shadowSide;if(A.opacity!==void 0)this.opacity=A.opacity;if(A.transparent!==void 0)this.transparent=A.transparent;if(A.alphaTest!==void 0)this.alphaTest=A.alphaTest;if(A.alphaHash!==void 0)this.alphaHash=A.alphaHash;if(A.depthFunc!==void 0)this.depthFunc=A.depthFunc;if(A.depthTest!==void 0)this.depthTest=A.depthTest;if(A.depthWrite!==void 0)this.depthWrite=A.depthWrite;if(A.colorWrite!==void 0)this.colorWrite=A.colorWrite;if(A.clippingPlanes!==void 0)this.clippingPlanes=A.clippingPlanes.map((w)=>new $A().fromJSON(w));if(A.clipIntersection!==void 0)this.clipIntersection=A.clipIntersection;if(A.clipShadows!==void 0)this.clipShadows=A.clipShadows;if(A.depthPacking!==void 0)this.depthPacking=A.depthPacking;if(A.blendSrc!==void 0)this.blendSrc=A.blendSrc;if(A.blendDst!==void 0)this.blendDst=A.blendDst;if(A.blendEquation!==void 0)this.blendEquation=A.blendEquation;if(A.blendSrcAlpha!==void 0)this.blendSrcAlpha=A.blendSrcAlpha;if(A.blendDstAlpha!==void 0)this.blendDstAlpha=A.blendDstAlpha;if(A.blendEquationAlpha!==void 0)this.blendEquationAlpha=A.blendEquationAlpha;if(A.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(A.blendColor);if(A.blendAlpha!==void 0)this.blendAlpha=A.blendAlpha;if(A.stencilWriteMask!==void 0)this.stencilWriteMask=A.stencilWriteMask;if(A.stencilFunc!==void 0)this.stencilFunc=A.stencilFunc;if(A.stencilRef!==void 0)this.stencilRef=A.stencilRef;if(A.stencilFuncMask!==void 0)this.stencilFuncMask=A.stencilFuncMask;if(A.stencilFail!==void 0)this.stencilFail=A.stencilFail;if(A.stencilZFail!==void 0)this.stencilZFail=A.stencilZFail;if(A.stencilZPass!==void 0)this.stencilZPass=A.stencilZPass;if(A.stencilWrite!==void 0)this.stencilWrite=A.stencilWrite;if(A.wireframe!==void 0)this.wireframe=A.wireframe;if(A.wireframeLinewidth!==void 0)this.wireframeLinewidth=A.wireframeLinewidth;if(A.wireframeLinecap!==void 0)this.wireframeLinecap=A.wireframeLinecap;if(A.wireframeLinejoin!==void 0)this.wireframeLinejoin=A.wireframeLinejoin;if(A.rotation!==void 0)this.rotation=A.rotation;if(A.linewidth!==void 0)this.linewidth=A.linewidth;if(A.linecap!==void 0)this.linecap=A.linecap;if(A.linejoin!==void 0)this.linejoin=A.linejoin;if(A.dashSize!==void 0)this.dashSize=A.dashSize;if(A.gapSize!==void 0)this.gapSize=A.gapSize;if(A.scale!==void 0)this.scale=A.scale;if(A.polygonOffset!==void 0)this.polygonOffset=A.polygonOffset;if(A.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=A.polygonOffsetFactor;if(A.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=A.polygonOffsetUnits;if(A.dithering!==void 0)this.dithering=A.dithering;if(A.alphaToCoverage!==void 0)this.alphaToCoverage=A.alphaToCoverage;if(A.premultipliedAlpha!==void 0)this.premultipliedAlpha=A.premultipliedAlpha;if(A.forceSinglePass!==void 0)this.forceSinglePass=A.forceSinglePass;if(A.allowOverride!==void 0)this.allowOverride=A.allowOverride;if(A.visible!==void 0)this.visible=A.visible;if(A.toneMapped!==void 0)this.toneMapped=A.toneMapped;if(A.userData!==void 0)this.userData=A.userData;if(A.vertexColors!==void 0)if(typeof A.vertexColors==="number")this.vertexColors=A.vertexColors>0;else this.vertexColors=A.vertexColors;if(A.size!==void 0)this.size=A.size;if(A.sizeAttenuation!==void 0)this.sizeAttenuation=A.sizeAttenuation;if(A.map!==void 0)this.map=M[A.map]||null;if(A.matcap!==void 0)this.matcap=M[A.matcap]||null;if(A.alphaMap!==void 0)this.alphaMap=M[A.alphaMap]||null;if(A.bumpMap!==void 0)this.bumpMap=M[A.bumpMap]||null;if(A.bumpScale!==void 0)this.bumpScale=A.bumpScale;if(A.normalMap!==void 0)this.normalMap=M[A.normalMap]||null;if(A.normalMapType!==void 0)this.normalMapType=A.normalMapType;if(A.normalScale!==void 0){let w=A.normalScale;if(Array.isArray(w)===!1)w=[w,w];this.normalScale=new $().fromArray(w)}if(A.displacementMap!==void 0)this.displacementMap=M[A.displacementMap]||null;if(A.displacementScale!==void 0)this.displacementScale=A.displacementScale;if(A.displacementBias!==void 0)this.displacementBias=A.displacementBias;if(A.roughnessMap!==void 0)this.roughnessMap=M[A.roughnessMap]||null;if(A.metalnessMap!==void 0)this.metalnessMap=M[A.metalnessMap]||null;if(A.emissiveMap!==void 0)this.emissiveMap=M[A.emissiveMap]||null;if(A.emissiveIntensity!==void 0)this.emissiveIntensity=A.emissiveIntensity;if(A.specularMap!==void 0)this.specularMap=M[A.specularMap]||null;if(A.specularIntensityMap!==void 0)this.specularIntensityMap=M[A.specularIntensityMap]||null;if(A.specularColorMap!==void 0)this.specularColorMap=M[A.specularColorMap]||null;if(A.envMap!==void 0)this.envMap=M[A.envMap]||null;if(A.envMapRotation!==void 0)this.envMapRotation.fromArray(A.envMapRotation);if(A.envMapIntensity!==void 0)this.envMapIntensity=A.envMapIntensity;if(A.reflectivity!==void 0)this.reflectivity=A.reflectivity;if(A.refractionRatio!==void 0)this.refractionRatio=A.refractionRatio;if(A.lightMap!==void 0)this.lightMap=M[A.lightMap]||null;if(A.lightMapIntensity!==void 0)this.lightMapIntensity=A.lightMapIntensity;if(A.aoMap!==void 0)this.aoMap=M[A.aoMap]||null;if(A.aoMapIntensity!==void 0)this.aoMapIntensity=A.aoMapIntensity;if(A.gradientMap!==void 0)this.gradientMap=M[A.gradientMap]||null;if(A.clearcoatMap!==void 0)this.clearcoatMap=M[A.clearcoatMap]||null;if(A.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=M[A.clearcoatRoughnessMap]||null;if(A.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=M[A.clearcoatNormalMap]||null;if(A.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new $().fromArray(A.clearcoatNormalScale);if(A.iridescenceMap!==void 0)this.iridescenceMap=M[A.iridescenceMap]||null;if(A.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=M[A.iridescenceThicknessMap]||null;if(A.transmissionMap!==void 0)this.transmissionMap=M[A.transmissionMap]||null;if(A.thicknessMap!==void 0)this.thicknessMap=M[A.thicknessMap]||null;if(A.anisotropyMap!==void 0)this.anisotropyMap=M[A.anisotropyMap]||null;if(A.sheenColorMap!==void 0)this.sheenColorMap=M[A.sheenColorMap]||null;if(A.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=M[A.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;let M=A.clippingPlanes,w=null;if(M!==null){let P=M.length;w=Array(P);for(let z=0;z!==P;++z)w[z]=M[z].clone()}return this.clippingPlanes=w,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.allowOverride=A.allowOverride,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){if(A===!0)this.version++}}var rA=new L,vz=new L,ow=new L,aw=new L;class YM{constructor(A=new L,M=new L(0,0,-1)){this.origin=A,this.direction=M}set(A,M){return this.origin.copy(A),this.direction.copy(M),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,M){return M.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,rA)),this}closestPointToPoint(A,M){M.subVectors(A,this.origin);let w=M.dot(this.direction);if(w<0)return M.copy(this.origin);return M.copy(this.origin).addScaledVector(this.direction,w)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){let M=rA.subVectors(A,this.origin).dot(this.direction);if(M<0)return this.origin.distanceToSquared(A);return rA.copy(this.origin).addScaledVector(this.direction,M),rA.distanceToSquared(A)}distanceSqToSegment(A,M,w,P){vz.copy(A).add(M).multiplyScalar(0.5),ow.copy(M).sub(A).normalize(),aw.copy(this.origin).sub(vz);let z=A.distanceTo(M)*0.5,C=-this.direction.dot(ow),I=aw.dot(this.direction),D=-aw.dot(ow),O=aw.lengthSq(),T=Math.abs(1-C*C),Z,N,U,W;if(T>0)if(Z=C*D-I,N=C*I-D,W=z*T,Z>=0)if(N>=-W)if(N<=W){let Q=1/T;Z*=Q,N*=Q,U=Z*(Z+C*N+2*I)+N*(C*Z+N+2*D)+O}else N=z,Z=Math.max(0,-(C*N+I)),U=-Z*Z+N*(N+2*D)+O;else N=-z,Z=Math.max(0,-(C*N+I)),U=-Z*Z+N*(N+2*D)+O;else if(N<=-W)Z=Math.max(0,-(-C*z+I)),N=Z>0?-z:Math.min(Math.max(-z,-D),z),U=-Z*Z+N*(N+2*D)+O;else if(N<=W)Z=0,N=Math.min(Math.max(-z,-D),z),U=N*(N+2*D)+O;else Z=Math.max(0,-(C*z+I)),N=Z>0?z:Math.min(Math.max(-z,-D),z),U=-Z*Z+N*(N+2*D)+O;else N=C>0?-z:z,Z=Math.max(0,-(C*N+I)),U=-Z*Z+N*(N+2*D)+O;if(w)w.copy(this.origin).addScaledVector(this.direction,Z);if(P)P.copy(vz).addScaledVector(ow,N);return U}intersectSphere(A,M){if(A.radius<0)return null;rA.subVectors(A.center,this.origin);let w=rA.dot(this.direction),P=rA.dot(rA)-w*w,z=A.radius*A.radius;if(P>z)return null;let C=Math.sqrt(z-P),I=w-C,D=w+C;if(D<0)return null;if(I<0)return this.at(D,M);return this.at(I,M)}intersectsSphere(A){if(A.radius<0)return!1;return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){let M=A.normal.dot(this.direction);if(M===0){if(A.distanceToPoint(this.origin)===0)return 0;return null}let w=-(this.origin.dot(A.normal)+A.constant)/M;return w>=0?w:null}intersectPlane(A,M){let w=this.distanceToPlane(A);if(w===null)return null;return this.at(w,M)}intersectsPlane(A){let M=A.distanceToPoint(this.origin);if(M===0)return!0;if(A.normal.dot(this.direction)*M<0)return!0;return!1}intersectBox(A,M){let w,P,z,C,I,D,O=1/this.direction.x,T=1/this.direction.y,Z=1/this.direction.z,N=this.origin;if(O>=0)w=(A.min.x-N.x)*O,P=(A.max.x-N.x)*O;else w=(A.max.x-N.x)*O,P=(A.min.x-N.x)*O;if(T>=0)z=(A.min.y-N.y)*T,C=(A.max.y-N.y)*T;else z=(A.max.y-N.y)*T,C=(A.min.y-N.y)*T;if(w>C||z>P)return null;if(z>w||isNaN(w))w=z;if(C<P||isNaN(P))P=C;if(Z>=0)I=(A.min.z-N.z)*Z,D=(A.max.z-N.z)*Z;else I=(A.max.z-N.z)*Z,D=(A.min.z-N.z)*Z;if(w>D||I>P)return null;if(I>w||w!==w)w=I;if(D<P||P!==P)P=D;if(P<0)return null;return this.at(w>=0?w:P,M)}intersectsBox(A){return this.intersectBox(A,rA)!==null}intersectTriangle(A,M,w,P,z){let C=this.origin,I=this.direction,D=I.x,O=I.y,T=I.z,Z=A.x-C.x,N=A.y-C.y,U=A.z-C.z,W=M.x-C.x,Q=M.y-C.y,J=M.z-C.z,G=w.x-C.x,X=w.y-C.y,j=w.z-C.z,E=Math.abs(D),K=Math.abs(O),H=Math.abs(T),V,Y,v,k,R,x,q,m,y,MA,r,t;if(E>=K&&E>=H)if(v=D,x=Z,y=W,t=G,D>=0)V=O,Y=T,k=N,R=U,q=Q,m=J,MA=X,r=j;else V=T,Y=O,k=U,R=N,q=J,m=Q,MA=j,r=X;else if(K>=H)if(v=O,x=N,y=Q,t=X,O>=0)V=T,Y=D,k=U,R=Z,q=J,m=W,MA=j,r=G;else V=D,Y=T,k=Z,R=U,q=W,m=J,MA=G,r=j;else if(v=T,x=U,y=J,t=j,T>=0)V=D,Y=O,k=Z,R=N,q=W,m=Q,MA=G,r=X;else V=O,Y=D,k=N,R=Z,q=Q,m=W,MA=X,r=G;if(v===0)return null;let c=V/v,i=Y/v,e=1/v,WA=k-c*x,FA=R-i*x,DM=q-c*y,dA=m-i*y,zA=MA-c*t,_w=r-i*t,uA=zA*dA-_w*DM,cA=WA*_w-FA*zA,iA=DM*FA-dA*WA;if(P){if(uA<0||cA<0||iA<0)return null}else if((uA<0||cA<0||iA<0)&&(uA>0||cA>0||iA>0))return null;let RM=uA+cA+iA;if(RM===0)return null;let kM=e*(uA*x+cA*y+iA*t);if(RM>0?kM<0:kM>0)return null;return this.at(kM/RM,z)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wM extends mA{constructor(A){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new MM,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}var aC=new h,$M=new YM,rw=new XA,rC=new L,tw=new L,ew=new L,AP=new L,Fz=new L,MP=new L,tC=new L,wP=new L;class pA extends n{constructor(A=new xA,M=new wM){super();this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=M,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(A,M){if(super.copy(A,M),A.morphTargetInfluences!==void 0)this.morphTargetInfluences=A.morphTargetInfluences.slice();if(A.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary);return this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){let M=this.geometry.morphAttributes,w=Object.keys(M);if(w.length>0){let P=M[w[0]];if(P!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let z=0,C=P.length;z<C;z++){let I=P[z].name||String(z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[I]=z}}}}getVertexPosition(A,M){let w=this.geometry,P=w.attributes.position,z=w.morphAttributes.position,C=w.morphTargetsRelative;M.fromBufferAttribute(P,A);let I=this.morphTargetInfluences;if(z&&I){MP.set(0,0,0);for(let D=0,O=z.length;D<O;D++){let T=I[D],Z=z[D];if(T===0)continue;if(Fz.fromBufferAttribute(Z,A),C)MP.addScaledVector(Fz,T);else MP.addScaledVector(Fz.sub(M),T)}M.add(MP)}return M}intersectsFrustum(A){return A.intersectsObject(this)}raycast(A,M){let w=this.geometry,P=this.material,z=this.matrixWorld;if(P===void 0)return;if(w.boundingSphere===null)w.computeBoundingSphere();if(rw.copy(w.boundingSphere),rw.applyMatrix4(z),$M.copy(A.ray).recast(A.near),rw.containsPoint($M.origin)===!1){if($M.intersectSphere(rw,rC)===null)return;if($M.origin.distanceToSquared(rC)>(A.far-A.near)**2)return}if(aC.copy(z).invert(),$M.copy(A.ray).applyMatrix4(aC),w.boundingBox!==null){if($M.intersectsBox(w.boundingBox)===!1)return}this._computeIntersections(A,M,$M)}_computeIntersections(A,M,w){let P,z=this.geometry,C=this.material,I=z.index,D=z.attributes.position,O=z.attributes.uv,T=z.attributes.uv1,Z=z.attributes.normal,N=z.groups,U=z.drawRange;if(I!==null)if(Array.isArray(C))for(let W=0,Q=N.length;W<Q;W++){let J=N[W],G=C[J.materialIndex],X=Math.max(J.start,U.start),j=Math.min(I.count,Math.min(J.start+J.count,U.start+U.count));for(let E=X,K=j;E<K;E+=3){let H=I.getX(E),V=I.getX(E+1),Y=I.getX(E+2);if(P=PP(this,G,A,w,O,T,Z,H,V,Y),P)P.faceIndex=Math.floor(E/3),P.face.materialIndex=J.materialIndex,M.push(P)}}else{let W=Math.max(0,U.start),Q=Math.min(I.count,U.start+U.count);for(let J=W,G=Q;J<G;J+=3){let X=I.getX(J),j=I.getX(J+1),E=I.getX(J+2);if(P=PP(this,C,A,w,O,T,Z,X,j,E),P)P.faceIndex=Math.floor(J/3),M.push(P)}}else if(D!==void 0)if(Array.isArray(C))for(let W=0,Q=N.length;W<Q;W++){let J=N[W],G=C[J.materialIndex],X=Math.max(J.start,U.start),j=Math.min(D.count,Math.min(J.start+J.count,U.start+U.count));for(let E=X,K=j;E<K;E+=3){let H=E,V=E+1,Y=E+2;if(P=PP(this,G,A,w,O,T,Z,H,V,Y),P)P.faceIndex=Math.floor(E/3),P.face.materialIndex=J.materialIndex,M.push(P)}}else{let W=Math.max(0,U.start),Q=Math.min(D.count,U.start+U.count);for(let J=W,G=Q;J<G;J+=3){let X=J,j=J+1,E=J+2;if(P=PP(this,C,A,w,O,T,Z,X,j,E),P)P.faceIndex=Math.floor(J/3),M.push(P)}}}}function E9(A,M,w,P,z,C,I,D){let O;if(M.side===1)O=P.intersectTriangle(I,C,z,!0,D);else O=P.intersectTriangle(z,C,I,M.side===0,D);if(O===null)return null;wP.copy(D),wP.applyMatrix4(A.matrixWorld);let T=w.ray.origin.distanceTo(wP);if(T<w.near||T>w.far)return null;return{distance:T,point:wP.clone(),object:A}}function PP(A,M,w,P,z,C,I,D,O,T){A.getVertexPosition(D,tw),A.getVertexPosition(O,ew),A.getVertexPosition(T,AP);let Z=E9(A,M,w,P,tw,ew,AP,tC);if(Z){let N=new L;if(HA.getBarycoord(tC,tw,ew,AP,N),z)Z.uv=HA.getInterpolatedAttribute(z,D,O,T,N,new $);if(C)Z.uv1=HA.getInterpolatedAttribute(C,D,O,T,N,new $);if(I){if(Z.normal=HA.getInterpolatedAttribute(I,D,O,T,N,new L),Z.normal.dot(P.direction)>0)Z.normal.multiplyScalar(-1)}let U={a:D,b:O,c:T,normal:new L,materialIndex:0};HA.getNormal(tw,ew,AP,U.normal),Z.face=U,Z.barycoord=N}return Z}var Qw=new KA,eC=new KA,AI=new KA,H9=new KA,MI=new h,zP=new L,Rz=new XA,wI=new h,kz=new YM;class VP extends pA{constructor(A,M){super(A,M);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new h,this.bindMatrixInverse=new h,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let A=this.geometry;if(this.boundingBox===null)this.boundingBox=new BA;this.boundingBox.makeEmpty();let M=A.getAttribute("position");for(let w=0;w<M.count;w++)this.getVertexPosition(w,zP),this.boundingBox.expandByPoint(zP)}computeBoundingSphere(){let A=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new XA;this.boundingSphere.makeEmpty();let M=A.getAttribute("position");for(let w=0;w<M.count;w++)this.getVertexPosition(w,zP),this.boundingSphere.expandByPoint(zP)}copy(A,M){if(super.copy(A,M),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null)this.boundingBox=A.boundingBox.clone();if(A.boundingSphere!==null)this.boundingSphere=A.boundingSphere.clone();return this}raycast(A,M){let w=this.material,P=this.matrixWorld;if(w===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Rz.copy(this.boundingSphere),Rz.applyMatrix4(P),A.ray.intersectsSphere(Rz)===!1)return;if(wI.copy(P).invert(),kz.copy(A.ray).applyMatrix4(wI),this.boundingBox!==null){if(kz.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(A,M,kz)}getVertexPosition(A,M){return super.getVertexPosition(A,M),this.applyBoneTransform(A,M),M}bind(A,M){if(this.skeleton=A,M===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),M=this.matrixWorld;this.bindMatrix.copy(M),this.bindMatrixInverse.copy(M).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let A=new KA,M=this.geometry.attributes.skinWeight;for(let w=0,P=M.count;w<P;w++){A.fromBufferAttribute(M,w);let z=1/A.manhattanLength();if(z!==1/0)A.multiplyScalar(z);else A.set(1,0,0,0);M.setXYZW(w,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){if(super.updateMatrixWorld(A),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else d("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,M){let w=this.skeleton,P=this.geometry;if(eC.fromBufferAttribute(P.attributes.skinIndex,A),AI.fromBufferAttribute(P.attributes.skinWeight,A),M.isVector4)Qw.copy(M),M.set(0,0,0,0);else Qw.set(...M,1),M.set(0,0,0);Qw.applyMatrix4(this.bindMatrix);for(let z=0;z<4;z++){let C=AI.getComponent(z);if(C!==0){let I=eC.getComponent(z);MI.multiplyMatrices(w.bones[I].matrixWorld,w.boneInverses[I]),M.addScaledVector(H9.copy(Qw).applyMatrix4(MI),C)}}if(M.isVector4)M.w=Qw.w;return M.applyMatrix4(this.bindMatrixInverse)}}class Bw extends n{constructor(){super();this.isBone=!0,this.type="Bone"}}class EP extends LA{constructor(A=null,M=1,w=1,P,z,C,I,D,O=1003,T=1003,Z,N){super(null,C,I,D,O,T,P,z,Z,N);this.isDataTexture=!0,this.image={data:A,width:M,height:w},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var PI=new h,K9=new h;class vw{constructor(A=[],M=[]){this.uuid=bA(),this.bones=A.slice(0),this.boneInverses=M,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let A=this.bones,M=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),M.length===0)this.calculateInverses();else if(A.length!==M.length){d("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let w=0,P=this.bones.length;w<P;w++)this.boneInverses.push(new h)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,M=this.bones.length;A<M;A++){let w=new h;if(this.bones[A])w.copy(this.bones[A].matrixWorld).invert();this.boneInverses.push(w)}}pose(){for(let A=0,M=this.bones.length;A<M;A++){let w=this.bones[A];if(w)w.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,M=this.bones.length;A<M;A++){let w=this.bones[A];if(w){if(w.parent&&w.parent.isBone)w.matrix.copy(w.parent.matrixWorld).invert(),w.matrix.multiply(w.matrixWorld);else w.matrix.copy(w.matrixWorld);w.matrix.decompose(w.position,w.quaternion,w.scale)}}}update(){let A=this.bones,M=this.boneInverses,w=this.boneMatrices,P=this.boneTexture;for(let z=0,C=A.length;z<C;z++){let I=A[z]?A[z].matrixWorld:K9;PI.multiplyMatrices(I,M[z]),PI.toArray(w,z*16)}if(P!==null)P.needsUpdate=!0}clone(){return new vw(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Math.ceil(A/4)*4,A=Math.max(A,4);let M=new Float32Array(A*A*4);M.set(this.boneMatrices);let w=new EP(M,A,A,1023,1015);return w.needsUpdate=!0,this.boneMatrices=M,this.boneTexture=w,this}getBoneByName(A){for(let M=0,w=this.bones.length;M<w;M++){let P=this.bones[M];if(P.name===A)return P}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(A,M){this.uuid=A.uuid;for(let w=0,P=A.bones.length;w<P;w++){let z=A.bones[w],C=M[z];if(C===void 0)d("Skeleton: No bone found with UUID:",z),C=new Bw;this.bones.push(C),this.boneInverses.push(new h().fromArray(A.boneInverses[w]))}return this.init(),this}toJSON(){let A={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;let M=this.bones,w=this.boneInverses;for(let P=0,z=M.length;P<z;P++){let C=M[P];A.bones.push(C.uuid);let I=w[P];A.boneInverses.push(I.toArray())}return A}}class QM extends TA{constructor(A,M,w,P=1){super(A,M,w);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=P}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){let A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}var nM=new h,zI=new h,CP=[],CI=new BA,B9=new h,Jw=new pA,Gw=new XA;class HP extends pA{constructor(A,M,w){super(A,M);this.isInstancedMesh=!0,this.instanceMatrix=new QM(new Float32Array(w*16),16),this.instanceColor=null,this.morphTexture=null,this.count=w,this.boundingBox=null,this.boundingSphere=null;for(let P=0;P<w;P++)this.setMatrixAt(P,B9)}computeBoundingBox(){let A=this.geometry,M=this.count;if(this.boundingBox===null)this.boundingBox=new BA;if(A.boundingBox===null)A.computeBoundingBox();this.boundingBox.makeEmpty();for(let w=0;w<M;w++)this.getMatrixAt(w,nM),CI.copy(A.boundingBox).applyMatrix4(nM),this.boundingBox.union(CI)}computeBoundingSphere(){let A=this.geometry,M=this.count;if(this.boundingSphere===null)this.boundingSphere=new XA;if(A.boundingSphere===null)A.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let w=0;w<M;w++)this.getMatrixAt(w,nM),Gw.copy(A.boundingSphere).applyMatrix4(nM),this.boundingSphere.union(Gw)}copy(A,M){if(super.copy(A,M),this.instanceMatrix.copy(A.instanceMatrix),A.morphTexture!==null)this.morphTexture=A.morphTexture.clone();if(A.instanceColor!==null)this.instanceColor=A.instanceColor.clone();if(this.count=A.count,A.boundingBox!==null)this.boundingBox=A.boundingBox.clone();if(A.boundingSphere!==null)this.boundingSphere=A.boundingSphere.clone();return this}getColorAt(A,M){if(this.instanceColor===null)return M.setRGB(1,1,1);else return M.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,M){return M.fromArray(this.instanceMatrix.array,A*16)}getMorphAt(A,M){let w=M.morphTargetInfluences,P=this.morphTexture.source.data.data,z=w.length+1,C=A*z+1;for(let I=0;I<w.length;I++)w[I]=P[C+I]}raycast(A,M){let w=this.matrixWorld,P=this.count;if(Jw.geometry=this.geometry,Jw.material=this.material,Jw.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Gw.copy(this.boundingSphere),Gw.applyMatrix4(w),A.ray.intersectsSphere(Gw)===!1)return;for(let z=0;z<P;z++){this.getMatrixAt(z,nM),zI.multiplyMatrices(w,nM),Jw.matrixWorld=zI,Jw.raycast(A,CP);for(let C=0,I=CP.length;C<I;C++){let D=CP[C];D.instanceId=z,D.object=this,M.push(D)}CP.length=0}}setColorAt(A,M){if(this.instanceColor===null)this.instanceColor=new QM(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return M.toArray(this.instanceColor.array,A*3),this}setMatrixAt(A,M){return M.toArray(this.instanceMatrix.array,A*16),this}setMorphAt(A,M){let w=M.morphTargetInfluences,P=w.length+1;if(this.morphTexture===null)this.morphTexture=new EP(new Float32Array(P*this.count),P,this.count,1028,1015);let z=this.morphTexture.source.data.data,C=0;for(let O=0;O<w.length;O++)C+=w[O];let I=this.geometry.morphTargetsRelative?1:1-C,D=P*A;return z[D]=I,z.set(w,D+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var yM=new XA,v9=new $(0.5,0.5),IP=new L;class zC{constructor(A=new $A,M=new $A,w=new $A,P=new $A,z=new $A,C=new $A){this.planes=[A,M,w,P,z,C]}set(A,M,w,P,z,C){let I=this.planes;return I[0].copy(A),I[1].copy(M),I[2].copy(w),I[3].copy(P),I[4].copy(z),I[5].copy(C),this}copy(A){let M=this.planes;for(let w=0;w<6;w++)M[w].copy(A.planes[w]);return this}setFromProjectionMatrix(A,M=2000,w=!1){let P=this.planes,z=A.elements,C=z[0],I=z[1],D=z[2],O=z[3],T=z[4],Z=z[5],N=z[6],U=z[7],W=z[8],Q=z[9],J=z[10],G=z[11],X=z[12],j=z[13],E=z[14],K=z[15];if(P[0].setComponents(O-C,U-T,G-W,K-X).normalize(),P[1].setComponents(O+C,U+T,G+W,K+X).normalize(),P[2].setComponents(O+I,U+Z,G+Q,K+j).normalize(),P[3].setComponents(O-I,U-Z,G-Q,K-j).normalize(),w)P[4].setComponents(D,N,J,E).normalize(),P[5].setComponents(O-D,U-N,G-J,K-E).normalize();else if(P[4].setComponents(O-D,U-N,G-J,K-E).normalize(),M===2000)P[5].setComponents(O+D,U+N,G+J,K+E).normalize();else if(M===2001)P[5].setComponents(D,N,J,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+M);return this}intersectsObject(A){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();yM.copy(A.boundingSphere).applyMatrix4(A.matrixWorld)}else{let M=A.geometry;if(M.boundingSphere===null)M.computeBoundingSphere();yM.copy(M.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(yM)}intersectsSprite(A){yM.center.set(0,0,0);let M=v9.distanceTo(A.center);return yM.radius=0.7071067811865476+M,yM.applyMatrix4(A.matrixWorld),this.intersectsSphere(yM)}intersectsSphere(A){let M=this.planes,w=A.center,P=-A.radius;for(let z=0;z<6;z++)if(M[z].distanceToPoint(w)<P)return!1;return!0}intersectsBox(A){let M=this.planes;for(let w=0;w<6;w++){let P=M[w];if(IP.x=P.normal.x>0?A.max.x:A.min.x,IP.y=P.normal.y>0?A.max.y:A.min.y,IP.z=P.normal.z>0?A.max.z:A.min.z,P.distanceToPoint(IP)<0)return!1}return!0}containsPoint(A){let M=this.planes;for(let w=0;w<6;w++)if(M[w].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fw extends mA{constructor(A){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}var JP=new L,GP=new L,II=new h,Lw=new YM,DP=new XA,qz=new L,DI=new L;class ww extends n{constructor(A=new xA,M=new Fw){super();this.isLine=!0,this.type="Line",this.geometry=A,this.material=M,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(A,M){return super.copy(A,M),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){let A=this.geometry;if(A.index===null){let M=A.attributes.position,w=[0];for(let P=1,z=M.count;P<z;P++)JP.fromBufferAttribute(M,P-1),GP.fromBufferAttribute(M,P),w[P]=w[P-1],w[P]+=JP.distanceTo(GP);A.setAttribute("lineDistance",new AM(w,1))}else d("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(A){return A.intersectsObject(this)}raycast(A,M){let w=this.geometry,P=this.matrixWorld,z=A.params.Line.threshold,C=w.drawRange;if(w.boundingSphere===null)w.computeBoundingSphere();if(DP.copy(w.boundingSphere),DP.applyMatrix4(P),DP.radius+=z,A.ray.intersectsSphere(DP)===!1)return;II.copy(P).invert(),Lw.copy(A.ray).applyMatrix4(II);let I=z/((this.scale.x+this.scale.y+this.scale.z)/3),D=I*I,O=this.isLineSegments?2:1,T=w.index,N=w.attributes.position;if(T!==null){let U=Math.max(0,C.start),W=Math.min(T.count,C.start+C.count);for(let Q=U,J=W-1;Q<J;Q+=O){let G=T.getX(Q),X=T.getX(Q+1),j=OP(this,A,Lw,D,G,X,Q);if(j)M.push(j)}if(this.isLineLoop){let Q=T.getX(W-1),J=T.getX(U),G=OP(this,A,Lw,D,Q,J,W-1);if(G)M.push(G)}}else{let U=Math.max(0,C.start),W=Math.min(N.count,C.start+C.count);for(let Q=U,J=W-1;Q<J;Q+=O){let G=OP(this,A,Lw,D,Q,Q+1,Q);if(G)M.push(G)}if(this.isLineLoop){let Q=OP(this,A,Lw,D,W-1,U,W-1);if(Q)M.push(Q)}}}updateMorphTargets(){let M=this.geometry.morphAttributes,w=Object.keys(M);if(w.length>0){let P=M[w[0]];if(P!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let z=0,C=P.length;z<C;z++){let I=P[z].name||String(z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[I]=z}}}}}function OP(A,M,w,P,z,C,I){let D=A.geometry.attributes.position;if(JP.fromBufferAttribute(D,z),GP.fromBufferAttribute(D,C),w.distanceSqToSegment(JP,GP,qz,DI)>P)return;qz.applyMatrix4(A.matrixWorld);let T=M.ray.origin.distanceTo(qz);if(T<M.near||T>M.far)return;return{distance:T,point:DI.clone().applyMatrix4(A.matrixWorld),index:I,face:null,faceIndex:null,barycoord:null,object:A}}var OI=new L,TI=new L;class KP extends ww{constructor(A,M){super(A,M);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let A=this.geometry;if(A.index===null){let M=A.attributes.position,w=[];for(let P=0,z=M.count;P<z;P+=2)OI.fromBufferAttribute(M,P),TI.fromBufferAttribute(M,P+1),w[P]=P===0?0:w[P-1],w[P+1]=w[P]+OI.distanceTo(TI);A.setAttribute("lineDistance",new AM(w,1))}else d("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BP extends ww{constructor(A,M){super(A,M);this.isLineLoop=!0,this.type="LineLoop"}}class Rw extends mA{constructor(A){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}var ZI=new h,bz=new YM,TP=new XA,ZP=new L;class vP extends n{constructor(A=new xA,M=new Rw){super();this.isPoints=!0,this.type="Points",this.geometry=A,this.material=M,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(A,M){return super.copy(A,M),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}intersectsFrustum(A){return A.intersectsObject(this)}raycast(A,M){let w=this.geometry,P=this.matrixWorld,z=A.params.Points.threshold,C=w.drawRange;if(w.boundingSphere===null)w.computeBoundingSphere();if(TP.copy(w.boundingSphere),TP.applyMatrix4(P),TP.radius+=z,A.ray.intersectsSphere(TP)===!1)return;ZI.copy(P).invert(),bz.copy(A.ray).applyMatrix4(ZI);let I=z/((this.scale.x+this.scale.y+this.scale.z)/3),D=I*I,O=w.index,Z=w.attributes.position;if(O!==null){let N=Math.max(0,C.start),U=Math.min(O.count,C.start+C.count);for(let W=N,Q=U;W<Q;W++){let J=O.getX(W);ZP.fromBufferAttribute(Z,J),NI(ZP,J,D,P,A,M,this)}}else{let N=Math.max(0,C.start),U=Math.min(Z.count,C.start+C.count);for(let W=N,Q=U;W<Q;W++)ZP.fromBufferAttribute(Z,W),NI(ZP,W,D,P,A,M,this)}}updateMorphTargets(){let M=this.geometry.morphAttributes,w=Object.keys(M);if(w.length>0){let P=M[w[0]];if(P!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let z=0,C=P.length;z<C;z++){let I=P[z].name||String(z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[I]=z}}}}}function NI(A,M,w,P,z,C,I){let D=bz.distanceSqToPoint(A);if(D<w){let O=new L;bz.closestPointToPoint(A,O),O.applyMatrix4(P);let T=z.ray.origin.distanceTo(O);if(T<z.near||T>z.far)return;C.push({distance:T,distanceToRay:Math.sqrt(D),point:O,index:M,face:null,faceIndex:null,barycoord:null,object:I})}}class Pw extends xA{constructor(A=1,M=1,w=1,P=1,z=1,C=1){super();this.type="BoxGeometry",this.parameters={width:A,height:M,depth:w,widthSegments:P,heightSegments:z,depthSegments:C};let I=this;P=Math.floor(P),z=Math.floor(z),C=Math.floor(C);let D=[],O=[],T=[],Z=[],N=0,U=0;W("z","y","x",-1,-1,w,M,A,C,z,0),W("z","y","x",1,-1,w,M,-A,C,z,1),W("x","z","y",1,1,A,w,M,P,C,2),W("x","z","y",1,-1,A,w,-M,P,C,3),W("x","y","z",1,-1,A,M,w,P,z,4),W("x","y","z",-1,-1,A,M,-w,P,z,5),this.setIndex(D),this.setAttribute("position",new AM(O,3)),this.setAttribute("normal",new AM(T,3)),this.setAttribute("uv",new AM(Z,2));function W(Q,J,G,X,j,E,K,H,V,Y,v){let k=E/V,R=K/Y,x=E/2,q=K/2,m=H/2,y=V+1,MA=Y+1,r=0,t=0,c=new L;for(let i=0;i<MA;i++){let e=i*R-q;for(let WA=0;WA<y;WA++){let FA=WA*k-x;c[Q]=FA*X,c[J]=e*j,c[G]=m,O.push(c.x,c.y,c.z),c[Q]=0,c[J]=0,c[G]=H>0?1:-1,T.push(c.x,c.y,c.z),Z.push(WA/V),Z.push(1-i/Y),r+=1}}for(let i=0;i<Y;i++)for(let e=0;e<V;e++){let WA=N+e+y*i,FA=N+e+y*(i+1),DM=N+(e+1)+y*(i+1),dA=N+(e+1)+y*i;D.push(WA,FA,dA),D.push(FA,DM,dA),t+=6}I.addGroup(U,t,v),U+=t,N+=r}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Pw(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function kI(A){let M={};for(let w in A){M[w]={};for(let P in A[w]){let z=A[w][P];if(UI(z))if(z.isRenderTargetTexture)d("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),M[w][P]=null;else M[w][P]=z.clone();else if(Array.isArray(z))if(UI(z[0])){let C=[];for(let I=0,D=z.length;I<D;I++)C[I]=z[I].clone();M[w][P]=C}else M[w][P]=z.slice();else M[w][P]=z}}return M}function NA(A){let M={};for(let w=0;w<A.length;w++){let P=kI(A[w]);for(let z in P)M[z]=P[z]}return M}function UI(A){return A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)}class jM extends mA{constructor(A){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new MM,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class YA extends jM{constructor(A){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return b(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(M){this.ior=(1+0.4*M)/(1-0.4*M)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){if(this._anisotropy>0!==A>0)this.version++;this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){if(this._clearcoat>0!==A>0)this.version++;this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){if(this._iridescence>0!==A>0)this.version++;this._iridescence=A}get dispersion(){return this._dispersion}set dispersion(A){if(this._dispersion>0!==A>0)this.version++;this._dispersion=A}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(A){if(this._retroreflectivity>0!==A>0)this.version++;this._retroreflectivity=A}get sheen(){return this._sheen}set sheen(A){if(this._sheen>0!==A>0)this.version++;this._sheen=A}get transmission(){return this._transmission}set transmission(A){if(this._transmission>0!==A>0)this.version++;this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.dispersion=A.dispersion,this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.retroreflectivity=A.retroreflectivity,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}function WM(A,M){if(!A||A.constructor===M)return A;if(typeof M.BYTES_PER_ELEMENT==="number")return new M(A);return Array.prototype.slice.call(A)}function WP(A){return A!==void 0&&A.inTangents!==void 0&&A.outTangents!==void 0}function F9(A){function M(z,C){return A[z]-A[C]}let w=A.length,P=Array(w);for(let z=0;z!==w;++z)P[z]=z;return P.sort(M),P}function WI(A,M,w){let P=A.length,z=new A.constructor(P);for(let C=0,I=0;I!==P;++C){let D=w[C]*M;for(let O=0;O!==M;++O)z[I++]=A[D+O]}return z}function R9(A,M,w,P){let z=1,C=A[0];while(C!==void 0&&C[P]===void 0)C=A[z++];if(C===void 0)return;let I=C[P];if(I===void 0)return;if(Array.isArray(I))do{if(I=C[P],I!==void 0)M.push(C.time),w.push(...I);C=A[z++]}while(C!==void 0);else if(I.toArray!==void 0)do{if(I=C[P],I!==void 0)M.push(C.time),I.toArray(w,w.length);C=A[z++]}while(C!==void 0);else do{if(I=C[P],I!==void 0)M.push(C.time),w.push(I);C=A[z++]}while(C!==void 0)}class PM{constructor(A,M,w,P){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=P!==void 0?P:new M.constructor(w),this.sampleValues=M,this.valueSize=w,this.settings=null,this.DefaultSettings_={}}evaluate(A){let M=this.parameterPositions,w=this._cachedIndex,P=M[w],z=M[w-1];w:{A:{let C;M:{P:if(!(A<P)){for(let I=w+2;;){if(P===void 0){if(A<z)break P;return w=M.length,this._cachedIndex=w,this.copySampleValue_(w-1)}if(w===I)break;if(z=P,P=M[++w],A<P)break A}C=M.length;break M}if(!(A>=z)){let I=M[1];if(A<I)w=2,z=I;for(let D=w-2;;){if(z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(w===D)break;if(P=z,z=M[--w-1],A>=z)break A}C=w,w=0;break M}break w}while(w<C){let I=w+C>>>1;if(A<M[I])C=I;else w=I+1}if(P=M[w],z=M[w-1],z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(P===void 0)return w=M.length,this._cachedIndex=w,this.copySampleValue_(w-1)}this._cachedIndex=w,this.intervalChanged_(w,z,P)}return this.interpolate_(w,z,A,P)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){let M=this.resultBuffer,w=this.sampleValues,P=this.valueSize,z=A*P;for(let C=0;C!==P;++C)M[C]=w[z+C];return M}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class CC extends PM{constructor(A,M,w,P){super(A,M,w,P);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(A,M,w){let P=this.parameterPositions,z=A-2,C=A+1,I=P[z],D=P[C];if(I===void 0)switch(this.getSettings_().endingStart){case 2401:z=A,I=2*M-w;break;case 2402:z=P.length-2,I=M+P[z]-P[z+1];break;default:z=A,I=w}if(D===void 0)switch(this.getSettings_().endingEnd){case 2401:C=A,D=2*w-M;break;case 2402:C=1,D=w+P[1]-P[0];break;default:C=A-1,D=M}let O=(w-M)*0.5,T=this.valueSize;this._weightPrev=O/(M-I),this._weightNext=O/(D-w),this._offsetPrev=z*T,this._offsetNext=C*T}interpolate_(A,M,w,P){let z=this.resultBuffer,C=this.sampleValues,I=this.valueSize,D=A*I,O=D-I,T=this._offsetPrev,Z=this._offsetNext,N=this._weightPrev,U=this._weightNext,W=(w-M)/(P-M),Q=W*W,J=Q*W,G=-N*J+2*N*Q-N*W,X=(1+N)*J+(-1.5-2*N)*Q+(-0.5+N)*W+1,j=(-1-U)*J+(1.5+U)*Q+0.5*W,E=U*J-U*Q;for(let K=0;K!==I;++K)z[K]=G*C[T+K]+X*C[O+K]+j*C[D+K]+E*C[Z+K];return z}}class IC extends PM{constructor(A,M,w,P){super(A,M,w,P)}interpolate_(A,M,w,P){let z=this.resultBuffer,C=this.sampleValues,I=this.valueSize,D=A*I,O=D-I,T=(w-M)/(P-M),Z=1-T;for(let N=0;N!==I;++N)z[N]=C[O+N]*Z+C[D+N]*T;return z}}class DC extends PM{constructor(A,M,w,P){super(A,M,w,P)}interpolate_(A){return this.copySampleValue_(A-1)}}class OC extends PM{interpolate_(A,M,w,P){let z=this.resultBuffer,C=this.sampleValues,I=this.valueSize,D=A*I,O=D-I,T=this.inTangents,Z=this.outTangents;if(!T||!Z){let W=(w-M)/(P-M),Q=1-W;for(let J=0;J!==I;++J)z[J]=C[O+J]*Q+C[D+J]*W;return z}let N=I*2,U=A-1;for(let W=0;W!==I;++W){let Q=C[O+W],J=C[D+W],G=U*N+W*2,X=Z[G],j=Z[G+1],E=A*N+W*2,K=T[E],H=T[E+1],V=q9(w,M,X,K,P);z[W]=qI(V,Q,j,H,J)}return z}}function qI(A,M,w,P,z){let C=1-A;return C*C*C*M+3*C*C*A*w+3*C*A*A*P+A*A*A*z}function k9(A,M,w,P,z){let C=1-A;return 3*C*C*(w-M)+6*C*A*(P-w)+3*A*A*(z-P)}function q9(A,M,w,P,z){let C=(A-M)/(z-M);for(let I=0;I<8;I++){let D=qI(C,M,w,P,z)-A;if(Math.abs(D)<0.0000000001)break;let O=k9(C,M,w,P,z);if(Math.abs(O)<0.0000000001)break;C=Math.max(0,Math.min(1,C-D/O))}return C}class jA{constructor(A,M,w,P){if(A===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(M===void 0||M.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=WM(M,this.TimeBufferType),this.values=WM(w,this.ValueBufferType),this.setInterpolation(P||this.DefaultInterpolation)}static toJSON(A){let M=A.constructor,w;if(M.toJSON!==this.toJSON)w=M.toJSON(A);else{w={name:A.name,times:WM(A.times,Array),values:WM(A.values,Array)};let P=A.getInterpolation();if(P!==A.DefaultInterpolation)w.interpolation=P;if(WP(A.settings))w.settings={inTangents:WM(A.settings.inTangents,Array),outTangents:WM(A.settings.outTangents,Array)}}return w.type=A.ValueTypeName,w}InterpolantFactoryMethodDiscrete(A){return new DC(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new IC(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new CC(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodBezier(A){let M=new OC(this.times,this.values,this.getValueSize(),A);if(this.settings)M.inTangents=this.settings.inTangents,M.outTangents=this.settings.outTangents;return M}setInterpolation(A){let M;switch(A){case 2300:M=this.InterpolantFactoryMethodDiscrete;break;case 2301:M=this.InterpolantFactoryMethodLinear;break;case 2302:M=this.InterpolantFactoryMethodSmooth;break;case 2303:M=this.InterpolantFactoryMethodBezier;break}if(M===void 0){let w="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(w);return d("KeyframeTrack:",w),this}return this.createInterpolant=M,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){let M=this.times;for(let w=0,P=M.length;w!==P;++w)M[w]+=A}return this}scale(A){if(A!==1){let M=this.times;for(let w=0,P=M.length;w!==P;++w)M[w]*=A;if(WP(this.settings))QI(this.settings.inTangents,A),QI(this.settings.outTangents,A)}return this}trim(A,M){let w=this.times,P=w.length,z=0,C=P-1;while(z!==P&&w[z]<A)++z;while(C!==-1&&w[C]>M)--C;if(++C,z!==0||C!==P){if(z>=C)C=Math.max(C,1),z=C-1;let I=this.getValueSize();this.times=w.slice(z,C),this.values=this.values.slice(z*I,C*I)}return this}validate(){let A=!0,M=this.getValueSize();if(M-Math.floor(M)!==0)o("KeyframeTrack: Invalid value size in track.",this),A=!1;let w=this.times,P=this.values,z=w.length;if(z===0)o("KeyframeTrack: Track is empty.",this),A=!1;let C=null;for(let I=0;I!==z;I++){let D=w[I];if(typeof D==="number"&&isNaN(D)){o("KeyframeTrack: Time is not a valid number.",this,I,D),A=!1;break}if(C!==null&&C>D){o("KeyframeTrack: Out of order keys.",this,I,D,C),A=!1;break}C=D}if(P!==void 0){if(uD(P))for(let I=0,D=P.length;I!==D;++I){let O=P[I];if(isNaN(O)){o("KeyframeTrack: Value is not a valid number.",this,I,O),A=!1;break}}}return A}optimize(){let A=this.times.slice(),M=this.values.slice(),w=this.getValueSize(),P=this.getInterpolation()===2302,z=A.length-1,C=1;for(let I=1;I<z;++I){let D=!1,O=A[I],T=A[I+1];if(O!==T&&(I!==1||O!==A[0]))if(!P){let Z=I*w,N=Z-w,U=Z+w;for(let W=0;W!==w;++W){let Q=M[Z+W];if(Q!==M[N+W]||Q!==M[U+W]){D=!0;break}}}else D=!0;if(D){if(I!==C){A[C]=A[I];let Z=I*w,N=C*w;for(let U=0;U!==w;++U)M[N+U]=M[Z+U]}++C}}if(z>0){A[C]=A[z];for(let I=z*w,D=C*w,O=0;O!==w;++O)M[D+O]=M[I+O];++C}if(C!==A.length)this.times=A.slice(0,C),this.values=M.slice(0,C*w);else this.times=A,this.values=M;return this}clone(){let A=this.times.slice(),M=this.values.slice(),P=new this.constructor(this.name,A,M);if(P.createInterpolant=this.createInterpolant,WP(this.settings))P.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return P}}function QI(A,M){for(let w=0,P=A.length;w!==P;w+=2)A[w]*=M}jA.prototype.ValueTypeName="";jA.prototype.TimeBufferType=Float32Array;jA.prototype.ValueBufferType=Float32Array;jA.prototype.DefaultInterpolation=2301;class VM extends jA{constructor(A,M,w){super(A,M,w)}}VM.prototype.ValueTypeName="bool";VM.prototype.ValueBufferType=Array;VM.prototype.DefaultInterpolation=2300;VM.prototype.InterpolantFactoryMethodLinear=void 0;VM.prototype.InterpolantFactoryMethodSmooth=void 0;class FP extends jA{constructor(A,M,w,P){super(A,M,w,P)}}FP.prototype.ValueTypeName="color";class EM extends jA{constructor(A,M,w,P){super(A,M,w,P)}}EM.prototype.ValueTypeName="number";class TC extends PM{constructor(A,M,w,P){super(A,M,w,P)}interpolate_(A,M,w,P){let z=this.resultBuffer,C=this.sampleValues,I=this.valueSize,D=(w-M)/(P-M),O=A*I;for(let T=O+I;O!==T;O+=4)ZA.slerpFlat(z,0,C,O-I,C,O,D);return z}}class HM extends jA{constructor(A,M,w,P){super(A,M,w,P)}InterpolantFactoryMethodLinear(A){return new TC(this.times,this.values,this.getValueSize(),A)}}HM.prototype.ValueTypeName="quaternion";HM.prototype.InterpolantFactoryMethodSmooth=void 0;class KM extends jA{constructor(A,M,w){super(A,M,w)}}KM.prototype.ValueTypeName="string";KM.prototype.ValueBufferType=Array;KM.prototype.DefaultInterpolation=2300;KM.prototype.InterpolantFactoryMethodLinear=void 0;KM.prototype.InterpolantFactoryMethodSmooth=void 0;class _M extends jA{constructor(A,M,w,P){super(A,M,w,P)}}_M.prototype.ValueTypeName="vector";class RP{constructor(A="",M=-1,w=[],P=2500){if(this.name=A,this.tracks=w,this.duration=M,this.blendMode=P,this.uuid=bA(),this.userData={},this.duration<0)this.resetDuration()}static parse(A){let M=[],w=A.tracks,P=1/(A.fps||1);for(let C=0,I=w.length;C!==I;++C)M.push($9(w[C]).scale(P));let z=new this(A.name,A.duration,M,A.blendMode);return z.uuid=A.uuid,z.userData=JSON.parse(A.userData||"{}"),z}static toJSON(A){let M=[],w=A.tracks,P={name:A.name,duration:A.duration,tracks:M,uuid:A.uuid,blendMode:A.blendMode,userData:JSON.stringify(A.userData)};for(let z=0,C=w.length;z!==C;++z)M.push(jA.toJSON(w[z]));return P}static CreateFromMorphTargetSequence(A,M,w,P){let z=M.length,C=[];for(let I=0;I<z;I++){let D=[],O=[];D.push((I+z-1)%z,I,(I+1)%z),O.push(0,1,0);let T=F9(D);if(D=WI(D,1,T),O=WI(O,1,T),!P&&D[0]===0)D.push(z),O.push(O[0]);C.push(new EM(".morphTargetInfluences["+M[I].name+"]",D,O).scale(1/w))}return new this(A,-1,C)}static findByName(A,M){let w=A;if(!Array.isArray(A)){let P=A;w=P.geometry&&P.geometry.animations||P.animations}for(let P=0;P<w.length;P++)if(w[P].name===M)return w[P];return null}static CreateClipsFromMorphTargetSequences(A,M,w){let P={},z=/^([\w-]*?)([\d]+)$/;for(let I=0,D=A.length;I<D;I++){let O=A[I],T=O.name.match(z);if(T&&T.length>1){let Z=T[1],N=P[Z];if(!N)P[Z]=N=[];N.push(O)}}let C=[];for(let I in P)C.push(this.CreateFromMorphTargetSequence(I,P[I],M,w));return C}resetDuration(){let A=this.tracks,M=0;for(let w=0,P=A.length;w!==P;++w){let z=this.tracks[w];M=Math.max(M,z.times[z.times.length-1])}return this.duration=M,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let M=0;M<this.tracks.length;M++)A=A&&this.tracks[M].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){let A=[];for(let w=0;w<this.tracks.length;w++)A.push(this.tracks[w].clone());let M=new this.constructor(this.name,this.duration,A,this.blendMode);return M.userData=JSON.parse(JSON.stringify(this.userData)),M}toJSON(){return this.constructor.toJSON(this)}}function S9(A){switch(A.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return EM;case"vector":case"vector2":case"vector3":case"vector4":return _M;case"color":return FP;case"quaternion":return HM;case"bool":case"boolean":return VM;case"string":return KM}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+A)}function $9(A){if(A.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let M=S9(A.type);if(A.times===void 0){let P=[],z=[];R9(A.keys,P,z,"value"),A.times=P,A.values=z}let w;if(M.parse!==void 0)w=M.parse(A);else w=new M(A.name,A.times,A.values,A.interpolation);if(WP(A.settings))w.settings={inTangents:WM(A.settings.inTangents,Float32Array),outTangents:WM(A.settings.outTangents,Float32Array)};return w}var gA={enabled:!1,files:{},add:function(A,M){if(this.enabled===!1)return;if(JI(A))return;this.files[A]=M},get:function(A){if(this.enabled===!1)return;if(JI(A))return;return this.files[A]},remove:function(A){delete this.files[A]},clear:function(){this.files={}}};function JI(A){try{let M=A.slice(A.indexOf(":")+1);return new URL(M).protocol==="blob:"}catch(M){return!1}}class ZC{constructor(A,M,w){let P=this,z=!1,C=0,I=0,D=void 0,O=[];this.onStart=void 0,this.onLoad=A,this.onProgress=M,this.onError=w,this._abortController=null,this.itemStart=function(T){if(I++,z===!1){if(P.onStart!==void 0)P.onStart(T,C,I)}z=!0},this.itemEnd=function(T){if(C++,P.onProgress!==void 0)P.onProgress(T,C,I);if(C===I){if(z=!1,P.onLoad!==void 0)P.onLoad()}},this.itemError=function(T){if(P.onError!==void 0)P.onError(T)},this.resolveURL=function(T){if(T=T.normalize("NFC"),D)return D(T);return T},this.setURLModifier=function(T){return D=T,this},this.addHandler=function(T,Z){return O.push(T,Z),this},this.removeHandler=function(T){let Z=O.indexOf(T);if(Z!==-1)O.splice(Z,2);return this},this.getHandler=function(T){for(let Z=0,N=O.length;Z<N;Z+=2){let U=O[Z],W=O[Z+1];if(U.global)U.lastIndex=0;if(U.test(T))return W}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var SI=new ZC;class zM{constructor(A){if(this.manager=A!==void 0?A:SI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(A,M){let w=this;return new Promise(function(P,z){w.load(A,P,M,z)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}abort(){return this}}zM.DEFAULT_MATERIAL_NAME="__DEFAULT";var tA={};class $I extends Error{constructor(A,M){super(A);this.response=M}}class kw extends zM{constructor(A){super(A);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(A,M,w,P){if(A===void 0)A="";if(this.path!==void 0)A=this.path+A;A=this.manager.resolveURL(A);let z=gA.get(`file:${A}`);if(z!==void 0){this.manager.itemStart(A),setTimeout(()=>{if(M)M(z);this.manager.itemEnd(A)},0);return}if(tA[A]!==void 0){tA[A].push({onLoad:M,onProgress:w,onError:P});return}tA[A]=[],tA[A].push({onLoad:M,onProgress:w,onError:P});let C=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),I=this.mimeType,D=this.responseType;fetch(C).then((O)=>{if(O.status===200||O.status===0){if(O.status===0)d("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||O.body===void 0||O.body.getReader===void 0)return O;let T=tA[A],Z=O.body.getReader(),N=O.headers.get("X-File-Size")||O.headers.get("Content-Length"),U=N?parseInt(N):0,W=U!==0,Q=0,J=new ReadableStream({start(G){X();function X(){Z.read().then(({done:j,value:E})=>{if(j)G.close();else{Q+=E.byteLength;let K=new ProgressEvent("progress",{lengthComputable:W,loaded:Q,total:U});for(let H=0,V=T.length;H<V;H++){let Y=T[H];if(Y.onProgress)Y.onProgress(K)}G.enqueue(E),X()}},(j)=>{G.error(j)})}}});return new Response(J)}else throw new $I(`fetch for "${O.url}" responded with ${O.status}: ${O.statusText}`,O)}).then((O)=>{switch(D){case"arraybuffer":return O.arrayBuffer();case"blob":return O.blob();case"document":return O.text().then((T)=>{return new DOMParser().parseFromString(T,I)});case"json":return O.json();default:if(I==="")return O.text();else{let Z=/charset="?([^;"\s]*)"?/i.exec(I),N=Z&&Z[1]?Z[1].toLowerCase():void 0,U=new TextDecoder(N);return O.arrayBuffer().then((W)=>U.decode(W))}}}).then((O)=>{gA.add(`file:${A}`,O);let T=tA[A];delete tA[A];for(let Z=0,N=T.length;Z<N;Z++){let U=T[Z];if(U.onLoad)U.onLoad(O)}}).catch((O)=>{let T=tA[A];if(T===void 0)throw this.manager.itemError(A),O;delete tA[A];for(let Z=0,N=T.length;Z<N;Z++){let U=T[Z];if(U.onError)U.onError(O)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var oM=new WeakMap;class NC extends zM{constructor(A){super(A)}load(A,M,w,P){if(this.path!==void 0)A=this.path+A;A=this.manager.resolveURL(A);let z=this,C=gA.get(`image:${A}`);if(C!==void 0){if(C.complete===!0)z.manager.itemStart(A),setTimeout(function(){if(M)M(C);z.manager.itemEnd(A)},0);else{let Z=oM.get(C);if(Z===void 0)Z=[],oM.set(C,Z);Z.push({onLoad:M,onError:P})}return C}let I=QP("img");function D(){if(T(),M)M(this);let Z=oM.get(this)||[];for(let N=0;N<Z.length;N++){let U=Z[N];if(U.onLoad)U.onLoad(this)}oM.delete(this),z.manager.itemEnd(A)}function O(Z){if(T(),P)P(Z);gA.remove(`image:${A}`);let N=oM.get(this)||[];for(let U=0;U<N.length;U++){let W=N[U];if(W.onError)W.onError(Z)}oM.delete(this),z.manager.itemError(A),z.manager.itemEnd(A)}function T(){I.removeEventListener("load",D,!1),I.removeEventListener("error",O,!1)}if(I.addEventListener("load",D,!1),I.addEventListener("error",O,!1),A.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)I.crossOrigin=this.crossOrigin}return gA.add(`image:${A}`,I),z.manager.itemStart(A),I.src=A,I}}class kP extends zM{constructor(A){super(A)}load(A,M,w,P){let z=new LA,C=new NC(this.manager);return C.setCrossOrigin(this.crossOrigin),C.setPath(this.path),C.load(A,function(I){if(z.image=I,z.needsUpdate=!0,M!==void 0)M(z)},w,P),z}}class qw extends n{constructor(A,M=1){super();this.isLight=!0,this.type="Light",this.color=new _(A),this.intensity=M}copy(A,M){return super.copy(A,M),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){let M=super.toJSON(A);return M.object.color=this.color.getHex(),M.object.intensity=this.intensity,M}}var Sz=new h,GI=new L,LI=new L;class Sw{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new h,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zC,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new KA(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(A){let M=this.camera;GI.setFromMatrixPosition(A.matrixWorld),M.position.copy(GI),LI.setFromMatrixPosition(A.target.matrixWorld),M.lookAt(LI),M.updateMatrixWorld(),this._updateMatrix(M,this.matrix,this._frustum)}_updateMatrix(A,M,w,P){Sz.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),w.setFromProjectionMatrix(Sz,A.coordinateSystem,A.reversedDepth);let z=this._frameExtents,C=P?P.z/z.x:1,I=P?P.w/z.y:1,D=P?P.x/z.x:0,O=P?P.y/z.y:0;if(A.coordinateSystem===2001||A.reversedDepth)M.set(0.5*C,0,0,0.5*C+D,0,0.5*I,0,0.5*I+O,0,0,1,0,0,0,0,1);else M.set(0.5*C,0,0,0.5*C+D,0,0.5*I,0,0.5*I+O,0,0,0.5,0.5,0,0,0,1);M.multiply(Sz)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.autoUpdate=A.autoUpdate,this.needsUpdate=A.needsUpdate,this.normalBias=A.normalBias,this.blurSamples=A.blurSamples,this.mapSize.copy(A.mapSize),this.biasNode=A.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let A={};return A.intensity=this.intensity,A.bias=this.bias,A.normalBias=this.normalBias,A.radius=this.radius,A.blurSamples=this.blurSamples,A.mapSize=this.mapSize.toArray(),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}var NP=new L,UP=new ZA,hA=new L;class qP extends n{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new h,this.projectionMatrix=new h,this.projectionMatrixInverse=new h,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(A,M){return super.copy(A,M),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){if(super.updateMatrixWorld(A),this.matrixWorld.decompose(NP,UP,hA),hA.x===1&&hA.y===1&&hA.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(NP,UP,hA.set(1,1,1)).invert()}updateWorldMatrix(A,M,w=!1){if(super.updateWorldMatrix(A,M,w),this.matrixWorld.decompose(NP,UP,hA),hA.x===1&&hA.y===1&&hA.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(NP,UP,hA.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var UM=new L,XI=new $,YI=new $;class BM extends qP{constructor(A=50,M=1,w=0.1,P=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=w,this.far=P,this.focus=10,this.aspect=M,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,M){return super.copy(A,M),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){let M=0.5*this.getFilmHeight()/A;this.fov=eM*2*Math.atan(M),this.updateProjectionMatrix()}getFocalLength(){let A=Math.tan(Xw*0.5*this.fov);return 0.5*this.getFilmHeight()/A}getEffectiveFOV(){return eM*2*Math.atan(Math.tan(Xw*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,M,w){UM.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),M.set(UM.x,UM.y).multiplyScalar(-A/UM.z),UM.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),w.set(UM.x,UM.y).multiplyScalar(-A/UM.z)}getViewSize(A,M){return this.getViewBounds(A,XI,YI),M.subVectors(YI,XI)}setViewOffset(A,M,w,P,z,C){if(this.aspect=A/M,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=M,this.view.offsetX=w,this.view.offsetY=P,this.view.width=z,this.view.height=C,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let A=this.near,M=A*Math.tan(Xw*0.5*this.fov)/this.zoom,w=2*M,P=this.aspect*w,z=-0.5*P,C=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:D,fullHeight:O}=C;z+=C.offsetX*P/D,M-=C.offsetY*w/O,P*=C.width/D,w*=C.height/O}let I=this.filmOffset;if(I!==0)z+=A*I/this.getFilmWidth();this.projectionMatrix.makePerspective(z,z+P,M,M-w,A,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let M=super.toJSON(A);if(M.object.fov=this.fov,M.object.zoom=this.zoom,M.object.near=this.near,M.object.far=this.far,M.object.focus=this.focus,M.object.aspect=this.aspect,this.view!==null)M.object.view=Object.assign({},this.view);return M.object.filmGauge=this.filmGauge,M.object.filmOffset=this.filmOffset,M}}class yI extends Sw{constructor(){super(new BM(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(A){let M=this.camera,w=eM*2*A.angle*this.focus,P=this.mapSize.width/this.mapSize.height*this.aspect,z=A.distance||M.far;if(w!==M.fov||P!==M.aspect||z!==M.far)M.fov=w,M.aspect=P,M.far=z,M.updateProjectionMatrix();super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this.aspect=A.aspect,this}toJSON(){let A=super.toJSON();return A.focus=this.focus,A.aspect=this.aspect,A}}class SP extends qw{constructor(A,M,w=0,P=Math.PI/3,z=0,C=2){super(A,M);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(n.DEFAULT_UP),this.updateMatrix(),this.target=new n,this.distance=w,this.angle=P,this.penumbra=z,this.decay=C,this.map=null,this.shadow=new yI}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(A,M){return super.copy(A,M),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.map=A.map,this.shadow=A.shadow.clone(),this}toJSON(A){let M=super.toJSON(A);if(M.object.distance=this.distance,M.object.angle=this.angle,M.object.decay=this.decay,M.object.penumbra=this.penumbra,M.object.target=this.target.uuid,this.map&&this.map.isTexture)M.object.map=this.map.toJSON(A).uuid;return M.object.shadow=this.shadow.toJSON(),M}}class bI extends Sw{constructor(){super(new BM(90,1,0.5,500));this.isPointLightShadow=!0}}class $P extends qw{constructor(A,M,w=0,P=2){super(A,M);this.isPointLight=!0,this.type="PointLight",this.distance=w,this.decay=P,this.shadow=new bI}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(A,M){return super.copy(A,M),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}toJSON(A){let M=super.toJSON(A);return M.object.distance=this.distance,M.object.decay=this.decay,M.object.shadow=this.shadow.toJSON(),M}}class $w extends qP{constructor(A=-1,M=1,w=1,P=-1,z=0.1,C=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=M,this.top=w,this.bottom=P,this.near=z,this.far=C,this.updateProjectionMatrix()}copy(A,M){return super.copy(A,M),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,M,w,P,z,C){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=M,this.view.offsetX=w,this.view.offsetY=P,this.view.width=z,this.view.height=C,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let A=(this.right-this.left)/(2*this.zoom),M=(this.top-this.bottom)/(2*this.zoom),w=(this.right+this.left)/2,P=(this.top+this.bottom)/2,z=w-A,C=w+A,I=P+M,D=P-M;if(this.view!==null&&this.view.enabled){let O=(this.right-this.left)/this.view.fullWidth/this.zoom,T=(this.top-this.bottom)/this.view.fullHeight/this.zoom;z+=O*this.view.offsetX,C=z+O*this.view.width,I-=T*this.view.offsetY,D=I-T*this.view.height}this.projectionMatrix.makeOrthographic(z,C,I,D,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let M=super.toJSON(A);if(M.object.zoom=this.zoom,M.object.left=this.left,M.object.right=this.right,M.object.top=this.top,M.object.bottom=this.bottom,M.object.near=this.near,M.object.far=this.far,this.view!==null)M.object.view=Object.assign({},this.view);return M}}class _I extends Sw{constructor(){super(new $w(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class yP extends qw{constructor(A,M){super(A,M);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(n.DEFAULT_UP),this.updateMatrix(),this.target=new n,this.shadow=new _I}dispose(){super.dispose(),this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}toJSON(A){let M=super.toJSON(A);return M.object.shadow=this.shadow.toJSON(),M.object.target=this.target.uuid,M}}class vM{static extractUrlBase(A){let M=A.lastIndexOf("/");if(M===-1)return"./";return A.slice(0,M+1)}static resolveURL(A,M){if(typeof A!=="string"||A==="")return"";if(/^https?:\/\//i.test(M)&&/^\//.test(A))M=M.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(A))return A;if(/^data:.*,.*$/i.test(A))return A;if(/^blob:.*$/i.test(A))return A;return M+A}}var $z=new WeakMap;class bP extends zM{constructor(A){super(A);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")d("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")d("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(A){return this.options=A,this}load(A,M,w,P){if(A===void 0)A="";if(this.path!==void 0)A=this.path+A;A=this.manager.resolveURL(A);let z=this,C=gA.get(`image-bitmap:${A}`);if(C!==void 0){if(z.manager.itemStart(A),C.then){C.then((O)=>{if($z.has(C)===!0){if(P)P($z.get(C));z.manager.itemError(A),z.manager.itemEnd(A)}else{if(M)M(O);z.manager.itemEnd(A)}});return}setTimeout(function(){if(M)M(C);z.manager.itemEnd(A)},0);return}let I={};I.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",I.headers=this.requestHeader,I.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let D=fetch(A,I).then(function(O){return O.blob()}).then(function(O){return createImageBitmap(O,Object.assign({},z.options,{colorSpaceConversion:"none"}))}).then(function(O){if(gA.add(`image-bitmap:${A}`,O),M)M(O);return z.manager.itemEnd(A),O}).catch(function(O){if(P)P(O);$z.set(D,O),gA.remove(`image-bitmap:${A}`),z.manager.itemError(A),z.manager.itemEnd(A)});gA.add(`image-bitmap:${A}`,D),z.manager.itemStart(A)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var UC="\\[\\]\\.:\\/",y9=new RegExp("["+UC+"]","g"),WC="[^"+UC+"]",b9="[^"+UC.replace("\\.","")+"]",_9=/((?:WC+[\/:])*)/.source.replace("WC",WC),x9=/(WCOD+)?/.source.replace("WCOD",b9),f9=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",WC),h9=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",WC),g9=new RegExp("^"+_9+x9+f9+h9+"$"),m9=["material","materials","bones","map"];class xI{constructor(A,M,w){let P=w||p.parseTrackName(M);this._targetGroup=A,this._bindings=A.subscribe_(M,P)}getValue(A,M){this.bind();let w=this._targetGroup.nCachedObjects_,P=this._bindings[w];if(P!==void 0)P.getValue(A,M)}setValue(A,M){let w=this._bindings;for(let P=this._targetGroup.nCachedObjects_,z=w.length;P!==z;++P)w[P].setValue(A,M)}bind(){let A=this._bindings;for(let M=this._targetGroup.nCachedObjects_,w=A.length;M!==w;++M)A[M].bind()}unbind(){let A=this._bindings;for(let M=this._targetGroup.nCachedObjects_,w=A.length;M!==w;++M)A[M].unbind()}}class p{constructor(A,M,w){this.path=M,this.parsedPath=w||p.parseTrackName(M),this.node=p.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,M,w){if(!(A&&A.isAnimationObjectGroup))return new p(A,M,w);else return new p.Composite(A,M,w)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(y9,"")}static parseTrackName(A){let M=g9.exec(A);if(M===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+A);let w={nodeName:M[2],objectName:M[3],objectIndex:M[4],propertyName:M[5],propertyIndex:M[6]},P=w.nodeName&&w.nodeName.lastIndexOf(".");if(P!==void 0&&P!==-1){let z=w.nodeName.substring(P+1);if(m9.indexOf(z)!==-1)w.nodeName=w.nodeName.substring(0,P),w.objectName=z}if(w.propertyName===null||w.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+A);return w}static findNode(A,M){if(M===void 0||M===""||M==="."||M===-1||M===A.name||M===A.uuid)return A;if(A.skeleton){let w=A.skeleton.getBoneByName(M);if(w!==void 0)return w}if(A.children){let w=function(z){for(let C=0;C<z.length;C++){let I=z[C];if(I.name===M||I.uuid===M)return I;let D=w(I.children);if(D)return D}return null},P=w(A.children);if(P)return P}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,M){A[M]=this.targetObject[this.propertyName]}_getValue_array(A,M){let w=this.resolvedProperty;for(let P=0,z=w.length;P!==z;++P)A[M++]=w[P]}_getValue_arrayElement(A,M){A[M]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,M){this.resolvedProperty.toArray(A,M)}_setValue_direct(A,M){this.targetObject[this.propertyName]=A[M]}_setValue_direct_setNeedsUpdate(A,M){this.targetObject[this.propertyName]=A[M],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,M){this.targetObject[this.propertyName]=A[M],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,M){let w=this.resolvedProperty;for(let P=0,z=w.length;P!==z;++P)w[P]=A[M++]}_setValue_array_setNeedsUpdate(A,M){let w=this.resolvedProperty;for(let P=0,z=w.length;P!==z;++P)w[P]=A[M++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,M){let w=this.resolvedProperty;for(let P=0,z=w.length;P!==z;++P)w[P]=A[M++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,M){this.resolvedProperty[this.propertyIndex]=A[M]}_setValue_arrayElement_setNeedsUpdate(A,M){this.resolvedProperty[this.propertyIndex]=A[M],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,M){this.resolvedProperty[this.propertyIndex]=A[M],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,M){this.resolvedProperty.fromArray(A,M)}_setValue_fromArray_setNeedsUpdate(A,M){this.resolvedProperty.fromArray(A,M),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,M){this.resolvedProperty.fromArray(A,M),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,M){this.bind(),this.getValue(A,M)}_setValue_unbound(A,M){this.bind(),this.setValue(A,M)}bind(){let A=this.node,M=this.parsedPath,w=M.objectName,P=M.propertyName,z=M.propertyIndex;if(!A)A=p.findNode(this.rootNode,M.nodeName),this.node=A;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){d("PropertyBinding: No target node found for track: "+this.path+".");return}if(w){let O=M.objectIndex;switch(w){case"materials":if(!A.material){o("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){o("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){o("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let T=0;T<A.length;T++)if(A[T].name===O){O=T;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){o("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){o("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[w]===void 0){o("PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[w]}if(O!==void 0){if(A[O]===void 0){o("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[O]}}let C=A[P];if(C===void 0){let O=M.nodeName;o("PropertyBinding: Trying to update property for track: "+O+"."+P+" but it wasn't found.",A);return}let I=this.Versioning.None;if(this.targetObject=A,A.isMaterial===!0)I=this.Versioning.NeedsUpdate;else if(A.isObject3D===!0)I=this.Versioning.MatrixWorldNeedsUpdate;let D=this.BindingType.Direct;if(z!==void 0){if(P==="morphTargetInfluences"){if(!A.geometry){o("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){o("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(A.morphTargetDictionary[z]!==void 0)z=A.morphTargetDictionary[z]}D=this.BindingType.ArrayElement,this.resolvedProperty=C,this.propertyIndex=z}else if(C.fromArray!==void 0&&C.toArray!==void 0)D=this.BindingType.HasFromToArray,this.resolvedProperty=C;else if(Array.isArray(C))D=this.BindingType.EntireArray,this.resolvedProperty=C;else this.propertyName=P;this.getValue=this.GetterByBindingType[D],this.setValue=this.SetterByBindingTypeAndVersioning[D][I]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}p.Composite=xI;p.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};p.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};p.prototype.GetterByBindingType=[p.prototype._getValue_direct,p.prototype._getValue_array,p.prototype._getValue_arrayElement,p.prototype._getValue_toArray];p.prototype.SetterByBindingTypeAndVersioning=[[p.prototype._setValue_direct,p.prototype._setValue_direct_setNeedsUpdate,p.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[p.prototype._setValue_array,p.prototype._setValue_array_setNeedsUpdate,p.prototype._setValue_array_setMatrixWorldNeedsUpdate],[p.prototype._setValue_arrayElement,p.prototype._setValue_arrayElement_setNeedsUpdate,p.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[p.prototype._setValue_fromArray,p.prototype._setValue_fromArray_setNeedsUpdate,p.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tT=new Float32Array(1);class yw{constructor(A=1,M=0,w=0){this.radius=A,this.phi=M,this.theta=w}set(A,M,w){return this.radius=A,this.phi=M,this.theta=w,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=b(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,M,w){if(this.radius=Math.sqrt(A*A+M*M+w*w),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(A,w),this.phi=Math.acos(b(M/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class QC{static{QC.prototype.isMatrix2=!0}constructor(A,M,w,P){if(this.elements=[1,0,0,1],A!==void 0)this.set(A,M,w,P)}identity(){return this.set(1,0,0,1),this}fromArray(A,M=0){for(let w=0;w<4;w++)this.elements[w]=A[w+M];return this}set(A,M,w,P){let z=this.elements;return z[0]=A,z[2]=M,z[1]=w,z[3]=P,this}}class _P extends LM{constructor(A,M=null){super();this.object=A,this.domElement=M,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(A){if(this.domElement!==null)this.disconnect();this.domElement=A}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)d("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";var p9=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l9=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c9=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i9=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s9=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n9=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o9=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,a9=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r9=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t9=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e9=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AO=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wO=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ZO=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UO=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,WO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LO="gl_FragColor = linearToOutputTexel( gl_FragColor );",XO=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SO=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$O=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yO=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_O=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fO=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gO=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mO=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lO=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dO=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uO=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cO=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iO=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sO=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rO=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A8=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M8=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w8=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P8=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z8=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C8=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I8=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D8=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O8=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T8=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Z8=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N8=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U8=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W8=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q8=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J8=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G8=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,L8=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X8=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y8=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j8=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V8=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E8=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H8=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K8=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B8=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v8=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F8=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R8=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k8=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q8=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S8=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$8=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y8=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b8=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_8=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x8=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f8=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h8=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g8=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m8=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p8=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l8=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u8=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i8=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s8=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n8=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o8=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a8=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r8=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t8=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e8=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g={alphahash_fragment:p9,alphahash_pars_fragment:l9,alphamap_fragment:d9,alphamap_pars_fragment:u9,alphatest_fragment:c9,alphatest_pars_fragment:i9,aomap_fragment:s9,aomap_pars_fragment:n9,batching_pars_vertex:o9,batching_vertex:a9,begin_vertex:r9,beginnormal_vertex:t9,bsdfs:e9,iridescence_fragment:AO,bumpmap_pars_fragment:MO,clipping_planes_fragment:wO,clipping_planes_pars_fragment:PO,clipping_planes_pars_vertex:zO,clipping_planes_vertex:CO,color_fragment:IO,color_pars_fragment:DO,color_pars_vertex:OO,color_vertex:TO,common:ZO,cube_uv_reflection_fragment:NO,defaultnormal_vertex:UO,displacementmap_pars_vertex:WO,displacementmap_vertex:QO,emissivemap_fragment:JO,emissivemap_pars_fragment:GO,colorspace_fragment:LO,colorspace_pars_fragment:XO,envmap_fragment:YO,envmap_common_pars_fragment:jO,envmap_pars_fragment:VO,envmap_pars_vertex:EO,envmap_physical_pars_fragment:yO,envmap_vertex:HO,fog_vertex:KO,fog_pars_vertex:BO,fog_fragment:vO,fog_pars_fragment:FO,gradientmap_pars_fragment:RO,lightmap_pars_fragment:kO,lights_lambert_fragment:qO,lights_lambert_pars_fragment:SO,lights_pars_begin:$O,lights_toon_fragment:bO,lights_toon_pars_fragment:_O,lights_phong_fragment:xO,lights_phong_pars_fragment:fO,lights_physical_fragment:hO,lights_physical_pars_fragment:gO,lights_fragment_begin:mO,lights_fragment_maps:pO,lights_fragment_end:lO,lightprobes_pars_fragment:dO,logdepthbuf_fragment:uO,logdepthbuf_pars_fragment:cO,logdepthbuf_pars_vertex:iO,logdepthbuf_vertex:sO,map_fragment:nO,map_pars_fragment:oO,map_particle_fragment:aO,map_particle_pars_fragment:rO,metalnessmap_fragment:tO,metalnessmap_pars_fragment:eO,morphinstance_vertex:A8,morphcolor_vertex:M8,morphnormal_vertex:w8,morphtarget_pars_vertex:P8,morphtarget_vertex:z8,normal_fragment_begin:C8,normal_fragment_maps:I8,normal_pars_fragment:D8,normal_pars_vertex:O8,normal_vertex:T8,normalmap_pars_fragment:Z8,clearcoat_normal_fragment_begin:N8,clearcoat_normal_fragment_maps:U8,clearcoat_pars_fragment:W8,iridescence_pars_fragment:Q8,opaque_fragment:J8,packing:G8,premultiplied_alpha_fragment:L8,project_vertex:X8,dithering_fragment:Y8,dithering_pars_fragment:j8,roughnessmap_fragment:V8,roughnessmap_pars_fragment:E8,shadowmap_pars_fragment:H8,shadowmap_pars_vertex:K8,shadowmap_vertex:B8,shadowmask_pars_fragment:v8,skinbase_vertex:F8,skinning_pars_vertex:R8,skinning_vertex:k8,skinnormal_vertex:q8,specularmap_fragment:S8,specularmap_pars_fragment:$8,tonemapping_fragment:y8,tonemapping_pars_fragment:b8,transmission_fragment:_8,transmission_pars_fragment:x8,uv_pars_fragment:f8,uv_pars_vertex:h8,uv_vertex:g8,worldpos_vertex:m8,background_vert:p8,background_frag:l8,backgroundCube_vert:d8,backgroundCube_frag:u8,cube_vert:c8,cube_frag:i8,depth_vert:s8,depth_frag:n8,distance_vert:o8,distance_frag:a8,equirect_vert:r8,equirect_frag:t8,linedashed_vert:e8,linedashed_frag:AT,meshbasic_vert:MT,meshbasic_frag:wT,meshlambert_vert:PT,meshlambert_frag:zT,meshmatcap_vert:CT,meshmatcap_frag:IT,meshnormal_vert:DT,meshnormal_frag:OT,meshphong_vert:TT,meshphong_frag:ZT,meshphysical_vert:NT,meshphysical_frag:UT,meshtoon_vert:WT,meshtoon_frag:QT,points_vert:JT,points_frag:GT,shadow_vert:LT,shadow_frag:XT,sprite_vert:YT,sprite_frag:jT},F={common:{diffuse:{value:new _(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new S},alphaMap:{value:null},alphaMapTransform:{value:new S},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new S}},envmap:{envMap:{value:null},envMapRotation:{value:new S},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new S}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new S}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new S},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new S},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new S},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new S}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new S}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new S}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new _(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new _(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new S},alphaTest:{value:0},uvTransform:{value:new S}},sprite:{diffuse:{value:new _(16777215)},opacity:{value:1},center:{value:new $(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new S},alphaMap:{value:null},alphaMapTransform:{value:new S},alphaTest:{value:0}}},fI={basic:{uniforms:NA([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.fog]),vertexShader:g.meshbasic_vert,fragmentShader:g.meshbasic_frag},lambert:{uniforms:NA([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.fog,F.lights,{emissive:{value:new _(0)},envMapIntensity:{value:1}}]),vertexShader:g.meshlambert_vert,fragmentShader:g.meshlambert_frag},phong:{uniforms:NA([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.fog,F.lights,{emissive:{value:new _(0)},specular:{value:new _(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g.meshphong_vert,fragmentShader:g.meshphong_frag},standard:{uniforms:NA([F.common,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.roughnessmap,F.metalnessmap,F.fog,F.lights,{emissive:{value:new _(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g.meshphysical_vert,fragmentShader:g.meshphysical_frag},toon:{uniforms:NA([F.common,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.gradientmap,F.fog,F.lights,{emissive:{value:new _(0)}}]),vertexShader:g.meshtoon_vert,fragmentShader:g.meshtoon_frag},matcap:{uniforms:NA([F.common,F.bumpmap,F.normalmap,F.displacementmap,F.fog,{matcap:{value:null}}]),vertexShader:g.meshmatcap_vert,fragmentShader:g.meshmatcap_frag},points:{uniforms:NA([F.points,F.fog]),vertexShader:g.points_vert,fragmentShader:g.points_frag},dashed:{uniforms:NA([F.common,F.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g.linedashed_vert,fragmentShader:g.linedashed_frag},depth:{uniforms:NA([F.common,F.displacementmap]),vertexShader:g.depth_vert,fragmentShader:g.depth_frag},normal:{uniforms:NA([F.common,F.bumpmap,F.normalmap,F.displacementmap,{opacity:{value:1}}]),vertexShader:g.meshnormal_vert,fragmentShader:g.meshnormal_frag},sprite:{uniforms:NA([F.sprite,F.fog]),vertexShader:g.sprite_vert,fragmentShader:g.sprite_frag},background:{uniforms:{uvTransform:{value:new S},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g.background_vert,fragmentShader:g.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new S}},vertexShader:g.backgroundCube_vert,fragmentShader:g.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g.cube_vert,fragmentShader:g.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g.equirect_vert,fragmentShader:g.equirect_frag},distance:{uniforms:NA([F.common,F.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:g.distance_vert,fragmentShader:g.distance_frag},shadow:{uniforms:NA([F.lights,F.fog,{color:{value:new _(0)},opacity:{value:1}}]),vertexShader:g.shadow_vert,fragmentShader:g.shadow_frag}};fI.physical={uniforms:NA([fI.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new S},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new S},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new S},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new S},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new S},sheen:{value:0},sheenColor:{value:new _(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new S},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new S},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new S},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new S},attenuationDistance:{value:0},attenuationColor:{value:new _(0)},specularColor:{value:new _(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new S},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new S},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new S}}]),vertexShader:g.meshphysical_vert,fragmentShader:g.meshphysical_frag};var VT=new S;VT.set(-1,0,0,0,1,0,0,0,1);var oW={[fz]:"LINEAR_TONE_MAPPING",[hz]:"REINHARD_TONE_MAPPING",[gz]:"CINEON_TONE_MAPPING",[mz]:"ACES_FILMIC_TONE_MAPPING",[lz]:"AGX_TONE_MAPPING",[dz]:"NEUTRAL_TONE_MAPPING",[pz]:"CUSTOM_TONE_MAPPING"};var aW=new Float32Array(16),rW=new Float32Array(9),tW=new Float32Array(4);var eW={[fz]:"Linear",[hz]:"Reinhard",[gz]:"Cineon",[mz]:"ACESFilmic",[lz]:"AgX",[dz]:"Neutral",[pz]:"Custom"};var AQ={[jI]:"SHADOWMAP_TYPE_PCF",[VI]:"SHADOWMAP_TYPE_VSM"};var MQ={[BI]:"ENVMAP_TYPE_CUBE",[uz]:"ENVMAP_TYPE_CUBE",[vI]:"ENVMAP_TYPE_CUBE_UV"};var wQ={[uz]:"ENVMAP_MODE_REFRACTION"};var PQ={[EI]:"ENVMAP_BLENDING_MULTIPLY",[HI]:"ENVMAP_BLENDING_MIX",[KI]:"ENVMAP_BLENDING_ADD"};var ET=new S;ET.set(-1,0,0,0,1,0,0,0,1);var zQ=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var hI={type:"change"},GC={type:"start"},mI={type:"end"},xP=new YM,gI=new $A,KT=Math.cos(70*Hw.DEG2RAD),wA=new L,QA=2*Math.PI,u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},JC=0.000001;class LC extends _P{constructor(A,M=null){super(A,M);if(this.state=u.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:JM.ROTATE,MIDDLE:JM.DOLLY,RIGHT:JM.PAN},this.touches={ONE:GM.ROTATE,TWO:GM.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new ZA,this._lastTargetPosition=new L,this._quat=new ZA().setFromUnitVectors(A.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yw,this._sphericalDelta=new yw,this._scale=1,this._panOffset=new L,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new L,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vT.bind(this),this._onPointerDown=BT.bind(this),this._onPointerUp=FT.bind(this),this._onContextMenu=bT.bind(this),this._onMouseWheel=qT.bind(this),this._onKeyDown=ST.bind(this),this._onTouchStart=$T.bind(this),this._onTouchMove=yT.bind(this),this._onMouseDown=RT.bind(this),this._onMouseMove=kT.bind(this),this._interceptControlDown=_T.bind(this),this._interceptControlUp=xT.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(A){if(this._cursorStyle=A,A==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(A){super.connect(A),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=u.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let A=this.domElement.getRootNode();A.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),A.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(A){A.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=A}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hI),this.update(),this.state=u.NONE}pan(A,M){this._pan(A,M),this.update()}dollyIn(A){this._dollyIn(A),this.update()}dollyOut(A){this._dollyOut(A),this.update()}rotateLeft(A){this._rotateLeft(A),this.update()}rotateUp(A){this._rotateUp(A),this.update()}update(A=null){let M=this.object.position;if(wA.copy(M).sub(this.target),wA.applyQuaternion(this._quat),this._spherical.setFromVector3(wA),this.autoRotate&&this.state===u.NONE)this._rotateLeft(this._getAutoRotationAngle(A));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let w=this.minAzimuthAngle,P=this.maxAzimuthAngle;if(isFinite(w)&&isFinite(P)){if(w<-Math.PI)w+=QA;else if(w>Math.PI)w-=QA;if(P<-Math.PI)P+=QA;else if(P>Math.PI)P-=QA;if(w<=P)this._spherical.theta=Math.max(w,Math.min(P,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(w+P)/2?Math.max(w,this._spherical.theta):Math.min(P,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let C=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),z=C!=this._spherical.radius}if(wA.setFromSpherical(this._spherical),wA.applyQuaternion(this._quatInverse),M.copy(this.target).add(wA),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let C=null;if(this.object.isPerspectiveCamera){let I=wA.length();C=this._clampDistance(I*this._scale);let D=I-C;this.object.position.addScaledVector(this._dollyDirection,D),this.object.updateMatrixWorld(),z=!!D}else if(this.object.isOrthographicCamera){let I=new L(this._mouse.x,this._mouse.y,0);I.unproject(this.object);let D=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),z=D!==this.object.zoom;let O=new L(this._mouse.x,this._mouse.y,0);O.unproject(this.object),this.object.position.sub(O).add(I),this.object.updateMatrixWorld(),C=wA.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(C!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(C).add(this.object.position);else if(xP.origin.copy(this.object.position),xP.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xP.direction))<KT)this.object.lookAt(this.target);else gI.setFromNormalAndCoplanarPoint(this.object.up,this.target),xP.intersectPlane(gI,this.target)}else if(this.object.isOrthographicCamera){let C=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),C!==this.object.zoom)this.object.updateProjectionMatrix(),z=!0}if(this._scale=1,this._performCursorZoom=!1,z||this._lastPosition.distanceToSquared(this.object.position)>JC||8*(1-this._lastQuaternion.dot(this.object.quaternion))>JC||this._lastTargetPosition.distanceToSquared(this.target)>JC)return this.dispatchEvent(hI),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(A){if(A!==null)return QA/60*this.autoRotateSpeed*A;else return QA/60/60*this.autoRotateSpeed}_getZoomScale(A){let M=Math.abs(A*0.01);return Math.pow(0.95,this.zoomSpeed*M)}_rotateLeft(A){this._sphericalDelta.theta-=A}_rotateUp(A){this._sphericalDelta.phi-=A}_panLeft(A,M){wA.setFromMatrixColumn(M,0),wA.multiplyScalar(-A),this._panOffset.add(wA)}_panUp(A,M){if(this.screenSpacePanning===!0)wA.setFromMatrixColumn(M,1);else wA.setFromMatrixColumn(M,0),wA.crossVectors(this.object.up,wA);wA.multiplyScalar(A),this._panOffset.add(wA)}_pan(A,M){let w=this.domElement;if(this.object.isPerspectiveCamera){let P=this.object.position;wA.copy(P).sub(this.target);let z=wA.length();z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*A*z/w.clientHeight,this.object.matrix),this._panUp(2*M*z/w.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(A*(this.object.right-this.object.left)/this.object.zoom/w.clientWidth,this.object.matrix),this._panUp(M*(this.object.top-this.object.bottom)/this.object.zoom/w.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(A){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(A){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(A,M){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let w=this.domElement.getBoundingClientRect(),P=A-w.left,z=M-w.top,C=w.width,I=w.height;this._mouse.x=P/C*2-1,this._mouse.y=-(z/I)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(A){return Math.max(this.minDistance,Math.min(this.maxDistance,A))}_handleMouseDownRotate(A){this._rotateStart.set(A.clientX,A.clientY)}_handleMouseDownDolly(A){this._updateZoomParameters(A.clientX,A.clientX),this._dollyStart.set(A.clientX,A.clientY)}_handleMouseDownPan(A){this._panStart.set(A.clientX,A.clientY)}_handleMouseMoveRotate(A){this._rotateEnd.set(A.clientX,A.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let M=this.domElement;this._rotateLeft(QA*this._rotateDelta.x/M.clientHeight),this._rotateUp(QA*this._rotateDelta.y/M.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(A){if(this._dollyEnd.set(A.clientX,A.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(A){this._panEnd.set(A.clientX,A.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(A){if(this._updateZoomParameters(A.clientX,A.clientY),A.deltaY<0)this._dollyIn(this._getZoomScale(A.deltaY));else if(A.deltaY>0)this._dollyOut(this._getZoomScale(A.deltaY));this.update()}_handleKeyDown(A){let M=!1;switch(A.code){case this.keys.UP:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateUp(QA*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);M=!0;break;case this.keys.BOTTOM:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateUp(-QA*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);M=!0;break;case this.keys.LEFT:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateLeft(QA*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);M=!0;break;case this.keys.RIGHT:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateLeft(-QA*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);M=!0;break}if(M)A.preventDefault(),this.update()}_handleTouchStartRotate(A){if(this._pointers.length===1)this._rotateStart.set(A.pageX,A.pageY);else{let M=this._getSecondPointerPosition(A),w=0.5*(A.pageX+M.x),P=0.5*(A.pageY+M.y);this._rotateStart.set(w,P)}}_handleTouchStartPan(A){if(this._pointers.length===1)this._panStart.set(A.pageX,A.pageY);else{let M=this._getSecondPointerPosition(A),w=0.5*(A.pageX+M.x),P=0.5*(A.pageY+M.y);this._panStart.set(w,P)}}_handleTouchStartDolly(A){let M=this._getSecondPointerPosition(A),w=A.pageX-M.x,P=A.pageY-M.y,z=Math.sqrt(w*w+P*P);this._dollyStart.set(0,z)}_handleTouchStartDollyPan(A){if(this.enableZoom)this._handleTouchStartDolly(A);if(this.enablePan)this._handleTouchStartPan(A)}_handleTouchStartDollyRotate(A){if(this.enableZoom)this._handleTouchStartDolly(A);if(this.enableRotate)this._handleTouchStartRotate(A)}_handleTouchMoveRotate(A){if(this._pointers.length==1)this._rotateEnd.set(A.pageX,A.pageY);else{let w=this._getSecondPointerPosition(A),P=0.5*(A.pageX+w.x),z=0.5*(A.pageY+w.y);this._rotateEnd.set(P,z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let M=this.domElement;this._rotateLeft(QA*this._rotateDelta.x/M.clientHeight),this._rotateUp(QA*this._rotateDelta.y/M.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(A){if(this._pointers.length===1)this._panEnd.set(A.pageX,A.pageY);else{let M=this._getSecondPointerPosition(A),w=0.5*(A.pageX+M.x),P=0.5*(A.pageY+M.y);this._panEnd.set(w,P)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(A){let M=this._getSecondPointerPosition(A),w=A.pageX-M.x,P=A.pageY-M.y,z=Math.sqrt(w*w+P*P);this._dollyEnd.set(0,z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let C=(A.pageX+M.x)*0.5,I=(A.pageY+M.y)*0.5;this._updateZoomParameters(C,I)}_handleTouchMoveDollyPan(A){if(this.enableZoom)this._handleTouchMoveDolly(A);if(this.enablePan)this._handleTouchMovePan(A)}_handleTouchMoveDollyRotate(A){if(this.enableZoom)this._handleTouchMoveDolly(A);if(this.enableRotate)this._handleTouchMoveRotate(A)}_addPointer(A){this._pointers.push(A.pointerId)}_removePointer(A){delete this._pointerPositions[A.pointerId];for(let M=0;M<this._pointers.length;M++)if(this._pointers[M]==A.pointerId){this._pointers.splice(M,1);return}}_isTrackingPointer(A){for(let M=0;M<this._pointers.length;M++)if(this._pointers[M]==A.pointerId)return!0;return!1}_trackPointer(A){let M=this._pointerPositions[A.pointerId];if(M===void 0)M=new $,this._pointerPositions[A.pointerId]=M;M.set(A.pageX,A.pageY)}_getSecondPointerPosition(A){let M=A.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[M]}_customWheelEvent(A){let M=A.deltaMode,w={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(M){case 1:w.deltaY*=16;break;case 2:w.deltaY*=100;break}if(A.ctrlKey&&!this._controlActive)w.deltaY*=10;return w}}function BT(A){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(A.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(A))return;if(this._addPointer(A),A.pointerType==="touch")this._onTouchStart(A);else this._onMouseDown(A);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function vT(A){if(this.enabled===!1)return;if(A.pointerType==="touch")this._onTouchMove(A);else this._onMouseMove(A)}function FT(A){switch(this._removePointer(A),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(A.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mI),this.state=u.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let M=this._pointers[0],w=this._pointerPositions[M];this._onTouchStart({pointerId:M,pageX:w.x,pageY:w.y});break}}function RT(A){let M;switch(A.button){case 0:M=this.mouseButtons.LEFT;break;case 1:M=this.mouseButtons.MIDDLE;break;case 2:M=this.mouseButtons.RIGHT;break;default:M=-1}switch(M){case JM.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(A),this.state=u.DOLLY;break;case JM.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(A),this.state=u.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(A),this.state=u.ROTATE}break;case JM.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(A),this.state=u.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(A),this.state=u.PAN}break;default:this.state=u.NONE}if(this.state!==u.NONE)this.dispatchEvent(GC)}function kT(A){switch(this.state){case u.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(A);break;case u.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(A);break;case u.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(A);break}}function qT(A){if(this.enabled===!1||this.enableZoom===!1||this.state!==u.NONE)return;A.preventDefault(),this.dispatchEvent(GC),this._handleMouseWheel(this._customWheelEvent(A)),this.dispatchEvent(mI)}function ST(A){if(this.enabled===!1)return;this._handleKeyDown(A)}function $T(A){switch(this._trackPointer(A),this._pointers.length){case 1:switch(this.touches.ONE){case GM.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(A),this.state=u.TOUCH_ROTATE;break;case GM.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(A),this.state=u.TOUCH_PAN;break;default:this.state=u.NONE}break;case 2:switch(this.touches.TWO){case GM.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(A),this.state=u.TOUCH_DOLLY_PAN;break;case GM.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(A),this.state=u.TOUCH_DOLLY_ROTATE;break;default:this.state=u.NONE}break;default:this.state=u.NONE}if(this.state!==u.NONE)this.dispatchEvent(GC)}function yT(A){switch(this._trackPointer(A),this.state){case u.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(A),this.update();break;case u.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(A),this.update();break;case u.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(A),this.update();break;case u.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(A),this.update();break;default:this.state=u.NONE}}function bT(A){if(this.enabled===!1)return;A.preventDefault()}function _T(A){if(A.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function xT(A){if(A.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function XC(A,M){if(M===rz)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),A;if(M===Aw||M===Ew){let w=A.getIndex();if(w===null){let C=[],I=A.getAttribute("position");if(I!==void 0){for(let D=0;D<I.count;D++)C.push(D);A.setIndex(C),w=A.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),A}let P=w.count-2,z=[];if(M===Aw)for(let C=1;C<=P;C++)z.push(w.getX(0)),z.push(w.getX(C)),z.push(w.getX(C+1));else for(let C=0;C<P;C++)if(C%2===0)z.push(w.getX(C)),z.push(w.getX(C+1)),z.push(w.getX(C+2));else z.push(w.getX(C+2)),z.push(w.getX(C+1)),z.push(w.getX(C));if(z.length/3!==P)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return A.setIndex(z),A.clearGroups(),A}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",M),A}function pI(A){let M=new Map,w=new Map,P=A.clone();return lI(A,P,function(z,C){M.set(C,z),w.set(z,C)}),P.traverse(function(z){if(!z.isSkinnedMesh)return;let C=z,I=M.get(z),D=I.skeleton.bones;C.skeleton=I.skeleton.clone(),C.bindMatrix.copy(I.bindMatrix),C.skeleton.bones=D.map(function(O){return w.get(O)}),C.bind(C.skeleton,C.bindMatrix)}),P}function lI(A,M,w){w(A,M);for(let P=0;P<A.children.length;P++)lI(A.children[P],M.children[P],w)}class BC extends zM{constructor(A){super(A);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(M){return new aI(M)}),this.register(function(M){return new rI(M)}),this.register(function(M){return new ID(M)}),this.register(function(M){return new DD(M)}),this.register(function(M){return new OD(M)}),this.register(function(M){return new eI(M)}),this.register(function(M){return new AD(M)}),this.register(function(M){return new MD(M)}),this.register(function(M){return new wD(M)}),this.register(function(M){return new oI(M)}),this.register(function(M){return new PD(M)}),this.register(function(M){return new tI(M)}),this.register(function(M){return new CD(M)}),this.register(function(M){return new zD(M)}),this.register(function(M){return new sI(M)}),this.register(function(M){return new EC(M,f.EXT_MESHOPT_COMPRESSION)}),this.register(function(M){return new EC(M,f.KHR_MESHOPT_COMPRESSION)}),this.register(function(M){return new TD(M)})}load(A,M,w,P){let z=this,C;if(this.resourcePath!=="")C=this.resourcePath;else if(this.path!==""){let O=vM.extractUrlBase(A);C=vM.resolveURL(O,this.path)}else C=vM.extractUrlBase(A);this.manager.itemStart(A);let I=function(O){if(P)P(O);else console.error(O);z.manager.itemError(A),z.manager.itemEnd(A)},D=new kw(this.manager);D.setPath(this.path),D.setResponseType("arraybuffer"),D.setRequestHeader(this.requestHeader),D.setWithCredentials(this.withCredentials),D.load(A,function(O){try{z.parse(O,C,function(T){M(T),z.manager.itemEnd(A)},I)}catch(T){I(T)}},w,I)}setDRACOLoader(A){return this.dracoLoader=A,this}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){if(this.pluginCallbacks.indexOf(A)===-1)this.pluginCallbacks.push(A);return this}unregister(A){if(this.pluginCallbacks.indexOf(A)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1);return this}parse(A,M,w,P){let z,C={},I={},D=new TextDecoder;if(typeof A==="string")z=JSON.parse(A);else if(A instanceof ArrayBuffer)if(D.decode(new Uint8Array(A,0,4))===ZD){try{C[f.KHR_BINARY_GLTF]=new ND(A)}catch(Z){if(P)P(Z);return}z=JSON.parse(C[f.KHR_BINARY_GLTF].content)}else z=JSON.parse(D.decode(A));else z=A;if(z.asset===void 0||z.asset.version[0]<2){if(P)P(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let O=new GD(z,{path:M||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});O.fileLoader.setRequestHeader(this.requestHeader);for(let T=0;T<this.pluginCallbacks.length;T++){let Z=this.pluginCallbacks[T](O);if(!Z.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");I[Z.name]=Z,C[Z.name]=!0}if(z.extensionsUsed)for(let T=0;T<z.extensionsUsed.length;++T){let Z=z.extensionsUsed[T],N=z.extensionsRequired||[];switch(Z){case f.KHR_MATERIALS_UNLIT:C[Z]=new nI;break;case f.KHR_DRACO_MESH_COMPRESSION:C[Z]=new UD(z,this.dracoLoader);break;case f.KHR_TEXTURE_TRANSFORM:C[Z]=new WD;break;case f.KHR_MESH_QUANTIZATION:C[Z]=new QD;break;default:if(N.indexOf(Z)>=0&&I[Z]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+Z+'".')}}O.setExtensions(C),O.setPlugins(I),O.parse(w,P)}parseAsync(A,M){let w=this;return new Promise(function(P,z){w.parse(A,M,P,z)})}}function fT(){let A={};return{get:function(M){return A[M]},add:function(M,w){A[M]=w},remove:function(M){delete A[M]},removeAll:function(){A={}}}}function a(A,M,w){let P=A.json.materials[M];if(P.extensions&&P.extensions[w])return P.extensions[w];return null}var f={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sI{constructor(A){this.parser=A,this.name=f.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let A=this.parser,M=this.parser.json.nodes||[];for(let w=0,P=M.length;w<P;w++){let z=M[w];if(z.extensions&&z.extensions[this.name]&&z.extensions[this.name].light!==void 0)A._addNodeRef(this.cache,z.extensions[this.name].light)}}_loadLight(A){let M=this.parser,w="light:"+A,P=M.cache.get(w);if(P)return P;let z=M.json,D=((z.extensions&&z.extensions[this.name]||{}).lights||[])[A],O,T=new _(16777215);if(D.color!==void 0)T.setRGB(D.color[0],D.color[1],D.color[2],_A);let Z=D.range!==void 0?D.range:0;switch(D.type){case"directional":O=new yP(T),O.target.position.set(0,0,-1),O.add(O.target);break;case"point":O=new $P(T),O.distance=Z;break;case"spot":O=new SP(T),O.distance=Z,D.spot=D.spot||{},D.spot.innerConeAngle=D.spot.innerConeAngle!==void 0?D.spot.innerConeAngle:0,D.spot.outerConeAngle=D.spot.outerConeAngle!==void 0?D.spot.outerConeAngle:Math.PI/4,O.angle=D.spot.outerConeAngle,O.penumbra=1-D.spot.innerConeAngle/D.spot.outerConeAngle,O.target.position.set(0,0,-1),O.add(O.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+D.type)}if(O.position.set(0,0,0),lA(O,D),D.intensity!==void 0)O.intensity=D.intensity;return O.name=M.createUniqueName(D.name||"light_"+A),P=Promise.resolve(O),M.cache.add(w,P),P}getDependency(A,M){if(A!=="light")return;return this._loadLight(M)}createNodeAttachment(A){let M=this,w=this.parser,z=w.json.nodes[A],I=(z.extensions&&z.extensions[this.name]||{}).light;if(I===void 0)return null;return this._loadLight(I).then(function(D){return w._getNodeRef(M.cache,I,D)})}}class nI{constructor(){this.name=f.KHR_MATERIALS_UNLIT}getMaterialType(){return wM}extendParams(A,M,w){let P=[];A.color=new _(1,1,1),A.opacity=1;let z=M.pbrMetallicRoughness;if(z){if(Array.isArray(z.baseColorFactor)){let C=z.baseColorFactor;A.color.setRGB(C[0],C[1],C[2],_A),A.opacity=C[3]}if(z.baseColorTexture!==void 0)P.push(w.assignTexture(A,"map",z.baseColorTexture,bM))}return Promise.all(P)}}class oI{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();if(w.emissiveStrength!==void 0)M.emissiveIntensity=w.emissiveStrength;return Promise.resolve()}}class aI{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(w.clearcoatFactor!==void 0)M.clearcoat=w.clearcoatFactor;if(w.clearcoatTexture!==void 0)P.push(this.parser.assignTexture(M,"clearcoatMap",w.clearcoatTexture));if(w.clearcoatRoughnessFactor!==void 0)M.clearcoatRoughness=w.clearcoatRoughnessFactor;if(w.clearcoatRoughnessTexture!==void 0)P.push(this.parser.assignTexture(M,"clearcoatRoughnessMap",w.clearcoatRoughnessTexture));if(w.clearcoatNormalTexture!==void 0){if(P.push(this.parser.assignTexture(M,"clearcoatNormalMap",w.clearcoatNormalTexture)),w.clearcoatNormalTexture.scale!==void 0){let z=w.clearcoatNormalTexture.scale;M.clearcoatNormalScale=new $(z,z)}}return Promise.all(P)}}class rI{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_DISPERSION}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();return M.dispersion=w.dispersion!==void 0?w.dispersion:0,Promise.resolve()}}class tI{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(w.iridescenceFactor!==void 0)M.iridescence=w.iridescenceFactor;if(w.iridescenceTexture!==void 0)P.push(this.parser.assignTexture(M,"iridescenceMap",w.iridescenceTexture));if(w.iridescenceIor!==void 0)M.iridescenceIOR=w.iridescenceIor;if(M.iridescenceThicknessRange===void 0)M.iridescenceThicknessRange=[100,400];if(w.iridescenceThicknessMinimum!==void 0)M.iridescenceThicknessRange[0]=w.iridescenceThicknessMinimum;if(w.iridescenceThicknessMaximum!==void 0)M.iridescenceThicknessRange[1]=w.iridescenceThicknessMaximum;if(w.iridescenceThicknessTexture!==void 0)P.push(this.parser.assignTexture(M,"iridescenceThicknessMap",w.iridescenceThicknessTexture));return Promise.all(P)}}class eI{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_SHEEN}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(M.sheenColor=new _(0,0,0),M.sheenRoughness=0,M.sheen=1,w.sheenColorFactor!==void 0){let z=w.sheenColorFactor;M.sheenColor.setRGB(z[0],z[1],z[2],_A)}if(w.sheenRoughnessFactor!==void 0)M.sheenRoughness=w.sheenRoughnessFactor;if(w.sheenColorTexture!==void 0)P.push(this.parser.assignTexture(M,"sheenColorMap",w.sheenColorTexture,bM));if(w.sheenRoughnessTexture!==void 0)P.push(this.parser.assignTexture(M,"sheenRoughnessMap",w.sheenRoughnessTexture));return Promise.all(P)}}class AD{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(w.transmissionFactor!==void 0)M.transmission=w.transmissionFactor;if(w.transmissionTexture!==void 0)P.push(this.parser.assignTexture(M,"transmissionMap",w.transmissionTexture));return Promise.all(P)}}class MD{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_VOLUME}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(M.thickness=w.thicknessFactor!==void 0?w.thicknessFactor:0,w.thicknessTexture!==void 0)P.push(this.parser.assignTexture(M,"thicknessMap",w.thicknessTexture));M.attenuationDistance=w.attenuationDistance||1/0;let z=w.attenuationColor||[1,1,1];return M.attenuationColor=new _().setRGB(z[0],z[1],z[2],_A),Promise.all(P)}}class wD{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_IOR}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();if(M.ior=w.ior!==void 0?w.ior:1.5,M.ior===0)M.ior=1000;return Promise.resolve()}}class PD{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_SPECULAR}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(M.specularIntensity=w.specularFactor!==void 0?w.specularFactor:1,w.specularTexture!==void 0)P.push(this.parser.assignTexture(M,"specularIntensityMap",w.specularTexture));let z=w.specularColorFactor||[1,1,1];if(M.specularColor=new _().setRGB(z[0],z[1],z[2],_A),w.specularColorTexture!==void 0)P.push(this.parser.assignTexture(M,"specularColorMap",w.specularColorTexture,bM));return Promise.all(P)}}class zD{constructor(A){this.parser=A,this.name=f.EXT_MATERIALS_BUMP}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(M.bumpScale=w.bumpFactor!==void 0?w.bumpFactor:1,w.bumpTexture!==void 0)P.push(this.parser.assignTexture(M,"bumpMap",w.bumpTexture));return Promise.all(P)}}class CD{constructor(A){this.parser=A,this.name=f.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){return a(this.parser,A,this.name)!==null?YA:null}extendMaterialParams(A,M){let w=a(this.parser,A,this.name);if(w===null)return Promise.resolve();let P=[];if(w.anisotropyStrength!==void 0)M.anisotropy=w.anisotropyStrength;if(w.anisotropyRotation!==void 0)M.anisotropyRotation=w.anisotropyRotation;if(w.anisotropyTexture!==void 0)P.push(this.parser.assignTexture(M,"anisotropyMap",w.anisotropyTexture));return Promise.all(P)}}class ID{constructor(A){this.parser=A,this.name=f.KHR_TEXTURE_BASISU}loadTexture(A){let M=this.parser,w=M.json,P=w.textures[A];if(!P.extensions||!P.extensions[this.name])return null;let z=P.extensions[this.name],C=M.options.ktx2Loader;if(!C)if(w.extensionsRequired&&w.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return M.loadTextureImage(A,z.source,C)}}class DD{constructor(A){this.parser=A,this.name=f.EXT_TEXTURE_WEBP}loadTexture(A){let M=this.name,w=this.parser,P=w.json,z=P.textures[A];if(!z.extensions||!z.extensions[M])return null;let C=z.extensions[M],I=P.images[C.source],D=w.textureLoader;if(I.uri){let O=w.options.manager.getHandler(I.uri);if(O!==null)D=O}return w.loadTextureImage(A,C.source,D)}}class OD{constructor(A){this.parser=A,this.name=f.EXT_TEXTURE_AVIF}loadTexture(A){let M=this.name,w=this.parser,P=w.json,z=P.textures[A];if(!z.extensions||!z.extensions[M])return null;let C=z.extensions[M],I=P.images[C.source],D=w.textureLoader;if(I.uri){let O=w.options.manager.getHandler(I.uri);if(O!==null)D=O}return w.loadTextureImage(A,C.source,D)}}class EC{constructor(A,M){this.name=M,this.parser=A}loadBufferView(A){let M=this.parser.json,w=M.bufferViews[A];if(w.extensions&&w.extensions[this.name]){let P=w.extensions[this.name],z=this.parser.getDependency("buffer",P.buffer),C=this.parser.options.meshoptDecoder;if(!C||!C.supported)if(M.extensionsRequired&&M.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return z.then(function(I){let D=P.byteOffset||0,O=P.byteLength||0,T=P.count,Z=P.byteStride,N=new Uint8Array(I,D,O);if(C.decodeGltfBufferAsync)return C.decodeGltfBufferAsync(T,Z,N,P.mode,P.filter).then(function(U){return U.buffer});else return C.ready.then(function(){let U=new ArrayBuffer(T*Z);return C.decodeGltfBuffer(new Uint8Array(U),T,Z,N,P.mode,P.filter),U})})}else return null}}class TD{constructor(A){this.name=f.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){let M=this.parser.json,w=M.nodes[A];if(!w.extensions||!w.extensions[this.name]||w.mesh===void 0)return null;let P=M.meshes[w.mesh];for(let O of P.primitives)if(O.mode!==vA.TRIANGLES&&O.mode!==vA.TRIANGLE_STRIP&&O.mode!==vA.TRIANGLE_FAN&&O.mode!==void 0)return null;let C=w.extensions[this.name].attributes,I=[],D={};for(let O in C)I.push(this.parser.getDependency("accessor",C[O]).then((T)=>{return D[O]=T,D[O]}));if(I.length<1)return null;return I.push(this.parser.createNodeMesh(A)),Promise.all(I).then((O)=>{let T=O.pop(),Z=T.isGroup?T.children:[T],N=O[0].count,U=[];for(let W of Z){let Q=new h,J=new L,G=new ZA,X=new L(1,1,1),j=new HP(W.geometry,W.material,N);for(let K=0;K<N;K++){if(D.TRANSLATION)J.fromBufferAttribute(D.TRANSLATION,K);if(D.ROTATION)G.fromBufferAttribute(D.ROTATION,K);if(D.SCALE)X.fromBufferAttribute(D.SCALE,K);j.setMatrixAt(K,Q.compose(J,G,X))}let E=null;for(let K in D)if(K==="_COLOR_0"){let H=D[K];j.instanceColor=new QM(H.array,H.itemSize,H.normalized)}else if(K!=="TRANSLATION"&&K!=="ROTATION"&&K!=="SCALE"){if(E===null){let V=j.geometry;E=new xA,E.name=V.name;for(let Y in V.attributes)E.setAttribute(Y,V.attributes[Y]);for(let Y in V.morphAttributes)E.morphAttributes[Y]=V.morphAttributes[Y];if(V.index!==null)E.setIndex(V.index);E.morphTargetsRelative=V.morphTargetsRelative;for(let Y of V.groups)E.addGroup(Y.start,Y.count,Y.materialIndex);if(V.boundingBox!==null)E.boundingBox=V.boundingBox.clone();if(V.boundingSphere!==null)E.boundingSphere=V.boundingSphere.clone();E.drawRange.start=V.drawRange.start,E.drawRange.count=V.drawRange.count,E.userData=Object.assign({},V.userData),j.geometry=E}let H=D[K];E.setAttribute(K,new QM(H.array,H.itemSize,H.normalized))}n.prototype.copy.call(j,W),this.parser.assignFinalMaterial(j),U.push(j)}if(T.isGroup)return T.clear(),T.add(...U),T;return U[0]})}}var ZD="glTF",bw=12,dI={JSON:1313821514,BIN:5130562};class ND{constructor(A){this.name=f.KHR_BINARY_GLTF,this.content=null,this.body=null;let M=new DataView(A,0,bw),w=new TextDecoder;if(this.header={magic:w.decode(new Uint8Array(A.slice(0,4))),version:M.getUint32(4,!0),length:M.getUint32(8,!0)},this.header.magic!==ZD)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let P=this.header.length-bw,z=new DataView(A,bw),C=0;while(C<P){let I=z.getUint32(C,!0);C+=4;let D=z.getUint32(C,!0);if(C+=4,D===dI.JSON){let O=new Uint8Array(A,bw+C,I);this.content=w.decode(O)}else if(D===dI.BIN){let O=bw+C;this.body=A.slice(O,O+I)}C+=I}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class UD{constructor(A,M){if(!M)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=f.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=M,this.dracoLoader.preload()}decodePrimitive(A,M){let w=this.json,P=this.dracoLoader,z=A.extensions[this.name].bufferView,C=A.extensions[this.name].attributes,I={},D={},O={};for(let T in C){let Z=HC[T]||T.toLowerCase();I[Z]=C[T]}for(let T in A.attributes){let Z=HC[T]||T.toLowerCase();if(C[T]!==void 0){let N=w.accessors[A.attributes[T]],U=zw[N.componentType];O[Z]=U.name,D[Z]=N.normalized===!0}}return M.getDependency("bufferView",z).then(function(T){return new Promise(function(Z,N){P.decodeDracoFile(T,function(U){for(let W in U.attributes){let Q=U.attributes[W],J=D[W];if(J!==void 0)Q.normalized=J}Z(U)},I,O,_A,N)})})}}class WD{constructor(){this.name=f.KHR_TEXTURE_TRANSFORM}extendTexture(A,M){if((M.texCoord===void 0||M.texCoord===A.channel)&&M.offset===void 0&&M.rotation===void 0&&M.scale===void 0)return A;if(A=A.clone(),M.texCoord!==void 0)A.channel=M.texCoord;if(M.offset!==void 0)A.offset.fromArray(M.offset);if(M.rotation!==void 0)A.rotation=M.rotation;if(M.scale!==void 0)A.repeat.fromArray(M.scale);if(M.rotation!==void 0){let w=Math.cos(A.rotation),P=Math.sin(A.rotation);A.matrix.set(A.repeat.x*w,A.repeat.y*P,A.offset.x,-A.repeat.x*P,A.repeat.y*w,A.offset.y,0,0,1),A.matrixAutoUpdate=!1}return A.needsUpdate=!0,A}}class QD{constructor(){this.name=f.KHR_MESH_QUANTIZATION}}class vC extends PM{constructor(A,M,w,P){super(A,M,w,P)}copySampleValue_(A){let M=this.resultBuffer,w=this.sampleValues,P=this.valueSize,z=A*P*3+P;for(let C=0;C!==P;C++)M[C]=w[z+C];return M}interpolate_(A,M,w,P){let z=this.resultBuffer,C=this.sampleValues,I=this.valueSize,D=I*2,O=I*3,T=P-M,Z=(w-M)/T,N=Z*Z,U=N*Z,W=A*O,Q=W-O,J=-2*U+3*N,G=U-N,X=1-J,j=G-N+Z;for(let E=0;E!==I;E++){let K=C[Q+E+I],H=C[Q+E+D]*T,V=C[W+E+I],Y=C[W+E]*T;z[E]=X*K+j*H+J*V+G*Y}return z}}var hT=new ZA;class JD extends vC{interpolate_(A,M,w,P){let z=super.interpolate_(A,M,w,P);return hT.fromArray(z).normalize().toArray(z),z}}var vA={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zw={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uI={9728:LP,9729:Vw,9984:sz,9985:oz,9986:nz,9987:XP},cI={33071:cz,33648:iz,10497:jw},YC={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},HC={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},FM={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gT={CUBICSPLINE:void 0,LINEAR:YP,STEP:az},jC={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mT(A){if(A.DefaultMaterial===void 0)A.DefaultMaterial=new jM({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_z});return A.DefaultMaterial}function xM(A,M,w){for(let P in w.extensions)if(A[P]===void 0)M.userData.gltfExtensions=M.userData.gltfExtensions||{},M.userData.gltfExtensions[P]=w.extensions[P]}function lA(A,M){if(M.extras!==void 0)if(typeof M.extras==="object")Object.assign(A.userData,M.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+M.extras)}function pT(A,M,w){let P=!1,z=!1,C=!1;for(let T=0,Z=M.length;T<Z;T++){let N=M[T];if(N.POSITION!==void 0)P=!0;if(N.NORMAL!==void 0)z=!0;if(N.COLOR_0!==void 0)C=!0;if(P&&z&&C)break}if(!P&&!z&&!C)return Promise.resolve(A);let I=[],D=[],O=[];for(let T=0,Z=M.length;T<Z;T++){let N=M[T];if(P){let U=N.POSITION!==void 0?w.getDependency("accessor",N.POSITION):A.attributes.position;I.push(U)}if(z){let U=N.NORMAL!==void 0?w.getDependency("accessor",N.NORMAL):A.attributes.normal;D.push(U)}if(C){let U=N.COLOR_0!==void 0?w.getDependency("accessor",N.COLOR_0):A.attributes.color;O.push(U)}}return Promise.all([Promise.all(I),Promise.all(D),Promise.all(O)]).then(function(T){let Z=T[0],N=T[1],U=T[2];if(P)A.morphAttributes.position=Z;if(z)A.morphAttributes.normal=N;if(C)A.morphAttributes.color=U;return A.morphTargetsRelative=!0,A})}function lT(A,M){if(A.updateMorphTargets(),M.weights!==void 0)for(let w=0,P=M.weights.length;w<P;w++)A.morphTargetInfluences[w]=M.weights[w];if(M.extras&&Array.isArray(M.extras.targetNames)){let w=M.extras.targetNames;if(A.morphTargetInfluences.length===w.length){A.morphTargetDictionary={};for(let P=0,z=w.length;P<z;P++)A.morphTargetDictionary[w[P]]=P}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dT(A){let M,w=A.extensions&&A.extensions[f.KHR_DRACO_MESH_COMPRESSION];if(w)M="draco:"+w.bufferView+":"+w.indices+":"+VC(w.attributes);else M=A.indices+":"+VC(A.attributes)+":"+A.mode;if(A.targets!==void 0)for(let P=0,z=A.targets.length;P<z;P++)M+=":"+VC(A.targets[P]);return M}function VC(A){let M="",w=Object.keys(A).sort();for(let P=0,z=w.length;P<z;P++)M+=w[P]+":"+A[w[P]]+";";return M}function KC(A){switch(A){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uT(A){if(A.search(/\.jpe?g($|\?)/i)>0||A.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(A.search(/\.webp($|\?)/i)>0||A.search(/^data\:image\/webp/)===0)return"image/webp";if(A.search(/\.ktx2($|\?)/i)>0||A.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var cT=new h;class GD{constructor(A={},M={}){this.json=A,this.extensions={},this.plugins={},this.options=M,this.cache=new fT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let w=!1,P=-1,z=!1,C=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let I=navigator.userAgent;w=/^((?!chrome|android).)*safari/i.test(I)===!0;let D=I.match(/Version\/(\d+)/);P=w&&D?parseInt(D[1],10):-1,z=I.indexOf("Firefox")>-1,C=z?I.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||w&&P<17||z&&C<98)this.textureLoader=new kP(this.options.manager);else this.textureLoader=new bP(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kw(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,M){let w=this,P=this.json,z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(C){return C._markDefs&&C._markDefs()}),Promise.all(this._invokeAll(function(C){return C.beforeRoot&&C.beforeRoot()})).then(function(){return Promise.all([w.getDependencies("scene"),w.getDependencies("animation"),w.getDependencies("camera")])}).then(function(C){let I={scene:C[0][P.scene||0],scenes:C[0],animations:C[1],cameras:C[2],asset:P.asset,parser:w,userData:{}};return xM(z,I,P),lA(I,P),Promise.all(w._invokeAll(function(D){return D.afterRoot&&D.afterRoot(I)})).then(function(){for(let D of I.scenes)D.updateMatrixWorld();A(I)})}).catch(M)}_markDefs(){let A=this.json.nodes||[],M=this.json.skins||[],w=this.json.meshes||[];for(let P=0,z=M.length;P<z;P++){let C=M[P].joints;for(let I=0,D=C.length;I<D;I++)A[C[I]].isBone=!0}for(let P=0,z=A.length;P<z;P++){let C=A[P];if(C.mesh!==void 0){if(this._addNodeRef(this.meshCache,C.mesh),C.skin!==void 0)w[C.mesh].isSkinnedMesh=!0}if(C.camera!==void 0)this._addNodeRef(this.cameraCache,C.camera)}}_addNodeRef(A,M){if(M===void 0)return;if(A.refs[M]===void 0)A.refs[M]=A.uses[M]=0;A.refs[M]++}_getNodeRef(A,M,w){if(A.refs[M]<=1)return w;let P=w.clone(),z=(C,I)=>{let D=this.associations.get(C);if(D!=null)this.associations.set(I,D);for(let[O,T]of C.children.entries())z(T,I.children[O])};return z(w,P),P.name+="_instance_"+A.uses[M]++,P}_invokeOne(A){let M=Object.values(this.plugins);M.push(this);for(let w=0;w<M.length;w++){let P=A(M[w]);if(P)return P}return null}_invokeAll(A){let M=Object.values(this.plugins);M.unshift(this);let w=[];for(let P=0;P<M.length;P++){let z=A(M[P]);if(z)w.push(z)}return w}getDependency(A,M){let w=A+":"+M,P=this.cache.get(w);if(!P){switch(A){case"scene":P=this.loadScene(M);break;case"node":P=this._invokeOne(function(z){return z.loadNode&&z.loadNode(M)});break;case"mesh":P=this._invokeOne(function(z){return z.loadMesh&&z.loadMesh(M)});break;case"accessor":P=this.loadAccessor(M);break;case"bufferView":P=this._invokeOne(function(z){return z.loadBufferView&&z.loadBufferView(M)});break;case"buffer":P=this.loadBuffer(M);break;case"material":P=this._invokeOne(function(z){return z.loadMaterial&&z.loadMaterial(M)});break;case"texture":P=this._invokeOne(function(z){return z.loadTexture&&z.loadTexture(M)});break;case"skin":P=this.loadSkin(M);break;case"animation":P=this._invokeOne(function(z){return z.loadAnimation&&z.loadAnimation(M)});break;case"camera":P=this.loadCamera(M);break;default:if(P=this._invokeOne(function(z){return z!=this&&z.getDependency&&z.getDependency(A,M)}),!P)throw Error("Unknown type: "+A);break}this.cache.add(w,P)}return P}getDependencies(A){let M=this.cache.get(A);if(!M){let w=this,P=this.json[A+(A==="mesh"?"es":"s")]||[];M=Promise.all(P.map(function(z,C){return w.getDependency(A,C)})),this.cache.add(A,M)}return M}loadBuffer(A){let M=this.json.buffers[A],w=this.fileLoader;if(M.type&&M.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+M.type+" buffer type is not supported.");if(M.uri===void 0&&A===0)return Promise.resolve(this.extensions[f.KHR_BINARY_GLTF].body);let P=this.options;return new Promise(function(z,C){w.load(vM.resolveURL(M.uri,P.path),z,void 0,function(){C(Error('THREE.GLTFLoader: Failed to load buffer "'+M.uri+'".'))})})}loadBufferView(A){let M=this.json.bufferViews[A];return this.getDependency("buffer",M.buffer).then(function(w){let P=M.byteLength||0,z=M.byteOffset||0;return w.slice(z,z+P)})}loadAccessor(A){let M=this,w=this.json,P=this.json.accessors[A];if(P.bufferView===void 0&&P.sparse===void 0){let C=YC[P.type],I=zw[P.componentType],D=P.normalized===!0,O=new I(P.count*C);return Promise.resolve(new TA(O,C,D))}let z=[];if(P.bufferView!==void 0)z.push(this.getDependency("bufferView",P.bufferView));else z.push(null);if(P.sparse!==void 0)z.push(this.getDependency("bufferView",P.sparse.indices.bufferView)),z.push(this.getDependency("bufferView",P.sparse.values.bufferView));return Promise.all(z).then(function(C){let I=C[0],D=YC[P.type],O=zw[P.componentType],T=O.BYTES_PER_ELEMENT,Z=T*D,N=P.byteOffset||0,U=P.bufferView!==void 0?w.bufferViews[P.bufferView].byteStride:void 0,W=P.normalized===!0,Q,J;if(U&&U!==Z){let G=Math.floor(N/U),X="InterleavedBuffer:"+P.bufferView+":"+P.componentType+":"+G+":"+P.count,j=M.cache.get(X);if(!j)Q=new O(I,G*U,P.count*U/T),j=new Kw(Q,U/T),M.cache.add(X,j);J=new Mw(j,D,N%U/T,W)}else{if(I===null)Q=new O(P.count*D);else Q=new O(I,N,P.count*D);J=new TA(Q,D,W)}if(P.sparse!==void 0){let G=YC.SCALAR,X=zw[P.sparse.indices.componentType],j=P.sparse.indices.byteOffset||0,E=P.sparse.values.byteOffset||0,K=new X(C[1],j,P.sparse.count*G),H=new O(C[2],E,P.sparse.count*D);if(I!==null)J=new TA(J.array.slice(),J.itemSize,J.normalized);J.normalized=!1;for(let V=0,Y=K.length;V<Y;V++){let v=K[V];if(J.setX(v,H[V*D]),D>=2)J.setY(v,H[V*D+1]);if(D>=3)J.setZ(v,H[V*D+2]);if(D>=4)J.setW(v,H[V*D+3]);if(D>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}J.normalized=W}return J})}loadTexture(A){let M=this.json,w=this.options,z=M.textures[A].source,C=M.images[z],I=this.textureLoader;if(C.uri){let D=w.manager.getHandler(C.uri);if(D!==null)I=D}return this.loadTextureImage(A,z,I)}loadTextureImage(A,M,w){let P=this,z=this.json,C=z.textures[A],I=z.images[M],D=(I.uri||I.bufferView)+":"+C.sampler;if(this.textureCache[D])return this.textureCache[D];let O=this.loadImageSource(M,w).then(function(T){if(T.flipY=!1,T.name=C.name||I.name||"",T.name===""&&typeof I.uri==="string"&&I.uri.startsWith("data:image/")===!1)T.name=I.uri;let N=(z.samplers||{})[C.sampler]||{};return T.magFilter=uI[N.magFilter]||Vw,T.minFilter=uI[N.minFilter]||XP,T.wrapS=cI[N.wrapS]||jw,T.wrapT=cI[N.wrapT]||jw,T.generateMipmaps=!T.isCompressedTexture&&T.minFilter!==LP&&T.minFilter!==Vw,P.associations.set(T,{textures:A}),T}).catch(function(){return null});return this.textureCache[D]=O,O}loadImageSource(A,M){let w=this,P=this.json,z=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then((Z)=>Z.clone());let C=P.images[A],I=self.URL||self.webkitURL,D=C.uri||"",O=!1;if(C.bufferView!==void 0)D=w.getDependency("bufferView",C.bufferView).then(function(Z){O=!0;let N=new Blob([Z],{type:C.mimeType});return D=I.createObjectURL(N),D});else if(C.uri===void 0)throw Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");let T=Promise.resolve(D).then(function(Z){return new Promise(function(N,U){let W=N;if(M.isImageBitmapLoader===!0)W=function(Q){let J=new LA(Q);J.needsUpdate=!0,N(J)};M.load(vM.resolveURL(Z,z.path),W,void 0,U)})}).then(function(Z){if(O===!0)I.revokeObjectURL(D);return lA(Z,C),Z.userData.mimeType=C.mimeType||uT(C.uri),Z}).catch(function(Z){throw console.error("THREE.GLTFLoader: Couldn't load texture",D),Z});return this.sourceCache[A]=T,T}assignTexture(A,M,w,P){let z=this;return this.getDependency("texture",w.index).then(function(C){if(!C)return null;if(w.texCoord!==void 0&&w.texCoord>0)C=C.clone(),C.channel=w.texCoord;if(z.extensions[f.KHR_TEXTURE_TRANSFORM]){let I=w.extensions!==void 0?w.extensions[f.KHR_TEXTURE_TRANSFORM]:void 0;if(I){let D=z.associations.get(C);C=z.extensions[f.KHR_TEXTURE_TRANSFORM].extendTexture(C,I),z.associations.set(C,D)}}if(P!==void 0)C.colorSpace=P;return A[M]=C,C})}assignFinalMaterial(A){let{geometry:M,material:w}=A,P=M.attributes.tangent===void 0,z=M.attributes.color!==void 0,C=M.attributes.normal===void 0;if(A.isPoints){let I="PointsMaterial:"+w.uuid,D=this.cache.get(I);if(!D)D=new Rw,mA.prototype.copy.call(D,w),D.color.copy(w.color),D.map=w.map,D.sizeAttenuation=!1,this.cache.add(I,D);w=D}else if(A.isLine){let I="LineBasicMaterial:"+w.uuid,D=this.cache.get(I);if(!D)D=new Fw,mA.prototype.copy.call(D,w),D.color.copy(w.color),D.map=w.map,this.cache.add(I,D);w=D}if(P||z||C){let I="ClonedMaterial:"+w.uuid+":";if(P)I+="derivative-tangents:";if(z)I+="vertex-colors:";if(C)I+="flat-shading:";let D=this.cache.get(I);if(!D){if(D=w.clone(),z)D.vertexColors=!0;if(C)D.flatShading=!0;if(P){if(D.normalScale)D.normalScale.y*=-1;if(D.clearcoatNormalScale)D.clearcoatNormalScale.y*=-1}this.cache.add(I,D),this.associations.set(D,this.associations.get(w))}w=D}A.material=w}getMaterialType(){return jM}loadMaterial(A){let M=this,w=this.json,P=this.extensions,z=w.materials[A],C,I={},D=z.extensions||{},O=[];if(D[f.KHR_MATERIALS_UNLIT]){let Z=P[f.KHR_MATERIALS_UNLIT];C=Z.getMaterialType(),O.push(Z.extendParams(I,z,M))}else{let Z=z.pbrMetallicRoughness||{};if(I.color=new _(1,1,1),I.opacity=1,Array.isArray(Z.baseColorFactor)){let N=Z.baseColorFactor;I.color.setRGB(N[0],N[1],N[2],_A),I.opacity=N[3]}if(Z.baseColorTexture!==void 0)O.push(M.assignTexture(I,"map",Z.baseColorTexture,bM));if(I.metalness=Z.metallicFactor!==void 0?Z.metallicFactor:1,I.roughness=Z.roughnessFactor!==void 0?Z.roughnessFactor:1,Z.metallicRoughnessTexture!==void 0)O.push(M.assignTexture(I,"metalnessMap",Z.metallicRoughnessTexture)),O.push(M.assignTexture(I,"roughnessMap",Z.metallicRoughnessTexture));C=this._invokeOne(function(N){return N.getMaterialType&&N.getMaterialType(A)}),O.push(Promise.all(this._invokeAll(function(N){return N.extendMaterialParams&&N.extendMaterialParams(A,I)})))}if(z.doubleSided===!0)I.side=xz;let T=z.alphaMode||jC.OPAQUE;if(T===jC.BLEND)I.transparent=!0,I.depthWrite=!1;else if(I.transparent=!1,T===jC.MASK)I.alphaTest=z.alphaCutoff!==void 0?z.alphaCutoff:0.5;if(z.normalTexture!==void 0&&C!==wM){if(O.push(M.assignTexture(I,"normalMap",z.normalTexture)),I.normalScale=new $(1,1),z.normalTexture.scale!==void 0){let Z=z.normalTexture.scale;I.normalScale.set(Z,Z)}}if(z.occlusionTexture!==void 0&&C!==wM){if(O.push(M.assignTexture(I,"aoMap",z.occlusionTexture)),z.occlusionTexture.strength!==void 0)I.aoMapIntensity=z.occlusionTexture.strength}if(z.emissiveFactor!==void 0&&C!==wM){let Z=z.emissiveFactor;I.emissive=new _().setRGB(Z[0],Z[1],Z[2],_A)}if(z.emissiveTexture!==void 0&&C!==wM)O.push(M.assignTexture(I,"emissiveMap",z.emissiveTexture,bM));return Promise.all(O).then(function(){let Z=new C(I);if(z.name)Z.name=z.name;if(lA(Z,z),M.associations.set(Z,{materials:A}),z.extensions)xM(P,Z,z);return Z})}createUniqueName(A){let M=p.sanitizeNodeName(A||"");if(M in this.nodeNamesUsed)return M+"_"+ ++this.nodeNamesUsed[M];else return this.nodeNamesUsed[M]=0,M}loadGeometries(A){let M=this,w=this.extensions,P=this.primitiveCache;function z(I){return w[f.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(I,M).then(function(D){return iI(D,I,M)})}let C=[];for(let I=0,D=A.length;I<D;I++){let O=A[I],T=dT(O),Z=P[T];if(Z)C.push(Z.promise);else{let N;if(O.extensions&&O.extensions[f.KHR_DRACO_MESH_COMPRESSION])N=z(O);else N=iI(new xA,O,M);if(O.mode===vA.TRIANGLE_STRIP)N=N.then((U)=>XC(U,Ew));else if(O.mode===vA.TRIANGLE_FAN)N=N.then((U)=>XC(U,Aw));P[T]={primitive:O,promise:N},C.push(N)}}return Promise.all(C)}loadMesh(A){let M=this,w=this.json,P=this.extensions,z=w.meshes[A],C=z.primitives,I=[];for(let D=0,O=C.length;D<O;D++){let T=C[D].material===void 0?mT(this.cache):this.getDependency("material",C[D].material);I.push(T)}return I.push(M.loadGeometries(C)),Promise.all(I).then(async function(D){let O=D.slice(0,D.length-1),T=D[D.length-1],Z=[];for(let U=0,W=T.length;U<W;U++){let Q=T[U],J=C[U],G,X=O[U];if(J.mode===vA.TRIANGLES||J.mode===vA.TRIANGLE_STRIP||J.mode===vA.TRIANGLE_FAN||J.mode===void 0){let j=z.isSkinnedMesh===!0,E=Q.hasAttribute("skinIndex")&&Q.hasAttribute("skinWeight");if(j&&E===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(G=j&&E?new VP(Q,X):new pA(Q,X),G.isSkinnedMesh===!0)G.normalizeSkinWeights()}else if(J.mode===vA.LINES)G=new KP(Q,X);else if(J.mode===vA.LINE_STRIP)G=new ww(Q,X);else if(J.mode===vA.LINE_LOOP)G=new BP(Q,X);else if(J.mode===vA.POINTS)G=new vP(Q,X);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+J.mode);if(Object.keys(G.geometry.morphAttributes).length>0)lT(G,z);if(G.name=M.createUniqueName(z.name||"mesh_"+A),lA(G,z),J.extensions)xM(P,G,J);M.assignFinalMaterial(G),Z.push(G)}for(let U=0,W=Z.length;U<W;U++)M.associations.set(Z[U],{meshes:A,primitives:U});if(Z.length===1){if(z.extensions)xM(P,Z[0],z);return Z[0]}let N=new XM;if(z.extensions)xM(P,N,z);M.associations.set(N,{meshes:A});for(let U=0,W=Z.length;U<W;U++)N.add(Z[U]);return N})}loadCamera(A){let M,w=this.json.cameras[A],P=w[w.type];if(!P){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(w.type==="perspective")M=new BM(Hw.radToDeg(P.yfov),P.aspectRatio||1,P.znear||1,P.zfar||2000000);else if(w.type==="orthographic")M=new $w(-P.xmag,P.xmag,P.ymag,-P.ymag,P.znear,P.zfar);if(w.name)M.name=this.createUniqueName(w.name);return lA(M,w),Promise.resolve(M)}loadSkin(A){let M=this.json.skins[A],w=[];for(let P=0,z=M.joints.length;P<z;P++)w.push(this._loadNodeShallow(M.joints[P]));if(M.inverseBindMatrices!==void 0)w.push(this.getDependency("accessor",M.inverseBindMatrices));else w.push(null);return Promise.all(w).then(function(P){let z=P.pop(),C=P,I=[],D=[];for(let O=0,T=C.length;O<T;O++){let Z=C[O];if(Z){I.push(Z);let N=new h;if(z!==null)N.fromArray(z.array,O*16);D.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',M.joints[O])}return new vw(I,D)})}loadAnimation(A){let M=this.json,w=this,P=M.animations[A],z=P.name?P.name:"animation_"+A,C=[],I=[],D=[],O=[],T=[];for(let Z=0,N=P.channels.length;Z<N;Z++){let U=P.channels[Z],W=P.samplers[U.sampler],Q=U.target,J=Q.node,G=P.parameters!==void 0?P.parameters[W.input]:W.input,X=P.parameters!==void 0?P.parameters[W.output]:W.output;if(Q.node===void 0)continue;C.push(this.getDependency("node",J)),I.push(this.getDependency("accessor",G)),D.push(this.getDependency("accessor",X)),O.push(W),T.push(Q)}return Promise.all([Promise.all(C),Promise.all(I),Promise.all(D),Promise.all(O),Promise.all(T)]).then(function(Z){let N=Z[0],U=Z[1],W=Z[2],Q=Z[3],J=Z[4],G=[];for(let j=0,E=N.length;j<E;j++){let K=N[j],H=U[j],V=W[j],Y=Q[j],v=J[j];if(K===void 0)continue;if(K.updateMatrix)K.updateMatrix();let k=w._createAnimationTracks(K,H,V,Y,v);if(k)for(let R=0;R<k.length;R++)G.push(k[R])}let X=new RP(z,void 0,G);return lA(X,P),X})}createNodeMesh(A){let M=this.json,w=this,P=M.nodes[A];if(P.mesh===void 0)return null;return w.getDependency("mesh",P.mesh).then(function(z){let C=w._getNodeRef(w.meshCache,P.mesh,z);if(P.weights!==void 0)C.traverse(function(I){if(!I.isMesh)return;for(let D=0,O=P.weights.length;D<O;D++)I.morphTargetInfluences[D]=P.weights[D]});return C})}loadNode(A){let M=this.json,w=this,P=M.nodes[A],z=w._loadNodeShallow(A),C=[],I=P.children||[];for(let O=0,T=I.length;O<T;O++)C.push(w.getDependency("node",I[O]));let D=P.skin===void 0?Promise.resolve(null):w.getDependency("skin",P.skin);return Promise.all([z,Promise.all(C),D]).then(function(O){let T=O[0],Z=O[1],N=O[2];if(N!==null)T.traverse(function(U){if(!U.isSkinnedMesh)return;U.bind(N,cT)});for(let U=0,W=Z.length;U<W;U++)T.add(Z[U]);if(T.userData.pivot!==void 0&&Z.length>0){let U=T.userData.pivot,W=Z[0];T.pivot=new L().fromArray(U),T.position.x-=U[0],T.position.y-=U[1],T.position.z-=U[2],W.position.set(0,0,0),delete T.userData.pivot}return T})}_loadNodeShallow(A){let M=this.json,w=this.extensions,P=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];let z=M.nodes[A],C=z.name?P.createUniqueName(z.name):"",I=[],D=P._invokeOne(function(O){return O.createNodeMesh&&O.createNodeMesh(A)});if(D)I.push(D);if(z.camera!==void 0)I.push(P.getDependency("camera",z.camera).then(function(O){return P._getNodeRef(P.cameraCache,z.camera,O)}));return P._invokeAll(function(O){return O.createNodeAttachment&&O.createNodeAttachment(A)}).forEach(function(O){I.push(O)}),this.nodeCache[A]=Promise.all(I).then(function(O){let T;if(z.isBone===!0)T=new Bw;else if(O.length>1)T=new XM;else if(O.length===1)T=O[0];else T=new n;if(T!==O[0])for(let Z=0,N=O.length;Z<N;Z++)T.add(O[Z]);if(z.name)T.userData.name=z.name,T.name=C;if(lA(T,z),z.extensions)xM(w,T,z);if(z.matrix!==void 0){let Z=new h;Z.fromArray(z.matrix),T.applyMatrix4(Z)}else{if(z.translation!==void 0)T.position.fromArray(z.translation);if(z.rotation!==void 0)T.quaternion.fromArray(z.rotation);if(z.scale!==void 0)T.scale.fromArray(z.scale)}if(!P.associations.has(T))P.associations.set(T,{});else if(z.mesh!==void 0&&P.meshCache.refs[z.mesh]>1){let Z=P.associations.get(T);P.associations.set(T,{...Z})}return P.associations.get(T).nodes=A,T}),this.nodeCache[A]}loadScene(A){let M=this.extensions,w=this.json.scenes[A],P=this,z=new XM;if(w.name)z.name=P.createUniqueName(w.name);if(lA(z,w),w.extensions)xM(M,z,w);let C=w.nodes||[],I=[];for(let D=0,O=C.length;D<O;D++)I.push(P.getDependency("node",C[D]));return Promise.all(I).then(function(D){for(let T=0,Z=D.length;T<Z;T++){let N=D[T];if(N.parent!==null)z.add(pI(N));else z.add(N)}let O=(T)=>{let Z=new Map;for(let[N,U]of P.associations)if(N instanceof mA||N instanceof LA)Z.set(N,U);return T.traverse((N)=>{let U=P.associations.get(N);if(U!=null)Z.set(N,U)}),Z};return P.associations=O(z),z})}_createAnimationTracks(A,M,w,P,z){let C=[],I=A.name?A.name:A.uuid,D=[];function O(U){if(U.morphTargetInfluences)D.push(U.name?U.name:U.uuid)}if(FM[z.path]===FM.weights){if(O(A),A.isGroup)A.children.forEach(O)}else D.push(I);let T;switch(FM[z.path]){case FM.weights:T=EM;break;case FM.rotation:T=HM;break;case FM.translation:case FM.scale:T=_M;break;default:switch(w.itemSize){case 1:T=EM;break;case 2:case 3:default:T=_M;break}break}let Z=P.interpolation!==void 0?gT[P.interpolation]:YP,N=this._getArrayFromAccessor(w);for(let U=0,W=D.length;U<W;U++){let Q=new T(D[U]+"."+FM[z.path],M.array,N,Z);if(P.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(Q);C.push(Q)}return C}_getArrayFromAccessor(A){let M=A.array;if(A.normalized){let w=KC(M.constructor),P=new Float32Array(M.length);for(let z=0,C=M.length;z<C;z++)P[z]=M[z]*w;M=P}return M}_createCubicSplineTrackInterpolant(A){A.createInterpolant=function(w){return new(this instanceof HM?JD:vC)(this.times,this.values,this.getValueSize()/3,w)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iT(A,M,w){let P=M.attributes,z=new BA;if(P.POSITION!==void 0){let D=w.json.accessors[P.POSITION],O=D.min,T=D.max;if(O!==void 0&&T!==void 0){if(z.set(new L(O[0],O[1],O[2]),new L(T[0],T[1],T[2])),D.normalized){let Z=KC(zw[D.componentType]);z.min.multiplyScalar(Z),z.max.multiplyScalar(Z)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let C=M.targets;if(C!==void 0){let D=new L,O=new L;for(let T=0,Z=C.length;T<Z;T++){let N=C[T];if(N.POSITION!==void 0){let U=w.json.accessors[N.POSITION],W=U.min,Q=U.max;if(W!==void 0&&Q!==void 0){if(O.setX(Math.max(Math.abs(W[0]),Math.abs(Q[0]))),O.setY(Math.max(Math.abs(W[1]),Math.abs(Q[1]))),O.setZ(Math.max(Math.abs(W[2]),Math.abs(Q[2]))),U.normalized){let J=KC(zw[U.componentType]);O.multiplyScalar(J)}D.max(O)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}z.expandByVector(D)}A.boundingBox=z;let I=new XA;z.getCenter(I.center),I.radius=z.min.distanceTo(z.max)/2,A.boundingSphere=I}function iI(A,M,w){let P=M.attributes,z=[];function C(I,D){return w.getDependency("accessor",I).then(function(O){A.setAttribute(D,O)})}for(let I in P){let D=HC[I]||I.toLowerCase();if(D in A.attributes)continue;z.push(C(P[I],D))}if(M.indices!==void 0&&!A.index){let I=w.getDependency("accessor",M.indices).then(function(D){A.setIndex(D)});z.push(I)}if(OA.workingColorSpace!==_A&&"COLOR_0"in P)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${OA.workingColorSpace}" not supported.`);return lA(A,M),iT(A,M,w),Promise.all(z).then(function(){return M.targets!==void 0?pT(A,M.targets,w):A})}var LD="Z2xURgIAAABwTQIAyMgAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4yLjQwIiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzU5LDc5XX1dLCJub2RlcyI6W3sibWVzaCI6MCwibmFtZSI6IkNoYXNzaXNfRmxvb3IiLCJ0cmFuc2xhdGlvbiI6WzAsMC4yMTk5OTk5OTg4MDc5MDcxLDAuMjAwMDAwMDAyOTgwMjMyMjRdfSx7Im1lc2giOjEsIm5hbWUiOiJDaGFzc2lzX0Zyb250Q293bCIsInRyYW5zbGF0aW9uIjpbMCwwLjU3OTk5OTk4MzMxMDY5OTUsLTAuMTgwMDAwMDA3MTUyNTU3MzddfSx7Im1lc2giOjIsIm5hbWUiOiJDaGFzc2lzX0hvb2QiLCJ0cmFuc2xhdGlvbiI6WzAsMC41MTk5OTk5ODA5MjY1MTM3LDAuNjQ5OTk5OTc2MTU4MTQyMV19LHsibWVzaCI6MywibmFtZSI6IkNvdW50ZXJ3ZWlnaHRfTG93ZXIiLCJ0cmFuc2xhdGlvbiI6WzAsMC40Nzk5OTk5ODkyNzExNjM5NCwxLjE3OTk5OTk0NzU0NzkxMjZdfSx7Im1lc2giOjQsIm5hbWUiOiJDb3VudGVyd2VpZ2h0X1VwcGVyIiwidHJhbnNsYXRpb24iOlswLDAuODUwMDAwMDIzODQxODU3OSwxLjE3OTk5OTk0NzU0NzkxMjZdfSx7Im1lc2giOjUsIm5hbWUiOiJCYWNrcmVzdF9CYXJfMC44IiwidHJhbnNsYXRpb24iOlswLDAuODAwMDAwMDExOTIwOTI5LC0wLjAyOTk5OTk3MTM4OTc3MDUwOF19LHsibWVzaCI6NiwibmFtZSI6IkJhY2tyZXN0X0Jhcl8wLjU1IiwidHJhbnNsYXRpb24iOlswLDAuNTUwMDAwMDExOTIwOTI5LC0wLjAyOTk5OTk3MTM4OTc3MDUwOF19LHsibWVzaCI6NywibmFtZSI6IkJhY2tyZXN0X0Jhcl8wLjY4IiwidHJhbnNsYXRpb24iOlswLDAuNjgwMDAwMDA3MTUyNTU3NCwtMC4wMjk5OTk5NzEzODk3NzA1MDhdfSx7Im1lc2giOjgsIm5hbWUiOiJCYWNrcmVzdF9GcmFtZV9MIiwidHJhbnNsYXRpb24iOlstMC4zNjAwMDAwMTQzMDUxMTQ3NSwwLjU1MDAwMDAxMTkyMDkyOSwtMC4wMjk5OTk5NzEzODk3NzA1MDhdfSx7Im1lc2giOjksIm5hbWUiOiJCYWNrcmVzdF9GcmFtZV9SIiwidHJhbnNsYXRpb24iOlswLjM2MDAwMDAxNDMwNTExNDc1LDAuNTUwMDAwMDExOTIwOTI5LC0wLjAyOTk5OTk3MTM4OTc3MDUwOF19LHsibWVzaCI6MTAsIm5hbWUiOiJDYXJyaWFnZV9Nb3VudF9Cb3R0b20iLCJ0cmFuc2xhdGlvbiI6WzAsMC4xMDAwMDAwMDg5NDA2OTY3MiwtMC4wMTk5OTk5ODA5MjY1MTM2NzJdfSx7Im1lc2giOjExLCJuYW1lIjoiQ2FycmlhZ2VfTW91bnRfVG9wIiwidHJhbnNsYXRpb24iOlswLDAuNDE5OTk5OTg2ODg2OTc4MTUsLTAuMDE5OTk5OTgwOTI2NTEzNjcyXX0seyJtZXNoIjoxMiwibmFtZSI6IkZvcmtfQmxhZGVfTCIsInRyYW5zbGF0aW9uIjpbLTAuMjMwMDAwMDA0MTcyMzI1MTMsMC4wMTk5OTk5OTk1NTI5NjUxNjQsLTAuNjM5OTk5OTg1Njk0ODg1M119LHsibWVzaCI6MTMsIm5hbWUiOiJGb3JrX0JsYWRlX1IiLCJ0cmFuc2xhdGlvbiI6WzAuMjMwMDAwMDA0MTcyMzI1MTMsMC4wMTk5OTk5OTk1NTI5NjUxNjQsLTAuNjM5OTk5OTg1Njk0ODg1M119LHsibWVzaCI6MTQsIm5hbWUiOiJGb3JrX1NoYW5rX0wiLCJ0cmFuc2xhdGlvbiI6Wy0wLjIzMDAwMDAwNDE3MjMyNTEzLDAuMjM5OTk5OTk0NjM1NTgxOTcsLTAuMDQwMDAwMDIxNDU3NjcyMTJdfSx7Im1lc2giOjE1LCJuYW1lIjoiRm9ya19TaGFua19SIiwidHJhbnNsYXRpb24iOlswLjIzMDAwMDAwNDE3MjMyNTEzLDAuMjM5OTk5OTk0NjM1NTgxOTcsLTAuMDQwMDAwMDIxNDU3NjcyMTJdfSx7Im1lc2giOjE2LCJuYW1lIjoiRm9ya19UaXBfTCIsInRyYW5zbGF0aW9uIjpbLTAuMjMwMDAwMDA0MTcyMzI1MTMsMC4wMTAwMDAwMDE2MzkxMjc3MzEsLTEuMjE1MDAwMDMzMzc4NjAxXX0seyJtZXNoIjoxNywibmFtZSI6IkZvcmtfVGlwX1IiLCJ0cmFuc2xhdGlvbiI6WzAuMjMwMDAwMDA0MTcyMzI1MTMsMC4wMTAwMDAwMDE2MzkxMjc3MzEsLTEuMjE1MDAwMDMzMzc4NjAxXX0seyJjaGlsZHJlbiI6WzUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxN10sIm5hbWUiOiJGb3JrbGlmdF9Gb3JrcyIsInRyYW5zbGF0aW9uIjpbMCwwLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjYzOTk5OTk4NTY5NDg4NTNdfSx7Im1lc2giOjE4LCJuYW1lIjoiSGVhZGxpZ2h0X0wiLCJ0cmFuc2xhdGlvbiI6Wy0wLjQ0OTk5OTk4ODA3OTA3MTA0LDEuNjQ5OTk5OTc2MTU4MTQyLC0wLjI4MDAwMDAwMTE5MjA5MjldfSx7Im1lc2giOjE5LCJuYW1lIjoiSGVhZGxpZ2h0X1IiLCJ0cmFuc2xhdGlvbiI6WzAuNDQ5OTk5OTg4MDc5MDcxMDQsMS42NDk5OTk5NzYxNTgxNDIsLTAuMjgwMDAwMDAxMTkyMDkyOV19LHsibWVzaCI6MjAsIm5hbWUiOiJMaWZ0X0h5ZHJhdWxpY19DeWxpbmRlciIsInRyYW5zbGF0aW9uIjpbMCwxLjA0OTk5OTk1MjMxNjI4NDIsLTAuNTQwMDAwMDIxNDU3NjcyMV19LHsibWVzaCI6MjEsIm5hbWUiOiJMaWZ0X0h5ZHJhdWxpY19QaXN0b24iLCJ0cmFuc2xhdGlvbiI6WzAsMS4zNTAwMDAwMjM4NDE4NTgsLTAuNTQwMDAwMDIxNDU3NjcyMV19LHsibWVzaCI6MjIsIm5hbWUiOiJNYXN0X0JyYWNlX0JvdHRvbSIsInRyYW5zbGF0aW9uIjpbMCwwLjI1LC0wLjU0MDAwMDAyMTQ1NzY3MjFdfSx7Im1lc2giOjIzLCJuYW1lIjoiTWFzdF9CcmFjZV9NaWQiLCJ0cmFuc2xhdGlvbiI6WzAsMS4yMDAwMDAwNDc2ODM3MTU4LC0wLjU0MDAwMDAyMTQ1NzY3MjFdfSx7Im1lc2giOjI0LCJuYW1lIjoiTWFzdF9CcmFjZV9Ub3AiLCJ0cmFuc2xhdGlvbiI6WzAsMi4xODAwMDAwNjY3NTcyMDIsLTAuNTQwMDAwMDIxNDU3NjcyMV19LHsibWVzaCI6MjUsIm5hbWUiOiJNYXN0X1JhaWxfTCIsInRyYW5zbGF0aW9uIjpbLTAuMzQ5OTk5OTk0MDM5NTM1NSwxLjE0OTk5OTk3NjE1ODE0MiwtMC41NDAwMDAwMjE0NTc2NzIxXX0seyJtZXNoIjoyNiwibmFtZSI6Ik1hc3RfUmFpbF9SIiwidHJhbnNsYXRpb24iOlswLjM0OTk5OTk5NDAzOTUzNTUsMS4xNDk5OTk5NzYxNTgxNDIsLTAuNTQwMDAwMDIxNDU3NjcyMV19LHsibWVzaCI6MjcsIm5hbWUiOiJQaWxsYXJfMSIsInRyYW5zbGF0aW9uIjpbLTAuNDE5OTk5OTg2ODg2OTc4MTUsMS4zNTAwMDAwMjM4NDE4NTgsLTAuMjU5OTk5OTkwNDYzMjU2ODRdfSx7Im1lc2giOjI4LCJuYW1lIjoiUGlsbGFyXzIiLCJ0cmFuc2xhdGlvbiI6WzAuNDE5OTk5OTg2ODg2OTc4MTUsMS4zNTAwMDAwMjM4NDE4NTgsLTAuMjU5OTk5OTkwNDYzMjU2ODRdfSx7Im1lc2giOjI5LCJuYW1lIjoiUGlsbGFyXzMiLCJ0cmFuc2xhdGlvbiI6Wy0wLjQxOTk5OTk4Njg4Njk3ODE1LDEuMzUwMDAwMDIzODQxODU4LDAuOTQ5OTk5OTg4MDc5MDcxXX0seyJtZXNoIjozMCwibmFtZSI6IlBpbGxhcl80IiwidHJhbnNsYXRpb24iOlswLjQxOTk5OTk4Njg4Njk3ODE1LDEuMzUwMDAwMDIzODQxODU4LDAuOTQ5OTk5OTg4MDc5MDcxXX0seyJtZXNoIjozMSwibmFtZSI6IlJvb2ZfRnJhbWVfRnJvbnQiLCJ0cmFuc2xhdGlvbiI6WzAsMS45NTAwMDAwNDc2ODM3MTU4LC0wLjI1OTk5OTk5MDQ2MzI1Njg0XX0seyJtZXNoIjozMiwibmFtZSI6IlJvb2ZfRnJhbWVfTCIsInRyYW5zbGF0aW9uIjpbLTAuNDE5OTk5OTg2ODg2OTc4MTUsMS45NTAwMDAwNDc2ODM3MTU4LDAuMzQwMDAwMDAzNTc2Mjc4N119LHsibWVzaCI6MzMsIm5hbWUiOiJSb29mX0ZyYW1lX1IiLCJ0cmFuc2xhdGlvbiI6WzAuNDE5OTk5OTg2ODg2OTc4MTUsMS45NTAwMDAwNDc2ODM3MTU4LDAuMzQwMDAwMDAzNTc2Mjc4N119LHsibWVzaCI6MzQsIm5hbWUiOiJSb29mX0ZyYW1lX1JlYXIiLCJ0cmFuc2xhdGlvbiI6WzAsMS45NTAwMDAwNDc2ODM3MTU4LDAuOTQ5OTk5OTg4MDc5MDcxXX0seyJtZXNoIjozNSwibmFtZSI6IlJvb2ZfU2xhdF8wLjA1IiwidHJhbnNsYXRpb24iOlswLDEuOTUwMDAwMDQ3NjgzNzE1OCwtMC4wNTAwMDAwMDA3NDUwNTgwNl19LHsibWVzaCI6MzYsIm5hbWUiOiJSb29mX1NsYXRfLTAuMTUiLCJ0cmFuc2xhdGlvbiI6WzAsMS45NTAwMDAwNDc2ODM3MTU4LDAuMTUwMDAwMDA1OTYwNDY0NDhdfSx7Im1lc2giOjM3LCJuYW1lIjoiUm9vZl9TbGF0Xy0wLjM1IiwidHJhbnNsYXRpb24iOlswLDEuOTUwMDAwMDQ3NjgzNzE1OCwwLjM0OTk5OTk5NDAzOTUzNTVdfSx7Im1lc2giOjM4LCJuYW1lIjoiUm9vZl9TbGF0Xy0wLjU1IiwidHJhbnNsYXRpb24iOlswLDEuOTUwMDAwMDQ3NjgzNzE1OCwwLjU1MDAwMDAxMTkyMDkyOV19LHsibWVzaCI6MzksIm5hbWUiOiJSb29mX1NsYXRfLTAuNzUiLCJ0cmFuc2xhdGlvbiI6WzAsMS45NTAwMDAwNDc2ODM3MTU4LDAuNzVdfSx7Im1lc2giOjQwLCJuYW1lIjoiU2VhdF9CYWNrcmVzdCIsInRyYW5zbGF0aW9uIjpbMCwxLjA0OTk5OTk1MjMxNjI4NDIsMC42MDAwMDAwMjM4NDE4NTc5XX0seyJtZXNoIjo0MSwibmFtZSI6IlNlYXRfQmFzZSIsInRyYW5zbGF0aW9uIjpbMCwwLjc3OTk5OTk3MTM4OTc3MDUsMC40MDAwMDAwMDU5NjA0NjQ1XX0seyJtZXNoIjo0MiwibmFtZSI6IlN0ZWVyaW5nX0NvbCIsInJvdGF0aW9uIjpbMC4yNDc0MDM5NzkzMDE0NTI2NCwwLDAsMC45Njg5MTI0MjI2NTcwMTI5XSwidHJhbnNsYXRpb24iOlswLDAuOTIwMDAwMDE2Njg5MzAwNSwtMC4wNzk5OTk5OTgyMTE4NjA2Nl19LHsibWVzaCI6NDMsIm5hbWUiOiJTdGVlcmluZ19XaGVlbCIsInJvdGF0aW9uIjpbMC4yNDc0MDM5NzkzMDE0NTI2NCwwLDAsMC45Njg5MTI0MjI2NTcwMTI5XSwidHJhbnNsYXRpb24iOlswLDEuMTAwMDAwMDIzODQxODU4LC0wLjE4MDAwMDAwNzE1MjU1NzM3XX0seyJtZXNoIjo0NCwibmFtZSI6IlRhaWxsaWdodF9MIiwidHJhbnNsYXRpb24iOlstMC4zNDk5OTk5OTQwMzk1MzU1LDAuNzIwMDAwMDI4NjEwMjI5NSwxLjM5OTk5OTk3NjE1ODE0Ml19LHsibWVzaCI6NDUsIm5hbWUiOiJUYWlsbGlnaHRfUiIsInRyYW5zbGF0aW9uIjpbMC4zNDk5OTk5OTQwMzk1MzU1LDAuNzIwMDAwMDI4NjEwMjI5NSwxLjM5OTk5OTk3NjE1ODE0Ml19LHsibWVzaCI6NDYsIm5hbWUiOiJXaGVlbF9GTF9IdWIifSx7Im1lc2giOjQ3LCJuYW1lIjoiV2hlZWxfRkxfUmltIn0seyJjaGlsZHJlbiI6WzQ3LDQ4XSwibWVzaCI6NDgsIm5hbWUiOiJXaGVlbF9GTCIsInJvdGF0aW9uIjpbMCwwLC0wLjcwNzEwNjgyODY4OTU3NTIsMC43MDcxMDY4Mjg2ODk1NzUyXSwidHJhbnNsYXRpb24iOlstMC41NDAwMDAwMjE0NTc2NzIxLDAuMjgwMDAwMDAxMTkyMDkyOSwtMC4zNzk5OTk5OTUyMzE2Mjg0XX0seyJtZXNoIjo0OSwibmFtZSI6IldoZWVsX0ZSX0h1YiJ9LHsibWVzaCI6NTAsIm5hbWUiOiJXaGVlbF9GUl9SaW0ifSx7ImNoaWxkcmVuIjpbNTAsNTFdLCJtZXNoIjo1MSwibmFtZSI6IldoZWVsX0ZSIiwicm90YXRpb24iOlswLDAsLTAuNzA3MTA2ODI4Njg5NTc1MiwwLjcwNzEwNjgyODY4OTU3NTJdLCJ0cmFuc2xhdGlvbiI6WzAuNTQwMDAwMDIxNDU3NjcyMSwwLjI4MDAwMDAwMTE5MjA5MjksLTAuMzc5OTk5OTk1MjMxNjI4NF19LHsibWVzaCI6NTIsIm5hbWUiOiJXaGVlbF9STF9IdWIifSx7Im1lc2giOjUzLCJuYW1lIjoiV2hlZWxfUkxfUmltIn0seyJjaGlsZHJlbiI6WzUzLDU0XSwibWVzaCI6NTQsIm5hbWUiOiJXaGVlbF9STCIsInJvdGF0aW9uIjpbMCwwLC0wLjcwNzEwNjgyODY4OTU3NTIsMC43MDcxMDY4Mjg2ODk1NzUyXSwidHJhbnNsYXRpb24iOlstMC40Nzk5OTk5ODkyNzExNjM5NCwwLjIzOTk5OTk5NDYzNTU4MTk3LDAuODc5OTk5OTk1MjMxNjI4NF19LHsibWVzaCI6NTUsIm5hbWUiOiJXaGVlbF9SUl9IdWIifSx7Im1lc2giOjU2LCJuYW1lIjoiV2hlZWxfUlJfUmltIn0seyJjaGlsZHJlbiI6WzU2LDU3XSwibWVzaCI6NTcsIm5hbWUiOiJXaGVlbF9SUiIsInJvdGF0aW9uIjpbMCwwLC0wLjcwNzEwNjgyODY4OTU3NTIsMC43MDcxMDY4Mjg2ODk1NzUyXSwidHJhbnNsYXRpb24iOlswLjQ3OTk5OTk4OTI3MTE2Mzk0LDAuMjM5OTk5OTk0NjM1NTgxOTcsMC44Nzk5OTk5OTUyMzE2Mjg0XX0seyJjaGlsZHJlbiI6WzAsMSwyLDMsNCwxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0OSw1Miw1NSw1OF0sIm5hbWUiOiJGb3JrbGlmdF9Sb290In0seyJtZXNoIjo1OCwibmFtZSI6IkNhcmdvX0JveCIsInRyYW5zbGF0aW9uIjpbMCwwLjQ5MDAwMDAwOTUzNjc0MzE2LDBdfSx7Im1lc2giOjU5LCJuYW1lIjoiQ2FyZ29fVGFwZSIsInRyYW5zbGF0aW9uIjpbMCwwLjQ5MDAwMDAwOTUzNjc0MzE2LDBdfSx7Im1lc2giOjYwLCJuYW1lIjoiUGFsbGV0X0Jhc2VfMC4wIiwidHJhbnNsYXRpb24iOlswLDAuMDE5OTk5OTk5NTUyOTY1MTY0LDBdfSx7Im1lc2giOjYxLCJuYW1lIjoiUGFsbGV0X0Jhc2VfMC40OCIsInRyYW5zbGF0aW9uIjpbMC40Nzk5OTk5ODkyNzExNjM5NCwwLjAxOTk5OTk5OTU1Mjk2NTE2NCwwXX0seyJtZXNoIjo2MiwibmFtZSI6IlBhbGxldF9CYXNlXy0wLjQ4IiwidHJhbnNsYXRpb24iOlstMC40Nzk5OTk5ODkyNzExNjM5NCwwLjAxOTk5OTk5OTU1Mjk2NTE2NCwwXX0seyJtZXNoIjo2MywibmFtZSI6IlBhbGxldF9CbG9ja18wLjBfMC4wIiwidHJhbnNsYXRpb24iOlswLDAuMDc1MDAwMDAyOTgwMjMyMjQsMF19LHsibWVzaCI6NjQsIm5hbWUiOiJQYWxsZXRfQmxvY2tfMC4wXzAuMzQiLCJ0cmFuc2xhdGlvbiI6WzAsMC4wNzUwMDAwMDI5ODAyMzIyNCwtMC4zNDAwMDAwMzMzNzg2MDExXX0seyJtZXNoIjo2NSwibmFtZSI6IlBhbGxldF9CbG9ja18wLjBfLTAuMzQiLCJ0cmFuc2xhdGlvbiI6WzAsMC4wNzUwMDAwMDI5ODAyMzIyNCwwLjM0MDAwMDAzMzM3ODYwMTFdfSx7Im1lc2giOjY2LCJuYW1lIjoiUGFsbGV0X0Jsb2NrXzAuNDhfMC4wIiwidHJhbnNsYXRpb24iOlswLjQ3OTk5OTk4OTI3MTE2Mzk0LDAuMDc1MDAwMDAyOTgwMjMyMjQsMF19LHsibWVzaCI6NjcsIm5hbWUiOiJQYWxsZXRfQmxvY2tfMC40OF8wLjM0IiwidHJhbnNsYXRpb24iOlswLjQ3OTk5OTk4OTI3MTE2Mzk0LDAuMDc1MDAwMDAyOTgwMjMyMjQsLTAuMzQwMDAwMDMzMzc4NjAxMV19LHsibWVzaCI6NjgsIm5hbWUiOiJQYWxsZXRfQmxvY2tfMC40OF8tMC4zNCIsInRyYW5zbGF0aW9uIjpbMC40Nzk5OTk5ODkyNzExNjM5NCwwLjA3NTAwMDAwMjk4MDIzMjI0LDAuMzQwMDAwMDMzMzc4NjAxMV19LHsibWVzaCI6NjksIm5hbWUiOiJQYWxsZXRfQmxvY2tfLTAuNDhfMC4wIiwidHJhbnNsYXRpb24iOlstMC40Nzk5OTk5ODkyNzExNjM5NCwwLjA3NTAwMDAwMjk4MDIzMjI0LDBdfSx7Im1lc2giOjcwLCJuYW1lIjoiUGFsbGV0X0Jsb2NrXy0wLjQ4XzAuMzQiLCJ0cmFuc2xhdGlvbiI6Wy0wLjQ3OTk5OTk4OTI3MTE2Mzk0LDAuMDc1MDAwMDAyOTgwMjMyMjQsLTAuMzQwMDAwMDMzMzc4NjAxMV19LHsibWVzaCI6NzEsIm5hbWUiOiJQYWxsZXRfQmxvY2tfLTAuNDhfLTAuMzQiLCJ0cmFuc2xhdGlvbiI6Wy0wLjQ3OTk5OTk4OTI3MTE2Mzk0LDAuMDc1MDAwMDAyOTgwMjMyMjQsMC4zNDAwMDAwMzMzNzg2MDExXX0seyJtZXNoIjo3MiwibmFtZSI6IlBhbGxldF9Cb2FyZF8wLjAiLCJ0cmFuc2xhdGlvbiI6WzAsMC4xMjUsMF19LHsibWVzaCI6NzMsIm5hbWUiOiJQYWxsZXRfQm9hcmRfMC4xNyIsInRyYW5zbGF0aW9uIjpbMCwwLjEyNSwtMC4xNjk5OTk5NTcwODQ2NTU3Nl19LHsibWVzaCI6NzQsIm5hbWUiOiJQYWxsZXRfQm9hcmRfMC4zNCIsInRyYW5zbGF0aW9uIjpbMCwwLjEyNSwtMC4zNDAwMDAwMzMzNzg2MDExXX0seyJtZXNoIjo3NSwibmFtZSI6IlBhbGxldF9Cb2FyZF8tMC4xNyIsInRyYW5zbGF0aW9uIjpbMCwwLjEyNSwwLjE2OTk5OTk1NzA4NDY1NTc2XX0seyJtZXNoIjo3NiwibmFtZSI6IlBhbGxldF9Cb2FyZF8tMC4zNCIsInRyYW5zbGF0aW9uIjpbMCwwLjEyNSwwLjM0MDAwMDAzMzM3ODYwMTFdfSx7ImNoaWxkcmVuIjpbNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsNzUsNzYsNzcsNzhdLCJuYW1lIjoiUGFsbGV0X1dvb2QiLCJ0cmFuc2xhdGlvbiI6WzAsMCwtMS4yNzk5OTk5NzEzODk3NzA1XX1dLCJhbmltYXRpb25zIjpbeyJjaGFubmVscyI6W3sic2FtcGxlciI6MCwidGFyZ2V0Ijp7Im5vZGUiOjU5LCJwYXRoIjoidHJhbnNsYXRpb24ifX1dLCJuYW1lIjoiQWN0aW9uX0ZvcmtsaWZ0X0RyaXZlIiwic2FtcGxlcnMiOlt7ImlucHV0IjoxNTcsImludGVycG9sYXRpb24iOiJMSU5FQVIiLCJvdXRwdXQiOjE1OH1dfSx7ImNoYW5uZWxzIjpbeyJzYW1wbGVyIjowLCJ0YXJnZXQiOnsibm9kZSI6MTgsInBhdGgiOiJ0cmFuc2xhdGlvbiJ9fV0sIm5hbWUiOiJBY3Rpb25fRm9ya19MaWZ0Iiwic2FtcGxlcnMiOlt7ImlucHV0IjoxNTcsImludGVycG9sYXRpb24iOiJMSU5FQVIiLCJvdXRwdXQiOjE1OX1dfSx7ImNoYW5uZWxzIjpbeyJzYW1wbGVyIjowLCJ0YXJnZXQiOnsibm9kZSI6NDksInBhdGgiOiJyb3RhdGlvbiJ9fV0sIm5hbWUiOiJBY3Rpb25fV2hlZWxfRkxfU3BpbiIsInNhbXBsZXJzIjpbeyJpbnB1dCI6MTU3LCJpbnRlcnBvbGF0aW9uIjoiTElORUFSIiwib3V0cHV0IjoxNjB9XX0seyJjaGFubmVscyI6W3sic2FtcGxlciI6MCwidGFyZ2V0Ijp7Im5vZGUiOjUyLCJwYXRoIjoicm90YXRpb24ifX1dLCJuYW1lIjoiQWN0aW9uX1doZWVsX0ZSX1NwaW4iLCJzYW1wbGVycyI6W3siaW5wdXQiOjE1NywiaW50ZXJwb2xhdGlvbiI6IkxJTkVBUiIsIm91dHB1dCI6MTYwfV19LHsiY2hhbm5lbHMiOlt7InNhbXBsZXIiOjAsInRhcmdldCI6eyJub2RlIjo1NSwicGF0aCI6InJvdGF0aW9uIn19XSwibmFtZSI6IkFjdGlvbl9XaGVlbF9STF9TcGluIiwic2FtcGxlcnMiOlt7ImlucHV0IjoxNTcsImludGVycG9sYXRpb24iOiJMSU5FQVIiLCJvdXRwdXQiOjE2MX1dfSx7ImNoYW5uZWxzIjpbeyJzYW1wbGVyIjowLCJ0YXJnZXQiOnsibm9kZSI6NTgsInBhdGgiOiJyb3RhdGlvbiJ9fV0sIm5hbWUiOiJBY3Rpb25fV2hlZWxfUlJfU3BpbiIsInNhbXBsZXJzIjpbeyJpbnB1dCI6MTU3LCJpbnRlcnBvbGF0aW9uIjoiTElORUFSIiwib3V0cHV0IjoxNjF9XX1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiTV9EYXJrX0ZyYW1lIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC4xNTAwMDAwMDU5NjA0NjQ0OCwwLjE1OTk5OTk5NjQyMzcyMTMsMC4xODAwMDAwMDcxNTI1NTczNywxXSwibWV0YWxsaWNGYWN0b3IiOjAuNjk5OTk5OTg4MDc5MDcxLCJyb3VnaG5lc3NGYWN0b3IiOjAuNDQ5OTk5OTg4MDc5MDcxMDR9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiTV9Gb3JrbGlmdF9ZZWxsb3ciLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjk0OTk5OTk4ODA3OTA3MSwwLjYwMDAwMDAyMzg0MTg1NzksMC4wNTAwMDAwMDA3NDUwNTgwNiwxXSwibWV0YWxsaWNGYWN0b3IiOjAuMTUwMDAwMDA1OTYwNDY0NDgsInJvdWdobmVzc0ZhY3RvciI6MC4zNDk5OTk5OTQwMzk1MzU1fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6Ik1fU3RlZWxfRm9ya3MiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjI4MDAwMDAwMTE5MjA5MjksMC4zMDAwMDAwMTE5MjA5Mjg5NiwwLjMxOTk5OTk5Mjg0NzQ0MjYsMV0sIm1ldGFsbGljRmFjdG9yIjowLjg1MDAwMDAyMzg0MTg1NzksInJvdWdobmVzc0ZhY3RvciI6MC4zMDAwMDAwMTE5MjA5Mjg5Nn19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJNX0hlYWRsaWdodCIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzEsMC45ODAwMDAwMTkwNzM0ODYzLDAuODUwMDAwMDIzODQxODU3OSwxXSwibWV0YWxsaWNGYWN0b3IiOjAuMTAwMDAwMDAxNDkwMTE2MTIsInJvdWdobmVzc0ZhY3RvciI6MC4xMDAwMDAwMDE0OTAxMTYxMn19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJNX0Nocm9tZV9QaXN0b24iLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg1MDAwMDAyMzg0MTg1NzksMC44NjAwMDAwMTQzMDUxMTQ3LDAuODc5OTk5OTk1MjMxNjI4NCwxXSwibWV0YWxsaWNGYWN0b3IiOjAuOTQ5OTk5OTg4MDc5MDcxLCJyb3VnaG5lc3NGYWN0b3IiOjAuMTAwMDAwMDAxNDkwMTE2MTJ9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiTV9UYWlsbGlnaHQiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjg5OTk5OTk3NjE1ODE0MjEsMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjA1MDAwMDAwMDc0NTA1ODA2LDFdLCJtZXRhbGxpY0ZhY3RvciI6MC4xMDAwMDAwMDE0OTAxMTYxMiwicm91Z2huZXNzRmFjdG9yIjowLjIwMDAwMDAwMjk4MDIzMjI0fX0seyJkb3VibGVTaWRlZCI6dHJ1ZSwibmFtZSI6Ik1fV2hlZWxfUmltIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC45NDk5OTk5ODgwNzkwNzEsMC42MDAwMDAwMjM4NDE4NTc5LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMV0sIm1ldGFsbGljRmFjdG9yIjowLjIwMDAwMDAwMjk4MDIzMjI0LCJyb3VnaG5lc3NGYWN0b3IiOjAuNDAwMDAwMDA1OTYwNDY0NX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJNX1RpcmVfUnViYmVyIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC4wNzAwMDAwMDAyOTgwMjMyMiwwLjA3MDAwMDAwMDI5ODAyMzIyLDAuMDc5OTk5OTk4MjExODYwNjYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuODk5OTk5OTc2MTU4MTQyMX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJNX0NhcmdvX0NyYXRlIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC43Nzk5OTk5NzEzODk3NzA1LDAuNjIwMDAwMDA0NzY4MzcxNiwwLjQxOTk5OTk4Njg4Njk3ODE1LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjgwMDAwMDAxMTkyMDkyOX19LHsiZG91YmxlU2lkZWQiOnRydWUsIm5hbWUiOiJNX0JveF9UYXBlIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiOnsiYmFzZUNvbG9yRmFjdG9yIjpbMC41Nzk5OTk5ODMzMTA2OTk1LDAuNDQ5OTk5OTg4MDc5MDcxMDQsMC4yODAwMDAwMDExOTIwOTI5LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjowLjYwMDAwMDAyMzg0MTg1Nzl9fSx7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiTV9QYWxsZXRfV29vZCIsInBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuNjIwMDAwMDA0NzY4MzcxNiwwLjQ2MDAwMDAwODM0NDY1MDI3LDAuMzAwMDAwMDExOTIwOTI4OTYsMV0sIm1ldGFsbGljRmFjdG9yIjowLCJyb3VnaG5lc3NGYWN0b3IiOjAuNzV9fV0sIm1lc2hlcyI6W3sibmFtZSI6IkNoYXNzaXNfRmxvb3IiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjowLCJOT1JNQUwiOjF9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJDaGFzc2lzX0Zyb250Q293bCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjMsIk5PUk1BTCI6NH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IkNoYXNzaXNfSG9vZCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjUsIk5PUk1BTCI6Nn0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IkNvdW50ZXJ3ZWlnaHRfTG93ZXIiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo3LCJOT1JNQUwiOjh9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJDb3VudGVyd2VpZ2h0X1VwcGVyIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6OSwiTk9STUFMIjoxMH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IkJhY2tyZXN0X0Jhcl8wLjgiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMSwiTk9STUFMIjoxMn0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkJhY2tyZXN0X0Jhcl8wLjU1IiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTMsIk5PUk1BTCI6MTR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJCYWNrcmVzdF9CYXJfMC42OCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE1LCJOT1JNQUwiOjE2fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiQmFja3Jlc3RfRnJhbWVfTCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE3LCJOT1JNQUwiOjE4fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiQmFja3Jlc3RfRnJhbWVfUiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE5LCJOT1JNQUwiOjIwfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiQ2FycmlhZ2VfTW91bnRfQm90dG9tIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjEsIk5PUk1BTCI6MjJ9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJDYXJyaWFnZV9Nb3VudF9Ub3AiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoyMywiTk9STUFMIjoyNH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkZvcmtfQmxhZGVfTCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjI1LCJOT1JNQUwiOjI2fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjJ9XX0seyJuYW1lIjoiRm9ya19CbGFkZV9SIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MjcsIk5PUk1BTCI6Mjh9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6Mn1dfSx7Im5hbWUiOiJGb3JrX1NoYW5rX0wiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoyOSwiTk9STUFMIjozMH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoyfV19LHsibmFtZSI6IkZvcmtfU2hhbmtfUiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjMxLCJOT1JNQUwiOjMyfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjJ9XX0seyJuYW1lIjoiRm9ya19UaXBfTCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjMzLCJOT1JNQUwiOjM0fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjJ9XX0seyJuYW1lIjoiRm9ya19UaXBfUiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjM1LCJOT1JNQUwiOjM2fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjJ9XX0seyJuYW1lIjoiSGVhZGxpZ2h0X0wiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjozNywiTk9STUFMIjozOH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjozfV19LHsibmFtZSI6IkhlYWRsaWdodF9SIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MzksIk5PUk1BTCI6NDB9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6M31dfSx7Im5hbWUiOiJMaWZ0X0h5ZHJhdWxpY19DeWxpbmRlciIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQxLCJOT1JNQUwiOjQyfSwiaW5kaWNlcyI6NDMsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkxpZnRfSHlkcmF1bGljX1Bpc3RvbiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQ0LCJOT1JNQUwiOjQ1fSwiaW5kaWNlcyI6NDMsIm1hdGVyaWFsIjo0fV19LHsibmFtZSI6Ik1hc3RfQnJhY2VfQm90dG9tIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NDYsIk5PUk1BTCI6NDd9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJNYXN0X0JyYWNlX01pZCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQ4LCJOT1JNQUwiOjQ5fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiTWFzdF9CcmFjZV9Ub3AiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1MCwiTk9STUFMIjo1MX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6Ik1hc3RfUmFpbF9MIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTIsIk5PUk1BTCI6NTN9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJNYXN0X1JhaWxfUiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjU0LCJOT1JNQUwiOjU1fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiUGlsbGFyXzEiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1NiwiTk9STUFMIjo1N30sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlBpbGxhcl8yIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NTgsIk5PUk1BTCI6NTl9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJQaWxsYXJfMyIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjYwLCJOT1JNQUwiOjYxfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiUGlsbGFyXzQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo2MiwiTk9STUFMIjo2M30sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlJvb2ZfRnJhbWVfRnJvbnQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo2NCwiTk9STUFMIjo2NX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlJvb2ZfRnJhbWVfTCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjY2LCJOT1JNQUwiOjY3fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiUm9vZl9GcmFtZV9SIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NjgsIk5PUk1BTCI6Njl9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJSb29mX0ZyYW1lX1JlYXIiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo3MCwiTk9STUFMIjo3MX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlJvb2ZfU2xhdF8wLjA1IiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NzIsIk5PUk1BTCI6NzN9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJSb29mX1NsYXRfLTAuMTUiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo3NCwiTk9STUFMIjo3NX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlJvb2ZfU2xhdF8tMC4zNSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjc2LCJOT1JNQUwiOjc3fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiUm9vZl9TbGF0Xy0wLjU1IiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6NzgsIk5PUk1BTCI6Nzl9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJSb29mX1NsYXRfLTAuNzUiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo4MCwiTk9STUFMIjo4MX0sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlNlYXRfQmFja3Jlc3QiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo4MiwiTk9STUFMIjo4M30sImluZGljZXMiOjIsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IlNlYXRfQmFzZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjg0LCJOT1JNQUwiOjg1fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiU3RlZXJpbmdfQ29sIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6ODYsIk5PUk1BTCI6ODd9LCJpbmRpY2VzIjo0MywibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiU3RlZXJpbmdfV2hlZWwiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo4OCwiTk9STUFMIjo4OX0sImluZGljZXMiOjQzLCJtYXRlcmlhbCI6MH1dfSx7Im5hbWUiOiJUYWlsbGlnaHRfTCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjkwLCJOT1JNQUwiOjkxfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjV9XX0seyJuYW1lIjoiVGFpbGxpZ2h0X1IiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo5MiwiTk9STUFMIjo5M30sImluZGljZXMiOjIsIm1hdGVyaWFsIjo1fV19LHsibmFtZSI6IldoZWVsX0ZMX0h1YiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjk0LCJOT1JNQUwiOjk1fSwiaW5kaWNlcyI6NDMsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IldoZWVsX0ZMX1JpbSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjk2LCJOT1JNQUwiOjk3fSwiaW5kaWNlcyI6NDMsIm1hdGVyaWFsIjo2fV19LHsibmFtZSI6IldoZWVsX0ZMIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6OTgsIk5PUk1BTCI6OTl9LCJpbmRpY2VzIjoxMDAsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IldoZWVsX0ZSX0h1YiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEwMSwiTk9STUFMIjoxMDJ9LCJpbmRpY2VzIjo0MywibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiV2hlZWxfRlJfUmltIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTAzLCJOT1JNQUwiOjEwNH0sImluZGljZXMiOjQzLCJtYXRlcmlhbCI6Nn1dfSx7Im5hbWUiOiJXaGVlbF9GUiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEwNSwiTk9STUFMIjoxMDZ9LCJpbmRpY2VzIjoxMDAsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IldoZWVsX1JMX0h1YiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEwNywiTk9STUFMIjoxMDh9LCJpbmRpY2VzIjo0MywibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiV2hlZWxfUkxfUmltIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTA5LCJOT1JNQUwiOjExMH0sImluZGljZXMiOjQzLCJtYXRlcmlhbCI6Nn1dfSx7Im5hbWUiOiJXaGVlbF9STCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjExMSwiTk9STUFMIjoxMTJ9LCJpbmRpY2VzIjoxMDAsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IldoZWVsX1JSX0h1YiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjExMywiTk9STUFMIjoxMTR9LCJpbmRpY2VzIjo0MywibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiV2hlZWxfUlJfUmltIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTE1LCJOT1JNQUwiOjExNn0sImluZGljZXMiOjQzLCJtYXRlcmlhbCI6Nn1dfSx7Im5hbWUiOiJXaGVlbF9SUiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjExNywiTk9STUFMIjoxMTh9LCJpbmRpY2VzIjoxMDAsIm1hdGVyaWFsIjo3fV19LHsibmFtZSI6IkNhcmdvX0JveCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjExOSwiTk9STUFMIjoxMjB9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6OH1dfSx7Im5hbWUiOiJDYXJnb19UYXBlIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTIxLCJOT1JNQUwiOjEyMn0sImluZGljZXMiOjIsIm1hdGVyaWFsIjo5fV19LHsibmFtZSI6IlBhbGxldF9CYXNlXzAuMCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEyMywiTk9STUFMIjoxMjR9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MTB9XX0seyJuYW1lIjoiUGFsbGV0X0Jhc2VfMC40OCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEyNSwiTk9STUFMIjoxMjZ9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MTB9XX0seyJuYW1lIjoiUGFsbGV0X0Jhc2VfLTAuNDgiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMjcsIk5PUk1BTCI6MTI4fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9CbG9ja18wLjBfMC4wIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTI5LCJOT1JNQUwiOjEzMH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxMH1dfSx7Im5hbWUiOiJQYWxsZXRfQmxvY2tfMC4wXzAuMzQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMzEsIk5PUk1BTCI6MTMyfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9CbG9ja18wLjBfLTAuMzQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMzMsIk5PUk1BTCI6MTM0fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9CbG9ja18wLjQ4XzAuMCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEzNSwiTk9STUFMIjoxMzZ9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MTB9XX0seyJuYW1lIjoiUGFsbGV0X0Jsb2NrXzAuNDhfMC4zNCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEzNywiTk9STUFMIjoxMzh9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MTB9XX0seyJuYW1lIjoiUGFsbGV0X0Jsb2NrXzAuNDhfLTAuMzQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxMzksIk5PUk1BTCI6MTQwfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9CbG9ja18tMC40OF8wLjAiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNDEsIk5PUk1BTCI6MTQyfSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9CbG9ja18tMC40OF8wLjM0IiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTQzLCJOT1JNQUwiOjE0NH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxMH1dfSx7Im5hbWUiOiJQYWxsZXRfQmxvY2tfLTAuNDhfLTAuMzQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNDUsIk5PUk1BTCI6MTQ2fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9Cb2FyZF8wLjAiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNDcsIk5PUk1BTCI6MTQ4fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19LHsibmFtZSI6IlBhbGxldF9Cb2FyZF8wLjE3IiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTQ5LCJOT1JNQUwiOjE1MH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxMH1dfSx7Im5hbWUiOiJQYWxsZXRfQm9hcmRfMC4zNCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjE1MSwiTk9STUFMIjoxNTJ9LCJpbmRpY2VzIjoyLCJtYXRlcmlhbCI6MTB9XX0seyJuYW1lIjoiUGFsbGV0X0JvYXJkXy0wLjE3IiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTUzLCJOT1JNQUwiOjE1NH0sImluZGljZXMiOjIsIm1hdGVyaWFsIjoxMH1dfSx7Im5hbWUiOiJQYWxsZXRfQm9hcmRfLTAuMzQiLCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjoxNTUsIk5PUk1BTCI6MTU2fSwiaW5kaWNlcyI6MiwibWF0ZXJpYWwiOjEwfV19XSwiYWNjZXNzb3JzIjpbeyJidWZmZXJWaWV3IjowLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuNDc0OTk5OTk0MDM5NTM1NSwwLjA5MDAwMDAwMzU3NjI3ODY5LDAuODUwMDAwMDIzODQxODU3OV0sIm1pbiI6Wy0wLjQ3NDk5OTk5NDAzOTUzNTUsLTAuMDkwMDAwMDAzNTc2Mjc4NjksLTAuODUwMDAwMDIzODQxODU3OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC40NjAwMDAwMDgzNDQ2NTAyNywwLjI3NTAwMDAwNTk2MDQ2NDUsMC4xNDAwMDAwMDA1OTYwNDY0NV0sIm1pbiI6Wy0wLjQ2MDAwMDAwODM0NDY1MDI3LC0wLjI3NTAwMDAwNTk2MDQ2NDUsLTAuMTQwMDAwMDAwNTk2MDQ2NDVdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjQ2MDAwMDAwODM0NDY1MDI3LDAuMjA5OTk5OTkzNDQzNDg5MDcsMC40NDk5OTk5ODgwNzkwNzEwNF0sIm1pbiI6Wy0wLjQ2MDAwMDAwODM0NDY1MDI3LC0wLjIwOTk5OTk5MzQ0MzQ4OTA3LC0wLjQ0OTk5OTk4ODA3OTA3MTA0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC40Nzk5OTk5ODkyNzExNjM5NCwwLjI3NTAwMDAwNTk2MDQ2NDUsMC4yMDk5OTk5OTM0NDM0ODkwN10sIm1pbiI6Wy0wLjQ3OTk5OTk4OTI3MTE2Mzk0LC0wLjI3NTAwMDAwNTk2MDQ2NDUsLTAuMjA5OTk5OTkzNDQzNDg5MDddLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6OCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjQ0OTk5OTk4ODA3OTA3MTA0LDAuMTc0OTk5OTk3MDE5NzY3NzYsMC4xNTk5OTk5OTY0MjM3MjEzXSwibWluIjpbLTAuNDQ5OTk5OTg4MDc5MDcxMDQsLTAuMTc0OTk5OTk3MDE5NzY3NzYsLTAuMTU5OTk5OTk2NDIzNzIxM10sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4zNjAwMDAwMTQzMDUxMTQ3NSwwLjAxNzUwMDAwMDA3NDUwNTgwNiwwLjAxMjUwMDAwMDE4NjI2NDUxNV0sIm1pbiI6Wy0wLjM2MDAwMDAxNDMwNTExNDc1LC0wLjAxNzUwMDAwMDA3NDUwNTgwNiwtMC4wMTI1MDAwMDAxODYyNjQ1MTVdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMzYwMDAwMDE0MzA1MTE0NzUsMC4wMTc1MDAwMDAwNzQ1MDU4MDYsMC4wMTI1MDAwMDAxODYyNjQ1MTVdLCJtaW4iOlstMC4zNjAwMDAwMTQzMDUxMTQ3NSwtMC4wMTc1MDAwMDAwNzQ1MDU4MDYsLTAuMDEyNTAwMDAwMTg2MjY0NTE1XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjM2MDAwMDAxNDMwNTExNDc1LDAuMDE3NTAwMDAwMDc0NTA1ODA2LDAuMDEyNTAwMDAwMTg2MjY0NTE1XSwibWluIjpbLTAuMzYwMDAwMDE0MzA1MTE0NzUsLTAuMDE3NTAwMDAwMDc0NTA1ODA2LC0wLjAxMjUwMDAwMDE4NjI2NDUxNV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wMTk5OTk5OTk1NTI5NjUxNjQsMC4zMDAwMDAwMTE5MjA5Mjg5NiwwLjAxNDk5OTk5OTY2NDcyMzg3M10sIm1pbiI6Wy0wLjAxOTk5OTk5OTU1Mjk2NTE2NCwtMC4zMDAwMDAwMTE5MjA5Mjg5NiwtMC4wMTQ5OTk5OTk2NjQ3MjM4NzNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDE5OTk5OTk5NTUyOTY1MTY0LDAuMzAwMDAwMDExOTIwOTI4OTYsMC4wMTQ5OTk5OTk2NjQ3MjM4NzNdLCJtaW4iOlstMC4wMTk5OTk5OTk1NTI5NjUxNjQsLTAuMzAwMDAwMDExOTIwOTI4OTYsLTAuMDE0OTk5OTk5NjY0NzIzODczXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyMSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjM3OTk5OTk5NTIzMTYyODQsMC4wMzk5OTk5OTkxMDU5MzAzMywwLjAxOTk5OTk5OTU1Mjk2NTE2NF0sIm1pbiI6Wy0wLjM3OTk5OTk5NTIzMTYyODQsLTAuMDM5OTk5OTk5MTA1OTMwMzMsLTAuMDE5OTk5OTk5NTUyOTY1MTY0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjM3OTk5OTk5NTIzMTYyODQsMC4wMzk5OTk5OTkxMDU5MzAzMywwLjAxOTk5OTk5OTU1Mjk2NTE2NF0sIm1pbiI6Wy0wLjM3OTk5OTk5NTIzMTYyODQsLTAuMDM5OTk5OTk5MTA1OTMwMzMsLTAuMDE5OTk5OTk5NTUyOTY1MTY0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDE5OTk5OTk5NTUyOTY1MTY0LDAuNTc0OTk5OTg4MDc5MDcxXSwibWluIjpbLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDE5OTk5OTk5NTUyOTY1MTY0LC0wLjU3NDk5OTk4ODA3OTA3MV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAxOTk5OTk5OTU1Mjk2NTE2NCwwLjU3NDk5OTk4ODA3OTA3MV0sIm1pbiI6Wy0wLjA1OTk5OTk5ODY1ODg5NTQ5LC0wLjAxOTk5OTk5OTU1Mjk2NTE2NCwtMC41NzQ5OTk5ODgwNzkwNzFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MjgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjI5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDU5OTk5OTk4NjU4ODk1NDksMC4yMzk5OTk5OTQ2MzU1ODE5NywwLjAyNTAwMDAwMDM3MjUyOTAzXSwibWluIjpbLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMjM5OTk5OTk0NjM1NTgxOTcsLTAuMDI1MDAwMDAwMzcyNTI5MDNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjMxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDU5OTk5OTk4NjU4ODk1NDksMC4yMzk5OTk5OTQ2MzU1ODE5NywwLjAyNTAwMDAwMDM3MjUyOTAzXSwibWluIjpbLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMjM5OTk5OTk0NjM1NTgxOTcsLTAuMDI1MDAwMDAwMzcyNTI5MDNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjMzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDU5OTk5OTk4NjU4ODk1NDksMC4wMDk5OTk5OTk3NzY0ODI1ODIsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjA1OTk5OTk5ODY1ODg5NTQ5LC0wLjAwOTk5OTk5OTc3NjQ4MjU4MiwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozNCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MzUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAwOTk5OTk5OTc3NjQ4MjU4MiwwLjA1OTk5OTk5ODY1ODg5NTQ5XSwibWluIjpbLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDA5OTk5OTk5Nzc2NDgyNTgyLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozNywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjM4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjozOSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjgyNDk5OTk4ODA3OTA3MSwwLjA1OTk5OTk5ODY1ODg5NTQ5XSwibWluIjpbLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuODI0OTk5OTg4MDc5MDcxLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDMsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyNzYsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjQ0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJtYXgiOlswLjAzNzk5OTk5ODc3ODEwNDc4LDAuODI0OTk5OTg4MDc5MDcxLDAuMDM3OTk5OTk4Nzc4MTA0NzhdLCJtaW4iOlstMC4wMzc5OTk5OTg3NzgxMDQ3OCwtMC44MjQ5OTk5ODgwNzkwNzEsLTAuMDM3OTk5OTk4Nzc4MTA0NzhdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NDUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjM5NTAwMDAxMDcyODgzNjA2LDAuMDU5OTk5OTk4NjU4ODk1NDksMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjM5NTAwMDAxMDcyODgzNjA2LC0wLjA1OTk5OTk5ODY1ODg5NTQ5LC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ3LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo0OCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjM5NTAwMDAxMDcyODgzNjA2LDAuMDM5OTk5OTk5MTA1OTMwMzMsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjM5NTAwMDAxMDcyODgzNjA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzLC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjQ5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjM5NTAwMDAxMDcyODgzNjA2LDAuMDM5OTk5OTk5MTA1OTMwMzMsMC4wMzk5OTk5OTkxMDU5MzAzM10sIm1pbiI6Wy0wLjM5NTAwMDAxMDcyODgzNjA2LC0wLjAzOTk5OTk5OTEwNTkzMDMzLC0wLjAzOTk5OTk5OTEwNTkzMDMzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjUxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA0NTAwMDAwMTc4ODEzOTM0LDEuMDc1MDAwMDQ3NjgzNzE1OCwwLjA1OTk5OTk5ODY1ODg5NTQ5XSwibWluIjpbLTAuMDQ1MDAwMDAxNzg4MTM5MzQsLTEuMDc1MDAwMDQ3NjgzNzE1OCwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1MywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNDUwMDAwMDE3ODgxMzkzNCwxLjA3NTAwMDA0NzY4MzcxNTgsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjA0NTAwMDAwMTc4ODEzOTM0LC0xLjA3NTAwMDA0NzY4MzcxNTgsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuNTc0OTk5OTg4MDc5MDcxLDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2LC0wLjU3NDk5OTk4ODA3OTA3MSwtMC4wMjk5OTk5OTkzMjk0NDc3NDZdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjU4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuNTc0OTk5OTg4MDc5MDcxLDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2LC0wLjU3NDk5OTk4ODA3OTA3MSwtMC4wMjk5OTk5OTkzMjk0NDc3NDZdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NTksImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuNTc0OTk5OTg4MDc5MDcxLDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2LC0wLjU3NDk5OTk4ODA3OTA3MSwtMC4wMjk5OTk5OTkzMjk0NDc3NDZdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjYyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuNTc0OTk5OTg4MDc5MDcxLDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2LC0wLjU3NDk5OTk4ODA3OTA3MSwtMC4wMjk5OTk5OTkzMjk0NDc3NDZdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NjMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjY0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuNDQ5OTk5OTg4MDc5MDcxMDQsMC4wMjk5OTk5OTkzMjk0NDc3NDYsMC4wMjk5OTk5OTkzMjk0NDc3NDZdLCJtaW4iOlstMC40NDk5OTk5ODgwNzkwNzEwNCwtMC4wMjk5OTk5OTkzMjk0NDc3NDYsLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjY1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjAyOTk5OTk5OTMyOTQ0Nzc0NiwwLjAyOTk5OTk5OTMyOTQ0Nzc0NiwwLjYyNV0sIm1pbiI6Wy0wLjAyOTk5OTk5OTMyOTQ0Nzc0NiwtMC4wMjk5OTk5OTkzMjk0NDc3NDYsLTAuNjI1XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjY3LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo2OCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjAyOTk5OTk5OTMyOTQ0Nzc0NiwwLjAyOTk5OTk5OTMyOTQ0Nzc0NiwwLjYyNV0sIm1pbiI6Wy0wLjAyOTk5OTk5OTMyOTQ0Nzc0NiwtMC4wMjk5OTk5OTkzMjk0NDc3NDYsLTAuNjI1XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjY5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo3MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjQ0OTk5OTk4ODA3OTA3MTA0LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2LDAuMDI5OTk5OTk5MzI5NDQ3NzQ2XSwibWluIjpbLTAuNDQ5OTk5OTg4MDc5MDcxMDQsLTAuMDI5OTk5OTk5MzI5NDQ3NzQ2LC0wLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo3MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NzIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC40MDAwMDAwMDU5NjA0NjQ1LDAuMDE0OTk5OTk5NjY0NzIzODczLDAuMDE5OTk5OTk5NTUyOTY1MTY0XSwibWluIjpbLTAuNDAwMDAwMDA1OTYwNDY0NSwtMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsLTAuMDE5OTk5OTk5NTUyOTY1MTY0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjczLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo3NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjQwMDAwMDAwNTk2MDQ2NDUsMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsMC4wMTk5OTk5OTk1NTI5NjUxNjRdLCJtaW4iOlstMC40MDAwMDAwMDU5NjA0NjQ1LC0wLjAxNDk5OTk5OTY2NDcyMzg3MywtMC4wMTk5OTk5OTk1NTI5NjUxNjRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NzUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjc2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuNDAwMDAwMDA1OTYwNDY0NSwwLjAxNDk5OTk5OTY2NDcyMzg3MywwLjAxOTk5OTk5OTU1Mjk2NTE2NF0sIm1pbiI6Wy0wLjQwMDAwMDAwNTk2MDQ2NDUsLTAuMDE0OTk5OTk5NjY0NzIzODczLC0wLjAxOTk5OTk5OTU1Mjk2NTE2NF0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo3NywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NzgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC40MDAwMDAwMDU5NjA0NjQ1LDAuMDE0OTk5OTk5NjY0NzIzODczLDAuMDE5OTk5OTk5NTUyOTY1MTY0XSwibWluIjpbLTAuNDAwMDAwMDA1OTYwNDY0NSwtMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsLTAuMDE5OTk5OTk5NTUyOTY1MTY0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjc5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo4MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjQwMDAwMDAwNTk2MDQ2NDUsMC4wMTQ5OTk5OTk2NjQ3MjM4NzMsMC4wMTk5OTk5OTk1NTI5NjUxNjRdLCJtaW4iOlstMC40MDAwMDAwMDU5NjA0NjQ1LC0wLjAxNDk5OTk5OTY2NDcyMzg3MywtMC4wMTk5OTk5OTk1NTI5NjUxNjRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6ODEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjgyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMjE5OTk5OTk4ODA3OTA3MSwwLjIyNDk5OTk5NDAzOTUzNTUyLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC4yMTk5OTk5OTg4MDc5MDcxLC0wLjIyNDk5OTk5NDAzOTUzNTUyLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjgzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo4NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjIzMDAwMDAwNDE3MjMyNTEzLDAuMDc1MDAwMDAyOTgwMjMyMjQsMC4yMzAwMDAwMDQxNzIzMjUxM10sIm1pbiI6Wy0wLjIzMDAwMDAwNDE3MjMyNTEzLC0wLjA3NTAwMDAwMjk4MDIzMjI0LC0wLjIzMDAwMDAwNDE3MjMyNTEzXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjg1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo4NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMC4wMjk5OTk5OTkzMjk0NDc3NDYsMC4yMjQ5OTk5OTQwMzk1MzU1MiwwLjAyOTk5OTk5OTMyOTQ0Nzc0Nl0sIm1pbiI6Wy0wLjAyOTk5OTk5OTMyOTQ0Nzc0NiwtMC4yMjQ5OTk5OTQwMzk1MzU1MiwtMC4wMjk5OTk5OTkzMjk0NDc3NDZdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6ODcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo4OCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMC4xODAwMDAwMDcxNTI1NTczNywwLjAxNzUwMDAwMDA3NDUwNTgwNiwwLjE4MDAwMDAwNzE1MjU1NzM3XSwibWluIjpbLTAuMTgwMDAwMDA3MTUyNTU3MzcsLTAuMDE3NTAwMDAwMDc0NTA1ODA2LC0wLjE4MDAwMDAwNzE1MjU1NzM3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjg5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6OTAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjAzOTk5OTk5OTEwNTkzMDMzLDAuMDE5OTk5OTk5NTUyOTY1MTY0XSwibWluIjpbLTAuMDU5OTk5OTk4NjU4ODk1NDksLTAuMDM5OTk5OTk5MTA1OTMwMzMsLTAuMDE5OTk5OTk5NTUyOTY1MTY0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjkxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo5MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1OTk5OTk5ODY1ODg5NTQ5LDAuMDM5OTk5OTk5MTA1OTMwMzMsMC4wMTk5OTk5OTk1NTI5NjUxNjRdLCJtaW4iOlstMC4wNTk5OTk5OTg2NTg4OTU0OSwtMC4wMzk5OTk5OTkxMDU5MzAzMywtMC4wMTk5OTk5OTk1NTI5NjUxNjRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6OTMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjk0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJtYXgiOlswLjA3MDAwMDAwMDI5ODAyMzIyLDAuMTEyMDAwMDAzNDU3MDY5NCwwLjA3MDAwMDAwMDI5ODAyMzIyXSwibWluIjpbLTAuMDcwMDAwMDAwMjk4MDIzMjIsLTAuMTEyMDAwMDAzNDU3MDY5NCwtMC4wNzAwMDAwMDAyOTgwMjMyMl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo5NSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjk2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJtYXgiOlswLjE3MzYwMDAwMzEyMzI4MzQsMC4xMDQwMDAwMDIxNDU3NjcyMSwwLjE3MzYwMDAwMzEyMzI4MzRdLCJtaW4iOlstMC4xNzM2MDAwMDMxMjMyODM0LC0wLjEwNDAwMDAwMjE0NTc2NzIxLC0wLjE3MzYwMDAwMzEyMzI4MzRdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6OTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo5OCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwibWF4IjpbMC4yODAwMDAwMDExOTIwOTI5LDAuMTAwMDAwMDAxNDkwMTE2MTIsMC4yODAwMDAwMDExOTIwOTI5XSwibWluIjpbLTAuMjgwMDAwMDAxMTkyMDkyOSwtMC4xMDAwMDAwMDE0OTAxMTYxMiwtMC4yODAwMDAwMDExOTIwOTI5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjk5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTY4LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTAwLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzI0LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxMDEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsIm1heCI6WzAuMDcwMDAwMDAwMjk4MDIzMjIsMC4xMTIwMDAwMDM0NTcwNjk0LDAuMDcwMDAwMDAwMjk4MDIzMjJdLCJtaW4iOlstMC4wNzAwMDAwMDAyOTgwMjMyMiwtMC4xMTIwMDAwMDM0NTcwNjk0LC0wLjA3MDAwMDAwMDI5ODAyMzIyXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMC4xNzM2MDAwMDMxMjMyODM0LDAuMTA0MDAwMDAyMTQ1NzY3MjEsMC4xNzM2MDAwMDMxMjMyODM0XSwibWluIjpbLTAuMTczNjAwMDAzMTIzMjgzNCwtMC4xMDQwMDAwMDIxNDU3NjcyMSwtMC4xNzM2MDAwMDMxMjMyODM0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwNCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwibWF4IjpbMC4yODAwMDAwMDExOTIwOTI5LDAuMTAwMDAwMDAxNDkwMTE2MTIsMC4yODAwMDAwMDExOTIwOTI5XSwibWluIjpbLTAuMjgwMDAwMDAxMTkyMDkyOSwtMC4xMDAwMDAwMDE0OTAxMTYxMiwtMC4yODAwMDAwMDExOTIwOTI5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwNywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjEwMDgwMDAwMDEzMTEzMDIyLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC4wNTk5OTk5OTg2NTg4OTU0OSwtMC4xMDA4MDAwMDAxMzExMzAyMiwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMDgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMDksImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsIm1heCI6WzAuMTQ4ODAwMDAwNTQ4MzYyNzMsMC4wOTM1OTk5OTc0NjA4NDIxMywwLjE0ODgwMDAwMDU0ODM2MjczXSwibWluIjpbLTAuMTQ4ODAwMDAwNTQ4MzYyNzMsLTAuMDkzNTk5OTk3NDYwODQyMTMsLTAuMTQ4ODAwMDAwNTQ4MzYyNzNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTEwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTExLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTY4LCJtYXgiOlswLjIzOTk5OTk5NDYzNTU4MTk3LDAuMDkwMDAwMDAzNTc2Mjc4NjksMC4yMzk5OTk5OTQ2MzU1ODE5N10sIm1pbiI6Wy0wLjIzOTk5OTk5NDYzNTU4MTk3LC0wLjA5MDAwMDAwMzU3NjI3ODY5LC0wLjIzOTk5OTk5NDYzNTU4MTk3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjExMiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjExMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0NCwibWF4IjpbMC4wNTk5OTk5OTg2NTg4OTU0OSwwLjEwMDgwMDAwMDEzMTEzMDIyLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC4wNTk5OTk5OTg2NTg4OTU0OSwtMC4xMDA4MDAwMDAxMzExMzAyMiwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMTQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMTUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxNDQsIm1heCI6WzAuMTQ4ODAwMDAwNTQ4MzYyNzMsMC4wOTM1OTk5OTc0NjA4NDIxMywwLjE0ODgwMDAwMDU0ODM2MjczXSwibWluIjpbLTAuMTQ4ODAwMDAwNTQ4MzYyNzMsLTAuMDkzNTk5OTk3NDYwODQyMTMsLTAuMTQ4ODAwMDAwNTQ4MzYyNzNdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTE2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQ0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTE3LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTY4LCJtYXgiOlswLjIzOTk5OTk5NDYzNTU4MTk3LDAuMDkwMDAwMDAzNTc2Mjc4NjksMC4yMzk5OTk5OTQ2MzU1ODE5N10sIm1pbiI6Wy0wLjIzOTk5OTk5NDYzNTU4MTk3LC0wLjA5MDAwMDAwMzU3NjI3ODY5LC0wLjIzOTk5OTk5NDYzNTU4MTk3XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjExOCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE2OCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjExOSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjQzOTk5OTk5NzYxNTgxNDIsMC4zNDk5OTk5OTQwMzk1MzU1LDAuMzYwMDAwMDE0MzA1MTE0NzVdLCJtaW4iOlstMC40Mzk5OTk5OTc2MTU4MTQyLC0wLjM0OTk5OTk5NDAzOTUzNTUsLTAuMzYwMDAwMDE0MzA1MTE0NzVdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTIwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMjEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wMzk5OTk5OTkxMDU5MzAzMywwLjM1MjQ5OTk5MTY1NTM0OTczLDAuMzYyNTAwMDExOTIwOTI4OTZdLCJtaW4iOlstMC4wMzk5OTk5OTkxMDU5MzAzMywtMC4zNTI0OTk5OTE2NTUzNDk3MywtMC4zNjI1MDAwMTE5MjA5Mjg5Nl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMjIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEyMywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDE5OTk5OTk5NTUyOTY1MTY0LDAuNDAwMDAwMDA1OTYwNDY0NV0sIm1pbiI6Wy0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAxOTk5OTk5OTU1Mjk2NTE2NCwtMC40MDAwMDAwMDU5NjA0NjQ1XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEyNCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTI1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMTk5OTk5OTk1NTI5NjUxNjQsMC40MDAwMDAwMDU5NjA0NjQ1XSwibWluIjpbLTAuMDUwMDAwMDAwNzQ1MDU4MDYsLTAuMDE5OTk5OTk5NTUyOTY1MTY0LC0wLjQwMDAwMDAwNTk2MDQ2NDVdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTI2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMjcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjAxOTk5OTk5OTU1Mjk2NTE2NCwwLjQwMDAwMDAwNTk2MDQ2NDVdLCJtaW4iOlstMC4wNTAwMDAwMDA3NDUwNTgwNiwtMC4wMTk5OTk5OTk1NTI5NjUxNjQsLTAuNDAwMDAwMDA1OTYwNDY0NV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMjgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEyOSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDM1MDAwMDAwMTQ5MDExNjEsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzNTAwMDAwMDE0OTAxMTYxLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzMCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTMxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzUwMDAwMDAxNDkwMTE2MSwwLjA1OTk5OTk5ODY1ODg5NTQ5XSwibWluIjpbLTAuMDUwMDAwMDAwNzQ1MDU4MDYsLTAuMDM1MDAwMDAwMTQ5MDExNjEsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTMyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMzMsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjAzNTAwMDAwMDE0OTAxMTYxLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC4wNTAwMDAwMDA3NDUwNTgwNiwtMC4wMzUwMDAwMDAxNDkwMTE2MSwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMzQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzNSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDM1MDAwMDAwMTQ5MDExNjEsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzNTAwMDAwMDE0OTAxMTYxLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzNiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTM3LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzUwMDAwMDAxNDkwMTE2MSwwLjA1OTk5OTk5ODY1ODg5NTQ5XSwibWluIjpbLTAuMDUwMDAwMDAwNzQ1MDU4MDYsLTAuMDM1MDAwMDAwMTQ5MDExNjEsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTM4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxMzksImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjAzNTAwMDAwMDE0OTAxMTYxLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC4wNTAwMDAwMDA3NDUwNTgwNiwtMC4wMzUwMDAwMDAxNDkwMTE2MSwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNDAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjA1MDAwMDAwMDc0NTA1ODA2LDAuMDM1MDAwMDAwMTQ5MDExNjEsMC4wNTk5OTk5OTg2NTg4OTU0OV0sIm1pbiI6Wy0wLjA1MDAwMDAwMDc0NTA1ODA2LC0wLjAzNTAwMDAwMDE0OTAxMTYxLC0wLjA1OTk5OTk5ODY1ODg5NTQ5XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTQzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuMDUwMDAwMDAwNzQ1MDU4MDYsMC4wMzUwMDAwMDAxNDkwMTE2MSwwLjA1OTk5OTk5ODY1ODg5NTQ5XSwibWluIjpbLTAuMDUwMDAwMDAwNzQ1MDU4MDYsLTAuMDM1MDAwMDAwMTQ5MDExNjEsLTAuMDU5OTk5OTk4NjU4ODk1NDldLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTQ0LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNDUsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC4wNTAwMDAwMDA3NDUwNTgwNiwwLjAzNTAwMDAwMDE0OTAxMTYxLDAuMDU5OTk5OTk4NjU4ODk1NDldLCJtaW4iOlstMC4wNTAwMDAwMDA3NDUwNTgwNiwtMC4wMzUwMDAwMDAxNDkwMTE2MSwtMC4wNTk5OTk5OTg2NTg4OTU0OV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNDYsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0NywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjU3OTk5OTk4MzMxMDY5OTUsMC4wMTI1MDAwMDAxODYyNjQ1MTUsMC4wNjQ5OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0wLjU3OTk5OTk4MzMxMDY5OTUsLTAuMDEyNTAwMDAwMTg2MjY0NTE1LC0wLjA2NDk5OTk5NzYxNTgxNDIxXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE0OCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTQ5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuNTc5OTk5OTgzMzEwNjk5NSwwLjAxMjUwMDAwMDE4NjI2NDUxNSwwLjA2NDk5OTk5NzYxNTgxNDIxXSwibWluIjpbLTAuNTc5OTk5OTgzMzEwNjk5NSwtMC4wMTI1MDAwMDAxODYyNjQ1MTUsLTAuMDY0OTk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTUwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNTEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMC41Nzk5OTk5ODMzMTA2OTk1LDAuMDEyNTAwMDAwMTg2MjY0NTE1LDAuMDY0OTk5OTk3NjE1ODE0MjFdLCJtaW4iOlstMC41Nzk5OTk5ODMzMTA2OTk1LC0wLjAxMjUwMDAwMDE4NjI2NDUxNSwtMC4wNjQ5OTk5OTc2MTU4MTQyMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE1MywiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJtYXgiOlswLjU3OTk5OTk4MzMxMDY5OTUsMC4wMTI1MDAwMDAxODYyNjQ1MTUsMC4wNjQ5OTk5OTc2MTU4MTQyMV0sIm1pbiI6Wy0wLjU3OTk5OTk4MzMxMDY5OTUsLTAuMDEyNTAwMDAwMTg2MjY0NTE1LC0wLjA2NDk5OTk5NzYxNTgxNDIxXSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE1NCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjI0LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTU1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsIm1heCI6WzAuNTc5OTk5OTgzMzEwNjk5NSwwLjAxMjUwMDAwMDE4NjI2NDUxNSwwLjA2NDk5OTk5NzYxNTgxNDIxXSwibWluIjpbLTAuNTc5OTk5OTgzMzEwNjk5NSwtMC4wMTI1MDAwMDAxODYyNjQ1MTUsLTAuMDY0OTk5OTk3NjE1ODE0MjFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTU2LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxNTcsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5MSwibWF4IjpbMy43NV0sIm1pbiI6WzBdLCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3IjoxNTgsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5MSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjE1OSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjkxLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTYwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6OTEsInR5cGUiOiJWRUM0In0seyJidWZmZXJWaWV3IjoxNjEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo5MSwidHlwZSI6IlZFQzQifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzIsImJ5dGVPZmZzZXQiOjU3NiwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6NjQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjEyMjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjE1MTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjE4MDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIwODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIzNzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI2NjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI5NTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjMyNDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjM1MjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjM4MTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjQxMDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjQzOTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjQ2ODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjQ5NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjUyNTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjU1NDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjU4MzIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjYxMjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjY0MDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjY2OTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjY5ODQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjcyNzIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjc1NjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjc4NDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjgxMzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg0MjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg3MTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjkwMDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjkyODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjk1NzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjk4NjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjEwMTUyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoxMDQ0MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MTA3MjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjExMDE2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoxMTMwNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MjgsImJ5dGVPZmZzZXQiOjExNTkyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6MTMzMjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjo1NTIsImJ5dGVPZmZzZXQiOjE1MDQ4LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6MTU2MDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0IjoxNzMyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MTkwNTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjE5MzQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoxOTYzMiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MTk5MjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIwMjA4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyMDQ5NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjA3ODQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIxMDcyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyMTM2MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjE2NDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIxOTM2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyMjIyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjI1MTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIyODAwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyMzA4OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjMzNzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjIzNjY0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyMzk1MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjQyNDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI0NTI4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyNDgxNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjUxMDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI1MzkyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyNTY4MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjU5NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI2MjU2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyNjU0NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MjY4MzIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI3MTIwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyNzQwOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjc2OTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI3OTg0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyODI3MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjg1NjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI4ODQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjoyOTEzNiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjk0MjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjI5NzEyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjozMDAwMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MzAyODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0IjozMDU3NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MjgsImJ5dGVPZmZzZXQiOjMyMzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6MzQwMzIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0IjozNTc2MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mzc0ODgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjM3Nzc2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0IjozODA2NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MzgzNTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0IjozODY0MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MjgsImJ5dGVPZmZzZXQiOjQwMzY4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NDIwOTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0Ijo0MzgyNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIwMTYsImJ5dGVPZmZzZXQiOjQ1NTUyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MjAxNiwiYnl0ZU9mZnNldCI6NDc1NjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjo2NDgsImJ5dGVPZmZzZXQiOjQ5NTg0LCJ0YXJnZXQiOjM0OTYzfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NTAyMzIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0Ijo1MTk2MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MjgsImJ5dGVPZmZzZXQiOjUzNjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NTU0MTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMDE2LCJieXRlT2Zmc2V0Ijo1NzE0NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIwMTYsImJ5dGVPZmZzZXQiOjU5MTYwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NjExNzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0Ijo2MjkwNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MjgsImJ5dGVPZmZzZXQiOjY0NjMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NjYzNjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMDE2LCJieXRlT2Zmc2V0Ijo2ODA4OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIwMTYsImJ5dGVPZmZzZXQiOjcwMTA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NzIxMjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxNzI4LCJieXRlT2Zmc2V0Ijo3Mzg0OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MjgsImJ5dGVPZmZzZXQiOjc1NTc2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTcyOCwiYnl0ZU9mZnNldCI6NzczMDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMDE2LCJieXRlT2Zmc2V0Ijo3OTAzMiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIwMTYsImJ5dGVPZmZzZXQiOjgxMDQ4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4MzA2NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODMzNTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjgzNjQwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4MzkyOCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODQyMTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg0NTA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NDc5MiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODUwODAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg1MzY4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NTY1NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODU5NDQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg2MjMyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NjUyMCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODY4MDgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg3MDk2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4NzM4NCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODc2NzIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg3OTYwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4ODI0OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODg1MzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg4ODI0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4OTExMiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6ODk0MDAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjg5Njg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo4OTk3NiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6OTAyNjQsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjkwNTUyLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MDg0MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6OTExMjgsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjkxNDE2LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MTcwNCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6OTE5OTIsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjkyMjgwLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MjU2OCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6OTI4NTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyODgsImJ5dGVPZmZzZXQiOjkzMTQ0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Mjg4LCJieXRlT2Zmc2V0Ijo5MzQzMiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6OTM3MjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjozNjQsImJ5dGVPZmZzZXQiOjk0MDA4fSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTA5MiwiYnl0ZU9mZnNldCI6OTQzNzJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMDkyLCJieXRlT2Zmc2V0Ijo5NTQ2NH0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE0NTYsImJ5dGVPZmZzZXQiOjk2NTU2fSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTQ1NiwiYnl0ZU9mZnNldCI6OTgwMTJ9XSwiYnVmZmVycyI6W3siYnl0ZUxlbmd0aCI6OTk0Njh9XX0gjIQBAEJJTgAzM/O+7FG4vZqZWT8zM/O+7FG4vZqZWT8zM/O+7FG4vZqZWT8zM/O+7FG4PZqZWT8zM/O+7FG4PZqZWT8zM/O+7FG4PZqZWT8zM/O+7FG4vZqZWb8zM/O+7FG4vZqZWb8zM/O+7FG4vZqZWb8zM/O+7FG4PZqZWb8zM/O+7FG4PZqZWb8zM/O+7FG4PZqZWb8zM/M+7FG4vZqZWT8zM/M+7FG4vZqZWT8zM/M+7FG4vZqZWT8zM/M+7FG4PZqZWT8zM/M+7FG4PZqZWT8zM/M+7FG4PZqZWT8zM/M+7FG4vZqZWb8zM/M+7FG4vZqZWb8zM/M+7FG4vZqZWb8zM/M+7FG4PZqZWb8zM/M+7FG4PZqZWb8zM/M+7FG4PZqZWb8AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAACAAUACwACAAsACAAGAAkAFQAGABUAEgAUABcAEQAUABEADgAMAA8AAwAMAAMAAAAHABMADQAHAA0AAQAWAAoABAAWAAQAEAAfheu+zcyMvilcDz4fheu+zcyMvilcDz4fheu+zcyMvilcDz4fheu+zcyMPilcDz4fheu+zcyMPilcDz4fheu+zcyMPilcDz4fheu+zcyMvilcD74fheu+zcyMvilcD74fheu+zcyMvilcD74fheu+zcyMPilcD74fheu+zcyMPilcD74fheu+zcyMPilcD74fhes+zcyMvilcDz4fhes+zcyMvilcDz4fhes+zcyMvilcDz4fhes+zcyMPilcDz4fhes+zcyMPilcDz4fhes+zcyMPilcDz4fhes+zcyMvilcD74fhes+zcyMvilcD74fhes+zcyMvilcD74fhes+zcyMPilcD74fhes+zcyMPilcD74fhes+zcyMPilcD74AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAfheu+PQpXvmZm5j4fheu+PQpXvmZm5j4fheu+PQpXvmZm5j4fheu+PQpXPmZm5j4fheu+PQpXPmZm5j4fheu+PQpXPmZm5j4fheu+PQpXvmZm5r4fheu+PQpXvmZm5r4fheu+PQpXvmZm5r4fheu+PQpXPmZm5r4fheu+PQpXPmZm5r4fheu+PQpXPmZm5r4fhes+PQpXvmZm5j4fhes+PQpXvmZm5j4fhes+PQpXvmZm5j4fhes+PQpXPmZm5j4fhes+PQpXPmZm5j4fhes+PQpXPmZm5j4fhes+PQpXvmZm5r4fhes+PQpXvmZm5r4fhes+PQpXvmZm5r4fhes+PQpXPmZm5r4fhes+PQpXPmZm5r4fhes+PQpXPmZm5r4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW+zcyMvj0KVz6PwvW+zcyMvj0KVz6PwvW+zcyMvj0KVz6PwvW+zcyMPj0KVz6PwvW+zcyMPj0KVz6PwvW+zcyMPj0KVz6PwvW+zcyMvj0KV76PwvW+zcyMvj0KV76PwvW+zcyMvj0KV76PwvW+zcyMPj0KV76PwvW+zcyMPj0KV76PwvW+zcyMPj0KV76PwvU+zcyMvj0KVz6PwvU+zcyMvj0KVz6PwvU+zcyMvj0KVz6PwvU+zcyMPj0KVz6PwvU+zcyMPj0KVz6PwvU+zcyMPj0KVz6PwvU+zcyMvj0KV76PwvU+zcyMvj0KV76PwvU+zcyMvj0KV76PwvU+zcyMPj0KV76PwvU+zcyMPj0KV76PwvU+zcyMPj0KV74AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABmZua+MzMzvgrXIz5mZua+MzMzvgrXIz5mZua+MzMzvgrXIz5mZua+MzMzPgrXIz5mZua+MzMzPgrXIz5mZua+MzMzPgrXIz5mZua+MzMzvgrXI75mZua+MzMzvgrXI75mZua+MzMzvgrXI75mZua+MzMzPgrXI75mZua+MzMzPgrXI75mZua+MzMzPgrXI75mZuY+MzMzvgrXIz5mZuY+MzMzvgrXIz5mZuY+MzMzvgrXIz5mZuY+MzMzPgrXIz5mZuY+MzMzPgrXIz5mZuY+MzMzPgrXIz5mZuY+MzMzvgrXI75mZuY+MzMzvgrXI75mZuY+MzMzvgrXI75mZuY+MzMzPgrXI75mZuY+MzMzPgrXI75mZuY+MzMzPgrXI74AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADsUbi+KVyPvM3MTDzsUbi+KVyPvM3MTDzsUbi+KVyPvM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPvM3MTLzsUbi+KVyPvM3MTLzsUbi+KVyPvM3MTLzsUbi+KVyPPM3MTLzsUbi+KVyPPM3MTLzsUbi+KVyPPM3MTLzsUbg+KVyPvM3MTDzsUbg+KVyPvM3MTDzsUbg+KVyPvM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPvM3MTLzsUbg+KVyPvM3MTLzsUbg+KVyPvM3MTLzsUbg+KVyPPM3MTLzsUbg+KVyPPM3MTLzsUbg+KVyPPM3MTLwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADsUbi+KVyPvM3MTDzsUbi+KVyPvM3MTDzsUbi+KVyPvM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPvM3MTLzsUbi+KVyPvM3MTLzsUbi+KVyPvM3MTLzsUbi+KVyPPM3MTLzsUbi+KVyPPM3MTLzsUbi+KVyPPM3MTLzsUbg+KVyPvM3MTDzsUbg+KVyPvM3MTDzsUbg+KVyPvM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPvM3MTLzsUbg+KVyPvM3MTLzsUbg+KVyPvM3MTLzsUbg+KVyPPM3MTLzsUbg+KVyPPM3MTLzsUbg+KVyPPM3MTLwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADsUbi+KVyPvM3MTDzsUbi+KVyPvM3MTDzsUbi+KVyPvM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPPM3MTDzsUbi+KVyPvM3MTLzsUbi+KVyPvM3MTLzsUbi+KVyPvM3MTLzsUbi+KVyPPM3MTLzsUbi+KVyPPM3MTLzsUbi+KVyPPM3MTLzsUbg+KVyPvM3MTDzsUbg+KVyPvM3MTDzsUbg+KVyPvM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPPM3MTDzsUbg+KVyPvM3MTLzsUbg+KVyPvM3MTLzsUbg+KVyPvM3MTLzsUbg+KVyPPM3MTLzsUbg+KVyPPM3MTLzsUbg+KVyPPM3MTLwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAK16O8mpmZvo/CdTwK16O8mpmZvo/CdTwK16O8mpmZvo/CdTwK16O8mpmZPo/CdTwK16O8mpmZPo/CdTwK16O8mpmZPo/CdTwK16O8mpmZvo/CdbwK16O8mpmZvo/CdbwK16O8mpmZvo/CdbwK16O8mpmZPo/CdbwK16O8mpmZPo/CdbwK16O8mpmZPo/CdbwK16M8mpmZvo/CdTwK16M8mpmZvo/CdTwK16M8mpmZvo/CdTwK16M8mpmZPo/CdTwK16M8mpmZPo/CdTwK16M8mpmZPo/CdTwK16M8mpmZvo/CdbwK16M8mpmZvo/CdbwK16M8mpmZvo/CdbwK16M8mpmZPo/CdbwK16M8mpmZPo/CdbwK16M8mpmZPo/CdbwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAK16O8mpmZvo/CdTwK16O8mpmZvo/CdTwK16O8mpmZvo/CdTwK16O8mpmZPo/CdTwK16O8mpmZPo/CdTwK16O8mpmZPo/CdTwK16O8mpmZvo/CdbwK16O8mpmZvo/CdbwK16O8mpmZvo/CdbwK16O8mpmZPo/CdbwK16O8mpmZPo/CdbwK16O8mpmZPo/CdbwK16M8mpmZvo/CdTwK16M8mpmZvo/CdTwK16M8mpmZvo/CdTwK16M8mpmZPo/CdTwK16M8mpmZPo/CdTwK16M8mpmZPo/CdTwK16M8mpmZvo/CdbwK16M8mpmZvo/CdbwK16M8mpmZvo/CdbwK16M8mpmZPo/CdbwK16M8mpmZPo/CdbwK16M8mpmZPo/CdbwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABcj8K+CtcjvQrXozxcj8K+CtcjvQrXozxcj8K+CtcjvQrXozxcj8K+CtcjPQrXozxcj8K+CtcjPQrXozxcj8K+CtcjPQrXozxcj8K+CtcjvQrXo7xcj8K+CtcjvQrXo7xcj8K+CtcjvQrXo7xcj8K+CtcjPQrXo7xcj8K+CtcjPQrXo7xcj8K+CtcjPQrXo7xcj8I+CtcjvQrXozxcj8I+CtcjvQrXozxcj8I+CtcjvQrXozxcj8I+CtcjPQrXozxcj8I+CtcjPQrXozxcj8I+CtcjPQrXozxcj8I+CtcjvQrXo7xcj8I+CtcjvQrXo7xcj8I+CtcjvQrXo7xcj8I+CtcjPQrXo7xcj8I+CtcjPQrXo7xcj8I+CtcjPQrXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABcj8K+CtcjvQrXozxcj8K+CtcjvQrXozxcj8K+CtcjvQrXozxcj8K+CtcjPQrXozxcj8K+CtcjPQrXozxcj8K+CtcjPQrXozxcj8K+CtcjvQrXo7xcj8K+CtcjvQrXo7xcj8K+CtcjvQrXo7xcj8K+CtcjPQrXo7xcj8K+CtcjPQrXo7xcj8K+CtcjPQrXo7xcj8I+CtcjvQrXozxcj8I+CtcjvQrXozxcj8I+CtcjvQrXozxcj8I+CtcjPQrXozxcj8I+CtcjPQrXozxcj8I+CtcjPQrXozxcj8I+CtcjvQrXo7xcj8I+CtcjvQrXo7xcj8I+CtcjvQrXo7xcj8I+CtcjPQrXo7xcj8I+CtcjPQrXo7xcj8I+CtcjPQrXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9CtejvDMzEz+PwnW9CtejvDMzEz+PwnW9CtejvDMzEz+PwnW9CtejPDMzEz+PwnW9CtejPDMzEz+PwnW9CtejPDMzEz+PwnW9CtejvDMzE7+PwnW9CtejvDMzE7+PwnW9CtejvDMzE7+PwnW9CtejPDMzE7+PwnW9CtejPDMzE7+PwnW9CtejPDMzE7+PwnU9CtejvDMzEz+PwnU9CtejvDMzEz+PwnU9CtejvDMzEz+PwnU9CtejPDMzEz+PwnU9CtejPDMzEz+PwnU9CtejPDMzEz+PwnU9CtejvDMzE7+PwnU9CtejvDMzE7+PwnU9CtejvDMzE7+PwnU9CtejPDMzE7+PwnU9CtejPDMzE7+PwnU9CtejPDMzE78AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9CtejvDMzEz+PwnW9CtejvDMzEz+PwnW9CtejvDMzEz+PwnW9CtejPDMzEz+PwnW9CtejPDMzEz+PwnW9CtejPDMzEz+PwnW9CtejvDMzE7+PwnW9CtejvDMzE7+PwnW9CtejvDMzE7+PwnW9CtejPDMzE7+PwnW9CtejPDMzE7+PwnW9CtejPDMzE7+PwnU9CtejvDMzEz+PwnU9CtejvDMzEz+PwnU9CtejvDMzEz+PwnU9CtejPDMzEz+PwnU9CtejPDMzEz+PwnU9CtejPDMzEz+PwnU9CtejvDMzE7+PwnU9CtejvDMzE7+PwnU9CtejvDMzE7+PwnU9CtejPDMzE7+PwnU9CtejPDMzE7+PwnU9CtejPDMzE78AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9j8J1vs3MzDyPwnW9j8J1vs3MzDyPwnW9j8J1vs3MzDyPwnW9j8J1Ps3MzDyPwnW9j8J1Ps3MzDyPwnW9j8J1Ps3MzDyPwnW9j8J1vs3MzLyPwnW9j8J1vs3MzLyPwnW9j8J1vs3MzLyPwnW9j8J1Ps3MzLyPwnW9j8J1Ps3MzLyPwnW9j8J1Ps3MzLyPwnU9j8J1vs3MzDyPwnU9j8J1vs3MzDyPwnU9j8J1vs3MzDyPwnU9j8J1Ps3MzDyPwnU9j8J1Ps3MzDyPwnU9j8J1Ps3MzDyPwnU9j8J1vs3MzLyPwnU9j8J1vs3MzLyPwnU9j8J1vs3MzLyPwnU9j8J1Ps3MzLyPwnU9j8J1Ps3MzLyPwnU9j8J1Ps3MzLwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9j8J1vs3MzDyPwnW9j8J1vs3MzDyPwnW9j8J1vs3MzDyPwnW9j8J1Ps3MzDyPwnW9j8J1Ps3MzDyPwnW9j8J1Ps3MzDyPwnW9j8J1vs3MzLyPwnW9j8J1vs3MzLyPwnW9j8J1vs3MzLyPwnW9j8J1Ps3MzLyPwnW9j8J1Ps3MzLyPwnW9j8J1Ps3MzLyPwnU9j8J1vs3MzDyPwnU9j8J1vs3MzDyPwnU9j8J1vs3MzDyPwnU9j8J1Ps3MzDyPwnU9j8J1Ps3MzDyPwnU9j8J1Ps3MzDyPwnU9j8J1vs3MzLyPwnU9j8J1vs3MzLyPwnU9j8J1vs3MzLyPwnU9j8J1Ps3MzLyPwnU9j8J1Ps3MzLyPwnU9j8J1Ps3MzLwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9CtcjvI/CdT2PwnW9CtcjvI/CdT2PwnW9CtcjvI/CdT2PwnW9CtcjPI/CdT2PwnW9CtcjPI/CdT2PwnW9CtcjPI/CdT2PwnW9CtcjvI/Cdb2PwnW9CtcjvI/Cdb2PwnW9CtcjvI/Cdb2PwnW9CtcjPI/Cdb2PwnW9CtcjPI/Cdb2PwnW9CtcjPI/Cdb2PwnU9CtcjvI/CdT2PwnU9CtcjvI/CdT2PwnU9CtcjvI/CdT2PwnU9CtcjPI/CdT2PwnU9CtcjPI/CdT2PwnU9CtcjPI/CdT2PwnU9CtcjvI/Cdb2PwnU9CtcjvI/Cdb2PwnU9CtcjvI/Cdb2PwnU9CtcjPI/Cdb2PwnU9CtcjPI/Cdb2PwnU9CtcjPI/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9CtcjvI/CdT2PwnW9CtcjvI/CdT2PwnW9CtcjvI/CdT2PwnW9CtcjPI/CdT2PwnW9CtcjPI/CdT2PwnW9CtcjPI/CdT2PwnW9CtcjvI/Cdb2PwnW9CtcjvI/Cdb2PwnW9CtcjvI/Cdb2PwnW9CtcjPI/Cdb2PwnW9CtcjPI/Cdb2PwnW9CtcjPI/Cdb2PwnU9CtcjvI/CdT2PwnU9CtcjvI/CdT2PwnU9CtcjvI/CdT2PwnU9CtcjPI/CdT2PwnU9CtcjPI/CdT2PwnU9CtcjPI/CdT2PwnU9CtcjvI/Cdb2PwnU9CtcjvI/Cdb2PwnU9CtcjvI/Cdb2PwnU9CtcjPI/Cdb2PwnU9CtcjPI/Cdb2PwnU9CtcjPI/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9zcxMvQrXIz3NzEy9zcxMvQrXIz3NzEy9zcxMvQrXIz3NzEy9zcxMPQrXIz3NzEy9zcxMPQrXIz3NzEy9zcxMPQrXIz3NzEy9zcxMvQrXI73NzEy9zcxMvQrXI73NzEy9zcxMvQrXI73NzEy9zcxMPQrXI73NzEy9zcxMPQrXI73NzEy9zcxMPQrXI73NzEw9zcxMvQrXIz3NzEw9zcxMvQrXIz3NzEw9zcxMvQrXIz3NzEw9zcxMPQrXIz3NzEw9zcxMPQrXIz3NzEw9zcxMPQrXIz3NzEw9zcxMvQrXI73NzEw9zcxMvQrXI73NzEw9zcxMvQrXI73NzEw9zcxMPQrXI73NzEw9zcxMPQrXI73NzEw9zcxMPQrXI70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9zcxMvQrXIz3NzEy9zcxMvQrXIz3NzEy9zcxMvQrXIz3NzEy9zcxMPQrXIz3NzEy9zcxMPQrXIz3NzEy9zcxMPQrXIz3NzEy9zcxMvQrXI73NzEy9zcxMvQrXI73NzEy9zcxMvQrXI73NzEy9zcxMPQrXI73NzEy9zcxMPQrXI73NzEy9zcxMPQrXI73NzEw9zcxMvQrXIz3NzEw9zcxMvQrXIz3NzEw9zcxMvQrXIz3NzEw9zcxMPQrXIz3NzEw9zcxMPQrXIz3NzEw9zcxMPQrXIz3NzEw9zcxMvQrXI73NzEw9zcxMvQrXI73NzEw9zcxMvQrXI73NzEw9zcxMPQrXI73NzEw9zcxMPQrXI73NzEw9zcxMPQrXI70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAMzNTv4/Cdb0AAAAAMzNTv4/Cdb0AAAAAMzNTv4/Cdb0AAAAAMzNTP4/Cdb0AAAAAMzNTP4/Cdb0AAAAAMzNTP4/Cdb3ybX48MzNTv8xibb3ybX48MzNTv8xibb3ybX48MzNTv8xibb3ybX48MzNTP8xibb3ybX48MzNTP8xibb3ybX48MzNTP8xibb2PwvU8MzNTv5vVVL2PwvU8MzNTv5vVVL2PwvU8MzNTv5vVVL2PwvU8MzNTP5vVVL2PwvU8MzNTP5vVVL2PwvU8MzNTP5vVVL1Pxy09MzNTv0/HLb1Pxy09MzNTv0/HLb1Pxy09MzNTv0/HLb1Pxy09MzNTP0/HLb1Pxy09MzNTP0/HLb1Pxy09MzNTP0/HLb2b1VQ9MzNTv4/C9byb1VQ9MzNTv4/C9byb1VQ9MzNTv4/C9byb1VQ9MzNTP4/C9byb1VQ9MzNTP4/C9byb1VQ9MzNTP4/C9bzMYm09MzNTv/JtfrzMYm09MzNTv/JtfrzMYm09MzNTv/JtfrzMYm09MzNTP/JtfrzMYm09MzNTP/JtfrzMYm09MzNTP/JtfryPwnU9MzNTvwAAAICPwnU9MzNTvwAAAICPwnU9MzNTvwAAAICPwnU9MzNTPwAAAICPwnU9MzNTPwAAAICPwnU9MzNTPwAAAIDMYm09MzNTv/JtfjzMYm09MzNTv/JtfjzMYm09MzNTv/JtfjzMYm09MzNTP/JtfjzMYm09MzNTP/JtfjzMYm09MzNTP/Jtfjyb1VQ9MzNTv4/C9Tyb1VQ9MzNTv4/C9Tyb1VQ9MzNTv4/C9Tyb1VQ9MzNTP4/C9Tyb1VQ9MzNTP4/C9Tyb1VQ9MzNTP4/C9TxPxy09MzNTv0/HLT1Pxy09MzNTv0/HLT1Pxy09MzNTv0/HLT1Pxy09MzNTP0/HLT1Pxy09MzNTP0/HLT1Pxy09MzNTP0/HLT2PwvU8MzNTv5vVVD2PwvU8MzNTv5vVVD2PwvU8MzNTv5vVVD2PwvU8MzNTP5vVVD2PwvU8MzNTP5vVVD2PwvU8MzNTP5vVVD3ybX48MzNTv8xibT3ybX48MzNTv8xibT3ybX48MzNTv8xibT3ybX48MzNTP8xibT3ybX48MzNTP8xibT3ybX48MzNTP8xibT0AAAAAMzNTv4/CdT0AAAAAMzNTv4/CdT0AAAAAMzNTv4/CdT0AAAAAMzNTP4/CdT0AAAAAMzNTP4/CdT0AAAAAMzNTP4/CdT3ybX68MzNTv8xibT3ybX68MzNTv8xibT3ybX68MzNTv8xibT3ybX68MzNTP8xibT3ybX68MzNTP8xibT3ybX68MzNTP8xibT2PwvW8MzNTv5vVVD2PwvW8MzNTv5vVVD2PwvW8MzNTv5vVVD2PwvW8MzNTP5vVVD2PwvW8MzNTP5vVVD2PwvW8MzNTP5vVVD1Pxy29MzNTv0/HLT1Pxy29MzNTv0/HLT1Pxy29MzNTv0/HLT1Pxy29MzNTP0/HLT1Pxy29MzNTP0/HLT1Pxy29MzNTP0/HLT2b1VS9MzNTv4/C9Tyb1VS9MzNTv4/C9Tyb1VS9MzNTv4/C9Tyb1VS9MzNTP4/C9Tyb1VS9MzNTP4/C9Tyb1VS9MzNTP4/C9TzMYm29MzNTv/JtfjzMYm29MzNTv/JtfjzMYm29MzNTv/JtfjzMYm29MzNTP/JtfjzMYm29MzNTP/JtfjzMYm29MzNTP/JtfjyPwnW9MzNTvwAAAICPwnW9MzNTvwAAAICPwnW9MzNTvwAAAICPwnW9MzNTPwAAAICPwnW9MzNTPwAAAICPwnW9MzNTPwAAAIDMYm29MzNTv/JtfrzMYm29MzNTv/JtfrzMYm29MzNTv/JtfrzMYm29MzNTP/JtfrzMYm29MzNTP/JtfrzMYm29MzNTP/Jtfryb1VS9MzNTv4/C9byb1VS9MzNTv4/C9byb1VS9MzNTv4/C9byb1VS9MzNTP4/C9byb1VS9MzNTP4/C9byb1VS9MzNTP4/C9bxPxy29MzNTv0/HLb1Pxy29MzNTv0/HLb1Pxy29MzNTv0/HLb1Pxy29MzNTP0/HLb1Pxy29MzNTP0/HLb1Pxy29MzNTP0/HLb2PwvW8MzNTv5vVVL2PwvW8MzNTv5vVVL2PwvW8MzNTv5vVVL2PwvW8MzNTP5vVVL2PwvW8MzNTP5vVVL2PwvW8MzNTP5vVVL3ybX68MzNTv8xibb3ybX68MzNTv8xibb3ybX68MzNTv8xibb3ybX68MzNTP8xibb3ybX68MzNTP8xibb3ybX68MzNTP8xibb0AAAAAAACAvwAAAABvowU+AAAAAIHPfb9vowW+AAAAAIHPfb8AAAAAAACAPwAAAABvowU+AAAAAIHPfb9vowW+AAAAAIHPfb8AAAAAAACAvwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAPwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAvwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAPwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAvwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+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AACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAvwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAvwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAPwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAvwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAPwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAPwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAPwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAvwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAPwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAvwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAPwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAvwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAAACAPwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL9xPcq+j8J1vQrXIz1xPcq+j8J1vQrXIz1xPcq+j8J1vQrXIz1xPcq+j8J1PQrXIz1xPcq+j8J1PQrXIz1xPcq+j8J1PQrXIz1xPcq+j8J1vQrXI71xPcq+j8J1vQrXI71xPcq+j8J1vQrXI71xPcq+j8J1PQrXI71xPcq+j8J1PQrXI71xPcq+j8J1PQrXI71xPco+j8J1vQrXIz1xPco+j8J1vQrXIz1xPco+j8J1vQrXIz1xPco+j8J1PQrXIz1xPco+j8J1PQrXIz1xPco+j8J1PQrXIz1xPco+j8J1vQrXI71xPco+j8J1vQrXI71xPco+j8J1vQrXI71xPco+j8J1PQrXI71xPco+j8J1PQrXI71xPco+j8J1PQrXI70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABxPcq+CtcjvQrXIz1xPcq+CtcjvQrXIz1xPcq+CtcjvQrXIz1xPcq+CtcjPQrXIz1xPcq+CtcjPQrXIz1xPcq+CtcjPQrXIz1xPcq+CtcjvQrXI71xPcq+CtcjvQrXI71xPcq+CtcjvQrXI71xPcq+CtcjPQrXI71xPcq+CtcjPQrXI71xPcq+CtcjPQrXI71xPco+CtcjvQrXIz1xPco+CtcjvQrXIz1xPco+CtcjvQrXIz1xPco+CtcjPQrXIz1xPco+CtcjPQrXIz1xPco+CtcjPQrXIz1xPco+CtcjvQrXI71xPco+CtcjvQrXI71xPco+CtcjvQrXI71xPco+CtcjPQrXI71xPco+CtcjPQrXI71xPco+CtcjPQrXI70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABxPcq+CtcjvQrXIz1xPcq+CtcjvQrXIz1xPcq+CtcjvQrXIz1xPcq+CtcjPQrXIz1xPcq+CtcjPQrXIz1xPcq+CtcjPQrXIz1xPcq+CtcjvQrXI71xPcq+CtcjvQrXI71xPcq+CtcjvQrXI71xPcq+CtcjPQrXI71xPcq+CtcjPQrXI71xPcq+CtcjPQrXI71xPco+CtcjvQrXIz1xPco+CtcjvQrXIz1xPco+CtcjvQrXIz1xPco+CtcjPQrXIz1xPco+CtcjPQrXIz1xPco+CtcjPQrXIz1xPco+CtcjvQrXI71xPco+CtcjvQrXI71xPco+CtcjvQrXI71xPco+CtcjPQrXI71xPco+CtcjPQrXI71xPco+CtcjPQrXI70AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADsUTi9mpmJv4/CdT3sUTi9mpmJv4/CdT3sUTi9mpmJv4/CdT3sUTi9mpmJP4/CdT3sUTi9mpmJP4/CdT3sUTi9mpmJP4/CdT3sUTi9mpmJv4/Cdb3sUTi9mpmJv4/Cdb3sUTi9mpmJv4/Cdb3sUTi9mpmJP4/Cdb3sUTi9mpmJP4/Cdb3sUTi9mpmJP4/Cdb3sUTg9mpmJv4/CdT3sUTg9mpmJv4/CdT3sUTg9mpmJv4/CdT3sUTg9mpmJP4/CdT3sUTg9mpmJP4/CdT3sUTg9mpmJP4/CdT3sUTg9mpmJv4/Cdb3sUTg9mpmJv4/Cdb3sUTg9mpmJv4/Cdb3sUTg9mpmJP4/Cdb3sUTg9mpmJP4/Cdb3sUTg9mpmJP4/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADsUTi9mpmJv4/CdT3sUTi9mpmJv4/CdT3sUTi9mpmJv4/CdT3sUTi9mpmJP4/CdT3sUTi9mpmJP4/CdT3sUTi9mpmJP4/CdT3sUTi9mpmJv4/Cdb3sUTi9mpmJv4/Cdb3sUTi9mpmJv4/Cdb3sUTi9mpmJP4/Cdb3sUTi9mpmJP4/Cdb3sUTi9mpmJP4/Cdb3sUTg9mpmJv4/CdT3sUTg9mpmJv4/CdT3sUTg9mpmJv4/CdT3sUTg9mpmJP4/CdT3sUTg9mpmJP4/CdT3sUTg9mpmJP4/CdT3sUTg9mpmJv4/Cdb3sUTg9mpmJv4/Cdb3sUTg9mpmJv4/Cdb3sUTg9mpmJP4/Cdb3sUTg9mpmJP4/Cdb3sUTg9mpmJP4/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9bwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9bwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9bwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTv4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTP4/C9TyPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTv4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvW8MzMTP4/C9byPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTv4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTP4/C9TyPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTv4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9byPwvU8MzMTP4/C9bwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABmZua+j8L1vI/C9TxmZua+j8L1vI/C9TxmZua+j8L1vI/C9TxmZua+j8L1PI/C9TxmZua+j8L1PI/C9TxmZua+j8L1PI/C9TxmZua+j8L1vI/C9bxmZua+j8L1vI/C9bxmZua+j8L1vI/C9bxmZua+j8L1PI/C9bxmZua+j8L1PI/C9bxmZua+j8L1PI/C9bxmZuY+j8L1vI/C9TxmZuY+j8L1vI/C9TxmZuY+j8L1vI/C9TxmZuY+j8L1PI/C9TxmZuY+j8L1PI/C9TxmZuY+j8L1PI/C9TxmZuY+j8L1vI/C9bxmZuY+j8L1vI/C9bxmZuY+j8L1vI/C9bxmZuY+j8L1PI/C9bxmZuY+j8L1PI/C9bxmZuY+j8L1PI/C9bwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW8j8L1vAAAID+PwvW8j8L1vAAAID+PwvW8j8L1vAAAID+PwvW8j8L1PAAAID+PwvW8j8L1PAAAID+PwvW8j8L1PAAAID+PwvW8j8L1vAAAIL+PwvW8j8L1vAAAIL+PwvW8j8L1vAAAIL+PwvW8j8L1PAAAIL+PwvW8j8L1PAAAIL+PwvW8j8L1PAAAIL+PwvU8j8L1vAAAID+PwvU8j8L1vAAAID+PwvU8j8L1vAAAID+PwvU8j8L1PAAAID+PwvU8j8L1PAAAID+PwvU8j8L1PAAAID+PwvU8j8L1vAAAIL+PwvU8j8L1vAAAIL+PwvU8j8L1vAAAIL+PwvU8j8L1PAAAIL+PwvU8j8L1PAAAIL+PwvU8j8L1PAAAIL8AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwvW8j8L1vAAAID+PwvW8j8L1vAAAID+PwvW8j8L1vAAAID+PwvW8j8L1PAAAID+PwvW8j8L1PAAAID+PwvW8j8L1PAAAID+PwvW8j8L1vAAAIL+PwvW8j8L1vAAAIL+PwvW8j8L1vAAAIL+PwvW8j8L1PAAAIL+PwvW8j8L1PAAAIL+PwvW8j8L1PAAAIL+PwvU8j8L1vAAAID+PwvU8j8L1vAAAID+PwvU8j8L1vAAAID+PwvU8j8L1PAAAID+PwvU8j8L1PAAAID+PwvU8j8L1PAAAID+PwvU8j8L1vAAAIL+PwvU8j8L1vAAAIL+PwvU8j8L1vAAAIL+PwvU8j8L1PAAAIL+PwvU8j8L1PAAAIL+PwvU8j8L1PAAAIL8AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAABmZua+j8L1vI/C9TxmZua+j8L1vI/C9TxmZua+j8L1vI/C9TxmZua+j8L1PI/C9TxmZua+j8L1PI/C9TxmZua+j8L1PI/C9TxmZua+j8L1vI/C9bxmZua+j8L1vI/C9bxmZua+j8L1vI/C9bxmZua+j8L1PI/C9bxmZua+j8L1PI/C9bxmZua+j8L1PI/C9bxmZuY+j8L1vI/C9TxmZuY+j8L1vI/C9TxmZuY+j8L1vI/C9TxmZuY+j8L1PI/C9TxmZuY+j8L1PI/C9TxmZuY+j8L1PI/C9TxmZuY+j8L1vI/C9bxmZuY+j8L1vI/C9bxmZuY+j8L1vI/C9bxmZuY+j8L1PI/C9bxmZuY+j8L1PI/C9bxmZuY+j8L1PI/C9bwAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1vArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1PArXozzNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1vArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMy+j8J1PArXo7zNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1vArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1PArXozzNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1vArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7zNzMw+j8J1PArXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACuR2G+ZmZmvo/CdT2uR2G+ZmZmvo/CdT2uR2G+ZmZmvo/CdT2uR2G+ZmZmPo/CdT2uR2G+ZmZmPo/CdT2uR2G+ZmZmPo/CdT2uR2G+ZmZmvo/Cdb2uR2G+ZmZmvo/Cdb2uR2G+ZmZmvo/Cdb2uR2G+ZmZmPo/Cdb2uR2G+ZmZmPo/Cdb2uR2G+ZmZmPo/Cdb2uR2E+ZmZmvo/CdT2uR2E+ZmZmvo/CdT2uR2E+ZmZmvo/CdT2uR2E+ZmZmPo/CdT2uR2E+ZmZmPo/CdT2uR2E+ZmZmPo/CdT2uR2E+ZmZmvo/Cdb2uR2E+ZmZmvo/Cdb2uR2E+ZmZmvo/Cdb2uR2E+ZmZmPo/Cdb2uR2E+ZmZmPo/Cdb2uR2E+ZmZmPo/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAfhWu+mpmZvR+Faz4fhWu+mpmZvR+Faz4fhWu+mpmZvR+Faz4fhWu+mpmZPR+Faz4fhWu+mpmZPR+Faz4fhWu+mpmZPR+Faz4fhWu+mpmZvR+Fa74fhWu+mpmZvR+Fa74fhWu+mpmZvR+Fa74fhWu+mpmZPR+Fa74fhWu+mpmZPR+Fa74fhWu+mpmZPR+Fa74fhWs+mpmZvR+Faz4fhWs+mpmZvR+Faz4fhWs+mpmZvR+Faz4fhWs+mpmZPR+Faz4fhWs+mpmZPR+Faz4fhWs+mpmZPR+Faz4fhWs+mpmZvR+Fa74fhWs+mpmZvR+Fa74fhWs+mpmZvR+Fa74fhWs+mpmZPR+Fa74fhWs+mpmZPR+Fa74fhWs+mpmZPR+Fa74AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAA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AACAPwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAvwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAPwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAvwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAvwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAvwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAPwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAvwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAPwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAPwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAPwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAvwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAPwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAvwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAPwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAvwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAAACAPwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL+PwnW9CtcjvQrXozyPwnW9CtcjvQrXozyPwnW9CtcjvQrXozyPwnW9CtcjPQrXozyPwnW9CtcjPQrXozyPwnW9CtcjPQrXozyPwnW9CtcjvQrXo7yPwnW9CtcjvQrXo7yPwnW9CtcjvQrXo7yPwnW9CtcjPQrXo7yPwnW9CtcjPQrXo7yPwnW9CtcjPQrXo7yPwnU9CtcjvQrXozyPwnU9CtcjvQrXozyPwnU9CtcjvQrXozyPwnU9CtcjPQrXozyPwnU9CtcjPQrXozyPwnU9CtcjPQrXozyPwnU9CtcjvQrXo7yPwnU9CtcjvQrXo7yPwnU9CtcjvQrXo7yPwnU9CtcjPQrXo7yPwnU9CtcjPQrXo7yPwnU9CtcjPQrXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAACPwnW9CtcjvQrXozyPwnW9CtcjvQrXozyPwnW9CtcjvQrXozyPwnW9CtcjPQrXozyPwnW9CtcjPQrXozyPwnW9CtcjPQrXozyPwnW9CtcjvQrXo7yPwnW9CtcjvQrXo7yPwnW9CtcjvQrXo7yPwnW9CtcjPQrXo7yPwnW9CtcjPQrXo7yPwnW9CtcjPQrXo7yPwnU9CtcjvQrXozyPwnU9CtcjvQrXozyPwnU9CtcjvQrXozyPwnU9CtcjPQrXozyPwnU9CtcjPQrXozyPwnU9CtcjPQrXozyPwnU9CtcjvQrXo7yPwnU9CtcjvQrXo7yPwnU9CtcjvQrXo7yPwnU9CtcjPQrXo7yPwnU9CtcjPQrXo7yPwnU9CtcjPQrXo7wAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAA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AACAvwAAAABvowU+AAAAAIHPfb9vowW+AAAAAIHPfb8AAAAAAACAPwAAAABvowU+AAAAAIHPfb9vowW+AAAAAIHPfb8AAAAAAACAvwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAPwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAvwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAPwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAvwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAvwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAvwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAPwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAvwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAPwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAPwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAPwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAvwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAPwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAvwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAPwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAvwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAAACAPwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAA9P3UvTPEMb4AAAAA9P3UvTPEMb4AAAAA9P3UvTPEMb4AAAAA9P3UPTPEMb4AAAAA9P3UPTPEMb4AAAAA9P3UPTPEMb6OCTg9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AACAvwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAPwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAvwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAvwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAvwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAPwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAvwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAPwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAPwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAPwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAvwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAPwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAvwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAPwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAvwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAAACAPwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAzczMvSlcj74AAAAAzczMvSlcj74AAAAAzczMvSlcj74AAAAAzczMPSlcj74AAAAAzczMPSlcj74AAAAAzczMPSlcj75vNH89zczMvQPEi75vNH89zczMvQPEi75vNH89zczMvQPEi75vNH89zczMPQPEi75vNH89zczMPQPEi75vNH89zczMPQPEi75qzvg9zczMvbMpgb5qzvg9zczMvbMpgb5qzvg9zczMvbMpgb5qzvg9zczMPbMpgb5qzvg9zczMPbMpgb5qzvg9zczMPbMpgb5bxDI+zczMva4qYL5bxDI+zczMva4qYL5bxDI+zczMva4qYL5bxDI+zczMPa4qYL5bxDI+zczMPa4qYL5bxDI+zczMPa4qYL6uKmA+zczMvVvEMr6uKmA+zczMvVvEMr6uKmA+zczMvVvEMr6uKmA+zczMPVvEMr6uKmA+zczMPVvEMr6uKmA+zczMPVvEMr6zKYE+zczMvWrO+L2zKYE+zczMvWrO+L2zKYE+zczMvWrO+L2zKYE+zczMPWrO+L2zKYE+zczMPWrO+L2zKYE+zczMPWrO+L0DxIs+zczMvW80f70DxIs+zczMvW80f70DxIs+zczMvW80f70DxIs+zczMPW80f70DxIs+zczMPW80f70DxIs+zczMPW80f70pXI8+zczMvQAAAIApXI8+zczMvQAAAIApXI8+zczMvQAAAIApXI8+zczMPQAAAIApXI8+zczMPQAAAIApXI8+zczMPQAAAIADxIs+zczMvW80fz0DxIs+zczMvW80fz0DxIs+zczMvW80fz0DxIs+zczMPW80fz0DxIs+zczMPW80fz0DxIs+zczMPW80fz2zKYE+zczMvWrO+D2zKYE+zczMvWrO+D2zKYE+zczMvWrO+D2zKYE+zczMPWrO+D2zKYE+zczMPWrO+D2zKYE+zczMPWrO+D2uKmA+zczMvVvEMj6uKmA+zczMvVvEMj6uKmA+zczMvVvEMj6uKmA+zczMPVvEMj6uKmA+zczMPVvEMj6uKmA+zczMPVvEMj5bxDI+zczMva4qYD5bxDI+zczMva4qYD5bxDI+zczMva4qYD5bxDI+zczMPa4qYD5bxDI+zczMPa4qYD5bxDI+zczMPa4qYD5qzvg9zczMvbMpgT5qzvg9zczMvbMpgT5qzvg9zczMvbMpgT5qzvg9zczMPbMpgT5qzvg9zczMPbMpgT5qzvg9zczMPbMpgT5vNH89zczMvQPEiz5vNH89zczMvQPEiz5vNH89zczMvQPEiz5vNH89zczMPQPEiz5vNH89zczMPQPEiz5vNH89zczMPQPEiz4AAAAAzczMvSlcjz4AAAAAzczMvSlcjz4AAAAAzczMvSlcjz4AAAAAzczMPSlcjz4AAAAAzczMPSlcjz4AAAAAzczMPSlcjz5vNH+9zczMvQPEiz5vNH+9zczMvQPEiz5vNH+9zczMvQPEiz5vNH+9zczMPQPEiz5vNH+9zczMPQPEiz5vNH+9zczMPQPEiz5qzvi9zczMvbMpgT5qzvi9zczMvbMpgT5qzvi9zczMvbMpgT5qzvi9zczMPbMpgT5qzvi9zczMPbMpgT5qzvi9zczMPbMpgT5bxDK+zczMva4qYD5bxDK+zczMva4qYD5bxDK+zczMva4qYD5bxDK+zczMPa4qYD5bxDK+zczMPa4qYD5bxDK+zczMPa4qYD6uKmC+zczMvVvEMj6uKmC+zczMvVvEMj6uKmC+zczMvVvEMj6uKmC+zczMPVvEMj6uKmC+zczMPVvEMj6uKmC+zczMPVvEMj6zKYG+zczMvWrO+D2zKYG+zczMvWrO+D2zKYG+zczMvWrO+D2zKYG+zczMPWrO+D2zKYG+zczMPWrO+D2zKYG+zczMPWrO+D0DxIu+zczMvW80fz0DxIu+zczMvW80fz0DxIu+zczMvW80fz0DxIu+zczMPW80fz0DxIu+zczMPW80fz0DxIu+zczMPW80fz0pXI++zczMvQAAAIApXI++zczMvQAAAIApXI++zczMvQAAAIApXI++zczMPQAAAIApXI++zczMPQAAAIApXI++zczMPQAAAIADxIu+zczMvW80f70DxIu+zczMvW80f70DxIu+zczMvW80f70DxIu+zczMPW80f70DxIu+zczMPW80f70DxIu+zczMPW80f72zKYG+zczMvWrO+L2zKYG+zczMvWrO+L2zKYG+zczMvWrO+L2zKYG+zczMPWrO+L2zKYG+zczMPWrO+L2zKYG+zczMPWrO+L2uKmC+zczMvVvEMr6uKmC+zczMvVvEMr6uKmC+zczMvVvEMr6uKmC+zczMPVvEMr6uKmC+zczMPVvEMr6uKmC+zczMPVvEMr5bxDK+zczMva4qYL5bxDK+zczMva4qYL5bxDK+zczMva4qYL5bxDK+zczMPa4qYL5bxDK+zczMPa4qYL5bxDK+zczMPa4qYL5qzvi9zczMvbMpgb5qzvi9zczMvbMpgb5qzvi9zczMvbMpgb5qzvi9zczMPbMpgb5qzvi9zczMPbMpgb5qzvi9zczMPbMpgb5vNH+9zczMvQPEi75vNH+9zczMvQPEi75vNH+9zczMvQPEi75vNH+9zczMPQPEi75vNH+9zczMPQPEi75vNH+9zczMPQPEi74AAAAAAACAvwAAAAC9YOU9AAAAAKhjfr+9YOW9AAAAAKhjfr8AAAAAAACAPwAAAAC9YOU9AAAAAKhjfr+9YOW9AAAAAKhjfr8AAAAAAACAvwAAAAC9YOU9AAAAAKhjfr8aHKk+AAAAAAeicb8AAAAAAACAPwAAAAC9YOU9AAAAAKhjfr8aHKk+AAAAAAeicb8AAAAAAACAvwAAAAAaHKk+AAAAAAeicb92Mgg/AAAAAGrDWL8AAAAAAACAPwAAAAAaHKk+AAAAAAeicb92Mgg/AAAAAGrDWL8AAAAAAACAvwAAAAB2Mgg/AAAAAGrDWL/0BDU/AAAAAPQENb8AAAAAAACAPwAAAAB2Mgg/AAAAAGrDWL/0BDU/AAAAAPQENb8AAAAAAACAvwAAAAD0BDU/AAAAAPQENb9qw1g/AAAAAHYyCL8AAAAAAACAPwAAAAD0BDU/AAAAAPQENb9qw1g/AAAAAHYyCL8AAAAAAACAvwAAAABqw1g/AAAAAHYyCL8HonE/AAAAABocqb4AAAAAAACAPwAAAABqw1g/AAAAAHYyCL8HonE/AAAAABocqb4AAAAAAACAvwAAAAAHonE/AAAAABocqb6oY34/AAAAAL1g5b0AAAAAAACAPwAAAAAHonE/AAAAABocqb6oY34/AAAAAL1g5b0AAAAAAACAvwAAAACoY34/AAAAAL1g5T2oY34/AAAAAL1g5b0AAAAAAACAPwAAAACoY34/AAAAAL1g5T2oY34/AAAAAL1g5b0AAAAAAACAvwAAAAAHonE/AAAAABocqT6oY34/AAAAAL1g5T0AAAAAAACAPwAAAAAHonE/AAAAABocqT6oY34/AAAAAL1g5T0AAAAAAACAvwAAAABqw1g/AAAAAHYyCD8HonE/AAAAABocqT4AAAAAAACAPwAAAABqw1g/AAAAAHYyCD8HonE/AAAAABocqT4AAAAAAACAvwAAAAD0BDU/AAAAAPQENT9qw1g/AAAAAHYyCD8AAAAAAACAPwAAAAD0BDU/AAAAAPQENT9qw1g/AAAAAHYyCD8AAAAAAACAvwAAAAB2Mgg/AAAAAGrDWD/0BDU/AAAAAPQENT8AAAAAAACAPwAAAAB2Mgg/AAAAAGrDWD/0BDU/AAAAAPQENT8AAAAAAACAvwAAAAAaHKk+AAAAAAeicT92Mgg/AAAAAGrDWD8AAAAAAACAPwAAAAAaHKk+AAAAAAeicT92Mgg/AAAAAGrDWD8AAAAAAACAvwAAAAC9YOU9AAAAAKhjfj8aHKk+AAAAAAeicT8AAAAAAACAPwAAAAC9YOU9AAAAAKhjfj8aHKk+AAAAAAeicT8AAAAAAACAvwAAAAC9YOU9AAAAAKhjfj+9YOW9AAAAAKhjfj8AAAAAAACAPwAAAAC9YOU9AAAAAKhjfj+9YOW9AAAAAKhjfj8AAAAAAACAvwAAAAC9YOW9AAAAAKhjfj8aHKm+AAAAAAeicT8AAAAAAACAPwAAAAC9YOW9AAAAAKhjfj8aHKm+AAAAAAeicT8AAAAAAACAvwAAAAAaHKm+AAAAAAeicT92Mgi/AAAAAGrDWD8AAAAAAACAPwAAAAAaHKm+AAAAAAeicT92Mgi/AAAAAGrDWD8AAAAAAACAvwAAAAB2Mgi/AAAAAGrDWD/0BDW/AAAAAPQENT8AAAAAAACAPwAAAAB2Mgi/AAAAAGrDWD/0BDW/AAAAAPQENT8AAAAAAACAvwAAAAD0BDW/AAAAAPQENT9qw1i/AAAAAHYyCD8AAAAAAACAPwAAAAD0BDW/AAAAAPQENT9qw1i/AAAAAHYyCD8AAAAAAACAvwAAAABqw1i/AAAAAHYyCD8HonG/AAAAABocqT4AAAAAAACAPwAAAABqw1i/AAAAAHYyCD8HonG/AAAAABocqT4AAAAAAACAvwAAAAAHonG/AAAAABocqT6oY36/AAAAAL1g5T0AAAAAAACAPwAAAAAHonG/AAAAABocqT6oY36/AAAAAL1g5T0AAAAAAACAvwAAAACoY36/AAAAAL1g5T2oY36/AAAAAL1g5b0AAAAAAACAPwAAAACoY36/AAAAAL1g5T2oY36/AAAAAL1g5b0AAAAAAACAvwAAAAAHonG/AAAAABocqb6oY36/AAAAAL1g5b0AAAAAAACAPwAAAAAHonG/AAAAABocqb6oY36/AAAAAL1g5b0AAAAAAACAvwAAAABqw1i/AAAAAHYyCL8HonG/AAAAABocqb4AAAAAAACAPwAAAABqw1i/AAAAAHYyCL8HonG/AAAAABocqb4AAAAAAACAvwAAAAD0BDW/AAAAAPQENb9qw1i/AAAAAHYyCL8AAAAAAACAPwAAAAD0BDW/AAAAAPQENb9qw1i/AAAAAHYyCL8AAAAAAACAvwAAAAB2Mgi/AAAAAGrDWL/0BDW/AAAAAPQENb8AAAAAAACAPwAAAAB2Mgi/AAAAAGrDWL/0BDW/AAAAAPQENb8AAAAAAACAvwAAAAAaHKm+AAAAAAeicb92Mgi/AAAAAGrDWL8AAAAAAACAPwAAAAAaHKm+AAAAAAeicb92Mgi/AAAAAGrDWL8AAAAAAACAvwAAAAC9YOW9AAAAAKhjfr8aHKm+AAAAAAeicb8AAAAAAACAPwAAAAC9YOW9AAAAAKhjfr8aHKm+AAAAAAeicb8BAAQACgABAAoABwAIAAsAEAAIABAADQAOABEAFgAOABYAEwAUABcAHAAUABwAGQAaAB0AIgAaACIAHwAgACMAKAAgACgAJQAmACkALwAmAC8ALAArAC4ANQArADUAMgAxADQAOwAxADsAOAA3ADoAQQA3AEEAPgA9AEAARwA9AEcARABDAEYATQBDAE0ASgBJAEwAUwBJAFMAUABPAFIAWABPAFgAVQBWAFkAXgBWAF4AWwBcAF8AZABcAGQAYQBiAGUAagBiAGoAZwBoAGsAcABoAHAAbQBuAHEAdgBuAHYAcwB0AHcAfAB0AHwAeQB6AH0AggB6AIIAfwCAAIMAiQCAAIkAhgCFAIgAjwCFAI8AjACLAI4AlQCLAJUAkgCRAJQAmwCRAJsAmACXAJoAoQCXAKEAngAPAAkAAwADAKUAnwCfAJkAkwCTAI0AhwCHAIEAewB7AHUAbwBvAGkAYwBjAF0AVwBXAFEASwBLAEUAPwA/ADkAMwAzAC0AJwAnACEAGwAbABUADwAPAAMAnwCfAJMAhwCHAHsAbwBvAGMAVwBXAEsAPwA/ADMAJwAnABsADwAPAJ8AhwCHAG8AVwBXAD8AJwAnAA8AhwCHAFcAJwCdAKAApwCdAKcApACjAKYABQCjAAUAAgCiAAAABgAGAAwAEgASABgAHgAeACQAKgAqADAANgA2ADwAQgBCAEgATgBOAFQAWgBaAGAAZgBmAGwAcgByAHgAfgB+AIQAigCKAJAAlgCWAJwAogCiAAYAEgASAB4AKgAqADYAQgBCAE4AWgBaAGYAcgByAH4AigCKAJYAogCiABIAKgAqAEIAWgBaAHIAigCKAKIAKgAqAFoAigAAAAAAQmDlvSlcj70AAAAAQmDlvSlcj70AAAAAQmDlvSlcj70AAAAAQmDlPSlcj70AAAAAQmDlPSlcj70AAAAAQmDlPSlcj73NapQ8QmDlvaJ5ir3NapQ8QmDlvaJ5ir3NapQ8QmDlvaJ5ir3NapQ8QmDlPaJ5ir3NapQ8QmDlPaJ5ir3NapQ8QmDlPaJ5ir0pXA89QmDlvYpOeL0pXA89QmDlvYpOeL0pXA89QmDlvYpOeL0pXA89QmDlPYpOeL0pXA89QmDlPYpOeL0pXA89QmDlPYpOeL3dvUo9QmDlvd29Sr3dvUo9QmDlvd29Sr3dvUo9QmDlvd29Sr3dvUo9QmDlPd29Sr3dvUo9QmDlPd29Sr3dvUo9QmDlPd29Sr2KTng9QmDlvSlcD72KTng9QmDlvSlcD72KTng9QmDlvSlcD72KTng9QmDlPSlcD72KTng9QmDlPSlcD72KTng9QmDlPSlcD72ieYo9QmDlvc1qlLyieYo9QmDlvc1qlLyieYo9QmDlvc1qlLyieYo9QmDlPc1qlLyieYo9QmDlPc1qlLyieYo9QmDlPc1qlLwpXI89QmDlvQAAAIApXI89QmDlvQAAAIApXI89QmDlvQAAAIApXI89QmDlPQAAAIApXI89QmDlPQAAAIApXI89QmDlPQAAAICieYo9QmDlvc1qlDyieYo9QmDlvc1qlDyieYo9QmDlvc1qlDyieYo9QmDlPc1qlDyieYo9QmDlPc1qlDyieYo9QmDlPc1qlDyKTng9QmDlvSlcDz2KTng9QmDlvSlcDz2KTng9QmDlvSlcDz2KTng9QmDlPSlcDz2KTng9QmDlPSlcDz2KTng9QmDlPSlcDz3dvUo9QmDlvd29Sj3dvUo9QmDlvd29Sj3dvUo9QmDlvd29Sj3dvUo9QmDlPd29Sj3dvUo9QmDlPd29Sj3dvUo9QmDlPd29Sj0pXA89QmDlvYpOeD0pXA89QmDlvYpOeD0pXA89QmDlvYpOeD0pXA89QmDlPYpOeD0pXA89QmDlPYpOeD0pXA89QmDlPYpOeD3NapQ8QmDlvaJ5ij3NapQ8QmDlvaJ5ij3NapQ8QmDlvaJ5ij3NapQ8QmDlPaJ5ij3NapQ8QmDlPaJ5ij3NapQ8QmDlPaJ5ij0AAAAAQmDlvSlcjz0AAAAAQmDlvSlcjz0AAAAAQmDlvSlcjz0AAAAAQmDlPSlcjz0AAAAAQmDlPSlcjz0AAAAAQmDlPSlcjz3NapS8QmDlvaJ5ij3NapS8QmDlvaJ5ij3NapS8QmDlvaJ5ij3NapS8QmDlPaJ5ij3NapS8QmDlPaJ5ij3NapS8QmDlPaJ5ij0pXA+9QmDlvYpOeD0pXA+9QmDlvYpOeD0pXA+9QmDlvYpOeD0pXA+9QmDlPYpOeD0pXA+9QmDlPYpOeD0pXA+9QmDlPYpOeD3dvUq9QmDlvd29Sj3dvUq9QmDlvd29Sj3dvUq9QmDlvd29Sj3dvUq9QmDlPd29Sj3dvUq9QmDlPd29Sj3dvUq9QmDlPd29Sj2KTni9QmDlvSlcDz2KTni9QmDlvSlcDz2KTni9QmDlvSlcDz2KTni9QmDlPSlcDz2KTni9QmDlPSlcDz2KTni9QmDlPSlcDz2ieYq9QmDlvc1qlDyieYq9QmDlvc1qlDyieYq9QmDlvc1qlDyieYq9QmDlPc1qlDyieYq9QmDlPc1qlDyieYq9QmDlPc1qlDwpXI+9QmDlvQAAAIApXI+9QmDlvQAAAIApXI+9QmDlvQAAAIApXI+9QmDlPQAAAIApXI+9QmDlPQAAAIApXI+9QmDlPQAAAICieYq9QmDlvc1qlLyieYq9QmDlvc1qlLyieYq9QmDlvc1qlLyieYq9QmDlPc1qlLyieYq9QmDlPc1qlLyieYq9QmDlPc1qlLyKTni9QmDlvSlcD72KTni9QmDlvSlcD72KTni9QmDlvSlcD72KTni9QmDlPSlcD72KTni9QmDlPSlcD72KTni9QmDlPSlcD73dvUq9QmDlvd29Sr3dvUq9QmDlvd29Sr3dvUq9QmDlvd29Sr3dvUq9QmDlPd29Sr3dvUq9QmDlPd29Sr3dvUq9QmDlPd29Sr0pXA+9QmDlvYpOeL0pXA+9QmDlvYpOeL0pXA+9QmDlvYpOeL0pXA+9QmDlPYpOeL0pXA+9QmDlPYpOeL0pXA+9QmDlPYpOeL3NapS8QmDlvaJ5ir3NapS8QmDlvaJ5ir3NapS8QmDlvaJ5ir3NapS8QmDlPaJ5ir3NapS8QmDlPaJ5ir3NapS8QmDlPaJ5ir0AAAAAAACAvwAAAABvowU+AAAAAIHPfb9vowW+AAAAAIHPfb8AAAAAAACAPwAAAABvowU+AAAAAIHPfb9vowW+AAAAAIHPfb8AAAAAAACAvwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAPwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAvwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAPwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAvwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAA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AACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAA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zczMva4qYD5bxDK+zczMva4qYD5bxDK+zczMva4qYD5bxDK+zczMPa4qYD5bxDK+zczMPa4qYD5bxDK+zczMPa4qYD6uKmC+zczMvVvEMj6uKmC+zczMvVvEMj6uKmC+zczMvVvEMj6uKmC+zczMPVvEMj6uKmC+zczMPVvEMj6uKmC+zczMPVvEMj6zKYG+zczMvWrO+D2zKYG+zczMvWrO+D2zKYG+zczMvWrO+D2zKYG+zczMPWrO+D2zKYG+zczMPWrO+D2zKYG+zczMPWrO+D0DxIu+zczMvW80fz0DxIu+zczMvW80fz0DxIu+zczMvW80fz0DxIu+zczMPW80fz0DxIu+zczMPW80fz0DxIu+zczMPW80fz0pXI++zczMvQAAAIApXI++zczMvQAAAIApXI++zczMvQAAAIApXI++zczMPQAAAIApXI++zczMPQAAAIApXI++zczMPQAAAIADxIu+zczMvW80f70DxIu+zczMvW80f70DxIu+zczMvW80f70DxIu+zczMPW80f70DxIu+zczMPW80f70DxIu+zczMPW80f72zKYG+zczMvWrO+L2zKYG+zczMvWrO+L2zKYG+zczMvWrO+L2zKYG+zczMPWrO+L2zKYG+zczMPWrO+L2zKYG+zczMPWrO+L2uKmC+zczMvVvEMr6uKmC+zczMvVvEMr6uKmC+zczMvVvEMr6uKmC+zczMPVvEMr6uKmC+zczMPVvEMr6uKmC+zczMPVvEMr5bxDK+zczMva4qYL5bxDK+zczMva4qYL5bxDK+zczMva4qYL5bxDK+zczMPa4qYL5bxDK+zczMPa4qYL5bxDK+zczMPa4qYL5qzvi9zczMvbMpgb5qzvi9zczMvbMpgb5qzvi9zczMvbMpgb5qzvi9zczMPbMpgb5qzvi9zczMPbMpgb5qzvi9zczMPbMpgb5vNH+9zczMvQPEi75vNH+9zczMvQPEi75vNH+9zczMvQPEi75vNH+9zczMPQPEi75vNH+9zczMPQPEi75vNH+9zczMPQPEi74AAAAAAACAvwAAAAC9YOU9AAAAAKhjfr+9YOW9AAAAAKhjfr8AAAAAAACAPwAAAAC9YOU9AAAAAKhjfr+9YOW9AAAAAKhjfr8AAAAAAACAvwAAAAC9YOU9AAAAAKhjfr8aHKk+AAAAAAeicb8AAAAA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AACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAvwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAvwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAPwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAvwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAPwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAPwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAPwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAvwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAPwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAvwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAPwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAAAACAvwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAAACAPwAAAABvowW+AAAAAIHPfb/878O+AAAAAC6DbL8AAAAAW7G/vQdfGL4AAAAAW7G/vQdfGL4AAAAAW7G/vQdfGL4AAAAA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AACAPwAAAABvowU+AAAAAIHPfb/878M+AAAAAC6DbL8AAAAAAACAvwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAPwAAAAD878M+AAAAAC6DbL/o1xs/AAAAAB8ZS78AAAAAAACAvwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAPwAAAADo1xs/AAAAAB8ZS78fGUs/AAAAAOjXG78AAAAAAACAvwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAPwAAAAAfGUs/AAAAAOjXG78ug2w/AAAAAPzvw74AAAAAAACAvwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAPwAAAAAug2w/AAAAAPzvw76Bz30/AAAAAG+jBb4AAAAAAACAvwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAPwAAAACBz30/AAAAAG+jBT6Bz30/AAAAAG+jBb4AAAAAAACAvwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAPwAAAAAug2w/AAAAAPzvwz6Bz30/AAAAAG+jBT4AAAAAAACAvwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUs/AAAAAOjXGz8ug2w/AAAAAPzvwz4AAAAAAACAvwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAPwAAAADo1xs/AAAAAB8ZSz8fGUs/AAAAAOjXGz8AAAAAAACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAA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AACAvwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAPwAAAAD878M+AAAAAC6DbD/o1xs/AAAAAB8ZSz8AAAAAAACAvwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAPwAAAABvowU+AAAAAIHPfT/878M+AAAAAC6DbD8AAAAAAACAvwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAPwAAAABvowU+AAAAAIHPfT9vowW+AAAAAIHPfT8AAAAAAACAvwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAPwAAAABvowW+AAAAAIHPfT/878O+AAAAAC6DbD8AAAAAAACAvwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAPwAAAAD878O+AAAAAC6DbD/o1xu/AAAAAB8ZSz8AAAAAAACAvwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAPwAAAADo1xu/AAAAAB8ZSz8fGUu/AAAAAOjXGz8AAAAAAACAvwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAPwAAAAAfGUu/AAAAAOjXGz8ug2y/AAAAAPzvwz4AAAAAAACAvwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAPwAAAAAug2y/AAAAAPzvwz6Bz32/AAAAAG+jBT4AAAAAAACAvwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAPwAAAACBz32/AAAAAG+jBT6Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAPwAAAAAug2y/AAAAAPzvw76Bz32/AAAAAG+jBb4AAAAAAACAvwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAPwAAAAAfGUu/AAAAAOjXG78ug2y/AAAAAPzvw74AAAAAAACAvwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAPwAAAADo1xu/AAAAAB8ZS78fGUu/AAAAAOjXG78AAAAAAACAvwAAAAD878O+AAAAAC6DbL/o1xu/AAAAAB8ZS78AAAAA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AAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAK1yO94Xq0vpqZuT4K1yO94Xq0vpqZuT4K1yO94Xq0vpqZuT4K1yO94Xq0PpqZuT4K1yO94Xq0PpqZuT4K1yO94Xq0PpqZuT4K1yO94Xq0vpqZub4K1yO94Xq0vpqZub4K1yO94Xq0vpqZub4K1yO94Xq0PpqZub4K1yO94Xq0PpqZub4K1yO94Xq0PpqZub4K1yM94Xq0vpqZuT4K1yM94Xq0vpqZuT4K1yM94Xq0vpqZuT4K1yM94Xq0PpqZuT4K1yM94Xq0PpqZuT4K1yM94Xq0PpqZuT4K1yM94Xq0vpqZub4K1yM94Xq0vpqZub4K1yM94Xq0vpqZub4K1yM94Xq0PpqZub4K1yM94Xq0PpqZub4K1yM94Xq0PpqZub4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9CtejvM3MzD7NzEy9CtejvM3MzD7NzEy9CtejvM3MzD7NzEy9CtejPM3MzD7NzEy9CtejPM3MzD7NzEy9CtejPM3MzD7NzEy9CtejvM3MzL7NzEy9CtejvM3MzL7NzEy9CtejvM3MzL7NzEy9CtejPM3MzL7NzEy9CtejPM3MzL7NzEy9CtejPM3MzL7NzEw9CtejvM3MzD7NzEw9CtejvM3MzD7NzEw9CtejvM3MzD7NzEw9CtejPM3MzD7NzEw9CtejPM3MzD7NzEw9CtejPM3MzD7NzEw9CtejvM3MzL7NzEw9CtejvM3MzL7NzEw9CtejvM3MzL7NzEw9CtejPM3MzL7NzEw9CtejPM3MzL7NzEw9CtejPM3MzL4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9CtejvM3MzD7NzEy9CtejvM3MzD7NzEy9CtejvM3MzD7NzEy9CtejPM3MzD7NzEy9CtejPM3MzD7NzEy9CtejPM3MzD7NzEy9CtejvM3MzL7NzEy9CtejvM3MzL7NzEy9CtejvM3MzL7NzEy9CtejPM3MzL7NzEy9CtejPM3MzL7NzEy9CtejPM3MzL7NzEw9CtejvM3MzD7NzEw9CtejvM3MzD7NzEw9CtejvM3MzD7NzEw9CtejPM3MzD7NzEw9CtejPM3MzD7NzEw9CtejPM3MzD7NzEw9CtejvM3MzL7NzEw9CtejvM3MzL7NzEw9CtejvM3MzL7NzEw9CtejPM3MzL7NzEw9CtejPM3MzL7NzEw9CtejPM3MzL4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9CtejvM3MzD7NzEy9CtejvM3MzD7NzEy9CtejvM3MzD7NzEy9CtejPM3MzD7NzEy9CtejPM3MzD7NzEy9CtejPM3MzD7NzEy9CtejvM3MzL7NzEy9CtejvM3MzL7NzEy9CtejvM3MzL7NzEy9CtejPM3MzL7NzEy9CtejPM3MzL7NzEy9CtejPM3MzL7NzEw9CtejvM3MzD7NzEw9CtejvM3MzD7NzEw9CtejvM3MzD7NzEw9CtejPM3MzD7NzEw9CtejPM3MzD7NzEw9CtejPM3MzD7NzEw9CtejvM3MzL7NzEw9CtejvM3MzL7NzEw9CtejvM3MzL7NzEw9CtejPM3MzL7NzEw9CtejPM3MzL7NzEw9CtejPM3MzL4AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADNzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPvY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPPY/CdT3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPvY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEy9KVwPPY/Cdb3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPvY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPPY/CdT3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPvY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb3NzEw9KVwPPY/Cdb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADhehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADhehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADhehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADhehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMPLgehT3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMvLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehS/zcxMPLgehb3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMvLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMPLgehT3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMvLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb3hehQ/zcxMPLgehb0AAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIC/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAIA/AAAAAAAAAAAAAAAAAAAAAAAAgL8AAAAAAACAPwAAAAAAAIA/AAAAAAAAAADhehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/zcxMvLgehT3hehS/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";var CM=document.getElementById("status-badge"),sT=document.getElementById("canvas-container"),XD=document.getElementById("tel-pos"),YD=document.getElementById("tel-fork"),fM=document.getElementById("tel-pallet"),fP=document.getElementById("fork-slider"),jD=document.getElementById("hud-toast");function SC(A){if(jD)jD.textContent=A}function VD(A){if(console.error(A),CM)CM.textContent="⚠️ "+A,CM.style.background="#7f1d1d",CM.style.color="#fca5a5"}var Cw=new jP;Cw.background=new _("#0f141c");var IM=new BM(45,window.innerWidth/window.innerHeight,0.15,100);IM.position.set(3.6,2.35,-3.8);class KD{constructor(A){if(this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d",{alpha:!1}),this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,1.5),this.subdividedCache=new WeakMap,this.triPool=[],this.triCount=0,A)A.innerHTML="",A.appendChild(this.domElement);this.setSize(this.width,this.height)}setSize(A,M){this.width=A,this.height=M,this.domElement.width=Math.floor(A*this.dpr),this.domElement.height=Math.floor(M*this.dpr),this.domElement.style.width=A+"px",this.domElement.style.height=M+"px",this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0)}getSubdividedGeometry(A){let M=A.geometry;if(this.subdividedCache.has(M))return this.subdividedCache.get(M);let w=M.attributes.position,P=M.attributes.normal,z=M.index,C=[],I=0.42,D=(Z,N,U,W,Q,J,G,X,j,E,K,H,V)=>{let Y=Math.hypot(Z-W,N-Q,U-J),v=Math.hypot(W-G,Q-X,J-j),k=Math.hypot(G-Z,X-N,j-U),R=Math.max(Y,v,k);if(R<=I||V>=4){C.push(Z,N,U,W,Q,J,G,X,j,E,K,H);return}if(Y===R){let x=(Z+W)*0.5,q=(N+Q)*0.5,m=(U+J)*0.5;D(Z,N,U,x,q,m,G,X,j,E,K,H,V+1),D(x,q,m,W,Q,J,G,X,j,E,K,H,V+1)}else if(v===R){let x=(W+G)*0.5,q=(Q+X)*0.5,m=(J+j)*0.5;D(Z,N,U,W,Q,J,x,q,m,E,K,H,V+1),D(Z,N,U,x,q,m,G,X,j,E,K,H,V+1)}else{let x=(G+Z)*0.5,q=(X+N)*0.5,m=(j+U)*0.5;D(Z,N,U,W,Q,J,x,q,m,E,K,H,V+1),D(x,q,m,W,Q,J,G,X,j,E,K,H,V+1)}},O=z?z.count:w.count;for(let Z=0;Z<O;Z+=3){let N=z?z.getX(Z):Z,U=z?z.getX(Z+1):Z+1,W=z?z.getX(Z+2):Z+2,Q=w.getX(N),J=w.getY(N),G=w.getZ(N),X=w.getX(U),j=w.getY(U),E=w.getZ(U),K=w.getX(W),H=w.getY(W),V=w.getZ(W),Y=0,v=1,k=0;if(P){Y=(P.getX(N)+P.getX(U)+P.getX(W))/3,v=(P.getY(N)+P.getY(U)+P.getY(W))/3,k=(P.getZ(N)+P.getZ(U)+P.getZ(W))/3;let R=Math.hypot(Y,v,k)||1;Y/=R,v/=R,k/=R}D(Q,J,G,X,j,E,K,H,V,Y,v,k,0)}let T=new Float32Array(C);return this.subdividedCache.set(M,T),T}projectLine3D(A,M,w,P,z,C,I,D,O,T,Z){let N=I.elements,U=N[0]*A+N[4]*M+N[8]*w+N[12],W=N[1]*A+N[5]*M+N[9]*w+N[13],Q=N[2]*A+N[6]*M+N[10]*w+N[14],J=N[0]*P+N[4]*z+N[8]*C+N[12],G=N[1]*P+N[5]*z+N[9]*C+N[13],X=N[2]*P+N[6]*z+N[10]*C+N[14],j=-0.18;if(Q>j&&X>j)return null;if(Q>j){let Y=(j-Q)/(X-Q);U+=(J-U)*Y,W+=(G-W)*Y,Q=j}else if(X>j){let Y=(j-X)/(Q-X);J+=(U-J)*Y,G+=(W-G)*Y,X=j}let E=T+U/-Q*(D/O)*T,K=Z-W/-Q*D*Z,H=T+J/-X*(D/O)*T,V=Z-G/-X*D*Z;return[E,K,H,V]}drawGroundShadowDisc(A,M,w,P,z,C,I,D,O,T,Z){let N=this.ctx,U=20,W=Math.cos(z),Q=Math.sin(z),J=C.elements;N.beginPath();let G=!1;for(let X=0;X<=20;X++){let j=X/20*Math.PI*2,E=Math.cos(j)*w,K=Math.sin(j)*P,H=A+E*W+K*Q,V=M-E*Q+K*W,Y=0.002,v=J[0]*H+J[4]*0.002+J[8]*V+J[12],k=J[1]*H+J[5]*0.002+J[9]*V+J[13],R=J[2]*H+J[6]*0.002+J[10]*V+J[14];if(R>=-0.18)continue;let x=O+v/-R*(I/D)*O,q=T-k/-R*I*T;if(!G)N.moveTo(x,q),G=!0;else N.lineTo(x,q)}if(G)N.closePath(),N.fillStyle=`rgba(5, 8, 13, ${Z})`,N.fill()}render(A,M){let w=this.ctx,P=this.width,z=this.height,C=P*0.5,I=z*0.5;A.updateMatrixWorld(!0),M.updateMatrixWorld(!0),M.matrixWorldInverse.copy(M.matrixWorld).invert();let D=w.createLinearGradient(0,0,0,z);D.addColorStop(0,"#0b1017"),D.addColorStop(0.55,"#131b26"),D.addColorStop(1,"#182230"),w.fillStyle=D,w.fillRect(0,0,P,z);let O=M.matrixWorldInverse,T=1/Math.tan(M.fov*Math.PI/180*0.5),Z=M.aspect;w.lineWidth=1;let N=14;for(let H=-N;H<=N;H++){let V=H===0;w.strokeStyle=V?"rgba(100, 116, 139, 0.45)":"rgba(51, 65, 85, 0.35)";let Y=this.projectLine3D(H,0,-N,H,0,N,O,T,Z,C,I);if(Y)w.beginPath(),w.moveTo(Y[0],Y[1]),w.lineTo(Y[2],Y[3]),w.stroke();let v=this.projectLine3D(-N,0,H,N,0,H,O,T,Z,C,I);if(v)w.beginPath(),w.moveTo(v[0],v[1]),w.lineTo(v[2],v[3]),w.stroke()}let U=[[-0.85,0.005,-3.4],[0.85,0.005,-3.4],[0.85,0.005,-4.8],[-0.85,0.005,-4.8]];w.strokeStyle="rgba(245, 158, 11, 0.55)",w.lineWidth=2;for(let H=0;H<4;H++){let V=U[H],Y=U[(H+1)%4],v=this.projectLine3D(V[0],V[1],V[2],Y[0],Y[1],Y[2],O,T,Z,C,I);if(v)w.beginPath(),w.moveTo(v[0],v[1]),w.lineTo(v[2],v[3]),w.stroke()}if(UA)this.drawGroundShadowDisc(UA.position.x,UA.position.z,0.78,1.45,UA.rotation.y,O,T,Z,C,I,0.45);if(s){let H=new L;s.getWorldPosition(H),this.drawGroundShadowDisc(H.x,H.z,0.72,0.58,UA?UA.rotation.y:0,O,T,Z,C,I,0.35)}this.triCount=0;let W=O.elements,Q=-0.42,J=0.78,G=-0.46,X=0.55,j=0.6,E=0.58;A.traverse((H)=>{if(!H.isMesh||!H.visible)return;if(H.userData.skipSoftwareRender)return;let V=this.getSubdividedGeometry(H),Y=H.matrixWorld.elements,v=H.material,k=v&&v.color?v.color.r:0.7,R=v&&v.color?v.color.g:0.7,x=v&&v.color?v.color.b:0.7,q=v&&(v.name==="M_Headlight"||v.name==="M_Taillight"),m=Y[0],y=Y[1],MA=Y[2],r=Y[4],t=Y[5],c=Y[6],i=Y[8],e=Y[9],WA=Y[10],FA=Y[12],DM=Y[13],dA=Y[14];for(let zA=0,_w=V.length;zA<_w;zA+=12){let uA=V[zA],cA=V[zA+1],iA=V[zA+2],RM=V[zA+3],kM=V[zA+4],gP=V[zA+5],mP=V[zA+6],pP=V[zA+7],lP=V[zA+8],dP=V[zA+9],uP=V[zA+10],cP=V[zA+11],iP=m*uA+r*cA+i*iA+FA,sP=y*uA+t*cA+e*iA+DM,nP=MA*uA+c*cA+WA*iA+dA,oP=m*RM+r*kM+i*gP+FA,aP=y*RM+t*kM+e*gP+DM,rP=MA*RM+c*kM+WA*gP+dA,tP=m*mP+r*pP+i*lP+FA,eP=y*mP+t*pP+e*lP+DM,Az=MA*mP+c*pP+WA*lP+dA,qD=W[0]*iP+W[4]*sP+W[8]*nP+W[12],SD=W[1]*iP+W[5]*sP+W[9]*nP+W[13],Mz=W[2]*iP+W[6]*sP+W[10]*nP+W[14],$D=W[0]*oP+W[4]*aP+W[8]*rP+W[12],yD=W[1]*oP+W[5]*aP+W[9]*rP+W[13],wz=W[2]*oP+W[6]*aP+W[10]*rP+W[14],bD=W[0]*tP+W[4]*eP+W[8]*Az+W[12],_D=W[1]*tP+W[5]*eP+W[9]*Az+W[13],Pz=W[2]*tP+W[6]*eP+W[10]*Az+W[14];if(Mz>-0.15||wz>-0.15||Pz>-0.15)continue;let bC=1/-Mz,_C=1/-wz,xC=1/-Pz,Dw=C+qD*bC*(T/Z)*C,Ow=I-SD*bC*T*I,xw=C+$D*_C*(T/Z)*C,fw=I-yD*_C*T*I,hw=C+bD*xC*(T/Z)*C,gw=I-_D*xC*T*I;if((xw-Dw)*(gw-Ow)-(fw-Ow)*(hw-Dw)>=0)continue;if(Dw<0&&xw<0&&hw<0||Dw>P&&xw>P&&hw>P||Ow<0&&fw<0&&gw<0||Ow>z&&fw>z&&gw>z)continue;let mw=m*dP+r*uP+i*cP,Tw=y*dP+t*uP+e*cP,pw=MA*dP+c*uP+WA*cP,zz=Math.hypot(mw,Tw,pw)||1;mw/=zz,Tw/=zz,pw/=zz;let Cz,Iz,Dz;if(q)Cz=Math.min(255,Math.floor(k*255)),Iz=Math.min(255,Math.floor(R*255)),Dz=Math.min(255,Math.floor(x*255));else{let fD=Math.max(0,mw*Q+Tw*J+pw*G),hD=Math.max(0,mw*X+Tw*j+pw*E),gD=0.34+0.18*(Tw*0.5+0.5),Oz=Math.min(1.22,gD+fD*0.58+hD*0.25),mD=Math.pow(k,0.82)*Oz,pD=Math.pow(R,0.82)*Oz,lD=Math.pow(x,0.82)*Oz;Cz=Math.min(255,Math.max(0,Math.floor(mD*255))),Iz=Math.min(255,Math.max(0,Math.floor(pD*255))),Dz=Math.min(255,Math.max(0,Math.floor(lD*255)))}let xD=(Mz+wz+Pz)*0.333333,RA=this.triPool[this.triCount];if(!RA)RA={sxa:0,sya:0,sxb:0,syb:0,sxc:0,syc:0,z:0,color:""},this.triPool[this.triCount]=RA;RA.sxa=Dw,RA.sya=Ow,RA.sxb=xw,RA.syb=fw,RA.sxc=hw,RA.syc=gw,RA.z=xD,RA.color=`rgb(${Cz},${Iz},${Dz})`,this.triCount++}});let K=this.triPool.slice(0,this.triCount);K.sort((H,V)=>H.z-V.z),w.lineJoin="round",w.lineWidth=0.65;for(let H=0,V=K.length;H<V;H++){let Y=K[H];w.fillStyle=Y.color,w.strokeStyle=Y.color,w.beginPath(),w.moveTo(Y.sxa,Y.sya),w.lineTo(Y.sxb,Y.syb),w.lineTo(Y.sxc,Y.syc),w.closePath(),w.fill(),w.stroke()}}}var hP=new KD(sT),fA=new LC(IM,hP.domElement);fA.enableDamping=!0;fA.dampingFactor=0.08;fA.target.set(0,0.75,-0.5);fA.maxPolarAngle=Math.PI/2-0.03;fA.minDistance=1.8;fA.maxDistance=18;var UA=null,VA=null,s=null,FC=null,RC=null,kC=[],qC=[],B={x:0,z:0,heading:0,speed:0,steerInput:0,wheelSteerAngle:0,impulseDistance:0,impulseTurn:0,forkY:0.05,targetForkY:0.05,isCarryingPallet:!1,followCam:!0,keys:{fwd:!1,rev:!1,left:!1,right:!1,liftUp:!1,liftDown:!1}};function nT(A){let M=window.atob(A),w=M.length,P=new Uint8Array(w);for(let z=0;z<w;z++)P[z]=M.charCodeAt(z);return P.buffer}function oT(A){let M=A.scene;Cw.add(M);let w=[];M.traverse((z)=>{if(z.isMesh){if(z.material&&(z.material.name.includes("M_Forklift_Yellow")||z.material.name.includes("M_Wheel_Rim"))){if(!kC.includes(z.material))kC.push(z.material)}}if(z.name==="Forklift_Root")UA=z;if(z.name==="Forklift_Forks")VA=z;if(z.name==="Pallet_Wood")s=z;if(z.name==="Steering_Wheel")FC=z;if(z.name==="Lift_Hydraulic_Piston")RC=z;if(z.name==="Wheel_FL"||z.name==="Wheel_FR"||z.name==="Wheel_RL"||z.name==="Wheel_RR")w.push(z)});let P=new jM({name:"M_Spoke_Dark",color:new _("#1e293b")});if(w.forEach((z)=>{let C=z.name.startsWith("Wheel_R"),I=C?0.24:0.28,D=C?0.18:0.2,O=new XM;O.name=z.name+"_SteerPivot",O.position.copy(z.position),z.parent.add(O),z.position.set(0,0,0),O.add(z);let T=new Pw(I*1.15,D*1.14,0.035),Z=new pA(T,P);z.add(Z);let N=new Pw(0.035,D*1.14,I*1.15),U=new pA(N,P);z.add(U),qC.push({mesh:z,steerPivot:O,isRear:C,radius:I})}),CM)CM.textContent="\uD83D\uDFE2 3D Model Aktif",CM.style.color="#4ade80",CM.style.background="#14261c",CM.style.borderColor="rgba(74, 222, 128, 0.35)";window.app={scene:Cw,camera:IM,renderer:hP,forkliftRoot:UA,forksGroup:VA,palletGroup:s,state:B}}try{let A=new BC,M=nT(LD);A.parse(M,"",(w)=>{oT(w)},(w)=>{VD("Parse Gagal: "+(w?.message||w))})}catch(A){VD("Init Gagal: "+A.message)}function BD(){if(!VA)return new L(0,0,-1.28);return new L(0,0.02,-0.64).applyMatrix4(VA.matrixWorld)}function vD(){if(!s)return new L(0,0,-1.28);let A=new L;return s.getWorldPosition(A),A}function $C(A=!1){if(!VA||!s||B.isCarryingPallet)return!1;if(VA.updateMatrixWorld(!0),s.updateMatrixWorld(!0),A)VA.add(s),s.position.set(0,-0.02,-0.64),s.rotation.set(0,0,0);else VA.attach(s),s.position.y=-0.02,s.rotation.x=0,s.rotation.z=0;return B.isCarryingPallet=!0,SC("\uD83D\uDCE6 Pallet terangkat di atas garpu! Gunakan W/A/S/D untuk memindahkan pallet."),!0}function yC(){if(!s||!B.isCarryingPallet)return;Cw.attach(s),s.position.y=0,s.rotation.x=0,s.rotation.z=0,B.isCarryingPallet=!1,SC("\uD83D\uDCE5 Pallet diletakkan di lantai! Kamu bisa mundur (S) atau angkat kembali (Q).")}function aT(){if(!VA||!s)return;let A=BD(),M=vD(),w=Math.hypot(A.x-M.x,A.z-M.z);if(!B.isCarryingPallet&&B.forkY>=0.085&&w<0.95)$C(w<0.65);if(B.isCarryingPallet&&B.forkY<=0.07)yC();if(fM)if(B.isCarryingPallet)fM.textContent="Diangkut",fM.style.color="#4ade80";else if(w<0.95)fM.textContent="Siap Angkat",fM.style.color="#fbbf24";else fM.textContent=`Jarak ${w.toFixed(1)}m`,fM.style.color="#94a3b8"}function Iw(A,M,w){let P=document.getElementById(A);if(!P)return;let z=0,C=(D)=>{D.preventDefault(),z=performance.now(),B.keys[M]=!0,P.classList.add("active-pressed")},I=(D)=>{if(!B.keys[M])return;if(D.preventDefault(),B.keys[M]=!1,P.classList.remove("active-pressed"),performance.now()-z<240&&w)w()};P.addEventListener("mousedown",C),P.addEventListener("touchstart",C,{passive:!1}),window.addEventListener("mouseup",I),window.addEventListener("touchend",I),P.addEventListener("mouseleave",I)}Iw("btn-drive-fwd","fwd",()=>{B.impulseDistance=Math.min(B.impulseDistance+0.75,2)});Iw("btn-drive-rev","rev",()=>{B.impulseDistance=Math.max(B.impulseDistance-0.75,-2)});Iw("btn-turn-left","left",()=>{B.impulseTurn=Math.min(B.impulseTurn+Math.PI/8,Math.PI/2)});Iw("btn-turn-right","right",()=>{B.impulseTurn=Math.max(B.impulseTurn-Math.PI/8,-Math.PI/2)});Iw("btn-lift-up","liftUp",()=>{if(B.targetForkY<0.4)B.targetForkY=0.65;else B.targetForkY=Math.min(1.4,B.targetForkY+0.45);let A=BD(),M=vD();if(!B.isCarryingPallet&&Math.hypot(A.x-M.x,A.z-M.z)<1.15)$C(!0)});Iw("btn-lift-down","liftDown",()=>{if(B.targetForkY>0.75)B.targetForkY=0.45;else B.targetForkY=0.05});fP?.addEventListener("input",(A)=>{let M=parseFloat(A.target.value);if(!isNaN(M))B.targetForkY=M});document.getElementById("btn-snap-pallet")?.addEventListener("click",()=>{if(B.isCarryingPallet)B.targetForkY=0.05,yC();else{if(B.targetForkY<0.25)B.targetForkY=0.55;$C(!0)}});document.getElementById("btn-reset")?.addEventListener("click",()=>{if(B.isCarryingPallet)yC();if(B.x=0,B.z=0,B.heading=0,B.speed=0,B.impulseDistance=0,B.impulseTurn=0,B.forkY=0.05,B.targetForkY=0.05,UA)UA.position.set(0,0,0),UA.rotation.set(0,0,0);if(VA)VA.position.y=0.05;if(s)Cw.add(s),s.position.set(0,0,-1.28),s.rotation.set(0,0,0);fA.target.set(0,0.75,-0.5),IM.position.set(3.6,2.35,-3.8),SC("\uD83D\uDD04 Posisi Forklift & Pallet di-reset ke posisi awal.")});var ED=document.getElementById("btn-cam-follow");ED?.addEventListener("click",()=>{B.followCam=!B.followCam,ED.textContent=B.followCam?"\uD83C\uDFA5 Follow: ON":"\uD83C\uDFA5 Follow: OFF"});document.querySelectorAll(".color-dot").forEach((A)=>{A.addEventListener("click",(M)=>{document.querySelectorAll(".color-dot").forEach((P)=>P.classList.remove("selected")),M.currentTarget.classList.add("selected");let w=M.currentTarget.getAttribute("data-color");kC.forEach((P)=>{P.color.set(w)})})});var FD={KeyW:"fwd",ArrowUp:"fwd",KeyS:"rev",ArrowDown:"rev",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyQ:"liftUp",Space:"liftUp",KeyR:"liftUp",KeyE:"liftDown",ShiftLeft:"liftDown",ShiftRight:"liftDown",KeyF:"liftDown"},RD={fwd:"btn-drive-fwd",rev:"btn-drive-rev",left:"btn-turn-left",right:"btn-turn-right",liftUp:"btn-lift-up",liftDown:"btn-lift-down"};window.addEventListener("keydown",(A)=>{let M=FD[A.code];if(M)A.preventDefault(),B.keys[M]=!0,document.getElementById(RD[M])?.classList.add("active-pressed")});window.addEventListener("keyup",(A)=>{let M=FD[A.code];if(M)A.preventDefault(),B.keys[M]=!1,document.getElementById(RD[M])?.classList.remove("active-pressed")});var HD=performance.now();function kD(){requestAnimationFrame(kD);let A=performance.now(),M=Math.min(Math.max((A-HD)/1000,0.001),0.1);HD=A;let w=0.85;if(B.keys.liftUp)B.targetForkY=Math.min(1.4,B.targetForkY+w*M);if(B.keys.liftDown)B.targetForkY=Math.max(0.05,B.targetForkY-w*M);if(Math.abs(B.forkY-B.targetForkY)>0.0005){if(B.forkY+=(B.targetForkY-B.forkY)*Math.min(M*7,1),VA)VA.position.y=B.forkY;if(RC)RC.position.y=1.35+(B.forkY-0.05)*0.48}if(fP&&Math.abs(parseFloat(fP.value)-B.forkY)>0.01)fP.value=B.forkY.toFixed(2);let P=0,z=1.65;if(B.keys.left)P+=z;if(B.keys.right)P-=z;let C=(B.keys.left?0.45:0)+(B.keys.right?-0.45:0)+Math.max(-0.45,Math.min(0.45,B.impulseTurn*1.2));if(B.wheelSteerAngle+=(C-B.wheelSteerAngle)*Math.min(M*10,1),qC.forEach((Z)=>{if(Z.isRear)Z.steerPivot.rotation.y=-B.wheelSteerAngle;else Z.steerPivot.rotation.y=B.wheelSteerAngle*0.35}),FC)FC.rotation.y=B.wheelSteerAngle*3;let I=P*M;if(Math.abs(B.impulseTurn)>0.001){let Z=B.impulseTurn*Math.min(M*6.5,1);I+=Z,B.impulseTurn-=Z}B.heading+=I;let D=2.6,O=0;if(B.keys.fwd)O+=D;if(B.keys.rev)O-=D;B.speed+=(O-B.speed)*Math.min(M*8,1);let T=B.speed*M;if(Math.abs(B.impulseDistance)>0.001){let Z=B.impulseDistance*Math.min(M*6,1);T+=Z,B.impulseDistance-=Z}if(Math.abs(T)>0.00005||Math.abs(I)>0.00005){let Z=-Math.sin(B.heading),N=-Math.cos(B.heading),U=Z*T,W=N*T;if(B.x=Math.max(-12,Math.min(12,B.x+U)),B.z=Math.max(-12,Math.min(12,B.z+W)),UA)UA.position.x=B.x,UA.position.z=B.z,UA.rotation.y=B.heading;if(B.followCam&&fA)IM.position.x+=U,IM.position.z+=W,fA.target.x+=U,fA.target.z+=W;qC.forEach((Q)=>{let J=T/Q.radius;Q.mesh.rotateY(-J)})}if(aT(),XD)XD.textContent=`${B.x.toFixed(1)}, ${B.z.toFixed(1)}`;if(YD)YD.textContent=`${B.forkY.toFixed(2)} m`;fA.update(),hP.render(Cw,IM)}kD();window.addEventListener("resize",()=>{IM.aspect=window.innerWidth/window.innerHeight,IM.updateProjectionMatrix(),hP.setSize(window.innerWidth,window.innerHeight)});
