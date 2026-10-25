import bpy
import bmesh
import math
from mathutils import Vector, Euler

def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.unit_settings.system = 'METRIC'
    scene.unit_settings.scale_length = 1.0

def make_mat(name, color_rgba, metallic=0.0, roughness=0.5):
    mat = bpy.data.materials.new(name=name)
    nodes = mat.node_tree.nodes
    bsdf = next((n for n in nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if bsdf:
        bsdf.inputs['Base Color'].default_value = color_rgba
        bsdf.inputs['Metallic'].default_value = metallic
        bsdf.inputs['Roughness'].default_value = roughness
    return mat

def create_box(name, size, location, rotation=(0,0,0), material=None, parent=None):
    mesh = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bmesh.ops.scale(bm, vec=size, verts=bm.verts)
    bm.to_mesh(mesh)
    bm.free()
    
    obj = bpy.data.objects.new(name, mesh)
    obj.location = location
    obj.rotation_euler = rotation
    bpy.context.collection.objects.link(obj)
    if material:
        obj.data.materials.append(material)
    if parent:
        obj.parent = parent
    return obj

def create_cylinder(name, radius, depth, location, rotation=(0,0,0), segments=24, material=None, parent=None):
    mesh = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cone(
        bm,
        cap_ends=True,
        cap_tris=False,
        segments=segments,
        radius1=radius,
        radius2=radius,
        depth=depth
    )
    bm.to_mesh(mesh)
    bm.free()
    
    obj = bpy.data.objects.new(name, mesh)
    obj.location = location
    obj.rotation_euler = rotation
    bpy.context.collection.objects.link(obj)
    if material:
        obj.data.materials.append(material)
    if parent:
        obj.parent = parent
    return obj

def build_forklift_pro():
    clear_scene()

    # Materials
    mat_yellow = make_mat("M_Forklift_Yellow", (0.95, 0.60, 0.05, 1.0), metallic=0.15, roughness=0.35)
    mat_dark_frame = make_mat("M_Dark_Frame", (0.15, 0.16, 0.18, 1.0), metallic=0.7, roughness=0.45)
    mat_chrome = make_mat("M_Chrome_Piston", (0.85, 0.86, 0.88, 1.0), metallic=0.95, roughness=0.1)
    mat_steel_forks = make_mat("M_Steel_Forks", (0.28, 0.30, 0.32, 1.0), metallic=0.85, roughness=0.3)
    mat_tire = make_mat("M_Tire_Rubber", (0.07, 0.07, 0.08, 1.0), metallic=0.0, roughness=0.9)
    mat_rim = make_mat("M_Wheel_Rim", (0.95, 0.60, 0.05, 1.0), metallic=0.2, roughness=0.4)
    mat_wood = make_mat("M_Pallet_Wood", (0.62, 0.46, 0.30, 1.0), metallic=0.0, roughness=0.75)
    mat_crate = make_mat("M_Cargo_Crate", (0.78, 0.62, 0.42, 1.0), metallic=0.0, roughness=0.8)
    mat_light = make_mat("M_Headlight", (1.0, 0.98, 0.85, 1.0), metallic=0.1, roughness=0.1)
    mat_taillight = make_mat("M_Taillight", (0.9, 0.05, 0.05, 1.0), metallic=0.1, roughness=0.2)

    # Root Empty
    root = bpy.data.objects.new("Forklift_Root", None)
    root.empty_display_type = 'ARROWS'
    root.empty_display_size = 1.0
    bpy.context.collection.objects.link(root)

    # 1. Main Chassis Construction
    # Lower frame / base plate (between wheels)
    create_box("Chassis_Floor", size=(0.95, 1.7, 0.18), location=(0.0, -0.2, 0.22), material=mat_dark_frame, parent=root)
    # Side fenders & battery/engine cover (Yellow)
    create_box("Chassis_Hood", size=(0.92, 0.9, 0.42), location=(0.0, -0.65, 0.52), material=mat_yellow, parent=root)
    # Front dashboard cowl
    create_box("Chassis_FrontCowl", size=(0.92, 0.28, 0.55), location=(0.0, 0.18, 0.58), material=mat_yellow, parent=root)
    # Heavy rear counterweight with sloped/stepped profile
    create_box("Counterweight_Lower", size=(0.96, 0.42, 0.55), location=(0.0, -1.18, 0.48), material=mat_dark_frame, parent=root)
    create_box("Counterweight_Upper", size=(0.90, 0.32, 0.35), location=(0.0, -1.18, 0.85), material=mat_yellow, parent=root)
    # Taillights
    create_box("Taillight_L", size=(0.12, 0.04, 0.08), location=(-0.35, -1.40, 0.72), material=mat_taillight, parent=root)
    create_box("Taillight_R", size=(0.12, 0.04, 0.08), location=(0.35, -1.40, 0.72), material=mat_taillight, parent=root)

    # 2. Operator Cab & Controls
    # Driver seat
    create_box("Seat_Base", size=(0.46, 0.46, 0.15), location=(0.0, -0.4, 0.78), material=mat_dark_frame, parent=root)
    create_box("Seat_Backrest", size=(0.44, 0.12, 0.45), location=(0.0, -0.60, 1.05), material=mat_dark_frame, parent=root)
    # Steering column & wheel
    create_cylinder("Steering_Col", radius=0.03, depth=0.45, location=(0.0, 0.08, 0.92), rotation=(0.5, 0, 0), material=mat_dark_frame, parent=root)
    create_cylinder("Steering_Wheel", radius=0.18, depth=0.035, location=(0.0, 0.18, 1.10), rotation=(0.5, 0, 0), material=mat_dark_frame, parent=root)

    # Overhead Guard (Roll cage)
    # 4 strong vertical pillars
    pillar_pos = [
        (-0.42, 0.26, 1.35), (0.42, 0.26, 1.35),
        (-0.42, -0.95, 1.35), (0.42, -0.95, 1.35)
    ]
    for i, (px, py, pz) in enumerate(pillar_pos):
        create_box(f"Pillar_{i+1}", size=(0.06, 0.06, 1.15), location=(px, py, pz), material=mat_dark_frame, parent=root)
    # Roof perimeter frame
    create_box("Roof_Frame_Front", size=(0.90, 0.06, 0.06), location=(0.0, 0.26, 1.95), material=mat_dark_frame, parent=root)
    create_box("Roof_Frame_Rear", size=(0.90, 0.06, 0.06), location=(0.0, -0.95, 1.95), material=mat_dark_frame, parent=root)
    create_box("Roof_Frame_L", size=(0.06, 1.25, 0.06), location=(-0.42, -0.34, 1.95), material=mat_dark_frame, parent=root)
    create_box("Roof_Frame_R", size=(0.06, 1.25, 0.06), location=(0.42, -0.34, 1.95), material=mat_dark_frame, parent=root)
    # Safety roof slats (overhead protective grid)
    for gy in [-0.75, -0.55, -0.35, -0.15, 0.05]:
        create_box(f"Roof_Slat_{gy}", size=(0.80, 0.04, 0.03), location=(0.0, gy, 1.95), material=mat_dark_frame, parent=root)

    # Headlights mounted on front pillars
    create_box("Headlight_L", size=(0.10, 0.08, 0.10), location=(-0.45, 0.28, 1.65), material=mat_light, parent=root)
    create_box("Headlight_R", size=(0.10, 0.08, 0.10), location=(0.45, 0.28, 1.65), material=mat_light, parent=root)

    # 3. Wheels with Rim Details
    # Front wheels: diameter 0.56m (radius 0.28), width 0.22m
    # Rear wheels: diameter 0.48m (radius 0.24), width 0.18m
    wheel_specs = [
        ("Wheel_FL", -0.54, 0.38, 0.28, 0.28, 0.20),
        ("Wheel_FR",  0.54, 0.38, 0.28, 0.28, 0.20),
        ("Wheel_RL", -0.48, -0.88, 0.24, 0.24, 0.18),
        ("Wheel_RR",  0.48, -0.88, 0.24, 0.24, 0.18),
    ]
    wheel_objects = []
    for wname, wx, wy, wz, r, w in wheel_specs:
        # Tire
        tire = create_cylinder(wname, radius=r, depth=w, location=(wx, wy, wz), rotation=(0, math.pi/2, 0), segments=28, material=mat_tire, parent=root)
        # Rim (hubcap in center)
        rim = create_cylinder(f"{wname}_Rim", radius=r*0.62, depth=w*1.04, location=(0,0,0), material=mat_rim, parent=tire)
        # Hubcap center bolt
        create_cylinder(f"{wname}_Hub", radius=r*0.25, depth=w*1.12, location=(0,0,0), material=mat_dark_frame, parent=tire)
        wheel_objects.append(tire)

    # 4. Mast (Dual Vertical Steel Rails in Front)
    # Located in front of cowl: Y = 0.52
    mast_h = 2.15
    mast_z = 1.15
    create_box("Mast_Rail_L", size=(0.09, 0.12, mast_h), location=(-0.35, 0.54, mast_z), material=mat_dark_frame, parent=root)
    create_box("Mast_Rail_R", size=(0.09, 0.12, mast_h), location=(0.35, 0.54, mast_z), material=mat_dark_frame, parent=root)
    # Cross braces
    create_box("Mast_Brace_Top", size=(0.79, 0.08, 0.08), location=(0.0, 0.54, 2.18), material=mat_dark_frame, parent=root)
    create_box("Mast_Brace_Mid", size=(0.79, 0.08, 0.08), location=(0.0, 0.54, 1.20), material=mat_dark_frame, parent=root)
    create_box("Mast_Brace_Bottom", size=(0.79, 0.08, 0.12), location=(0.0, 0.54, 0.25), material=mat_dark_frame, parent=root)
    # Hydraulic Lift Cylinder (Center of mast)
    create_cylinder("Lift_Hydraulic_Cylinder", radius=0.06, depth=1.65, location=(0.0, 0.54, 1.05), material=mat_dark_frame, parent=root)
    create_cylinder("Lift_Hydraulic_Piston", radius=0.038, depth=1.65, location=(0.0, 0.54, 1.35), material=mat_chrome, parent=root)

    # 5. Fork Carriage & Forks (THE LIFTING UNIT)
    # Empty parent whose local Z movement controls the lifting
    forks_parent = bpy.data.objects.new("Forklift_Forks", None)
    forks_parent.empty_display_type = 'PLAIN_AXES'
    forks_parent.empty_display_size = 0.6
    # Rest position: ground level Z = 0.05, Y in front of mast rails Y = 0.64
    forks_parent.location = (0.0, 0.64, 0.05)
    forks_parent.parent = root
    bpy.context.collection.objects.link(forks_parent)

    # Carriage Backplate (horizontal sliding mount)
    create_box("Carriage_Mount_Top", size=(0.76, 0.04, 0.08), location=(0.0, 0.02, 0.42), material=mat_dark_frame, parent=forks_parent)
    create_box("Carriage_Mount_Bottom", size=(0.76, 0.04, 0.08), location=(0.0, 0.02, 0.10), material=mat_dark_frame, parent=forks_parent)

    # Load Backrest Extension (Grille to prevent cargo tipping backward)
    create_box("Backrest_Frame_L", size=(0.04, 0.03, 0.60), location=(-0.36, 0.03, 0.55), material=mat_dark_frame, parent=forks_parent)
    create_box("Backrest_Frame_R", size=(0.04, 0.03, 0.60), location=(0.36, 0.03, 0.55), material=mat_dark_frame, parent=forks_parent)
    for bz in [0.55, 0.68, 0.80]:
        create_box(f"Backrest_Bar_{bz}", size=(0.72, 0.025, 0.035), location=(0.0, 0.03, bz), material=mat_dark_frame, parent=forks_parent)

    # The 2 Steel Forks (L-shape)
    # Left & Right blades: width 0.12m, thickness 0.04m, length 1.15m extending along +Y
    fork_spacing = 0.46
    for side, fx in [("L", -fork_spacing/2), ("R", fork_spacing/2)]:
        # Vertical shank
        create_box(f"Fork_Shank_{side}", size=(0.12, 0.05, 0.48), location=(fx, 0.04, 0.24), material=mat_steel_forks, parent=forks_parent)
        # Horizontal blade extending forward
        blade_len = 1.15
        blade_y = 0.065 + blade_len / 2.0  # Center of blade
        create_box(f"Fork_Blade_{side}", size=(0.12, blade_len, 0.04), location=(fx, blade_y, 0.02), material=mat_steel_forks, parent=forks_parent)
        # Tapered tip at front
        create_box(f"Fork_Tip_{side}", size=(0.12, 0.12, 0.02), location=(fx, 0.065 + blade_len, 0.01), material=mat_steel_forks, parent=forks_parent)

    # 6. Wood Pallet with Cargo Crate
    # Standard 1.2m (X) x 0.8m (Y) x 0.14m (Z)
    pallet = bpy.data.objects.new("Pallet_Wood", None)
    pallet.empty_display_type = 'PLAIN_AXES'
    pallet.empty_display_size = 0.8
    # Placed so the forks are positioned directly under/inside the pallet openings
    # Forks extend from Y=0.70 to Y=1.85. Pallet center at Y=1.28
    pallet.location = (0.0, 1.28, 0.0)
    bpy.context.collection.objects.link(pallet)

    # 3 Bottom runners
    for rx in [-0.48, 0.0, 0.48]:
        create_box(f"Pallet_Base_{rx}", size=(0.10, 0.80, 0.04), location=(rx, 0.0, 0.02), material=mat_wood, parent=pallet)
        # 3 Spacer blocks per runner
        for by in [-0.34, 0.0, 0.34]:
            create_box(f"Pallet_Block_{rx}_{by}", size=(0.10, 0.12, 0.07), location=(rx, by, 0.075), material=mat_wood, parent=pallet)
    # Top deck boards (Forks slide into the 0.07m gap between blocks!)
    for ty in [-0.34, -0.17, 0.0, 0.17, 0.34]:
        create_box(f"Pallet_Board_{ty}", size=(1.16, 0.13, 0.025), location=(0.0, ty, 0.125), material=mat_wood, parent=pallet)

    # Cargo Crate (Kraft Cardboard Box on top of pallet)
    create_box("Cargo_Box", size=(0.88, 0.72, 0.70), location=(0.0, 0.0, 0.49), material=mat_crate, parent=pallet)
    # Tape stripe
    mat_tape = make_mat("M_Box_Tape", (0.58, 0.45, 0.28, 1.0), metallic=0.0, roughness=0.6)
    create_box("Cargo_Tape", size=(0.08, 0.725, 0.705), location=(0.0, 0.0, 0.49), material=mat_tape, parent=pallet)

    # ══════════════════════════════════════════════════════════════
    # ANIMATIONS
    # ══════════════════════════════════════════════════════════════
    scene = bpy.context.scene
    scene.frame_start = 0
    scene.frame_end = 90

    # 1. Fork Lift Animation (Action_Fork_Lift)
    # Frame 0-10: Rest on ground (Z = 0.05)
    # Frame 40: Raised to Z = 1.30m
    # Frame 60: Held at top
    # Frame 90: Lowered back to Z = 0.05
    forks_parent.animation_data_create()
    act_lift = bpy.data.actions.new(name="Action_Fork_Lift")
    forks_parent.animation_data.action = act_lift

    lift_curve = [
        (0, 0.05),
        (10, 0.05),
        (40, 1.30),
        (60, 1.30),
        (90, 0.05)
    ]
    for frame, z in lift_curve:
        scene.frame_set(frame)
        forks_parent.location.z = z
        forks_parent.keyframe_insert(data_path="location", index=2, frame=frame)

    # 2. Drive Animation (Action_Forklift_Drive)
    # Frame 0: Y = 0.0 (Starting point)
    # Frame 35: Y = 2.0 (Maju 2 meter)
    # Frame 55: Y = 2.0 (Berhenti)
    # Frame 90: Y = 0.0 (Mundur kembali)
    root.animation_data_create()
    act_drive = bpy.data.actions.new(name="Action_Forklift_Drive")
    root.animation_data.action = act_drive

    drive_curve = [
        (0, 0.0),
        (35, 2.0),
        (55, 2.0),
        (90, 0.0)
    ]
    for frame, y in drive_curve:
        scene.frame_set(frame)
        root.location.y = y
        root.keyframe_insert(data_path="location", index=1, frame=frame)

    # Animate wheels spin
    for w in wheel_objects:
        w.animation_data_create()
        w_act = bpy.data.actions.new(name=f"Action_{w.name}_Spin")
        w.animation_data.action = w_act
        r_val = 0.28 if "F" in w.name else 0.24
        for frame, y in drive_curve:
            rot = y / r_val
            w.rotation_euler.z = rot
            w.keyframe_insert(data_path="rotation_euler", index=2, frame=frame)

    scene.frame_set(0)

    # Save .blend
    blend_path = "/home/rois/jarvis/forklift-threejs/forklift.blend"
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    print(f"Saved .blend: {blend_path}")

    # Export .glb
    glb_path = "/home/rois/jarvis/forklift-threejs/forklift.glb"
    bpy.ops.export_scene.gltf(
        filepath=glb_path,
        export_format='GLB',
        export_animations=True,
        export_apply=False,
        export_materials='EXPORT',
        export_yup=True
    )
    print(f"Exported .glb: {glb_path}")

if __name__ == '__main__':
    build_forklift_pro()
