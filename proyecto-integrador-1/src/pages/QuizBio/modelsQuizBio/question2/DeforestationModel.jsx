import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DeforestationModel(props) {
  const { nodes, materials } = useGLTF("models/quizBiodiversity/DeforestationModel.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare.geometry}
        material={materials.Material}
        position={[4.648, 0, 2.395]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_average_bare.geometry}
        material={materials.Material}
        position={[-2.701, 0, 1.419]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_average_bare001.geometry}
        material={materials.Material}
        position={[6.877, 0, -1.58]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare001.geometry}
        material={materials.Material}
        position={[2.78, 0, -0.321]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare002.geometry}
        material={materials.Material}
        position={[2.01, 0, 1.469]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare003.geometry}
        material={materials.Material}
        position={[-4.978, 0, -0.872]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare004.geometry}
        material={materials.Material}
        position={[-1.521, 0, -0.916]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_average_bare002.geometry}
        material={materials.Material}
        position={[-0.751, 0, -9.527]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare005.geometry}
        material={materials.Material}
        position={[-4.827, 0, -6.393]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare006.geometry}
        material={materials.Material}
        position={[-8.284, 0, -6.349]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare007.geometry}
        material={materials.Material}
        position={[-1.296, 0, -4.009]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare008.geometry}
        material={materials.Material}
        position={[-0.526, 0, -5.798]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare009.geometry}
        material={materials.Material}
        position={[1.342, 0, -3.082]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare010.geometry}
        material={materials.Material}
        position={[6.315, 0, -9.026]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare011.geometry}
        material={materials.Material}
        position={[3.108, 0, -10.319]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare012.geometry}
        material={materials.Material}
        position={[8.653, 0, -5.464]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare013.geometry}
        material={materials.Material}
        position={[10.054, 0, -6.819]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare014.geometry}
        material={materials.Material}
        position={[10.73, 0, -3.592]}
        rotation={[Math.PI / 2, 0, 0.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare015.geometry}
        material={materials.Material}
        position={[-6.683, 0, 4.119]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare016.geometry}
        material={materials.Material}
        position={[-10.105, 0, 3.627]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare017.geometry}
        material={materials.Material}
        position={[-3.564, 0, 7.021]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare018.geometry}
        material={materials.Material}
        position={[-2.526, 0, 5.373]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare019.geometry}
        material={materials.Material}
        position={[-1.101, 0, 8.345]}
        rotation={[Math.PI / 2, 0, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare.geometry}
        material={materials.Material}
        position={[2.748, 0, 5.472]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare020.geometry}
        material={materials.Material}
        position={[-1.521, 0, -0.916]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare021.geometry}
        material={materials.Material}
        position={[-4.978, 0, -0.872]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare022.geometry}
        material={materials.Material}
        position={[2.01, 0, 1.469]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare023.geometry}
        material={materials.Material}
        position={[2.78, 0, -0.321]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_small_bare024.geometry}
        material={materials.Material}
        position={[4.648, 0, 2.395]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare001.geometry}
        material={materials.Material}
        position={[-6.681, 0, -2.799]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare002.geometry}
        material={materials.Material}
        position={[-4.472, 0, -8.744]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare003.geometry}
        material={materials.Material}
        position={[3.779, 0, -5.955]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bush_average_bare004.geometry}
        material={materials.Material}
        position={[9.784, 0, 1.325]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.antil_skull1.geometry}
        material={materials["Material.001"]}
        position={[-0.77, -0.002, -2.413]}
        rotation={[1.048, 0.385, -0.578]}
      />
    </group>
  );
}

useGLTF.preload("/DeforestationModel.glb");
