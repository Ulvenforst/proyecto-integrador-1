import GenericFloor from "../forestModels/GenericFloor";
import { useCallback } from "react";

const TerrainChunk = ({ 
  position, 
  size = 40,
  children 
}) => {
  const chunkPosition = useCallback(() => [
    position[0] * size,
    0,
    position[1] * size
  ], [position, size]);

  return (
    <group position={chunkPosition()}>
      <GenericFloor scale={size/20}/>
      {children}
    </group>
  );
};

export default TerrainChunk;
