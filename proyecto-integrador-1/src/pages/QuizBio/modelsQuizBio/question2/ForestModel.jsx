import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ForestModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/quizBiodiversity/ForestModel.glb");
  const { actions } = useAnimations(animations, group);

  //useEffect(() => {
    // Recorremos todas las acciones y las reproducimos
    //Object.values(actions).forEach((action) => {
      //action.reset().play();
    //});

    //return () => {
      // Nos aseguramos de detener las acciones al desmontar el componente
      //Object.values(actions).forEach((action) => action.stop());
    //};
  //}, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Tree_average_lush"
          position={[-4.063, -0.42, 0.78]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group
          name="Tree_average_regular"
          position={[1.378, 0, -6.109]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube030"
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube030_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group
          name="Tree_small_regular"
          position={[2.902, 0, 0.801]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.473}
        >
          <mesh
            name="Cube031"
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials["Material.035"]}
          />
          <mesh
            name="Cube031_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube031_1.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          name="Tree_average_lush001"
          position={[5.337, -0.42, -3.112]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Cube034"
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube034_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube034_1.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          name="Tree_average_lush002"
          position={[-1.704, -0.42, -7.541]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Cube035"
            castShadow
            receiveShadow
            geometry={nodes.Cube035.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cube035_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_1.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group
          name="Tree_average_regular001"
          position={[-6.843, 0, -5.428]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube036"
            castShadow
            receiveShadow
            geometry={nodes.Cube036.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Cube036_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube036_1.geometry}
            material={materials["Material.010"]}
          />
        </group>
        <group
          name="Tree_average_regular002"
          position={[-8.829, 0, -0.78]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube037"
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            name="Cube037_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <group
          name="Tree_average_regular003"
          position={[4.644, 0, -10.227]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube038"
            castShadow
            receiveShadow
            geometry={nodes.Cube038.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Cube038_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube038_1.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Tree_average_regular004"
          position={[6.821, 0, -9.143]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube039"
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Cube039_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials["Material.016"]}
          />
        </group>
        <group
          name="Tree_average_regular005"
          position={[2.69, 0, -2.166]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube040"
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            name="Cube040_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials["Material.018"]}
          />
        </group>
        <group
          name="Tree_average_regular006"
          position={[-6.136, 0, -12.282]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube041"
            castShadow
            receiveShadow
            geometry={nodes.Cube041.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            name="Cube041_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube041_1.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Tree_average_regular007"
          position={[-1.645, 0, -1.691]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube042"
            castShadow
            receiveShadow
            geometry={nodes.Cube042.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cube042_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube042_1.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Tree_average_regular008"
          position={[-9.417, 0, -7.93]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube043"
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            name="Cube043_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube043_1.geometry}
            material={materials["Material.024"]}
          />
        </group>
        <group
          name="Tree_average_regular009"
          position={[-7.941, 0, 4.579]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube044"
            castShadow
            receiveShadow
            geometry={nodes.Cube044.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube044_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube044_1.geometry}
            material={materials["Material.026"]}
          />
        </group>
        <group
          name="Tree_average_regular010"
          position={[10.122, 0, -1.968]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube045"
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            name="Cube045_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube045_1.geometry}
            material={materials["Material.028"]}
          />
        </group>
        <group
          name="Tree_average_regular011"
          position={[-0.489, 0, 8.313]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube046"
            castShadow
            receiveShadow
            geometry={nodes.Cube046.geometry}
            material={materials["Material.029"]}
          />
          <mesh
            name="Cube046_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube046_1.geometry}
            material={materials["Material.030"]}
          />
        </group>
        <group
          name="Tree_average_regular012"
          position={[9.894, 0, 1.604]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube047"
            castShadow
            receiveShadow
            geometry={nodes.Cube047.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            name="Cube047_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube047_1.geometry}
            material={materials["Material.032"]}
          />
        </group>
        <group
          name="Tree_average_regular013"
          position={[4.398, 0, 2.51]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.479}
        >
          <mesh
            name="Cube048"
            castShadow
            receiveShadow
            geometry={nodes.Cube048.geometry}
            material={materials["Material.033"]}
          />
          <mesh
            name="Cube048_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube048_1.geometry}
            material={materials["Material.034"]}
          />
        </group>
        <group
          name="Tree_small_regular001"
          position={[0.618, 0, -1.448]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.473}
        >
          <mesh
            name="Cube049"
            castShadow
            receiveShadow
            geometry={nodes.Cube049.geometry}
            material={materials["Material.037"]}
          />
          <mesh
            name="Cube049_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube049_1.geometry}
            material={materials["Material.038"]}
          />
        </group>
        <group
          name="Tree_small_regular002"
          position={[-6.836, -1.152, 1.479]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.473}
        >
          <mesh
            name="Cube050"
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={materials["Material.039"]}
          />
          <mesh
            name="Cube050_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube050_1.geometry}
            material={materials["Material.040"]}
          />
        </group>
        <group
          name="Tree_small_regular003"
          position={[2.902, 0, 0.801]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.473}
        >
          <mesh
            name="Cube051"
            castShadow
            receiveShadow
            geometry={nodes.Cube051.geometry}
            material={materials["Material.041"]}
          />
          <mesh
            name="Cube051_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube051_1.geometry}
            material={materials["Material.042"]}
          />
        </group>
        <group
          name="Tree_small_regular004"
          position={[8.609, 0, -5.594]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.473}
        >
          <mesh
            name="Cube052"
            castShadow
            receiveShadow
            geometry={nodes.Cube052.geometry}
            material={materials["Material.043"]}
          />
          <mesh
            name="Cube052_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube052_1.geometry}
            material={materials["Material.044"]}
          />
        </group>
        <group
          name="Tree_small_regular005"
          position={[0.795, 0, 4.827]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.473}
        >
          <mesh
            name="Cube053"
            castShadow
            receiveShadow
            geometry={nodes.Cube053.geometry}
            material={materials["Material.045"]}
          />
          <mesh
            name="Cube053_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube053_1.geometry}
            material={materials["Material.046"]}
          />
        </group>
        <mesh
          name="fox_final_plane"
          castShadow
          receiveShadow
          geometry={nodes.fox_final_plane.geometry}
          material={materials["AllColors_Material.012"]}
          rotation={[Math.PI / 2, 0, 0.59]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ForestModel.glb");
