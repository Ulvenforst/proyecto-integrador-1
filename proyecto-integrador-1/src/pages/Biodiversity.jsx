import { BakeShadows, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import RoundedBoxWithText from "../components/RoundedBoxWithText";
import NavBar from "../components/NavBar";
//componentes
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";

const CameraController = () => {
  const { camera } = useThree();
  const orbitControlsRef = useRef();
  const scrollCount = useRef(0); // Contador para el movimiento oscilatorio

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY < 0) {
        // Scroll hacia abajo
        camera.position.z -= 5;
        if (orbitControlsRef.current) {
          orbitControlsRef.current.target.z -= 15;
        }
      } else {
        // Scroll hacia arriba
        camera.position.z += 5;
        if (orbitControlsRef.current) {
          orbitControlsRef.current.target.z += 15;
        }
      }

      // Movimiento oscilatorio en el eje X
      scrollCount.current += 0.1; // Incrementa el contador para la oscilación
      const oscillation = Math.sin(scrollCount.current) * 30; // Ajusta la amplitud de oscilación
      if (orbitControlsRef.current) {
        orbitControlsRef.current.target.x = oscillation;
        orbitControlsRef.current.update(); // Actualiza el control para aplicar cambios
      }

      console.log(oscillation);
      if (orbitControlsRef.current) {
        //console.log("Posición del target:", orbitControlsRef.current.target);
      }
    };

    const container = document.querySelector(".container");
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.addEventListener("wheel", handleWheel);
    };
  }, [camera]);

  return (
    <OrbitControls
      ref={orbitControlsRef}
      // maxPolarAngle={Math.PI * 0.55}
      // minPolarAngle={Math.PI * 0.1}
      // maxAzimuthAngle={Math.PI * 0.25}
      // minAzimuthAngle={-Math.PI * 0.25}
      target={[0, 4, 0]}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      // minDistance={3.5} // Establece la distancia mínima
      // maxDistance={15} // Establece la distancia máxima
    />
  );
};

const Biodiversity = () => {
  const terrainMap = [
    [1, 2, 0, 2, 2],
    [1, 2, 0, 2, 2],
    [1, 2, 0, 2, 2],
    [1, 2, 0, 2, 2],
    [1, 2, 0, 2, 2],
  ];
  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  const cameraPosition = [0, 5, 70];

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
          <CameraController />

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
          <RoundedBoxWithText
            text={
              "La biodiversidad, la variedad de vida en la Tierra, se encuentra en un declive acelerado. Este fenómeno, conocido como pérdida de biodiversidad, representa una de las mayores crisis ambientales de nuestro tiempo. Desde los bosques tropicales hasta los océanos, los ecosistemas están sufriendo transformaciones drásticas que ponen en peligro la supervivencia de millones de especies."
            }
            position={[10, 6, 50]}
          />
          <RoundedBoxWithText
            text={
              "Destrucción de hábitats: La deforestación, la urbanización y la expansión agrícola destruyen los hogares de muchas especies."
            }
            position={[-10, 6, 0]}
          />
          <RoundedBoxWithText
            text={
              "Sobreexplotación de recursos: La pesca excesiva, la caza furtiva y la tala ilegal agotan las poblaciones de numerosas especies."
            }
            position={[10, 6, -30]}
          />
          <RoundedBoxWithText
            text={
              "Contaminación: La contaminación del aire, el agua y el suelo afecta negativamente a los ecosistemas y a la vida silvestre."
            }
            position={[-10, 6, -60]}
          />
          <RoundedBoxWithText
            text={
              "Especies invasoras: La introducción de especies exóticas puede alterar los ecosistemas y desplazar a las especies nativas."
            }
            position={[10, 6, -90]}
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
};

export default Biodiversity;
