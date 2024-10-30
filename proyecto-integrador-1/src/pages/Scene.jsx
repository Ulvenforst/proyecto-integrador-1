import { BakeShadows, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { gsap } from "gsap";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";

function CameraAnimation({ viewIndex, positions, centerX, centerZ }) {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: positions[viewIndex][0],
      y: positions[viewIndex][1],
      z: positions[viewIndex][2],
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => camera.updateProjectionMatrix(),
    });

    const target = { x: camera.position.x, y: 0, z: camera.position.z };
    gsap.to(target, {
      x: centerX,
      y: 0,
      z: centerZ,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(target.x, target.y, target.z),
    });
  }, [viewIndex, camera, positions, centerX, centerZ]);

  return null;
}

const Scene = ({ viewIndex }) => {
  const terrainMap = [
    [1, 1, 1, 1, 1, 1],
    [1, 6, 5, 2, 2, 1],
    [1, 5, 5, 2, 2, 1],
    [1, 0, 1, 7, 7, 1],
    [1, 0, 1, 7, 7, 1],
    [1, 1, 1, 1, 1, 1],
  ];

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const centerX = 0;
  const centerZ = 0;

  const cameraDistance = Math.max(totalWidth, totalHeight) * 0.4;
  const cameraHeight = cameraDistance * 0.1;

  const positions = [
    [-cameraDistance * 0.6, cameraHeight * 0.5, cameraDistance * 0.6], // Inferior izquierda
    [-cameraDistance * 0.71, cameraHeight * 0.4, -cameraDistance * 0.71], // Superior izquierda
    [cameraDistance * 0.6, cameraHeight * 0.5, -cameraDistance * 0.6], // Superior derecha
    [cameraDistance * 0.6, cameraHeight * 0.5, cameraDistance * 0.6], // Inferior derecha
  ];

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  return (
    <div className="container h-screen max-w-full">
      <Canvas
        className="bg-cyan-100"
        shadows="soft"
        camera={{
          position: positions[0],
          fov: 100,
        }}
      >
        <Suspense fallback={null}>
          <CameraAnimation
            viewIndex={viewIndex}
            positions={positions}
            centerX={centerX}
            centerZ={centerZ}
          />
          <OrbitControls
            target={[centerX, 0, centerZ]}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
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
