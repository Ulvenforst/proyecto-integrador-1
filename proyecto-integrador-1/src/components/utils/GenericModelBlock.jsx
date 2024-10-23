import { useMemo } from "react";
import ModelGLB2JSX from "./ModelGLB2JSX";
import * as SeededUtils from './seededUtils';

const GenericModelBlock = ({ 
  modelTypes, 
  modelPath,
  GLB2JSXComponent,
  n = 10, 
  factor = 20, 
  seed = 12345,
  scale = 0.5,
  minRadius = 1,
  textureOffsetX = 0,
  textureOffsetY = 0.5,
  ...props 
}) => {
  const models = useMemo(() => {
    const positions = [];
    return Array.from({ length: n }, (_, index) => {
      const randomValue = SeededUtils.seededRandom(seed, index * 3 + 2);
      const modelIndex = Math.floor(randomValue * modelTypes.length);
      const modelType = modelTypes[modelIndex];
      
      const position = SeededUtils.getSeededPosition(
        seed,
        index,
        factor,
        minRadius,
        50,
        positions
      );
      
      positions.push({
        position,
        radius: minRadius
      });

      return {
        id: index,
        position,
        modelName: modelType.modelName,
        nodeName: modelType.nodeName,
        textureOffsetX,
        textureOffsetY,
      };
    });
  }, [n, factor, seed, modelTypes, minRadius, textureOffsetX, textureOffsetY]);

  const Component = GLB2JSXComponent || ModelGLB2JSX;

  return (
    <group {...props}>
      {models.map(({ id, position, modelName, nodeName, textureOffsetX, textureOffsetY }) => (
        <Component
          key={id} 
          modelName={modelName} 
          nodeName={nodeName} 
          position={position} 
          modelPath={modelPath}
          textureOffsetX={textureOffsetX}
          textureOffsetY={textureOffsetY}
          scale={scale} 
        />
      ))}
    </group>
  );
};

export default GenericModelBlock;
