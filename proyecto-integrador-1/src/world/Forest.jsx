import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
const Forest = (props) => {
  const { nodes, materials } = useGLTF("/models/forest_scene_op.glb"); // Asegúrate de cambiar la ruta correcta del archivo GLB

  return (
    <group name="Scene" {...props}>
      {[...Array(29)].map((_, index) => {
        const x = (index + 1).toString().padStart(2, "0"); // Genera "01", "02", ..., "37"
        console.log(x);
        return (
          <React.Fragment key={x}>
            <RigidBody name={`rbPlane3_${x}`} type="fixed" colliders="trimesh">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes[`Cube0${x}`]?.geometry} // Usa el operador de encadenamiento opcional para evitar errores
                material={materials.MaterialTrunk}
              />
            </RigidBody>
            <RigidBody name={`rbPlane2_${x}`} type="fixed" colliders="trimesh">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes[`Cube0${x}_1`]?.geometry} // Usa el operador de encadenamiento opcional para evitar errores
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
    </group>
  );
};

export default Forest;

useGLTF.preload("/models/forest_scene_op.glb");

/**
<RigidBody name="rbPlane3" type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[`Cube0${x}`].geometry}
          material={materials.MaterialTrunk}
        />
      </RigidBody>
      <RigidBody name="rbPlane2" type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes[`Cube0${x}_1`].geometry}
          material={materials.MaterialSheet}
        />
      </RigidBody>
 */
