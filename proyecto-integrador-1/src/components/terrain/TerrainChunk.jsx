import { useCallback } from "react";
import { FLOOR_TYPES } from "./floors";

const TerrainChunk = ({ 
  position, 
  size = 40,
  floor = FLOOR_TYPES.DEFAULT,
  children 
}) => {
  const chunkPosition = useCallback(() => [
    position[0] * size,
    0,
    position[1] * size
  ], [position, size]);

  const FloorComponent = floor.Component;

  return (
    <group position={chunkPosition()}>
      {children}
      <FloorComponent {...floor.props}/>
    </group>
  );
};

export default TerrainChunk;
