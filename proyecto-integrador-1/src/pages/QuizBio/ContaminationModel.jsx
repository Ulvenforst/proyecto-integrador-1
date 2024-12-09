import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ContaminationModel(props) {
  const { nodes, materials } = useGLTF("/Barrel.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.801, 0, -0.004]}
        rotation={[0, -1.415, 0]}
        scale={[0.292, 0.439, 0.292]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials.Blue_New}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_1.geometry}
          material={materials.Oil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_2.geometry}
          material={materials.Oil}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_Stopper_low006.geometry}
        material={materials.Stopper_New}
        position={[-0.59, 0.431, -0.037]}
        rotation={[0, -1.415, Math.PI]}
        scale={[0.041, 0.01, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stopper_low006.geometry}
        material={materials.Stopper_New}
        position={[-1, 0.429, 0.027]}
        rotation={[0, -1.415, Math.PI]}
        scale={[0.022, 0.005, 0.022]}
      />
    </group>
  );
}

useGLTF.preload("/Barrel.glb");
