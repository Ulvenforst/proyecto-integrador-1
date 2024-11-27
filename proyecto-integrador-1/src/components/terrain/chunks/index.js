import DeforestationChunk from "./DeforestationChunk";
import DenseForestChunk from "./DenseForestChunk";
import EmptyChunk from "./EmptyChunk";
import DenseForestChunkAnimals from "./ForestChunkAnimals";
import DegradedBiodiversity from "./DegradedBiodiversity";
import DegradedSoil from "./DegradedSoil";
import FarmChunk from "./FarmChunk";

export const CHUNK_TYPES = {
  0: EmptyChunk,
  1: DenseForestChunk,
  2: DeforestationChunk,
  3: FarmChunk,
  5: DenseForestChunkAnimals,
  6: DegradedBiodiversity,
  7: DegradedSoil,
};

export { DenseForestChunk, EmptyChunk, FarmChunk };
