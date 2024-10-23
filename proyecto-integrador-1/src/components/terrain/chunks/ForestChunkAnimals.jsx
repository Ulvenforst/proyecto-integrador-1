import TerrainChunk from '../TerrainChunk';
import ConiTreesBlock from "../../forestModels/coniferous_trees/ConiTreesBlock";
import GrassBlock from "../../forestModels/grass/GrassBlock";
import BushesBlock from "../../forestModels/bushes/BushesBlock";
import StonesBlock from '../../forestModels/stones/StonesBlock';
import MushroomsBlock from '../../forestModels/mushrooms/MushroomsBlock';

const ForestChunkAnimals = ({ position, seed = 12345 }) => {
  return (
    <TerrainChunk position={position}>
      <MushroomsBlock
        n={1000}
        factor={20}
        seed={seed + 2}
        minRadius={0.5}
      />
    </TerrainChunk>
  );
};

export default ForestChunkAnimals;
