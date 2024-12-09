import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const AnimatedBunny = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/forest/animals/animated_bunny.glb');
  const { actions } = useAnimations(animations, group);

  // Reproducir la animación cuando el componente se monte
  useEffect(() => {
    // Asumiendo que la animación por defecto se llama "Take 001" o similar
    const anim = Object.values(actions)[0];
    if (anim) {
      anim.reset().fadeIn(0.5).play();
      // Cleanup cuando el componente se desmonte
      return () => anim.fadeOut(0.5);
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_3">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <group name="Cube_2" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default AnimatedBunny;

useGLTF.preload('/models/forest/animals/animated_bunny.glb');
