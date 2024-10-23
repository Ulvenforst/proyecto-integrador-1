import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";

const ModelGLB2JSX = ({
  modelName,
  modelPath,
  nodeName,
  texturePath = "textures/forest/texture_gradient.png",
  scale = 0.5,
  rotation = [Math.PI / 2, 0, 0],
  textureOffsetX = 0,
  textureOffsetY = 0.5,
  ...props
}) => {
  const fullPath = `${modelPath}/${modelName}`;
  const { nodes, materials } = useGLTF(fullPath);


  if (modelPath.includes("animals")) {
    //console.log(nodes)
    //console.log(materials)
  }
  //console.log(modelPath, modelName, nodeName)
  //models/forest/mushrooms mushroom_flat_group_white.glb Mushroom_flat_group_white



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
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name={nodeName}
          castShadow
          geometry={nodes[nodeName].geometry}
          material={materials.AllColors_Material}
          material-map={materialMap}
          rotation={rotation}
          scale={scale}
        />
      </group>
    </group>
  );
};

export default ModelGLB2JSX;
