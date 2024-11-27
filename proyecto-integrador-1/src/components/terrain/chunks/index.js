import DeforestationChunk from "./DeforestationChunk";
import DenseForestChunk from "./DenseForestChunk";
// import SparseForestChunk from './SparseForestChunk';
// import MeadowChunk from './MeadowChunk';
import EmptyChunk from "./EmptyChunk";
import DegradedSoil from "./DegradedSoil";


//bio
import DenseBiodiversity from "./DenseBiodiversity";
import DenseForestChunkAnimals from "./ForestChunkAnimals";
import DegradedBiodiversity from "./DegradedBiodiversity";

export const CHUNK_TYPES = {
  0: EmptyChunk, // Chunk vacío con solo suelo
  1: DenseForestChunk, // Chunk con muchos árboles coníferos
  2: DeforestationChunk, // Chunk con árboles caídos
  // 3: MeadowChunk,       // Chunk con hierba y flores
  5: DenseForestChunkAnimals,
  6: DegradedBiodiversity,
  7: DegradedSoil,
  8: DenseBiodiversity,
};

// export { DenseForestChunk, SparseForestChunk, MeadowChunk, EmptyChunk };
export { DenseForestChunk, EmptyChunk };
