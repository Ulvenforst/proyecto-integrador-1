import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

import { BakeShadows, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";

//componentes
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import Button3D from "../components/Button3D";
import TextGeneral3D from "../components/TextGeneral3D";

export default function HomePage() {
  const navigate = useNavigate();
  const terrainMap = [
    [1, 2, 2, 2, 2],
    [1, 2, 2, 2, 2],
    [1, 2, 0, 2, 2],
    [1, 2, 2, 2, 2],
    [1, 2, 2, 2, 2],
  ];
  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  const cameraPosition = [0, 16, 15];


  const animate = () => {

  }
  return (
    <div className="container h-screen max-w-full">
      <NavBar />
      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: cameraPosition,
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            target={[0, 4, 0]}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          ></OrbitControls>
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
            position={[0, 60, 0]}
            scale={0.8}
            minRadius={12}
          />

          <primitive object={new AxesHelper(500)} />
          <TextGeneral3D
            text={"Bienvenido a TerraWatch "}
            position={[0, 10, 0]}
          />
          <TextGeneral3D
            text={
              "Aquí podrás encontrar información sobre diversos problemas en la tierra."
            }
            position={[0, 8, 0]}
          />
          <TextGeneral3D
            text={
              "Aquí podrás encontrar información sobre diversos problemas en la tierra."
            }
            position={[0, 8, 0]}
          />
          <TextGeneral3D
            text={"Deforestacion de arboles"}
            position={[-15, 5, 0]}
            onClick={animate}
          />
          <TextGeneral3D
            text={"Perdida de Biodiversidad"}
            position={[0, 5, 0]}
            onClick={() => navigate("/biodiversity")}
          />
          <TextGeneral3D
            text={"Erosion de suelos"}
            position={[15, 5, 0]}
            onClick={() => navigate("/biodiversity")}
          />
          <Terrain
            map={terrainMap}
            baseSeed={5}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
          />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}
