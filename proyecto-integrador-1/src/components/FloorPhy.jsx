import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export function Model(props) {
  const { nodes, materials } = useGLTF("/fisicasFalsas.glb");

  const terrainMap2 = [
    [1, 1, 1, 1, 1, 1],
    [1, 6, 6, 5, 5, 1],
    [1, 6, 6, 5, 5, 1],
    [1, 5, 5, 6, 6, 1],
    [1, 5, 5, 6, 6, 1],
    [1, 6, 6, 5, 5, 1],
    [1, 6, 6, 5, 5, 1],
    [1, 1, 5, 5, 1, 1],
    [1, 1, 5, 5, 1, 1],
  ];

  const generateAntiSkulls = () => {
    const skulls = [];
    const size = 40; // Tamaño de cada celda (40x40)

    // Definir las restricciones de la zona (dentro de las coordenadas proporcionadas)
    const xMin = -80,
      xMax = 80;
    const zMin = -140,
      zMax = 140;
    const yPosition = 16; // Mantener la altura fija en 6

    // Generar 300 objetos
    for (let i = 0; i < 100; i++) {
      // Generar una posición aleatoria dentro de los límites
      const x = Math.random() * (xMax - xMin) + xMin;
      const z = Math.random() * (zMax - zMin) + zMin;

      skulls.push(
        <RigidBody
          key={`skull-${i}`}
          name="antiFloat"
          colliders="hull"
          position={[x, yPosition, z]} // Establecer la posición generada
          mass={0.1}
          gravityScale={0.1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antil_skull1.geometry}
            material={materials.AllColors_Material}
            rotation={[0, 0, 0]} // Ajusta la rotación si es necesario
          />
        </RigidBody>,
      );
    }

    return skulls;
  };

  const generateCrowSkulls = () => {
    const skulls = [];
    const size = 40; // Tamaño de cada celda (40x40)

    // Definir las restricciones de la zona (dentro de las coordenadas proporcionadas)
    const xMin = -80,
      xMax = 80;
    const zMin = -140,
      zMax = 140;
    const yPosition = 16; // Mantener la altura fija en 6

    // Generar 300 objetos
    for (let i = 0; i < 100; i++) {
      // Generar una posición aleatoria dentro de los límites
      const x = Math.random() * (xMax - xMin) + xMin;
      const z = Math.random() * (zMax - zMin) + zMin;

      skulls.push(
        <RigidBody
          key={`skull-${i}`}
          name="crowFloat"
          colliders="hull"
          position={[x, yPosition, z]}
          mass={0.1}
          gravityScale={0.1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.crow_skull1.geometry}
            material={materials["AllColors_Material.001"]}
            rotation={[0, 0, 0]}
          />
        </RigidBody>,
      );
    }

    return skulls;
  };

  const generateWolfSkulls = () => {
    const skulls = [];
    const size = 40; // Tamaño de cada celda (40x40)

    // Definir las restricciones de la zona (dentro de las coordenadas proporcionadas)
    const xMin = -80,
      xMax = 80;
    const zMin = -140,
      zMax = 140;
    const yPosition = 16; // Mantener la altura fija en 6

    // Generar 300 objetos
    for (let i = 0; i < 100; i++) {
      // Generar una posición aleatoria dentro de los límites
      const x = Math.random() * (xMax - xMin) + xMin;
      const z = Math.random() * (zMax - zMin) + zMin;

      skulls.push(
        <RigidBody
          name="wolfFloat"
          colliders="hull"
          position={[x, yPosition, z]}
          mass={0.1}
          gravityScale={0.1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wolf_skull1.geometry}
            material={materials["AllColors_Material.002"]}
            rotation={[1.387, 0, 0]}
          />
        </RigidBody>,
      );
    }

    return skulls;
  };

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
          scale={[100, 1, 170]}
        />
      </RigidBody>

      <RigidBody
        name="antiFloat"
        colliders="hull"
        position={[80, 6, -140]}
        mass={0.1}
        gravityScale={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.antil_skull1.geometry}
          material={materials.AllColors_Material}
          rotation={[0, 0, 0]}
        />
      </RigidBody>

      {generateAntiSkulls()}

      <RigidBody
        name="crowFloat"
        colliders="hull"
        position={[0, Math.PI / 2, 0]}
        mass={0.1}
        gravityScale={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.crow_skull1.geometry}
          material={materials["AllColors_Material.001"]}
          rotation={[5, 0, 0]}
        />
      </RigidBody>

      {generateCrowSkulls()}

      <RigidBody
        name="crowFloat"
        colliders="hull"
        position={[8.034, 1, -6.406]}
        mass={0.1}
        gravityScale={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wolf_skull1.geometry}
          material={materials["AllColors_Material.002"]}
          rotation={[1.387, 0, 0]}
        />
      </RigidBody>
      {generateWolfSkulls()}
    </group>
  );
}

useGLTF.preload("/fisicasFalsas.glb");
