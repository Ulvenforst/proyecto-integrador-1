import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import { Center, Text3D } from "@react-three/drei";

const Forest = ({ fun, ...props }) => {
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
        ref={spotLightRef}
        color={0xff0d00}
        position={[81, 23, -35]}
        intensity={5_000}
        distance={860}
        decay={2}
        shadow-mapSize-width={3}
        shadow-mapSize-height={3}
      />

      <Center
        top
        left
        position={[80, 26, -40]}
        rotation={[0, Math.PI / 1.5, 0]}
      >
        <mesh onClick={fun}>
          <boxGeometry args={[42, 8, 0.1]} /> <meshStandardMaterial />
        </mesh>

        <Text3D
          font="/fonts/blue-ocean.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={3}
          position={[0, 0, 0.1]}
          onClick={fun}
        >
          {`Inicia Sesion con Google`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </group>
  );
};

export default Forest;

useGLTF.preload("/models/forest_scene_op.glb");
