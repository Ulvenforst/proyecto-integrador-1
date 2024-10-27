import ConiTreesBlock from "../../forestModels/coniferous_trees/ConiTreesBlock";
import GrassBlock from "../../forestModels/grass/GrassBlock";
import BushesBlock from "../../forestModels/bushes/BushesBlock";
import StonesBlock from '../../forestModels/stones/StonesBlock';
import MushroomsBlock from '../../forestModels/mushrooms/MushroomsBlock';
import BranchesBlock from '../../forestModels/branches/BranchesBlock';
import FlowersBlock from '../../forestModels/flowers/FlowersBlock';

// Configuración de bloques comunes
export const COMMON_BLOCKS = {
  GRASS: {
    Component: GrassBlock,
    defaultProps: {
      factor: 35,
      minRadius: 0.5
    }
  },
  STONES: {
    Component: StonesBlock,
    defaultProps: {
      factor: 40,
      minRadius: 1.5
    }
  },
  // ... más bloques comunes
};

// Configuración de los chunks
export const CHUNK_CONFIGS = {
  EMPTY: [
    {
      ...COMMON_BLOCKS.STONES,
      props: {
        n: 3,
        seedOffset: 3
      }
    },
  ],
  DENSE_FOREST: [
    {
      Component: ConiTreesBlock,
      props: {
        n: 15,
        factor: 35,
        minRadius: 2,
        randomRotation: true,
        maxTiltAngle: Math.PI / 16
      }
    },
  ]
};
