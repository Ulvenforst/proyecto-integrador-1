import DenseForestChunk from "./DenseForestChunk";
import ForestChunkAnimals from "./ForestChunkAnimals";
// import SparseForestChunk from './SparseForestChunk';
// import MeadowChunk from './MeadowChunk';
import EmptyChunk from "./EmptyChunk";

export const CHUNK_TYPES = {
  0: EmptyChunk, // Chunk vacío con solo suelo
  1: DenseForestChunk, // Chunk con muchos árboles coníferos
  2: ForestChunkAnimals, // Chunk con muchos árboles coníferos
  // 2: SparseForestChunk, // Chunk con algunos árboles deciduos
  // 3: MeadowChunk,       // Chunk con hierba y flores
};

// export { DenseForestChunk, SparseForestChunk, MeadowChunk, EmptyChunk };
export { DenseForestChunk, ForestChunkAnimals, EmptyChunk };
