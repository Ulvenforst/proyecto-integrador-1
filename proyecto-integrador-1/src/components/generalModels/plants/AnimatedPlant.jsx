import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const AnimatedPlant = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/models/general/plants/leipoldtia_schultzei_1k.glb",
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="PlantScene" rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <mesh
          geometry={nodes["Plane.053"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.056"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.057"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.063"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.064"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.065"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.066"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.067"].geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes["Plane.068"].geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
};

export default AnimatedPlant;

// Precarga el modelo
useGLTF.preload("/models/general/plants/leipoldtia_schultzei_1k.glb");
