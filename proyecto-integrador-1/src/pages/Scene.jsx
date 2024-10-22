import { BakeShadows, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GenericFloor from "../components/forestModels/GenericFloor";
import AverageTreesBlock from "../components/forestModels/deciduous_trees/AverageTreesBlock";
import GrassBlock from "../components/forestModels/grass/GrassBlock";
import GenericLight from "../components/lights/GenericLight";
import BushesBlock from "../components/forestModels/bushes/BushesBlock";

const Scene = () => {
  return (
    <div className="container max-w-full h-screen">
      <Canvas className="bg-cyan-100" shadows camera={{ position: [0, 10, 30] }}>
        <OrbitControls />

        <GenericLight />


        <AverageTreesBlock n={20} factor={40} seed={123456} />
        <GrassBlock n={200} factor={40} seed={123456} />
        <BushesBlock n={6} factor={40} seed={156} />

        <GenericFloor />
        
        <BakeShadows />
      </Canvas>
    </div>
  );
}

export default Scene;
