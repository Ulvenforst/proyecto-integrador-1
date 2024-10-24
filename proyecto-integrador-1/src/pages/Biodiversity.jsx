import { BakeShadows } from "@react-three/drei";
import { AxesHelper } from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";
import { Suspense } from "react";

//componentes
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import ControlCamare from "../components/controls/ControlCamare";
import Lights from "../components/lights/Lights";
import Button3D from "../components/Button3D";

const Biodiversity = ({ function_login }) => {
  const terrainMap = [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
  ];

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const centerX = 0;
  const centerZ = 0;

  const cameraDistance = Math.max(totalWidth, totalHeight);
  const cameraHeight = cameraDistance * 0.05;

  const cameraPosition = [centerX, cameraHeight, cameraDistance / 4];

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  return (
    <div className="container h-screen max-w-full">
      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: cameraPosition,
        }}
      >
        <Suspense fallback={null}>
          <ControlCamare></ControlCamare>
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
            position={[centerX, 30, centerZ]}
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

export default Biodiversity;
