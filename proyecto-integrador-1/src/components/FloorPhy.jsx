import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export function Model(props) {
  const { nodes, materials } = useGLTF("/fisicasFalsas.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.floorP}
          position={[0, -1.05, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[158.285, 1, 158.285]}
        />
      </RigidBody>

      <RigidBody
        name="antiFloat"
        colliders="hull"
        position={[4.732, 12.036, -10.983]}
        mass={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.antil_skull1.geometry}
          material={materials.AllColors_Material}
          position={[4.732, 12.036, -10.983]}
          rotation={[1.046, 0, 0]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.crow_skull1.geometry}
        material={materials["AllColors_Material.001"]}
        position={[8.034, 9.732, -6.406]}
        rotation={[1.63, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wolf_skull1.geometry}
        material={materials["AllColors_Material.002"]}
        position={[-0.359, 6.742, -6.242]}
        rotation={[1.387, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/fisicasFalsas.glb");
