import { useMemo } from 'react';
import TerrainChunk from '../TerrainChunk';
import { FLOOR_TYPES } from '../floors';

const ChunkGenerator = ({ 
  position, 
  seed = 12345,
  blocks = [],
  floor = FLOOR_TYPES.DEFAULT
}) => {
  const [models] = useMemo(() => {
    const positions = [];
    
    const createBlock = (Component, props) => {
      const blockInstance = (
        <Component
          {...props}
          key={`${Component.name}-${props.seed}`}
          existingPositions={positions}
          onPosition={(pos, radius) => {
            positions.push({ position: pos, radius });
          }}
        />
      );
      return blockInstance;
    };

    const blockElements = blocks.map(({ Component, props }) => 
      createBlock(Component, {
        ...props,
        seed: seed + (props.seedOffset || 0)
      })
    );

    return [blockElements, positions];
  }, [position, seed, blocks]);

  return (
    <TerrainChunk position={position} floor={floor}>
      {models}
    </TerrainChunk>
  );
};

export default ChunkGenerator;
