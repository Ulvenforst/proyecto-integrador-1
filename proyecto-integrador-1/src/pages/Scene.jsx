import { BakeShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GenericFloor from "../components/forestModels/GenericFloor";
// import AverageTreesBlock from "../components/forestModels/deciduous_trees/AverageTreesBlock";
import GrassBlock from "../components/forestModels/grass/GrassBlock";
import GenericLight from "../components/lights/GenericLight";
import BushesBlock from "../components/forestModels/bushes/BushesBlock";
import ConiTreesBlock from "../components/forestModels/coniferous_trees/ConiTreesBlock";
import PixelArt from "../components/postprocessing/PixelArt";
import { Suspense } from "react";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import StonesBlock from "../components/forestModels/stones/StonesBlock";

const Scene = () => {
  return (
    <div className="container max-w-full h-screen">
      <Canvas className="bg-cyan-100" shadows camera={{ position: [0, 10, 30] }}>
        <Suspense fallback={null}>
          <PixelArt /> 
          <OrbitControls />
          <GenericLight />
          {/* <AverageTreesBlock n={20} factor={40} seed={123456} /> */}
          <CloudsBlock n={10} factor={40} seed={133456} textureOffsetX={0.8} textureOffsetY={1}/>
          <ConiTreesBlock n={20} factor={42} seed={122456} />
          <StonesBlock n={10} factor={40} seed={133456} />
          <GrassBlock n={200} factor={40} seed={123456} />
          <BushesBlock n={6} factor={40} seed={156} />
          <GenericFloor />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
