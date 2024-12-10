import { useCallback } from "react";
import { FLOOR_TYPES } from "./floors";

const TerrainChunk = ({
  position,
  size = 40,
  floor = FLOOR_TYPES.DEFAULT,
  children,
  onClick
}) => {
  const chunkPosition = useCallback(
    () => [position[0] * size, 0, position[1] * size],
    [position, size],
  );

  const FloorComponent = floor.Component;

  return (
    <group
      position={chunkPosition()}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {children}
      <FloorComponent {...floor.props} scale={size / 20} />
    </group>
  );
};

export default TerrainChunk;
