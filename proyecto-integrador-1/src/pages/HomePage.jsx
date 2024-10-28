import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { BakeShadows, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

// Componentes
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import TextGeneral3D from "../components/TextGeneral3D";

function CameraAnimation({ isAnimating, setIsAnimating }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!isAnimating) return;

    // Primero, animamos la posición de la cámara
    gsap.to(camera.position, {
      x: 100,
      y: 16,
      z: 15,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: () => camera.updateProjectionMatrix(),
      onComplete: () => setIsAnimating(false),
    });

    // Luego, animamos el target hacia el cual mira la cámara
    const target = { x: 1, y: 1, z: 1 }; // Cambia las coordenadas del target según lo que necesites
    gsap.to(target, {
      x: 100,
      y: 6,
      z: 15,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: () => camera.lookAt(target.x, target.y, target.z),
    });
  }, [isAnimating, camera, setIsAnimating]);

  return null;
}

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
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = () => {
    setIsAnimating(true);
  };

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
        <CameraAnimation isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
        <Suspense fallback={null}>
          
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
            text={"Aquí podrás encontrar información sobre diversos problemas en la tierra."}
            position={[0, 8, 0]}
          />
          <TextGeneral3D
            text={"Deforestación de árboles"}
            position={[-10, 5, 0]}
            onClick={animate}
          />
          <TextGeneral3D
            text={"Pérdida de Biodiversidad"}
            position={[0, 5, 0]}
            onClick={() => navigate("/biodiversity")}
          />
          <TextGeneral3D
            text={"Erosión de suelos"}
            position={[10, 5, 0]}
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
