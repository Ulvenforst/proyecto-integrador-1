import { BakeShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import PixelArt from "../components/postprocessing/PixelArt";
import { Suspense } from "react";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";

const Scene = () => {
  const terrainMap = [
    [0, 1, 2, 2],
    [1, 0, 2, 2],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
  ];

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;
  
  const centerX = 0;
  const centerZ = 0;
  
  const cameraDistance = Math.max(totalWidth, totalHeight) * 0.7;
  const cameraHeight = cameraDistance * 0.4;
  
  const cameraPosition = [
    centerX,
    cameraHeight,
    cameraDistance
  ];

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  return (
    <div className="container max-w-full h-screen">
      <Canvas 
        className="bg-cyan-100" 
        shadows="soft"
        camera={{ 
          position: cameraPosition,
        }}
      >
        <Suspense fallback={null}>
          {/* <PixelArt /> */}
          <OrbitControls target={[centerX, 0, centerZ]} />
          <GenericLight 
            mapSize={Math.max(mapWidth, mapHeight)} 
            chunkSize={chunkSize}
          />
          <CloudsBlock 
            n={30} 
            factor={Math.max(totalWidth, totalHeight)} 
            seed={133456} 
            textureOffsetX={0.8} 
            textureOffsetY={1}
            position={[centerX, 60, centerZ]}
            scale={0.8}
            minRadius={12} 
          />
          <Terrain 
            map={terrainMap} 
            baseSeed={12345}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
          />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
};


export default Scene;
