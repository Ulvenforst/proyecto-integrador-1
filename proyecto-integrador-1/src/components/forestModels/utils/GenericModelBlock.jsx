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
  ...props 
}) => {
  const models = useMemo(() => {
    return Array.from({ length: n }, (_, index) => {
      const randomValue = SeededUtils.seededRandom(seed, index * 3 + 2);
      const modelIndex = Math.floor(randomValue * modelTypes.length);
      const modelType = modelTypes[modelIndex];
      return {
        id: index,
        position: SeededUtils.getSeededPosition(seed, index, factor),
        modelName: modelType.modelName,
        nodeName: modelType.nodeName
      };
    });
  }, [n, factor, seed, modelTypes]);

  const Component = GLB2JSXComponent || ModelGLB2JSX;

  return (
    <group {...props}>
      {models.map(({ id, position, modelName, nodeName }) => (
        <Component
          key={id} 
          modelName={modelName} 
          nodeName={nodeName} 
          position={position} 
          modelPath={modelPath}
          scale={scale} 
        />
      ))}
    </group>
  );
};

export default GenericModelBlock;
