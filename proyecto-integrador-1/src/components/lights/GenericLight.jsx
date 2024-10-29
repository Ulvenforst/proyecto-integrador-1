import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const GenericLight = ({ mapSize = 4, chunkSize = 40 }) => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  const terrainSize = mapSize * chunkSize;
  const halfTerrainSize = terrainSize / 2;
  
  const lightHeight = terrainSize * 0.75;
  const lightOffset = terrainSize * 0.5;

  return (
    <>
      <directionalLight 
        // ref={directionalLightRef}
        intensity={1.5} 
        castShadow 
        position={[lightOffset, lightHeight, lightOffset]}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={terrainSize * 2}
        shadow-camera-left={-halfTerrainSize}
        shadow-camera-right={halfTerrainSize}
        shadow-camera-top={halfTerrainSize}
        shadow-camera-bottom={-halfTerrainSize}
        shadow-bias={-0.001}
        shadow-normalBias={0.02}
      />
      <ambientLight intensity={1.5} />
    </>
  );
}

export default GenericLight;