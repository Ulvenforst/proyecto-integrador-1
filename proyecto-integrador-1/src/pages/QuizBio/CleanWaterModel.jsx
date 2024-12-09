import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CleanWaterModel(props) {
  const { nodes, materials } = useGLTF("/flower.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.uploads_files_1916312_tulips_alutaroma_free.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/flower.glb");
