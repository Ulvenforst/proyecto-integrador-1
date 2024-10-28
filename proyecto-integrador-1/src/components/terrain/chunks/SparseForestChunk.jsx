import StonesBlock from "../../forestModels/stones/StonesBlock";
import TerrainChunk from "../TerrainChunk";

const SparseForestChunk = ({ position, seed = 12345 }) => {
  return (
    <TerrainChunk position={position}>
      <StonesBlock n={300} factor={35} seed={seed + 3} minRadius={0.5} />
    </TerrainChunk>
  );
};

export default SparseForestChunk;
