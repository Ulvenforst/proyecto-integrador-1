import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

const ModelGLB2JSX = ({ 
  modelName, 
  modelPath,
  nodeName, 
  texturePath = "textures/forest/texture_gradient.png", 
  scale = 0.5, 
  rotation = [Math.PI / 2, 0, 0], 
  ...props 
}) => {
  const fullPath = `${modelPath}/${modelName}`;
  const { nodes, materials } = useGLTF(fullPath);

  const modelTexture = useTexture(texturePath);
  modelTexture.offset.set(0, 0.5); 

  if (!nodes[nodeName]) {
    console.error(`Node ${nodeName} not found in GLB model`);
    return null;
  }

  useEffect(() => {
    useGLTF.preload(fullPath);
  }, [fullPath]);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name={nodeName} 
          castShadow
          // receiveShadow
          geometry={nodes[nodeName].geometry} 
          material={materials.AllColors_Material}
          material-map={modelTexture}
          rotation={rotation}
          scale={scale}
        />
      </group>
    </group>
  );
};

export default ModelGLB2JSX;
