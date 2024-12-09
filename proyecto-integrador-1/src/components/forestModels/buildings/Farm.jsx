import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Farm = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/general/buildings/farm_1.glb');

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="Sketchfab_model" position={[0, 0, 0]} scale={0.4}>
          <group name="beadf8b250b64465a768b373fe8d529bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Ground"
                  position={[9.911, 27.57, -30.457]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.161, 1.161, 0.337]}>
                  {Object.entries(nodes).map(([key, node]) => {
                    if (key.startsWith('Ground_') && node.geometry) {
                      const materialName = key.split('Ground_')[1].split('_0')[0];
                      return (
                        <mesh
                          key={key}
                          name={key}
                          castShadow
                          receiveShadow
                          geometry={node.geometry}
                          material={materials[materialName]}
                        />
                      );
                    }
                    return null;
                  })}
                </group>
                <group
                  name="Object001"
                  position={[79.281, 57.245, -92.463]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.375, 0.352, 0.426]}>
                  <group name="Object_32" position={[0, -21.736, -70.016]}>
                    <mesh
                      name="Object001_metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object001_metal_0.geometry}
                      material={materials.metal}
                    />
                  </group>
                </group>
                <group
                  name="Object002"
                  position={[-48.92, 58.097, -45.47]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[0.478, 0.784, 0.426]}>
                  <group name="Object_35" position={[-0.453, -27.776, -70.016]}>
                    <mesh
                      name="Object002_metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object002_metal_0.geometry}
                      material={materials.metal}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Farm;

useGLTF.preload('/models/general/buildings/farm_1.glb');
