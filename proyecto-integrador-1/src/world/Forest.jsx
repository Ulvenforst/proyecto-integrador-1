import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import { Center, Html, Text, Text3D } from "@react-three/drei";

const Forest = (props) => {
  const { nodes, materials } = useGLTF("/models/forest_scene_op.glb");

  const spotLightRef = useRef();
  useHelper(spotLightRef, PointLightHelper, 1);

  return (
    <group name="Scene" {...props}>
      {[...Array(29)].map((_, index) => {
        const x = (index + 1).toString().padStart(2, "0");
        return (
          <React.Fragment key={x}>
            <RigidBody name={`rbPlane3_${x}`} type="fixed" colliders="trimesh">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes[`Cube0${x}`]?.geometry}
                material={materials.MaterialTrunk}
              />
            </RigidBody>
            <RigidBody name={`rbPlane2_${x}`} type="fixed" colliders="trimesh">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes[`Cube0${x}_1`]?.geometry}
                material={materials.MaterialSheet}
              />
            </RigidBody>
          </React.Fragment>
        );
      })}

      <RigidBody name="rbPlane" type="fixed" colliders="trimesh">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.PlaneMaterial}
        />
      </RigidBody>

      <pointLight
        FF0D00
        ref={spotLightRef}
        color={0xff0d00}
        position={[81, 23, -35]} // Posición de la luz en la escena
        intensity={5_000} // Intensidad de la luz
        distance={860} // Distancia máxima a la que llega la luz
        decay={2} // Decaimiento de la intensidad (cuánto disminuye la luz con la distancia)
        shadow-mapSize-width={3} // Tamaño del mapa de sombras (resolución)
        shadow-mapSize-height={3} // Tamaño del mapa de sombras (resolución)
      />
      <Center top left position={[80, 26, -40]} rotation={[0, Math.PI / 1.5, 0]}>
        <Text3D
          font="/fonts/blue-ocean.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={3}
        >
          {`Bienvenido a este \n      espacio y`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </group>
  );
};

export default Forest;

useGLTF.preload("/models/forest_scene_op.glb");
