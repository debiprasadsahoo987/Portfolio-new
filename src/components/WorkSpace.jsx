import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const WorkSpace = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/workspace.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="545ed4a3ee094d5ab239394747561320fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="pCube1"
                  position={[0, 8.186, 0]}
                  scale={[8.612, 0.329, 15.938]}
                >
                  <group name="transform1" />
                </group>
                <group
                  name="pCube2"
                  position={[0, 4.027, 5.835]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[5.739, 0.329, 7.931]}
                >
                  <group name="transform2" />
                </group>
                <group
                  name="pCube3"
                  position={[0, 4.027, -6.165]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[5.739, 0.329, 7.931]}
                >
                  <group name="transform3" />
                </group>
                <group name="pCube4" position={[0.067, -0.024, 0]}>
                  <group name="transform40" />
                </group>
                <group
                  name="tablet_pCube1"
                  position={[0, 0.122, 0]}
                  scale={[8.023, 0.177, 13.121]}
                >
                  <group name="transform2_1" />
                </group>
                <group
                  name="tablet_pCube2"
                  position={[0, 0.204, -0.13]}
                  scale={[7.659, 0.063, 12.525]}
                >
                  <group name="transform1_1" />
                </group>
                <group
                  name="tablet_pCube3"
                  position={[0, 0.179, -0.13]}
                  scale={[7.615, 0.062, 12.454]}
                >
                  <group name="transform30" />
                </group>
                <group name="tablet_pCube4">
                  <group name="transform31" />
                </group>
                <group
                  name="pCube5"
                  position={[2.632, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform7" />
                </group>
                <group
                  name="pCube14"
                  position={[1.916, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform9" />
                </group>
                <group
                  name="pCube15"
                  position={[1.199, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform10" />
                </group>
                <group
                  name="pCube16"
                  position={[0.483, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform8" />
                </group>
                <group
                  name="pCube17"
                  position={[-0.653, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform6" />
                </group>
                <group
                  name="pCube18"
                  position={[-1.37, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform5" />
                </group>
                <group
                  name="pCube19"
                  position={[-2.086, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform4" />
                </group>
                <group
                  name="pCube20"
                  position={[-2.803, 0.227, 5.072]}
                  scale={[0.55, 0.039, 0.975]}
                >
                  <group name="transform3_1" />
                </group>
                <group name="pCube22" position={[0, -0.008, 0]}>
                  <group name="polySurface4">
                    <group name="transform16" />
                  </group>
                  <group name="transform11" />
                  <group name="polySurface5" position={[-0.672, 0, 0]}>
                    <group name="transform17" />
                  </group>
                  <group name="polySurface6" position={[-1.343, 0, 0]}>
                    <group name="transform18" />
                  </group>
                  <group name="polySurface7" position={[-2.015, 0, 0]}>
                    <group name="transform19" />
                  </group>
                  <group name="polySurface8" position={[-3.326, 0, 0]}>
                    <group name="transform14" />
                  </group>
                  <group name="polySurface9" position={[-3.997, 0, 0]}>
                    <group name="transform13" />
                  </group>
                  <group name="polySurface10" position={[-4.669, 0, 0]}>
                    <group name="transform12" />
                  </group>
                  <group name="polySurface11" position={[-5.34, 0, 0]}>
                    <group name="transform15" />
                  </group>
                </group>
                <group name="polySurface11_1" position={[-0.045, 0, 0]}>
                  <group name="transform20" />
                </group>
                <group name="polySurface7_1" position={[-0.092, 0, 0]}>
                  <group name="transform21" />
                </group>
                <group
                  name="pCylinder1"
                  position={[-0.069, 0.196, 5.072]}
                  scale={[0.034, 0.043, 0.034]}
                >
                  <group name="transform22" />
                </group>
                <group
                  name="pCube23"
                  position={[-2.994, 0.011, 5.482]}
                  scale={[1, 0.046, 1]}
                >
                  <group name="transform23" />
                </group>
                <group
                  name="pCube25"
                  position={[3.008, 0.011, 5.482]}
                  scale={[1, 0.046, 1]}
                >
                  <group name="transform24" />
                </group>
                <group
                  name="pCube26"
                  position={[3.008, 0.011, -5.508]}
                  scale={[1, 0.046, 1]}
                >
                  <group name="transform25" />
                </group>
                <group
                  name="pCube27"
                  position={[-2.994, 0.011, -5.523]}
                  scale={[1, 0.046, 1]}
                >
                  <group name="transform26" />
                </group>
                <group
                  name="pCube28"
                  position={[-2.392, 0.138, 6.585]}
                  scale={[0.259, 0.067, 0.402]}
                >
                  <group name="transform27" />
                </group>
                <group
                  name="pCube29"
                  position={[-2.392, 0.138, 6.774]}
                  scale={[0.288, 0.094, 0.152]}
                >
                  <group name="transform28" />
                </group>
                <group
                  name="pCylinder2"
                  position={[-2.731, 0.138, 6.971]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.141, 0.555, 0.141]}
                >
                  <group name="transform29" />
                </group>
                <group
                  name="tablet_pCube5"
                  position={[2.71, 8.355, 0.557]}
                  scale={0.327}
                >
                  <group name="transform39" />
                </group>
                <group
                  name="stilus_pCylinder1"
                  position={[0, 0.684, 0]}
                  scale={[1, 0.684, 1]}
                >
                  <group name="transform2_2" />
                </group>
                <group name="stilus_pCylinder2" scale={0.059}>
                  <group name="transform1_2" />
                </group>
                <group name="pCylinder3">
                  <group name="transform10_1" />
                </group>
                <group
                  name="pCylinder4"
                  position={[0, 5.418, 0]}
                  scale={[0.282, 3.643, 0.282]}
                >
                  <group name="transform4_1" />
                </group>
                <group
                  name="pCylinder5"
                  position={[0, 1.772, 0]}
                  scale={[0.054, 0.01, 0.054]}
                >
                  <group name="transform35" />
                </group>
                <group
                  name="pCylinder6"
                  position={[0, 1.749, 0]}
                  scale={[0.045, 0.016, 0.045]}
                >
                  <group name="transform36" />
                </group>
                <group
                  name="pCylinder7"
                  position={[0, 1.726, 0]}
                  scale={[0.022, 0.008, 0.022]}
                >
                  <group name="transform37" />
                </group>
                <group
                  name="stilus_pCube1"
                  position={[0.641, 6.902, 0]}
                  rotation={[0, 0, 0.017]}
                  scale={[1, 4.051, 1]}
                >
                  <group name="transform3_2" />
                </group>
                <group name="pCylinder9">
                  <group name="transform6_1" />
                </group>
                <group
                  name="stilus_pCube2"
                  position={[0.254, 3.44, 0]}
                  rotation={[0, 0, 0.017]}
                  scale={[0.065, 0.904, 0.097]}
                >
                  <group name="transform5_1" />
                </group>
                <group
                  name="stilus_pCube3"
                  position={[0.257, 3.44, 0]}
                  rotation={[0, 0, 0.017]}
                  scale={[0.06, 0.862, 0.09]}
                >
                  <group name="transform8_1" />
                </group>
                <group name="pCylinder10">
                  <group name="transform32" />
                </group>
                <group
                  name="stilus_pCube4"
                  position={[0.318, 3.281, 0]}
                  rotation={[0, 0, 0.017]}
                  scale={[0.056, 0.527, 0.084]}
                >
                  <group name="transform7_1" />
                </group>
                <group name="stilus_pCube5">
                  <group name="transform33" />
                </group>
                <group
                  name="pCylinder11"
                  position={[0, 1.3, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.263, 0.585, 0.263]}
                >
                  <group name="transform9_1" />
                </group>
                <group name="pCylinder12">
                  <group name="transform34" />
                </group>
                <group
                  name="pCylinder13"
                  position={[1.627, 8.337, -2.612]}
                  scale={0.305}
                >
                  <group name="transform38" />
                </group>
                <group
                  name="chair_pCube2"
                  position={[-1.08, 3.005, 0]}
                  rotation={[0, 0, 1.623]}
                  scale={[2.445, 0.397, 2.249]}
                >
                  <group name="transform1_3" />
                </group>
                <group
                  name="chair_pCube3"
                  position={[-1.144, 4.227, 0]}
                  rotation={[0, 0, 1.623]}
                  scale={[2.445, 0.397, 2.249]}
                >
                  <group name="transform2_3" />
                </group>
                <group
                  name="chair_pCube4"
                  position={[-0.001, 0.795, 0]}
                  scale={1.089}
                >
                  <group name="polySurface11_2">
                    <group name="transform27_1" />
                  </group>
                  <group name="polySurface12">
                    <group name="transform26_1" />
                  </group>
                  <group name="transform25_1" />
                </group>
                <group
                  name="pCube8"
                  position={[0.256, 0.397, -0.788]}
                  rotation={[0, 1.257, 0]}
                  scale={[1.241, 0.282, 0.346]}
                />
                <group
                  name="pCube9"
                  position={[-0.67, 0.397, -0.487]}
                  rotation={[-Math.PI, Math.PI / 5, -Math.PI]}
                  scale={[1.241, 0.282, 0.346]}
                />
                <group
                  name="pCube10"
                  position={[-0.67, 0.397, 0.487]}
                  rotation={[-Math.PI, -Math.PI / 5, -Math.PI]}
                  scale={[1.241, 0.282, 0.346]}
                />
                <group
                  name="pCube11"
                  position={[0.256, 0.397, 0.788]}
                  rotation={[0, -1.257, 0]}
                  scale={[1.241, 0.282, 0.346]}
                />
                <group
                  name="ffd3Lattice1"
                  position={[5.384, 0.081, -1.858]}
                  rotation={[-Math.PI, -0.419, -Math.PI]}
                  scale={1.532}
                >
                  <mesh
                    name="ffd3Lattice1_phong5_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.ffd3Lattice1_phong5_0.geometry}
                    material={materials.phong5}
                  />
                  <mesh
                    name="ffd3Lattice1_chair_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.ffd3Lattice1_chair_phong2_0.geometry}
                    material={materials.chair_phong2}
                  />
                  <mesh
                    name="ffd3Lattice1_chair_phong3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.ffd3Lattice1_chair_phong3_0.geometry}
                    material={materials.chair_phong3}
                  />
                  <mesh
                    name="ffd3Lattice1_chair_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.ffd3Lattice1_chair_phong4_0.geometry}
                    material={materials.chair_phong4}
                  />
                </group>
                <group name="pCube30" position={[0.018, 0.054, 0]} scale={0.73}>
                  <group name="polySurface103">
                    <mesh
                      name="polySurface103_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface103_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group name="polySurface104">
                    <mesh
                      name="polySurface104_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface104_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group name="polySurface105">
                    <mesh
                      name="polySurface105_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface105_phong1_0.geometry}
                      material={materials.phong1}
                    />
                  </group>
                  <group name="polySurface106">
                    <mesh
                      name="polySurface106_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface106_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface107">
                    <mesh
                      name="polySurface107_tablet_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface107_tablet_phong1_0.geometry}
                      material={materials.tablet_phong1}
                    />
                  </group>
                  <group name="polySurface108">
                    <mesh
                      name="polySurface108_phong3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface108_phong3_0.geometry}
                      material={materials.phong3}
                    />
                  </group>
                  <group name="polySurface109">
                    <mesh
                      name="polySurface109_phong3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface109_phong3_0.geometry}
                      material={materials.phong3}
                    />
                  </group>
                  <group name="polySurface110">
                    <mesh
                      name="polySurface110_phong4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface110_phong4_0.geometry}
                      material={materials.phong4}
                    />
                  </group>
                  <group name="polySurface111">
                    <mesh
                      name="polySurface111_phong3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface111_phong3_0.geometry}
                      material={materials.phong3}
                    />
                  </group>
                  <group name="polySurface112">
                    <mesh
                      name="polySurface112_phong3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface112_phong3_0.geometry}
                      material={materials.phong3}
                    />
                  </group>
                  <group name="polySurface113">
                    <mesh
                      name="polySurface113_phong3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface113_phong3_0.geometry}
                      material={materials.phong3}
                    />
                  </group>
                  <group name="polySurface114">
                    <mesh
                      name="polySurface114_phong3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface114_phong3_0.geometry}
                      material={materials.phong3}
                    />
                  </group>
                  <group name="polySurface115">
                    <mesh
                      name="polySurface115_blinn1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface115_blinn1_0.geometry}
                      material={materials.blinn1}
                    />
                  </group>
                  <group name="polySurface116">
                    <mesh
                      name="polySurface116_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface116_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface117">
                    <mesh
                      name="polySurface117_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface117_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface118">
                    <mesh
                      name="polySurface118_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface118_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface119">
                    <mesh
                      name="polySurface119_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface119_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface120">
                    <mesh
                      name="polySurface120_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface120_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface121">
                    <mesh
                      name="polySurface121_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface121_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface122">
                    <mesh
                      name="polySurface122_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface122_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface123">
                    <mesh
                      name="polySurface123_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface123_phong2_0.geometry}
                      material={materials.phong2}
                    />
                  </group>
                  <group name="polySurface124">
                    <mesh
                      name="polySurface124_stilus_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface124_stilus_phong1_0.geometry}
                      material={materials.stilus_phong1}
                    />
                  </group>
                  <group name="polySurface125">
                    <mesh
                      name="polySurface125_stilus_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface125_stilus_phong1_0.geometry}
                      material={materials.stilus_phong1}
                    />
                  </group>
                  <group name="polySurface126">
                    <mesh
                      name="polySurface126_stilus_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface126_stilus_phong1_0.geometry}
                      material={materials.stilus_phong1}
                    />
                  </group>
                  <group name="polySurface127">
                    <mesh
                      name="polySurface127_stilus_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface127_stilus_phong1_0.geometry}
                      material={materials.stilus_phong1}
                    />
                  </group>
                  <group name="polySurface128">
                    <mesh
                      name="polySurface128_stilus_phong4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface128_stilus_phong4_0.geometry}
                      material={materials.stilus_phong4}
                    />
                  </group>
                  <group
                    name="polySurface129"
                    position={[-1.267, -0.405, -4.126]}
                    rotation={[-2.034, -1.532, -2.017]}
                  >
                    <mesh
                      name="polySurface129_stilus_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface129_stilus_phong1_0.geometry}
                      material={materials.stilus_phong1}
                    />
                    <mesh
                      name="polySurface129_stilus_phong4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface129_stilus_phong4_0.geometry}
                      material={materials.stilus_phong4}
                    />
                    <mesh
                      name="polySurface129_stilus_phong2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface129_stilus_phong2_0.geometry}
                      material={materials.stilus_phong2}
                    />
                    <mesh
                      name="polySurface129_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface129_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                  <group name="transform267" />
                </group>
                <group
                  name="bottle_pCylinder1"
                  position={[0, 3.083, 0]}
                  scale={[1, 3.061, 1]}
                >
                  <group name="transform43" />
                </group>
                <group
                  name="bottle_pCylinder2"
                  position={[0, 6.843, 0]}
                  scale={[1, 0.666, 1]}
                >
                  <group name="transform41" />
                </group>
                <group name="imagePlane1" />
                <group name="group" position={[0, 0, -3.613]} />
                <group name="group1" position={[0, 0, -3.537]} />
                <group
                  name="pPlane1"
                  position={[1.043, 4.508, 0.001]}
                  rotation={[0, 0, -1.588]}
                  scale={[2.951, 1.4, 1.465]}
                >
                  <group name="transform42" />
                </group>
                <group
                  name="bottle_pCylinder3"
                  position={[1.301, 6.131, 3.343]}
                  rotation={[0, 0.995, 0]}
                  scale={0.243}
                >
                  <mesh
                    name="bottle_pCylinder3_phongE1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle_pCylinder3_phongE1_0.geometry}
                    material={materials.phongE1}
                  />
                  <mesh
                    name="bottle_pCylinder3_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle_pCylinder3_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                  <mesh
                    name="bottle_pCylinder3_lambert5_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle_pCylinder3_lambert5_0.geometry}
                    material={materials.lambert5}
                  />
                  <mesh
                    name="bottle_pCylinder3_bottle_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle_pCylinder3_bottle_phong2_0.geometry}
                    material={materials.bottle_phong2}
                  />
                  <mesh
                    name="bottle_pCylinder3_bottle_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bottle_pCylinder3_bottle_phong1_0.geometry}
                    material={materials.bottle_phong1}
                  />
                </group>
                <group
                  name="_pCylinder1"
                  position={[0, 0.58, 0]}
                  scale={[1, 0.424, 1]}
                >
                  <group name="transform45" />
                </group>
                <group
                  name="_pCylinder2"
                  position={[0, 1.71, 0]}
                  scale={[1, 0.56, 1]}
                >
                  <group name="transform46" />
                </group>
                <group
                  name="_pCube2"
                  position={[0, 4.761, 0]}
                  scale={[1.074, 4.952, 0.238]}
                >
                  <group name="transform2_4" />
                </group>
                <group
                  name="_pCube3"
                  position={[0, 7.137, 0]}
                  scale={[0.329, 0.322, 1]}
                >
                  <group name="transform1_4" />
                </group>
                <group name="_pCube5">
                  <group name="transform8_2" />
                </group>
                <group name="_group">
                  <group
                    name="pasted__pCube2"
                    position={[0, 4.761, 0]}
                    scale={[1.074, 4.952, 0.238]}
                  >
                    <group name="pasted__transform2" />
                  </group>
                  <group
                    name="pasted__pCube3"
                    position={[0, 7.137, 0]}
                    scale={[0.329, 0.322, 1]}
                  >
                    <group name="pasted__transform1" />
                  </group>
                  <group
                    name="pasted__pCube4"
                    position={[0, 7.181, 0]}
                    scale={[0.329, 0.322, 0.238]}
                  >
                    <group name="transform3_3" />
                  </group>
                  <group name="pasted__pCube5">
                    <group name="transform6_2" />
                  </group>
                  <group
                    name="pasted__pCube6"
                    position={[0.016, 7.473, 2.224]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[1.083, 5.036, 0.172]}
                  >
                    <group name="transform4_2" />
                  </group>
                </group>
                <group
                  name="pasted__pCube6_1"
                  position={[0, 0.087, 1.12]}
                  rotation={[-0.157, 0, 0]}
                >
                  <group name="transform44" />
                </group>
                <group
                  name="pCube6"
                  position={[0, 4.964, 0.014]}
                  scale={[0.813, 3.054, 0.394]}
                >
                  <group name="transform5_2" />
                </group>
                <group
                  name="pCube7"
                  position={[0, 4.964, 0.014]}
                  scale={[0.813, 3.054, 0.778]}
                >
                  <group name="transform7_2" />
                </group>
                <group name="pasted__pCube5_1">
                  <group name="transform10_2" />
                </group>
                <group
                  name="_pCube9"
                  position={[0, 4.99, 0]}
                  scale={[0.851, 3.365, 0.126]}
                >
                  <group name="transform47" />
                </group>
                <group
                  name="_pCube10"
                  position={[0, 3.055, 0.107]}
                  scale={[0.197, 0.044, 0.055]}
                >
                  <group name="transform9_2" />
                </group>
                <group name="pasted__pCube7">
                  <group name="transform12_1" />
                </group>
                <group
                  name="_pCylinder3"
                  position={[0.264, 3.27, -0.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.016, 0.062]}
                >
                  <group name="transform48" />
                </group>
                <group
                  name="_pCylinder4"
                  position={[0.122, 3.27, -0.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.016, 0.062]}
                >
                  <group name="transform49" />
                </group>
                <group
                  name="_pCylinder5"
                  position={[-0.016, 3.27, -0.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.016, 0.062]}
                >
                  <group name="transform50" />
                </group>
                <group
                  name="_pCylinder6"
                  position={[-0.162, 3.27, -0.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.016, 0.062]}
                >
                  <group name="transform51" />
                </group>
                <group
                  name="_pCylinder7"
                  position={[-0.304, 3.27, -0.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.016, 0.062]}
                >
                  <group name="transform52" />
                </group>
                <group
                  name="pCylinder8"
                  position={[0.012, 2.834, -0.117]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.316, 0.028, 0.316]}
                >
                  <group name="transform11_1" />
                </group>
                <group
                  name="_pCylinder9"
                  position={[0.012, 2.843, -0.112]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.307, 0.027, 0.307]}
                >
                  <group name="transform53" />
                </group>
                <group name="pasted__pCube8">
                  <group name="transform18_1" />
                </group>
                <group
                  name="_pCylinder10"
                  position={[-0.304, 3.27, -0.117]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.069, 0.018, 0.069]}
                >
                  <group name="transform17_1" />
                </group>
                <group
                  name="_pCylinder11"
                  position={[-0.162, 3.27, -0.117]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.069, 0.018, 0.069]}
                >
                  <group name="transform16_1" />
                </group>
                <group
                  name="_pCylinder12"
                  position={[-0.016, 3.27, -0.117]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.069, 0.018, 0.069]}
                >
                  <group name="transform15_1" />
                </group>
                <group
                  name="_pCylinder13"
                  position={[0.122, 3.27, -0.117]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.069, 0.018, 0.069]}
                >
                  <group name="transform14_1" />
                </group>
                <group
                  name="pCylinder14"
                  position={[0.264, 3.27, -0.117]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.069, 0.018, 0.069]}
                >
                  <group name="transform13_1" />
                </group>
                <group name="pasted__pCube9">
                  <group name="transform21_1" />
                </group>
                <group
                  name="pCylinder15"
                  position={[-0.442, 2.421, -0.047]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.2, 0.062]}
                >
                  <group name="transform20_1" />
                </group>
                <group
                  name="pCylinder16"
                  position={[0.44, 2.421, -0.047]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.062, 0.2, 0.062]}
                >
                  <group name="transform19_1" />
                </group>
                <group name="pasted__pCube10">
                  <group name="transform54" />
                </group>
                <group
                  name="areaLight1"
                  position={[-0.112, 8.935, 2.393]}
                  rotation={[0.153, -0.264, 0.07]}
                  scale={[0.152, 0.658, 0.328]}
                >
                  <group name="Object_273" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_274" />
                  </group>
                </group>
                <group
                  name="directionalLight1"
                  position={[4.113, 15.599, 8.062]}
                  rotation={[-0.205, 0.156, -0.687]}
                >
                  <group name="Object_276" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_277" />
                  </group>
                </group>
                <group
                  name="pasted__pCube11"
                  position={[-0.37, 6.094, 3.319]}
                  rotation={[-Math.PI, 0.279, -Math.PI]}
                  scale={0.371}
                >
                  <mesh
                    name="pasted__pCube11__phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pasted__pCube11__phong2_0.geometry}
                    material={materials.phong2_18}
                  />
                  <mesh
                    name="pasted__pCube11__phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pasted__pCube11__phong1_0.geometry}
                    material={materials.phong1_19}
                  />
                </group>
                <group
                  name="note_pCube1"
                  position={[0, 0.303, 0.164]}
                  scale={[4.813, 0.321, 2.947]}
                >
                  <group name="transform55" />
                </group>
                <group
                  name="note_pCube4"
                  position={[0, 0.288, 1.881]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[4.855, 0.091, 0.441]}
                >
                  <group name="transform3_4" />
                </group>
                <group
                  name="note_pCube5"
                  position={[0, 0.567, 0]}
                  scale={[4.855, 0.091, 3.53]}
                >
                  <group name="transform1_5" />
                </group>
                <group name="note_pCube6" scale={[4.855, 0.091, 3.53]}>
                  <group name="transform2_5" />
                </group>
                <group
                  name="note_pCube7"
                  position={[0, 0.02, 0.008]}
                  scale={[0.991, 0.93, 0.904]}
                >
                  <group name="transform56" />
                </group>
                <group
                  name="note_pCube8"
                  position={[2.46, 0.308, -1.047]}
                  scale={[0.027, 0.52, 0.125]}
                >
                  <group name="transform7_3" />
                </group>
                <group
                  name="note_pCube9"
                  position={[2.13, 0.012, -1.047]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.027, 0.52, 0.125]}
                >
                  <group name="transform4_3" />
                </group>
                <group
                  name="note_pCube10"
                  position={[0, 0.632, -1.047]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.027, 4.903, 0.125]}
                >
                  <group name="transform5_3" />
                </group>
                <group name="note_pCube11">
                  <group name="transform6_3" />
                </group>
                <group name="pCube12">
                  <group name="polySurface1">
                    <group name="transform10_3" />
                  </group>
                  <group name="polySurface2">
                    <group name="transform11_2" />
                  </group>
                  <group name="polySurface3">
                    <group name="transform9_3" />
                  </group>
                  <group name="transform8_3" />
                </group>
                <group name="polySurface1_1" position={[0, -0.02, 0]}>
                  <group name="transform12_2" />
                </group>
                <group name="polySurface4_1">
                  <group name="polySurface5_1">
                    <group name="transform15_2" />
                  </group>
                  <group name="polySurface6_1">
                    <group name="transform16_2" />
                  </group>
                  <group
                    name="polySurface7_2"
                    position={[0, 0.008, 0]}
                    scale={[0.985, 1, 1]}
                  >
                    <group name="transform14_2" />
                  </group>
                  <group name="transform13_2" />
                </group>
                <group name="polySurface5_2">
                  <group name="transform17_2" />
                </group>
                <group
                  name="polySurface8_1"
                  position={[0, 0, -0.101]}
                  scale={[0.991, 1, 0.904]}
                >
                  <group name="transform57" />
                </group>
                <group
                  name="note_pPlane1"
                  position={[2.171, 0.29, -0.138]}
                  rotation={[0, -0.663, 0]}
                  scale={[0.991, 1, 0.904]}
                >
                  <group name="transform58" />
                </group>
                <group
                  name="pPlane2"
                  position={[2.104, 0.38, 0.97]}
                  rotation={[0, 0.017, 0]}
                  scale={[0.991, 1, 0.904]}
                >
                  <group name="transform59" />
                </group>
                <group
                  name="pPlane3"
                  position={[-2.257, 0.38, 1.556]}
                  rotation={[0, 0.017, 0]}
                  scale={[0.991, 1, 0.172]}
                >
                  <group name="transform60" />
                </group>
                <group
                  name="pPlane4"
                  position={[-2.259, 0.298, 1.415]}
                  rotation={[0, 0.017, 0]}
                  scale={[0.991, 1, 0.172]}
                >
                  <group name="transform61" />
                </group>
                <group
                  name="pPlane5"
                  position={[-2.262, 0.214, 1.242]}
                  rotation={[0, 0.017, 0]}
                  scale={[0.991, 1, 0.172]}
                >
                  <group name="transform62" />
                </group>
                <group
                  name="pPlane6"
                  position={[1.916, 6.102, -3.795]}
                  rotation={[0.04, -0.538, 0.025]}
                  scale={[0.366, 0.332, 0.332]}
                >
                  <mesh
                    name="pPlane6_phong8_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_phong8_0.geometry}
                    material={materials.phong8}
                  />
                  <mesh
                    name="pPlane6_phong7_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_phong7_0.geometry}
                    material={materials.phong7}
                  />
                  <mesh
                    name="pPlane6_phong6_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_phong6_0.geometry}
                    material={materials.phong6}
                  />
                  <mesh
                    name="pPlane6_note_phong5_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_note_phong5_0.geometry}
                    material={materials.note_phong5}
                  />
                  <mesh
                    name="pPlane6_note_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_note_phong4_0.geometry}
                    material={materials.note_phong4}
                  />
                  <mesh
                    name="pPlane6_note_phong3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_note_phong3_0.geometry}
                    material={materials.note_phong3}
                  />
                  <mesh
                    name="pPlane6_note_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_note_phong1_0.geometry}
                    material={materials.note_phong1}
                  />
                  <mesh
                    name="pPlane6_note_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane6_note_phong2_0.geometry}
                    material={materials.note_phong2}
                  />
                </group>
                <group
                  name="notebook_pCube1"
                  position={[0, 0.122, 0]}
                  scale={[3.732, 0.238, 5.459]}
                >
                  <group name="transform2_6" />
                </group>
                <group
                  name="notebook_pCube2"
                  position={[-2.495, 1.957, 0]}
                  rotation={[0, 0, 1.92]}
                  scale={[3.732, 0.059, 5.459]}
                >
                  <group name="transform4_4" />
                </group>
                <group name="notebook_group">
                  <group
                    name="pasted__pCube6_2"
                    position={[-1.77, 0.111, 0]}
                    scale={[0.243, 0.2, 2.323]}
                  >
                    <group name="transform155" />
                  </group>
                  <group
                    name="pasted__pCube7_1"
                    position={[-1.752, 0.17, 0]}
                    scale={[0.26, 0.377, 2.434]}
                  >
                    <group name="transform1_6" />
                  </group>
                  <group
                    name="pasted__pCube150"
                    position={[-1.77, 0.137, 0]}
                    scale={[0.254, 0.209, 2.433]}
                  >
                    <group name="transform136" />
                  </group>
                </group>
                <group name="notebook_pCube3">
                  <group name="transform10_4" />
                </group>
                <group
                  name="notebook_pCube4"
                  position={[-2.553, 2.155, 0]}
                  rotation={[0, 0, -2.793]}
                  scale={[0.035, 3.008, 5.137]}
                >
                  <group name="transform3_5" />
                </group>
                <group name="notebook_pCube5">
                  <group name="transform149" />
                </group>
                <group
                  name="notebook_pCube6"
                  position={[-1.143, 0.296, 0.032]}
                  scale={[0.625, 0.13, 5.199]}
                >
                  <group name="transform13_3" />
                </group>
                <group
                  name="notebook_pCube7"
                  position={[0.096, 0.277, 0]}
                  scale={[1.478, 0.13, 5.162]}
                >
                  <group name="transform11_3" />
                </group>
                <group
                  name="notebook_pCube8"
                  position={[-0.741, 0.201, 2.351]}
                  scale={[0.041, 0.046, 0.314]}
                >
                  <group name="transform150" />
                </group>
                <group
                  name="notebook_pCube9"
                  position={[1.342, 0.278, 0.324]}
                  scale={[0.754, 0.13, 1.587]}
                >
                  <group name="transform9_4" />
                </group>
                <group
                  name="notebook_pCube10"
                  position={[1.342, 0.234, -6]}
                  scale={[0.754, 0.13, 1.587]}
                >
                  <group name="transform8_4" />
                </group>
                <group
                  name="notebook_pCube11"
                  position={[0.096, 0.234, -6.324]}
                  scale={[1.478, 0.13, 5.06]}
                >
                  <group name="transform7_4" />
                </group>
                <group
                  name="notebook_pCube12"
                  position={[-0.754, 0.234, -3.974]}
                  scale={[0.041, 0.13, 0.331]}
                >
                  <group name="transform6_4" />
                </group>
                <group
                  name="pCube13"
                  position={[-1.143, 0.234, -6.324]}
                  scale={[0.625, 0.13, 5.199]}
                >
                  <group name="transform5_4" />
                </group>
                <group name="notebook_pCube15">
                  <group name="transform12_3" />
                </group>
                <group name="notebook_pCube16">
                  <group name="transform14_3" />
                </group>
                <group name="notebook_pCube17">
                  <group name="transform101" />
                </group>
                <group
                  name="notebook_pCube18"
                  position={[0.647, 0.222, 0.554]}
                  scale={[0.214, 0.054, 1.563]}
                >
                  <group name="transform17_3" />
                </group>
                <group
                  name="notebook_pCube23"
                  position={[0.647, 0.222, -0.409]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform19_2" />
                </group>
                <group
                  name="pCube24"
                  position={[0.647, 0.222, -0.682]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform27_2" />
                </group>
                <group
                  name="notebook_pCube25"
                  position={[0.591, 0.222, -0.955]}
                  scale={[0.102, 0.054, 0.213]}
                >
                  <group name="transform28_1" />
                </group>
                <group
                  name="notebook_pCube26"
                  position={[0.647, 0.222, -1.227]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform29_1" />
                </group>
                <group
                  name="notebook_pCube27"
                  position={[0.647, 0.222, -1.5]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform30_1" />
                </group>
                <group
                  name="notebook_pCube28"
                  position={[0.647, 0.222, -1.773]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform31_1" />
                </group>
                <group
                  name="notebook_pCube29"
                  position={[0.647, 0.222, -2.046]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform32_1" />
                </group>
                <group
                  name="notebook_pCube30"
                  position={[0.647, 0.222, -2.319]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform95" />
                </group>
                <group
                  name="pCube31"
                  position={[0.647, 0.222, 1.531]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform33_1" />
                </group>
                <group
                  name="pCube32"
                  position={[0.647, 0.222, 1.804]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform34_1" />
                </group>
                <group
                  name="pCube33"
                  position={[0.647, 0.222, 2.077]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform35_1" />
                </group>
                <group
                  name="pCube34"
                  position={[0.647, 0.222, 2.35]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform36_1" />
                </group>
                <group
                  name="pCube37"
                  position={[-0.294, 0.222, -2.319]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform18_2" />
                </group>
                <group
                  name="pCube38"
                  position={[-0.512, 0.222, -2.319]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform25_2" />
                </group>
                <group
                  name="pCube39"
                  position={[0.334, 0.222, -2.044]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform22_1" />
                </group>
                <group
                  name="pCube40"
                  position={[0.02, 0.222, -2.044]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform23_1" />
                </group>
                <group
                  name="pCube41"
                  position={[-0.294, 0.222, -2.044]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform24_1" />
                </group>
                <group
                  name="pCube42"
                  position={[-0.512, 0.222, -2.044]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform21_2" />
                </group>
                <group
                  name="pCube43"
                  position={[0.334, 0.222, -1.768]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform20_2" />
                </group>
                <group
                  name="pCube44"
                  position={[0.02, 0.222, -1.768]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform26_2" />
                </group>
                <group
                  name="pCube45"
                  position={[-0.294, 0.222, -1.768]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform96" />
                </group>
                <group
                  name="pCube46"
                  position={[-0.512, 0.222, -1.768]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform97" />
                </group>
                <group
                  name="pCube47"
                  position={[0.334, 0.222, -1.493]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform37_1" />
                </group>
                <group
                  name="pCube48"
                  position={[0.02, 0.222, -1.493]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform38_1" />
                </group>
                <group
                  name="pCube49"
                  position={[-0.294, 0.222, -1.493]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform39_1" />
                </group>
                <group
                  name="pCube50"
                  position={[-0.512, 0.222, -1.493]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform40_1" />
                </group>
                <group
                  name="pCube51"
                  position={[0.334, 0.222, -1.218]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform41_1" />
                </group>
                <group
                  name="pCube52"
                  position={[0.02, 0.222, -1.218]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform42_1" />
                </group>
                <group
                  name="pCube53"
                  position={[-0.294, 0.222, -1.218]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform43_1" />
                </group>
                <group
                  name="pCube54"
                  position={[-0.512, 0.222, -1.218]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform44_1" />
                </group>
                <group
                  name="pCube56"
                  position={[0.02, 0.222, -0.943]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform45_1" />
                </group>
                <group
                  name="pCube57"
                  position={[-0.294, 0.222, -0.943]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform46_1" />
                </group>
                <group
                  name="pCube58"
                  position={[-0.512, 0.222, -0.943]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform47_1" />
                </group>
                <group
                  name="pCube60"
                  position={[0.02, 0.222, -0.668]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform48_1" />
                </group>
                <group
                  name="pCube61"
                  position={[-0.294, 0.222, -0.668]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform49_1" />
                </group>
                <group
                  name="pCube62"
                  position={[-0.512, 0.222, -0.668]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform50_1" />
                </group>
                <group
                  name="pCube63"
                  position={[0.334, 0.222, -0.535]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform51_1" />
                </group>
                <group
                  name="pCube64"
                  position={[0.02, 0.222, -0.393]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform52_1" />
                </group>
                <group
                  name="pCube65"
                  position={[-0.294, 0.222, -0.393]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform53_1" />
                </group>
                <group
                  name="pCube66"
                  position={[-0.512, 0.222, -0.393]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform54_1" />
                </group>
                <group
                  name="pCube67"
                  position={[0.334, 0.222, -0.26]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform55_1" />
                </group>
                <group
                  name="pCube68"
                  position={[0.02, 0.222, -0.118]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform56_1" />
                </group>
                <group
                  name="pCube69"
                  position={[-0.294, 0.222, -0.118]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform57_1" />
                </group>
                <group
                  name="pCube70"
                  position={[-0.512, 0.222, -0.118]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform58_1" />
                </group>
                <group
                  name="pCube71"
                  position={[0.334, 0.222, 0.015]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform59_1" />
                </group>
                <group
                  name="pCube72"
                  position={[0.02, 0.222, 0.157]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform60_1" />
                </group>
                <group
                  name="pCube73"
                  position={[-0.294, 0.222, 0.157]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform61_1" />
                </group>
                <group
                  name="pCube74"
                  position={[-0.512, 0.222, 0.157]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform62_1" />
                </group>
                <group
                  name="pCube75"
                  position={[0.334, 0.222, 0.291]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform63" />
                </group>
                <group
                  name="pCube76"
                  position={[0.02, 0.222, 0.432]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform64" />
                </group>
                <group
                  name="pCube77"
                  position={[-0.294, 0.222, 0.432]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform65" />
                </group>
                <group
                  name="pCube78"
                  position={[-0.512, 0.222, 0.432]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform66" />
                </group>
                <group
                  name="pCube79"
                  position={[0.334, 0.222, 0.566]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform67" />
                </group>
                <group
                  name="pCube80"
                  position={[0.02, 0.222, 0.708]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform68" />
                </group>
                <group
                  name="pCube81"
                  position={[-0.294, 0.222, 0.708]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform69" />
                </group>
                <group
                  name="pCube82"
                  position={[-0.512, 0.222, 0.708]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform70" />
                </group>
                <group
                  name="pCube83"
                  position={[0.334, 0.222, 0.841]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform71" />
                </group>
                <group
                  name="pCube84"
                  position={[0.02, 0.222, 0.983]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform72" />
                </group>
                <group
                  name="pCube85"
                  position={[-0.294, 0.222, 0.983]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform73" />
                </group>
                <group
                  name="pCube86"
                  position={[-0.512, 0.222, 0.983]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform74" />
                </group>
                <group
                  name="pCube87"
                  position={[0.334, 0.222, 1.116]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform75" />
                </group>
                <group
                  name="pCube88"
                  position={[0.02, 0.222, 1.258]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform76" />
                </group>
                <group
                  name="pCube89"
                  position={[-0.294, 0.222, 1.258]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform77" />
                </group>
                <group
                  name="pCube90"
                  position={[-0.512, 0.222, 1.258]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform78" />
                </group>
                <group
                  name="pCube91"
                  position={[0.334, 0.222, 1.391]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform79" />
                </group>
                <group
                  name="pCube92"
                  position={[0.02, 0.222, 1.533]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform80" />
                </group>
                <group
                  name="pCube93"
                  position={[-0.294, 0.222, 1.533]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform81" />
                </group>
                <group
                  name="pCube94"
                  position={[-0.512, 0.222, 1.533]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform82" />
                </group>
                <group
                  name="pCube95"
                  position={[0.334, 0.222, 1.666]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform83" />
                </group>
                <group
                  name="pCube96"
                  position={[0.02, 0.222, 1.808]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform84" />
                </group>
                <group
                  name="pCube97"
                  position={[-0.294, 0.222, 1.808]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform85" />
                </group>
                <group
                  name="pCube98"
                  position={[-0.512, 0.222, 1.808]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform86" />
                </group>
                <group
                  name="pCube99"
                  position={[0.334, 0.222, 2.083]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform16_3" />
                </group>
                <group
                  name="pCube101"
                  position={[-0.294, 0.222, 2.06]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform87" />
                </group>
                <group
                  name="pCube102"
                  position={[-0.512, 0.222, 2.083]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform88" />
                </group>
                <group
                  name="pCube103"
                  position={[0.334, 0.222, 2.358]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform15_3" />
                </group>
                <group
                  name="pCube104"
                  position={[0.02, 0.222, 2.358]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform90" />
                </group>
                <group
                  name="pCube105"
                  position={[-0.294, 0.222, 2.358]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform91" />
                </group>
                <group
                  name="pCube106"
                  position={[-0.512, 0.222, 2.358]}
                  scale={[0.088, 0.054, 0.213]}
                >
                  <group name="transform92" />
                </group>
                <group name="pCube107">
                  <group name="transform89" />
                </group>
                <group
                  name="pCube108"
                  position={[0.185, 0.222, -2.319]}
                  scale={[0.214, 0.054, 0.213]}
                >
                  <group name="transform94" />
                </group>
                <group
                  name="pCube109"
                  position={[0.7, 0.222, -0.955]}
                  scale={[0.102, 0.054, 0.213]}
                >
                  <group name="transform93" />
                </group>
                <group
                  name="pCube110"
                  position={[-0.004, -0.028, 0]}
                  rotation={[0, 0, -0.017]}
                >
                  <group name="transform151" />
                </group>
                <group
                  name="pCube111"
                  position={[-1.47, 0.191, 1.969]}
                  scale={[0.254, 0.153, 1.316]}
                >
                  <group name="transform99" />
                </group>
                <group
                  name="pCube112"
                  position={[-1.47, 0.191, -1.915]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.254, 0.153, 1.316]}
                >
                  <group name="transform98" />
                </group>
                <group name="pCube113">
                  <group name="transform100" />
                </group>
                <group
                  name="pCube114"
                  position={[-0.012, 0.049, 0]}
                  scale={[1, 0.75, 1]}
                >
                  <group
                    name="polySurface1_2"
                    position={[0, 0, 0.044]}
                    scale={[1, 1, 0.978]}
                  >
                    <group name="transform133" />
                  </group>
                  <group
                    name="polySurface2_1"
                    position={[0, 0, -0.097]}
                    scale={[1, 1, 0.961]}
                  >
                    <group name="transform131" />
                  </group>
                  <group name="transform102" />
                </group>
                <group
                  name="pCube116"
                  position={[-1.705, 0.234, 2.569]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform129" />
                </group>
                <group
                  name="pCube117"
                  position={[-1.705, 0.234, 2.523]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform103" />
                </group>
                <group
                  name="pCube118"
                  position={[-1.705, 0.234, 2.477]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform104" />
                </group>
                <group
                  name="pCube119"
                  position={[-1.705, 0.234, 2.431]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform105" />
                </group>
                <group
                  name="pCube120"
                  position={[-1.705, 0.234, 2.385]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform106" />
                </group>
                <group
                  name="pCube121"
                  position={[-1.705, 0.234, 2.339]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform127" />
                </group>
                <group
                  name="pCube122"
                  position={[-1.705, 0.234, 2.293]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform128" />
                </group>
                <group
                  name="pCube123"
                  position={[-1.705, 0.234, 2.247]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform107" />
                </group>
                <group
                  name="pCube124"
                  position={[-1.705, 0.234, 2.201]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform108" />
                </group>
                <group
                  name="pCube125"
                  position={[-1.705, 0.234, 2.154]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform109" />
                </group>
                <group
                  name="pCube126"
                  position={[-1.705, 0.234, 2.108]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform110" />
                </group>
                <group
                  name="pCube127"
                  position={[-1.705, 0.234, 2.062]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform111" />
                </group>
                <group
                  name="pCube128"
                  position={[-1.705, 0.234, 2.016]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform112" />
                </group>
                <group
                  name="pCube129"
                  position={[-1.705, 0.234, 1.97]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform113" />
                </group>
                <group
                  name="pCube130"
                  position={[-1.705, 0.234, 1.924]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform114" />
                </group>
                <group
                  name="pCube131"
                  position={[-1.705, 0.234, 1.878]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform115" />
                </group>
                <group
                  name="pCube132"
                  position={[-1.705, 0.234, 1.832]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform117" />
                </group>
                <group
                  name="pCube133"
                  position={[-1.705, 0.234, 1.786]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform116" />
                </group>
                <group
                  name="pCube134"
                  position={[-1.705, 0.234, 1.74]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform119" />
                </group>
                <group
                  name="pCube135"
                  position={[-1.705, 0.234, 1.694]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform120" />
                </group>
                <group
                  name="pCube136"
                  position={[-1.705, 0.234, 1.648]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform121" />
                </group>
                <group
                  name="pCube137"
                  position={[-1.705, 0.234, 1.602]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform122" />
                </group>
                <group
                  name="pCube138"
                  position={[-1.705, 0.234, 1.556]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform118" />
                </group>
                <group
                  name="pCube139"
                  position={[-1.705, 0.234, 1.51]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform123" />
                </group>
                <group
                  name="pCube140"
                  position={[-1.705, 0.234, 1.464]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform124" />
                </group>
                <group
                  name="pCube141"
                  position={[-1.705, 0.234, 1.417]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform125" />
                </group>
                <group
                  name="pCube142"
                  position={[-1.705, 0.234, 1.371]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.032, 0.13, 0.331]}
                >
                  <group name="transform126" />
                </group>
                <group
                  name="pCube144"
                  position={[-0.002, 0.427, 0.032]}
                  rotation={[-Math.PI, 0, 0]}
                >
                  <group name="transform130" />
                </group>
                <group name="pCube145" position={[0, -0.041, -0.01]}>
                  <group name="transform132" />
                </group>
                <group name="polySurface2_2" position={[-0.026, 0, 0]}>
                  <group name="transform148" />
                </group>
                <group name="notebook_polySurface1" position={[-0.026, 0, 0]}>
                  <group name="transform154" />
                </group>
                <group name="notebook_group1">
                  <group
                    name="pasted__pCube149"
                    position={[-1.31, 0.133, 2.804]}
                    scale={[0.167, 0.069, 0.405]}
                  >
                    <group name="transform141" />
                  </group>
                  <group
                    name="pasted__pCube151"
                    position={[-1.596, 0.197, 1.959]}
                    scale={[0.167, 0.117, 1.321]}
                  >
                    <group name="transform138" />
                  </group>
                  <group
                    name="pasted__pCube152"
                    position={[-1.596, 0.197, -1.937]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[0.167, 0.117, 1.321]}
                  >
                    <group name="transform139" />
                  </group>
                  <group
                    name="pasted__pCube153"
                    position={[-1.077, 0.133, 2.807]}
                    scale={[0.167, 0.069, 0.405]}
                  >
                    <group name="transform142" />
                  </group>
                  <group
                    name="pasted__pCube154"
                    position={[-0.842, 0.133, 2.828]}
                    scale={[0.078, 0.021, 0.405]}
                  >
                    <group name="transform143" />
                  </group>
                  <group
                    name="pasted__pCube155"
                    position={[-1.077, 0.133, -2.809]}
                    scale={[0.167, 0.069, 0.405]}
                  >
                    <group name="transform145" />
                  </group>
                </group>
                <group
                  name="pCube146"
                  position={[0, 0.139, 0]}
                  scale={[3.687, 0.197, 5.441]}
                >
                  <group name="transform135" />
                </group>
                <group
                  name="pCube147"
                  position={[0, -0.006, 0]}
                  scale={[3.687, 0.145, 5.441]}
                >
                  <group name="transform152" />
                </group>
                <group name="pCube148" position={[0.018, 0.031, 6.337]}>
                  <group name="transform134" />
                </group>
                <group name="pCube149">
                  <group name="transform137" />
                </group>
                <group
                  name="pCube150"
                  position={[0, 0.041, 0]}
                  scale={[1, 0.708, 1]}
                >
                  <group name="transform140" />
                </group>
                <group name="pCube151">
                  <group name="transform146" />
                </group>
                <group name="pasted__pCube154_1">
                  <group name="transform144" />
                </group>
                <group name="pCube152">
                  <group name="transform153" />
                </group>
                <group
                  name="notebook_pCylinder1"
                  position={[-1.483, 0.137, -2.699]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.051, 0.072, 0.051]}
                >
                  <group name="transform147" />
                </group>
                <group
                  name="notebook_group_pasted__pCube6"
                  position={[-0.417, 6.158, 0.395]}
                  scale={0.599}
                >
                  <group name="polySurface13">
                    <mesh
                      name="polySurface13_pasted__phongE2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface13_pasted__phongE2_0.geometry}
                      material={materials.pasted__phongE2}
                    />
                  </group>
                  <group name="polySurface14">
                    <mesh
                      name="polySurface14_phong27_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface14_phong27_0.geometry}
                      material={materials.phong27}
                    />
                  </group>
                  <group name="polySurface15">
                    <mesh
                      name="polySurface15_phong27_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface15_phong27_0.geometry}
                      material={materials.phong27}
                    />
                    <mesh
                      name="polySurface15_phong28_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface15_phong28_0.geometry}
                      material={materials.phong28}
                    />
                    <mesh
                      name="polySurface15_phong29_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface15_phong29_0.geometry}
                      material={materials.phong29}
                    />
                  </group>
                  <group name="polySurface16" position={[0, 0.004, 0]}>
                    <mesh
                      name="polySurface16_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface16_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                  <group name="polySurface17">
                    <group name="transform189" />
                  </group>
                  <group name="polySurface18">
                    <group name="transform190" />
                  </group>
                  <group name="polySurface19">
                    <group name="transform187" />
                  </group>
                  <group name="polySurface20">
                    <group name="transform188" />
                  </group>
                  <group name="polySurface21">
                    <group name="transform186" />
                  </group>
                  <group name="polySurface22">
                    <group name="transform185" />
                  </group>
                  <group name="polySurface23">
                    <group name="transform255" />
                  </group>
                  <group name="polySurface24">
                    <group name="transform256" />
                  </group>
                  <group name="polySurface25">
                    <group name="transform257" />
                  </group>
                  <group name="polySurface26">
                    <group name="transform258" />
                  </group>
                  <group name="polySurface27">
                    <group name="transform259" />
                  </group>
                  <group name="polySurface28">
                    <group name="transform260" />
                  </group>
                  <group name="polySurface29">
                    <group name="transform261" />
                  </group>
                  <group name="polySurface30">
                    <group name="transform262" />
                  </group>
                  <group name="polySurface31">
                    <group name="transform263" />
                  </group>
                  <group name="polySurface32">
                    <group name="transform264" />
                  </group>
                  <group name="polySurface33">
                    <group name="transform265" />
                  </group>
                  <group name="polySurface34">
                    <group name="transform266" />
                  </group>
                  <group name="polySurface35">
                    <group name="transform242" />
                  </group>
                  <group name="polySurface36">
                    <group name="transform243" />
                  </group>
                  <group name="polySurface37">
                    <group name="transform244" />
                  </group>
                  <group name="polySurface38">
                    <group name="transform245" />
                  </group>
                  <group name="polySurface39">
                    <group name="transform246" />
                  </group>
                  <group name="polySurface40">
                    <group name="transform247" />
                  </group>
                  <group name="polySurface41">
                    <group name="transform248" />
                  </group>
                  <group name="polySurface42">
                    <group name="transform249" />
                  </group>
                  <group name="polySurface43">
                    <group name="transform250" />
                  </group>
                  <group name="polySurface44">
                    <group name="transform251" />
                  </group>
                  <group name="polySurface45">
                    <group name="transform252" />
                  </group>
                  <group name="polySurface46">
                    <group name="transform253" />
                  </group>
                  <group name="polySurface47">
                    <group name="transform254" />
                  </group>
                  <group name="polySurface48">
                    <group name="transform230" />
                  </group>
                  <group name="polySurface49">
                    <group name="transform231" />
                  </group>
                  <group name="polySurface50">
                    <group name="transform232" />
                  </group>
                  <group name="polySurface51">
                    <group name="transform233" />
                  </group>
                  <group name="polySurface52">
                    <group name="transform234" />
                  </group>
                  <group name="polySurface53">
                    <group name="transform235" />
                  </group>
                  <group name="polySurface54">
                    <group name="transform236" />
                  </group>
                  <group name="polySurface55">
                    <group name="transform237" />
                  </group>
                  <group name="polySurface56">
                    <group name="transform238" />
                  </group>
                  <group name="polySurface57">
                    <group name="transform239" />
                  </group>
                  <group name="polySurface58">
                    <group name="transform240" />
                  </group>
                  <group name="polySurface59">
                    <group name="transform241" />
                  </group>
                  <group name="polySurface60">
                    <group name="transform217" />
                  </group>
                  <group name="polySurface61">
                    <group name="transform218" />
                  </group>
                  <group name="polySurface62">
                    <group name="transform219" />
                  </group>
                  <group name="polySurface63">
                    <group name="transform220" />
                  </group>
                  <group name="polySurface64">
                    <group name="transform221" />
                  </group>
                  <group name="polySurface65">
                    <group name="transform222" />
                  </group>
                  <group name="polySurface66">
                    <group name="transform223" />
                  </group>
                  <group name="polySurface67">
                    <group name="transform224" />
                  </group>
                  <group name="polySurface68">
                    <group name="transform225" />
                  </group>
                  <group name="polySurface69">
                    <group name="transform226" />
                  </group>
                  <group name="polySurface70">
                    <group name="transform227" />
                  </group>
                  <group name="polySurface71">
                    <group name="transform228" />
                  </group>
                  <group name="polySurface72">
                    <group name="transform229" />
                  </group>
                  <group name="polySurface73">
                    <group name="transform205" />
                  </group>
                  <group name="polySurface74">
                    <group name="transform206" />
                  </group>
                  <group name="polySurface75">
                    <group name="transform207" />
                  </group>
                  <group name="polySurface76">
                    <group name="transform208" />
                  </group>
                  <group name="polySurface77">
                    <group name="transform209" />
                  </group>
                  <group name="polySurface78">
                    <group name="transform210" />
                  </group>
                  <group name="polySurface79">
                    <group name="transform211" />
                  </group>
                  <group name="polySurface80">
                    <group name="transform212" />
                  </group>
                  <group name="polySurface81">
                    <group name="transform213" />
                  </group>
                  <group name="polySurface82">
                    <group name="transform214" />
                  </group>
                  <group name="polySurface83">
                    <group name="transform215" />
                  </group>
                  <group name="polySurface84">
                    <group name="transform216" />
                  </group>
                  <group name="polySurface85">
                    <group name="transform192" />
                  </group>
                  <group name="polySurface86">
                    <group name="transform193" />
                  </group>
                  <group name="polySurface87">
                    <group name="transform194" />
                  </group>
                  <group name="polySurface88">
                    <group name="transform195" />
                  </group>
                  <group name="polySurface89">
                    <group name="transform196" />
                  </group>
                  <group name="polySurface90">
                    <group name="transform197" />
                  </group>
                  <group name="polySurface91">
                    <group name="transform198" />
                  </group>
                  <group name="polySurface92">
                    <group name="transform199" />
                  </group>
                  <group name="polySurface93">
                    <group name="transform200" />
                  </group>
                  <group name="polySurface94">
                    <group name="transform201" />
                  </group>
                  <group name="polySurface95">
                    <group name="transform202" />
                  </group>
                  <group name="polySurface96">
                    <group name="transform203" />
                  </group>
                  <group name="polySurface97">
                    <group name="transform204" />
                  </group>
                  <group name="polySurface98">
                    <group name="transform191" />
                  </group>
                  <group
                    name="polySurface99"
                    position={[-0.24, -0.044, 0.013]}
                    scale={[0.67, 1.216, 1]}
                  >
                    <mesh
                      name="polySurface99_phongE1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface99_phongE1_0.geometry}
                      material={materials.phongE1}
                    />
                    <mesh
                      name="polySurface99_blinn2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface99_blinn2_0.geometry}
                      material={materials.blinn2}
                    />
                  </group>
                  <group name="polySurface100">
                    <mesh
                      name="polySurface100_phong27_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface100_phong27_0.geometry}
                      material={materials.phong27}
                    />
                    <mesh
                      name="polySurface100_phong33_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface100_phong33_0.geometry}
                      material={materials.phong33}
                    />
                  </group>
                  <group name="polySurface101">
                    <mesh
                      name="polySurface101_phong27_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface101_phong27_0.geometry}
                      material={materials.phong27}
                    />
                  </group>
                  <group name="polySurface102">
                    <mesh
                      name="polySurface102_lambert1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface102_lambert1_0.geometry}
                      material={materials.lambert1}
                    />
                  </group>
                  <group name="transform184" />
                </group>
                <group
                  name="phone_pCube1"
                  position={[0, 0.145, 0]}
                  scale={[1.412, 0.206, 2.684]}
                >
                  <group name="transform6_5" />
                </group>
                <group
                  name="phone_pCube2"
                  position={[0, 0.242, 0.001]}
                  scale={[1.281, 0.021, 2.487]}
                >
                  <group name="transform2_7" />
                </group>
                <group
                  name="phone_pCylinder1"
                  position={[0, 0.276, 1.227]}
                  scale={0.06}
                >
                  <group name="transform1_7" />
                </group>
                <group
                  name="phone_pCylinder2"
                  position={[0, 0.191, 1.233]}
                  scale={0.025}
                >
                  <group name="transform158" />
                </group>
                <group
                  name="phone_pCube4"
                  position={[0, 0.025, 0]}
                  scale={[1, 0.787, 1]}
                >
                  <group name="transform159" />
                </group>
                <group name="phone_group" position={[0, 0, 0.036]}>
                  <group
                    name="pasted__pCube5_2"
                    position={[-0.695, 0.163, 0.67]}
                    scale={[0.034, 0.032, 0.307]}
                  >
                    <group name="transform160" />
                  </group>
                </group>
                <group
                  name="phone_pCube7"
                  position={[-0.689, 0.162, 0.469]}
                  scale={[0.044, 0.029, 0.097]}
                >
                  <group name="transform161" />
                </group>
                <group
                  name="phone_pCube8"
                  position={[0, 0.164, -1.343]}
                  scale={[0.154, 0.035, 0.1]}
                >
                  <group name="transform7_5" />
                </group>
                <group
                  name="phone_pCube9"
                  position={[0, 0.164, -1.409]}
                  scale={[0.22, 0.087, 0.195]}
                >
                  <group name="transform5_5" />
                </group>
                <group
                  name="phone_pCube10"
                  position={[-0.302, 0.164, -1.409]}
                  scale={[0.22, 0.056, 0.195]}
                >
                  <group name="transform4_5" />
                </group>
                <group
                  name="phone_pCube11"
                  position={[0.302, 0.164, -1.409]}
                  scale={[0.22, 0.056, 0.195]}
                >
                  <group name="transform3_6" />
                </group>
                <group name="phone_pCube12">
                  <group name="transform8_5" />
                </group>
                <group
                  name="phone_pCube13"
                  position={[0, 0.053, 0]}
                  scale={[1, 0.655, 1]}
                >
                  <group name="transform156" />
                </group>
                <group
                  name="phone_pCube14"
                  position={[0.109, 0.247, 0]}
                  scale={[1.322, 0.009, 2.473]}
                >
                  <group name="transform9_5" />
                </group>
                <group
                  name="phone_pPlane1"
                  position={[0.094, 0.251, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[4.149, 1, 2.486]}
                >
                  <group name="transform10_5" />
                </group>
                <group
                  name="phone_pPlane2"
                  position={[-0.108, -0.032, 0]}
                  scale={[0.99, 0.99, 1.027]}
                >
                  <group name="transform157" />
                </group>
                <group
                  name="phone_pCube15"
                  position={[0.145, 6.086, -2.904]}
                  rotation={[-Math.PI, -1.117, -Math.PI]}
                  scale={0.554}
                >
                  <mesh
                    name="phone_pCube15_phone_phong3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_phong3_0.geometry}
                    material={materials.phone_phong3}
                  />
                  <mesh
                    name="phone_pCube15_phone_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_phong2_0.geometry}
                    material={materials.phone_phong2}
                  />
                  <mesh
                    name="phone_pCube15_phone_blinn1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_blinn1_0.geometry}
                    material={materials.phone_blinn1}
                  />
                  <mesh
                    name="phone_pCube15_standardSurface1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_standardSurface1_0.geometry}
                    material={materials.standardSurface1}
                  />
                  <mesh
                    name="phone_pCube15_phone_phong8_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_phong8_0.geometry}
                    material={materials.phone_phong8}
                  />
                  <mesh
                    name="phone_pCube15_phone_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_phong1_0.geometry}
                    material={materials.phone_phong1}
                  />
                  <mesh
                    name="phone_pCube15_phone_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_phong4_0.geometry}
                    material={materials.phone_phong4}
                  />
                  <mesh
                    name="phone_pCube15_phone_phong6_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_pCube15_phone_phong6_0.geometry}
                    material={materials.phone_phong6}
                  />
                </group>
                <group
                  name="case_pCube1"
                  position={[0, 6.188, 4.585]}
                  rotation={[0, 0.454, 0]}
                  scale={[1.795, 0.08, 0.879]}
                >
                  <mesh
                    name="case_pCube1_case_phong2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube1_case_phong2_0.geometry}
                    material={materials.case_phong2}
                  />
                  <mesh
                    name="case_pCube1_case_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube1_case_phong1_0.geometry}
                    material={materials.case_phong1}
                  />
                  <mesh
                    name="case_pCube1_case_phong3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube1_case_phong3_0.geometry}
                    material={materials.case_phong3}
                  />
                </group>
                <group
                  name="case_pCylinder1"
                  position={[0, 2.233, 1.098]}
                  scale={[0.123, 2.042, 0.123]}
                >
                  <group name="transform165" />
                </group>
                <group
                  name="case_pCylinder2"
                  position={[0, 4.72, 0]}
                  scale={[0.123, 0.418, 0.123]}
                >
                  <group name="transform14_4" />
                </group>
                <group
                  name="case_pCylinder3"
                  position={[0, 0.181, 1.098]}
                  scale={[0.133, 0.014, 0.133]}
                >
                  <group name="transform166" />
                </group>
                <group
                  name="case_pCylinder4"
                  position={[0, 0.085, 1.098]}
                  scale={[0.093, 0.083, 0.093]}
                >
                  <group name="transform167" />
                </group>
                <group
                  name="case_pCylinder5"
                  position={[0, 4.286, 1.098]}
                  scale={[0.126, 0.011, 0.126]}
                >
                  <group name="transform169" />
                </group>
                <group
                  name="case_pCube2"
                  position={[-0.168, 4.831, 0.04]}
                  rotation={[0, 0.279, 0]}
                  scale={[0.019, 1, 0.006]}
                >
                  <group name="transform1_8" />
                </group>
                <group
                  name="case_pCube3"
                  position={[-0.165, 4.843, 0.05]}
                  rotation={[0, 0.279, 0]}
                  scale={[0.019, 1, 0.006]}
                >
                  <group name="transform2_8" />
                </group>
                <group
                  name="case_pCube4"
                  position={[-0.162, 4.856, 0.061]}
                  rotation={[0, 0.279, 0]}
                  scale={[0.019, 1, 0.006]}
                >
                  <group name="transform3_7" />
                </group>
                <group
                  name="case_pCube5"
                  position={[-0.159, 4.868, 0.072]}
                  rotation={[0, 0.279, 0]}
                  scale={[0.019, 1, 0.006]}
                >
                  <group name="transform11_4" />
                </group>
                <group name="case_pCube6">
                  <group name="polySurface1_3">
                    <group name="transform10_6" />
                  </group>
                  <group name="polySurface2_3">
                    <group name="transform9_6" />
                  </group>
                  <group name="polySurface3_1">
                    <group name="transform8_6" />
                  </group>
                  <group name="transform4_6" />
                  <group name="polySurface4_2" position={[0, 0, 0.05]}>
                    <group name="transform7_6" />
                  </group>
                  <group name="polySurface5_3" position={[0, 0, 0.05]}>
                    <group name="transform6_6" />
                  </group>
                  <group name="polySurface6_2" position={[0, 0, 0.05]}>
                    <group name="transform5_6" />
                  </group>
                </group>
                <group
                  name="case_polySurface4"
                  position={[-0.317, 0, 0.194]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="transform12_4" />
                </group>
                <group
                  name="case_polySurface7"
                  position={[0.131, 0.003, -0.048]}
                  rotation={[-0.004, 0.209, 0.018]}
                >
                  <group name="transform13_4" />
                </group>
                <group
                  name="case_polySurface8"
                  position={[0.217, -0.003, -0.179]}
                  rotation={[0.002, 0.314, 0]}
                >
                  <group name="transform15_4" />
                </group>
                <group name="case_pCylinder6">
                  <group name="transform16_4" />
                </group>
                <group name="case_pCylinder7" position={[0, 0, 1.098]}>
                  <group name="transform168" />
                </group>
                <group
                  name="case_pCylinder8"
                  position={[0, 2.233, 1.449]}
                  scale={[0.123, 2.042, 0.123]}
                >
                  <group name="transform175" />
                </group>
                <group
                  name="case_pCylinder9"
                  position={[0, 0.181, 1.449]}
                  scale={[0.133, 0.014, 0.133]}
                >
                  <group name="transform176" />
                </group>
                <group
                  name="case_pCylinder10"
                  position={[0, 0.085, 1.449]}
                  scale={[0.093, 0.083, 0.093]}
                >
                  <group name="transform177" />
                </group>
                <group name="case_pCylinder11" position={[0, 0, 1.449]}>
                  <group name="transform178" />
                </group>
                <group
                  name="case_pCylinder12"
                  position={[0, 4.286, 1.449]}
                  scale={[0.126, 0.011, 0.126]}
                >
                  <group name="transform179" />
                </group>
                <group
                  name="case_pCylinder13"
                  position={[0, 2.233, 1.865]}
                  scale={[0.123, 2.042, 0.123]}
                >
                  <group name="transform170" />
                </group>
                <group
                  name="case_pCylinder14"
                  position={[0, 0.181, 1.865]}
                  scale={[0.133, 0.014, 0.133]}
                >
                  <group name="transform171" />
                </group>
                <group
                  name="case_pCylinder15"
                  position={[0, 0.085, 1.865]}
                  scale={[0.093, 0.083, 0.093]}
                >
                  <group name="transform172" />
                </group>
                <group name="case_pCylinder16" position={[0, 0, 1.865]}>
                  <group name="transform173" />
                </group>
                <group
                  name="pCylinder17"
                  position={[0, 4.286, 1.865]}
                  scale={[0.126, 0.011, 0.126]}
                >
                  <group name="transform174" />
                </group>
                <group
                  name="case_pCube7"
                  position={[-0.693, 6.206, 4.718]}
                  rotation={[-Math.PI, -1.484, -Math.PI]}
                  scale={[0.284, 0.092, 0.106]}
                >
                  <mesh
                    name="case_pCube7_phong14_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube7_phong14_0.geometry}
                    material={materials.phong14}
                  />
                </group>
                <group
                  name="case_pCube8"
                  position={[0, 0, -1.119]}
                  scale={[0.748, 0.139, 0.28]}
                >
                  <group name="transform162" />
                </group>
                <group
                  name="case_pCube9"
                  position={[-0.455, 0, -1.119]}
                  scale={[0.174, 0.086, 0.181]}
                >
                  <group name="transform18_3" />
                </group>
                <group
                  name="case_pCube10"
                  position={[-0.372, 0, -1.119]}
                  scale={[0.077, 0.102, 0.249]}
                >
                  <group name="transform163" />
                </group>
                <group
                  name="case_pCube11"
                  position={[-0.546, 0.014, -1.119]}
                  scale={[0.104, 0.032, 0.146]}
                >
                  <group name="transform17_4" />
                </group>
                <group
                  name="case_pCube12"
                  position={[-0.455, 0.049, -1.078]}
                  scale={[0.03, 0.06, 0.033]}
                >
                  <group name="transform19_3" />
                </group>
                <group
                  name="case_pCube13"
                  position={[-0.455, 0.049, -1.162]}
                  scale={[0.03, 0.06, 0.033]}
                >
                  <group name="transform20_3" />
                </group>
                <group
                  name="case_pCube14"
                  position={[-0.418, 0.071, -1.162]}
                  scale={[0.008, 0.06, 0.033]}
                >
                  <group name="transform22_2" />
                </group>
                <group
                  name="case_pCube15"
                  position={[-0.418, 0.071, -1.078]}
                  scale={[0.008, 0.06, 0.033]}
                >
                  <group name="transform23_2" />
                </group>
                <group name="case_pCube17">
                  <group name="transform21_3" />
                </group>
                <group name="case_pCube18">
                  <group name="transform24_2" />
                </group>
                <group
                  name="case_pCube19"
                  position={[-0.039, 0, 0]}
                  scale={[1, 0.824, 1]}
                >
                  <group name="transform164" />
                </group>
                <group
                  name="case_pCube20"
                  position={[-0.088, 6.17, 3.834]}
                  rotation={[0, -0.96, 0]}
                  scale={0.538}
                >
                  <mesh
                    name="case_pCube20_phong16_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube20_phong16_0.geometry}
                    material={materials.phong16}
                  />
                  <mesh
                    name="case_pCube20_phong17_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube20_phong17_0.geometry}
                    material={materials.phong17}
                  />
                  <mesh
                    name="case_pCube20_phong15_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCube20_phong15_0.geometry}
                    material={materials.phong15}
                  />
                </group>
                <group
                  name="case_pCylinder17"
                  position={[0.609, 6.174, 4.136]}
                  rotation={[-0.058, 0.38, 1.597]}
                  scale={0.273}
                >
                  <mesh
                    name="case_pCylinder17_case_phong7_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder17_case_phong7_0.geometry}
                    material={materials.case_phong7}
                  />
                  <mesh
                    name="case_pCylinder17_case_phong8_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder17_case_phong8_0.geometry}
                    material={materials.case_phong8}
                  />
                  <mesh
                    name="case_pCylinder17_case_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder17_case_phong4_0.geometry}
                    material={materials.case_phong4}
                  />
                  <mesh
                    name="case_pCylinder17_case_phong6_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder17_case_phong6_0.geometry}
                    material={materials.case_phong6}
                  />
                  <mesh
                    name="case_pCylinder17_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder17_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group
                  name="pCylinder18"
                  position={[2.805, 6.183, -4.892]}
                  rotation={[0.094, -0.273, 1.596]}
                  scale={0.273}
                >
                  <mesh
                    name="pCylinder18_case_phong7_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder18_case_phong7_0.geometry}
                    material={materials.case_phong7}
                  />
                  <mesh
                    name="pCylinder18_phong9_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder18_phong9_0.geometry}
                    material={materials.phong9}
                  />
                  <mesh
                    name="pCylinder18_case_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder18_case_phong4_0.geometry}
                    material={materials.case_phong4}
                  />
                  <mesh
                    name="pCylinder18_case_phong6_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder18_case_phong6_0.geometry}
                    material={materials.case_phong6}
                  />
                  <mesh
                    name="pCylinder18_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder18_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group
                  name="case_pCylinder18"
                  position={[0.543, 6.159, 4.128]}
                  rotation={[-0.059, 0.45, 1.602]}
                  scale={0.273}
                >
                  <mesh
                    name="case_pCylinder18_case_phong7_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder18_case_phong7_0.geometry}
                    material={materials.case_phong7}
                  />
                  <mesh
                    name="case_pCylinder18_case_phongE1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder18_case_phongE1_0.geometry}
                    material={materials.case_phongE1}
                  />
                  <mesh
                    name="case_pCylinder18_case_phong4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder18_case_phong4_0.geometry}
                    material={materials.case_phong4}
                  />
                  <mesh
                    name="case_pCylinder18_case_phong6_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder18_case_phong6_0.geometry}
                    material={materials.case_phong6}
                  />
                  <mesh
                    name="case_pCylinder18_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.case_pCylinder18_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group
                  name="pCube153"
                  position={[-0.003, 6.221, 4.353]}
                  rotation={[0.148, 0.476, -0.097]}
                  scale={[0.481, 0.033, 0.484]}
                >
                  <group name="transform181" />
                </group>
                <group
                  name="pCube154"
                  position={[-0.003, 6.23, 4.354]}
                  rotation={[0.2, 0.476, -0.097]}
                  scale={[0.481, 0.002, 0.484]}
                >
                  <mesh
                    name="pCube154_phong18_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube154_phong18_0.geometry}
                    material={materials.phong18}
                  />
                </group>
                <group
                  name="bend1Handle"
                  position={[-0.002, 6.237, 4.355]}
                  rotation={[-1.403, -1.091, 0.072]}
                  scale={0.325}
                />
                <group
                  name="pCube155"
                  position={[-0.375, 6.274, 4.194]}
                  rotation={[0.237, 0.475, -0.104]}
                  scale={[0.989, 0.002, 0.484]}
                >
                  <group name="transform180" />
                </group>
                <group
                  name="pCube156"
                  position={[-0.356, 6.236, 4.229]}
                  rotation={[0.154, 0.473, -0.056]}
                  scale={[0.989, 0.003, 0.484]}
                >
                  <group name="transform182" />
                </group>
                <group name="pCube157">
                  <group name="transform183" />
                </group>
                <group name="pCube158">
                  <mesh
                    name="pCube158_phong18_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube158_phong18_0.geometry}
                    material={materials.phong18}
                  />
                </group>
                <group
                  name="pCube159"
                  position={[0.506, 6.201, 4.076]}
                  rotation={[0.157, -0.005, -0.034]}
                  scale={[0.214, 0.007, 0.433]}
                >
                  <mesh
                    name="pCube159_phong19_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube159_phong19_0.geometry}
                    material={materials.phong19}
                  />
                </group>
                <group
                  name="pCube161"
                  position={[0.485, 6.185, 4.218]}
                  rotation={[0.157, -0.005, -0.034]}
                  scale={[0.168, 0.004, 0.044]}
                >
                  <mesh
                    name="pCube161_phong24_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube161_phong24_0.geometry}
                    material={materials.phong24}
                  />
                </group>
                <group
                  name="pCube162"
                  position={[0.486, 6.196, 4.147]}
                  rotation={[0.157, -0.005, -0.034]}
                  scale={[0.168, 0.004, 0.044]}
                >
                  <mesh
                    name="pCube162_phong23_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube162_phong23_0.geometry}
                    material={materials.phong23}
                  />
                </group>
                <group
                  name="pCube163"
                  position={[0.486, 6.208, 4.075]}
                  rotation={[0.157, -0.005, -0.034]}
                  scale={[0.168, 0.004, 0.044]}
                >
                  <mesh
                    name="pCube163_phong22_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube163_phong22_0.geometry}
                    material={materials.phong22}
                  />
                </group>
                <group
                  name="pCube164"
                  position={[0.486, 6.219, 4.004]}
                  rotation={[0.157, -0.005, -0.034]}
                  scale={[0.168, 0.004, 0.044]}
                >
                  <mesh
                    name="pCube164_phong26_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube164_phong26_0.geometry}
                    material={materials.phong26}
                  />
                </group>
                <group
                  name="pCube165"
                  position={[0.487, 6.23, 3.933]}
                  rotation={[0.157, -0.005, -0.034]}
                  scale={[0.168, 0.004, 0.044]}
                >
                  <mesh
                    name="pCube165_phong20_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube165_phong20_0.geometry}
                    material={materials.phong20}
                  />
                </group>
                <group name="polySurface34_1">
                  <mesh
                    name="polySurface34_blinn3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.polySurface34_blinn3_0.geometry}
                    material={materials.blinn3}
                  />
                  <mesh
                    name="polySurface34_pasted__phongE2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.polySurface34_pasted__phongE2_0.geometry}
                    material={materials.pasted__phongE2}
                  />
                </group>
                <group
                  name="pCube166"
                  position={[-1.198, 6.236, 2.067]}
                  scale={[0.08, 0.033, 0.1]}
                >
                  <mesh
                    name="pCube166_phong32_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube166_phong32_0.geometry}
                    material={materials.phong32}
                  />
                </group>
                <group
                  name="pCylinder19"
                  position={[-1.198, 6.236, 2.129]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.016, 0.017, 0.016]}
                >
                  <mesh
                    name="pCylinder19_tablet_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder19_tablet_phong1_0.geometry}
                    material={materials.tablet_phong1}
                  />
                </group>
                <group
                  name="pCylinder20"
                  position={[-1.198, 6.236, 2.138]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.014}
                >
                  <mesh
                    name="pCylinder20_tablet_phong1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder20_tablet_phong1_0.geometry}
                    material={materials.tablet_phong1}
                  />
                </group>
                <group
                  name="pCylinder21"
                  position={[-1.198, 6.236, 2.138]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.014}
                >
                  <mesh
                    name="pCylinder21_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder21_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group
                  name="pCylinder22"
                  position={[-1.198, 6.236, 2.149]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.009}
                >
                  <mesh
                    name="pCylinder22_phong31_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder22_phong31_0.geometry}
                    material={materials.phong31}
                  />
                </group>
                <group name="curve1" position={[0, 0, 2.352]} />
                <group name="polyProjectionCurve1">
                  <group name="polyProjectionCurve1_1" />
                  <group name="polyProjectionCurve1_2" />
                </group>
                <group name="polyProjectionCurve2">
                  <group name="polyProjectionCurve2_1" />
                  <group name="polyProjectionCurve2_2" />
                  <group name="polyProjectionCurve2_3" />
                </group>
                <group name="polyProjectionCurve3" />
                <group name="polyProjectionCurve4" />
                <group name="polyProjectionCurve5" />
                <group name="polyProjectionCurve6" />
                <group name="polyProjectionCurve7" />
                <group name="polyProjectionCurve8" />
                <group name="polyProjectionCurve9" />
                <group name="polyProjectionCurve10" />
                <group name="polyProjectionCurve11" />
                <group name="polyProjectionCurve12" />
                <group name="polyProjectionCurve13" />
                <group name="polyProjectionCurve14" />
                <group name="polyProjectionCurve15" />
                <group name="polyProjectionCurve16" />
                <group name="polyProjectionCurve17" />
                <group name="polyProjectionCurve18" />
                <group name="polyProjectionCurve19" />
                <group name="polyProjectionCurve20" />
                <group name="polyProjectionCurve21" />
                <group name="polyProjectionCurve22" />
                <group name="polyProjectionCurve23" />
                <group name="polyProjectionCurve24" />
                <group name="polyProjectionCurve25" />
                <group name="polyProjectionCurve26" />
                <group name="polyProjectionCurve27" />
                <group name="polyProjectionCurve28" />
                <group name="polyProjectionCurve29" />
                <group name="polyProjectionCurve30" />
                <group name="polyProjectionCurve31" />
                <group name="polyProjectionCurve32">
                  <group name="polyProjectionCurve32_1" />
                </group>
                <group name="polyProjectionCurve33">
                  <group name="polyProjectionCurve33_1" />
                </group>
                <group
                  name="pPlane7"
                  position={[-1.934, 7.411, 0.397]}
                  rotation={[Math.PI / 2, Math.PI / 9, -Math.PI / 2]}
                  scale={[3.088, 1, 1.876]}
                >
                  <mesh
                    name="pPlane7_phong34_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane7_phong34_0.geometry}
                    material={materials.phong34}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};
useGLTF.preload("/models/workspace.glb");

export default WorkSpace;
