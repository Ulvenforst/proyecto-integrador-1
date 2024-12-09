import { useGLTF, useTexture, useAnimations } from "@react-three/drei";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import * as THREE from "three";

const ModelGLB2JSX = ({
  modelName,
  modelPath,
  nodeName,
  texturePath = "textures/forest/texture_gradient.png",
  scale = 0.5,
  rotation = [0, 0, 0],
  textureOffsetX = 0,
  textureOffsetY = 0.5,
  startAnimation = false,
  ...props
}) => {
  const fullPath = `${modelPath}/${modelName}`;
  const { nodes, materials, animations } = useGLTF(fullPath);

  //cambios
  if (fullPath.includes("skull") || fullPath.includes("tree")) {
    //console.log(animations);
    //console.log(startAnimation);
  }

  const group = useRef();
  const { actions } = useAnimations(animations, group);

  // Si tienes animaciones, puedes configurarlas para que se reproduzcan
  useEffect(() => {
    if (actions && startAnimation) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName]?.play();
      });
    } else {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName]?.stop();
      });
    }
  }, [actions, startAnimation]);

  //useEffect(() => {
  //  if (group.current && animations.length > 0) {
  //    console.log("Group and animations ready", group.current, animations);
  //  }
  //}, [group, animations]);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0 && startAnimation) {
      // Reproduce la primera animación si existe  "Tree_Spruce_small_01Action"
      actions["antil_skull1Action"]?.play();
      actions["Tree_Spruce_small_01Action"]?.play();
    } else {
      //console.warn("No se encontraron acciones disponibles para reproducir.");
      actions["antil_skull1Action"]?.stop();
    }
  }, [actions, startAnimation]);

  //==========

  const texture = useTexture(texturePath);
  const [materialMap] = useState(() => {
    const map = texture.clone();
    map.needsUpdate = true;
    return map;
  });

  useLayoutEffect(() => {
    materialMap.offset = new THREE.Vector2(textureOffsetX, textureOffsetY);
    materialMap.needsUpdate = true;
  }, [materialMap, textureOffsetX, textureOffsetY]);

  useEffect(() => {
    return () => {
      materialMap.dispose();
    };
  }, [materialMap]);

  useEffect(() => {
    useGLTF.preload(fullPath);
  }, [fullPath]);

  if (!nodes[nodeName]) {
    console.error(`Node ${nodeName} not found in GLB model`);
    return null;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name={nodeName}
          castShadow
          geometry={nodes[nodeName].geometry}
          material={materials.AllColors_Material}
          material-map={materialMap}
          rotation={[Math.PI / 2, 0, rotation[2]]}
          scale={scale}
        />
      </group>
    </group>
  );
};

export default ModelGLB2JSX;
