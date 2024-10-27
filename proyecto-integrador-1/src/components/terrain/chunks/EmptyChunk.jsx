import BranchesBlock from '../../forestModels/branches/BranchesBlock';
import FlowersBlock from '../../forestModels/flowers/FlowersBlock';
import GrassBlock from '../../forestModels/grass/GrassBlock';
import MushroomsBlock from '../../forestModels/mushrooms/MushroomsBlock';
import StonesBlock from '../../forestModels/stones/StonesBlock';
import TerrainChunk from '../TerrainChunk';

const EmptyChunk = ({ position, seed = 12345 }) => {
  return (
    <TerrainChunk position={position}>
      <GrassBlock 
        n={30} 
        factor={35} 
        seed={seed + 1} 
        minRadius={0.5}
      />
      <MushroomsBlock
        n={10}
        factor={20}
        seed={seed + 2}
        minRadius={0.5}
      />
      <BranchesBlock
        n={10}
        factor={35}
        seed={seed + 3}
        minRadius={0.5}
        randomRotation={true}
        maxTiltAngle={Math.PI}
      />
      <FlowersBlock
        n={20}
        factor={35}
        seed={seed + 2}
        minRadius={0.5}
      />
      <StonesBlock
        n={3}
        factor={35}
        seed={seed + 3}
        minRadius={0.5}
      />
    </TerrainChunk>
  );
};

export default EmptyChunk;

