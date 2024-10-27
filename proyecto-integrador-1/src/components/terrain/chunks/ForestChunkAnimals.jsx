import TerrainChunk from "../TerrainChunk";
import ConiTreesBlock from "../../forestModels/coniferous_trees/ConiTreesBlock";
import GrassBlock from "../../forestModels/grass/GrassBlock";
import BushesBlock from "../../forestModels/bushes/BushesBlock";
import StonesBlock from "../../forestModels/stones/StonesBlock";
import MushroomsBlock from "../../forestModels/mushrooms/MushroomsBlock";
import AnimalsBlock from "../../forestModels/animals/AnimalsBlock";

const ForestChunkAnimals = ({ position, seed = 12345 }) => {
  return (
    <TerrainChunk position={position}>
      <ConiTreesBlock n={10} factor={35} seed={seed} minRadius={2} />
      <StonesBlock n={40} factor={40} seed={seed} />
      <MushroomsBlock n={40} factor={55} seed={seed + 2} minRadius={0.5} />
      <GrassBlock n={100} factor={40} seed={seed + 1} minRadius={0.5} />
      <BushesBlock n={4} factor={35} seed={seed + 2} minRadius={1} />
      <AnimalsBlock n={15} factor={38} seed={seed + 2} minRadius={1} />
    </TerrainChunk>
  );
};

export default ForestChunkAnimals;
