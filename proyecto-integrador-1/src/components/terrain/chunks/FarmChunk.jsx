import Farm from "../../forestModels/buildings/Farm";
import TerrainChunk from "../TerrainChunk";
import GreenhouseGases from "../../forestModels/effects/GreenhouseGases";
import { RigidBody } from '@react-three/rapier';

const FarmChunk = ({ position, seed = 12345 }) => {
  return (
    <TerrainChunk position={position}>
      {/* Base física para la granja */}
      <RigidBody type="fixed" colliders="trimesh">
        <Farm position={[0, -10.75, 0]} rotation={[0, Math.PI*2, 0]} />
      </RigidBody>

      {/* Esferas de gases de efecto invernadero */}
      <GreenhouseGases count={50} />
    </TerrainChunk>
  );
};

export default FarmChunk;
