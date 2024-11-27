import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const AnimatedFarmer = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/general/people/animated_farmer.glb');
  const { actions } = useAnimations(animations, group);

  // Reproducir la animación al montar el componente
  useEffect(() => {
    // Tomar la primera animación disponible
    const action = Object.values(actions)[0];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={2.134}>
          <group name="f51976a08d70435c940a11c0699b2f81fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.eyeball_m_005}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.char_swatches_lit_m_007}
                    skeleton={nodes.Object_8.skeleton}
                    castShadow
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Farmer" rotation={[-Math.PI / 2, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default AnimatedFarmer;

useGLTF.preload('/models/general/people/animated_farmer.glb');
