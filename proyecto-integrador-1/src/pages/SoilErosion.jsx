import React from "react";

// Contexts and hooks
import { useNavigate } from "react-router-dom";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import Lights from "../components/lights/Lights";
import Button3D from "../components/Button3D";

//3D
import { BakeShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function SoilErosion() {
  const navigate = useNavigate();

  const terrainMap = [[0]];

  const returnHome = async () => {
    navigate("/home");
  };

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  // Render the login page
  return (
    <div className="container h-screen max-w-full">
      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: [0, 0, 0],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            maxPolarAngle={Math.PI * 0.55}
            target={[0, 2.5, 0]}
            enablePan={false}
            minDistance={3.5}
            maxDistance={15}
          />
          <GenericLight
            mapSize={Math.max(mapWidth, mapHeight)}
            chunkSize={chunkSize}
          />
          <Lights />

          <Button3D
            text={"La pagina aun no esta disponible, volver al inicio"}
            position={[0, 5, 0]}
            function_click={returnHome}
          ></Button3D>

          <CloudsBlock
            n={30}
            factor={Math.max(totalWidth, totalHeight)}
            seed={133456}
            textureOffsetX={0.8}
            textureOffsetY={1}
            position={[0, 30, 0]}
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
}
