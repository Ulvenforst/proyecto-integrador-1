import { CHUNK_TYPES } from './chunks';

const Terrain = ({ 
  map, 
  baseSeed = 12345,
  position = [0, 0, 0],
  onChunkClick
}) => {
  return (
    <group position={position}>
      {map.map((row, rowIndex) => 
        row.map((chunkType, colIndex) => {
          const ChunkComponent = CHUNK_TYPES[chunkType];
          
          if (!ChunkComponent) {
            console.warn(`No chunk type defined for value: ${chunkType}`);
            return null;
          }

          const chunkSeed = baseSeed + (rowIndex * 1000) + colIndex;

          return (
            <ChunkComponent
              key={`${rowIndex}-${colIndex}`}
              position={[colIndex, rowIndex]}
              seed={chunkSeed}
              onClick={() => onChunkClick?.(rowIndex, colIndex)}
            />
          );
        })
      )}
    </group>
  );
};

export default Terrain;
