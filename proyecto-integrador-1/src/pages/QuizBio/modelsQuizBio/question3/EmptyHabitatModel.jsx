import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function EmptyHabitatModel(props) {
  const { nodes, materials } = useGLTF("models/quizBiodiversity/EmptyHabitatModel.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare.geometry}
        material={materials["Material.001"]}
        position={[4.648, 0, 2.395]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare003.geometry}
        material={materials["Material.001"]}
        position={[-4.978, 0, -0.872]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare006.geometry}
        material={materials["Material.001"]}
        position={[-8.284, 0, -6.349]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare008.geometry}
        material={materials["Material.001"]}
        position={[-0.526, 0, -5.798]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare011.geometry}
        material={materials["Material.001"]}
        position={[3.108, 0, -10.319]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare012.geometry}
        material={materials["Material.001"]}
        position={[8.653, 0, -5.464]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare014.geometry}
        material={materials["Material.001"]}
        position={[10.73, 0, -3.592]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare016.geometry}
        material={materials["Material.001"]}
        position={[-10.105, 0, 3.627]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare019.geometry}
        material={materials["Material.001"]}
        position={[-1.101, 0, 8.345]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare.geometry}
        material={materials["Material.001"]}
        position={[2.748, 0, 5.472]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare024.geometry}
        material={materials["Material.001"]}
        position={[4.648, 0, 2.395]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare001.geometry}
        material={materials["Material.001"]}
        position={[-6.681, 0, -2.799]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare002.geometry}
        material={materials["Material.001"]}
        position={[-4.472, 0, -8.744]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare003.geometry}
        material={materials["Material.001"]}
        position={[3.779, 0, -5.955]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare004.geometry}
        material={materials["Material.001"]}
        position={[9.784, 0, 1.325]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lion_Skeleton_01.geometry}
        material={materials["Material.003"]}
        position={[0.995, 0.418, 0.085]}
        rotation={[-Math.PI / 2, 1.542, -Math.PI]}
        scale={0.137}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.horse.geometry}
        material={materials["Material.003"]}
        position={[5.543, 0.35, -3.582]}
        rotation={[0.183, -1.228, -1.399]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.horse001.geometry}
        material={materials["Material.004"]}
        position={[-1.535, 0.35, -4.975]}
        rotation={[0.898, 1.493, -2.467]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lion_Skeleton_01001.geometry}
        material={materials["Material.005"]}
        position={[2.786, 0.418, -2.587]}
        rotation={[-3.097, -0.89, -1.536]}
        scale={0.137}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lion_Skeleton_01002.geometry}
        material={materials["Material.006"]}
        position={[-5.771, 0.418, 1.45]}
        rotation={[-3.105, 0.7, -1.595]}
        scale={0.137}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.horse002.geometry}
        material={materials["Material.007"]}
        position={[0.199, 0.35, 5.742]}
        rotation={[0.189, 1.24, -1.75]}
        scale={0.015}
      />
    </group>
  );
}

useGLTF.preload("/EmptyHabitatModel.glb");
