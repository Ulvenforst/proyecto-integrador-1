import { CHUNK_TYPES } from './chunks';

const Terrain = ({ 
  map, 
  baseSeed = 12345,
  position = [0, 0, 0]
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

          // Genera una semilla única para cada chunk basada en su posición
          const chunkSeed = baseSeed + (rowIndex * 1000) + colIndex;

          return (
            <ChunkComponent
              key={`${rowIndex}-${colIndex}`}
              position={[colIndex, rowIndex]}
              seed={chunkSeed}
            />
          );
        })
      )}
    </group>
  );
};

export default Terrain;