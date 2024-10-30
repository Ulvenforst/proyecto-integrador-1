import StonesBlock from "../../forestModels/stones/StonesBlock";
import ChunkGenerator from "./ChunkGenerator";
import SkullBlock from "../../forestModels/skull/SkullBlock";
import { FLOOR_TYPES } from "../floors";
import DeadTreesBlock from "../../forestModels/dead_trees/DeadTreesBlock";

const DegradedSoil = ({ position, seed = 13345 }) => {
  const blocks = [
    {
      Component: StonesBlock,
      props: {
        n: 5,
        factor: 35,
        seedOffset: 3,
        minRadius: 1.5,
      },
    },
    {
      Component: DeadTreesBlock,
      props: {
        n: 10,
        factor: 35,
        seedOffset: 3,
        minRadius: 1.5,
      },
    },
  ];
  return (
    <ChunkGenerator
      position={position}
      seed={seed}
      blocks={blocks}
      floor={FLOOR_TYPES.DRY}
    />
  );
};

export default DegradedSoil;
