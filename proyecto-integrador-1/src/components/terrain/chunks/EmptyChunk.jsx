import GrassBlock from '../../forestModels/grass/GrassBlock';
import TerrainChunk from '../TerrainChunk';

const EmptyChunk = ({ position, seed = 12345 }) => {
  return (
    <TerrainChunk position={position}>
      <GrassBlock 
        n={100} 
        factor={35} 
        seed={seed + 1} 
        minRadius={0.5}
      />
    </TerrainChunk>
  );
};

export default EmptyChunk;

