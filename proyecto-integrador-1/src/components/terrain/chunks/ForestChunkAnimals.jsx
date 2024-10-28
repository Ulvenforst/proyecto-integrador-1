import ConiTreesBlock from "../../forestModels/coniferous_trees/ConiTreesBlock";
import GrassBlock from "../../forestModels/grass/GrassBlock";
import BushesBlock from "../../forestModels/bushes/BushesBlock";
import StonesBlock from "../../forestModels/stones/StonesBlock";
import MushroomsBlock from "../../forestModels/mushrooms/MushroomsBlock";
import AnimalsBlock from "../../forestModels/animals/AnimalsBlock";
import ChunkGenerator from "./ChunkGenerator";

const DenseForestChunk = ({ position, seed = 12345 }) => {
  const blocks = [
    {
      Component: ConiTreesBlock,
      props: {
        n: 15,
        factor: 35,
        minRadius: 2,
        randomRotation: true,
        maxTiltAngle: Math.PI / 16,
      },
    },
    {
      Component: AnimalsBlock,
      props: {
        n: 15,
        factor: 35,
        minRadius: 2,
        randomRotation: true,
        maxTiltAngle: Math.PI / 16,
      },
    },
    {
      Component: StonesBlock,
      props: {
        n: 10,
        factor: 40,
        minRadius: 1.5,
      },
    },
    {
      Component: BushesBlock,
      props: {
        n: 4,
        factor: 35,
        seedOffset: 2,
        minRadius: 1,
        randomRotation: true,
      },
    },
    {
      Component: MushroomsBlock,
      props: {
        n: 10,
        factor: 20,
        seedOffset: 2,
        minRadius: 0.5,
        randomRotation: true,
      },
    },
    {
      Component: GrassBlock,
      props: {
        n: 100,
        factor: 35,
        seedOffset: 1,
        minRadius: 0.5,
      },
    },
  ];

  return <ChunkGenerator position={position} seed={seed} blocks={blocks} />;
};

export default DenseForestChunk;
