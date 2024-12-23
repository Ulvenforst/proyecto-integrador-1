import StonesBlock from "../../forestModels/stones/StonesBlock";
import ChunkGenerator from "./ChunkGenerator";
import StumpsBlock from "../../forestModels/stumps/StumpsBlock";
import LogsBlock from "../../forestModels/logs/LogsBlock";
import { FLOOR_TYPES } from "../floors";

const DeforestationChunk = ({ position, seed = 13345 }) => {
  const blocks = [
    {
      Component: LogsBlock,
      props: {
        n: 7,
        factor: 35,
        seedOffset: 2,
        minRadius: 1.5,
        randomRotation: true,
        maxTiltAngle: Math.PI,
      },
    },
    {
      Component: StumpsBlock,
      props: {
        n: 20,
        factor: 35,
        seedOffset: 4,
        minRadius: 1.5,
      },
    },
    {
      Component: StonesBlock,
      props: {
        n: 3,
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
      floor={FLOOR_TYPES.DEFORESTED}
    />
  );
};

export default DeforestationChunk;
