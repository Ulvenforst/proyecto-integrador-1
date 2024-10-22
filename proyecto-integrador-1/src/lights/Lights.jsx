import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 100);

  return (
    <directionalLight
      ref={directionalLightRef}
      castShadow
      color={0xff804f}
      position={[-80, 150, 300]}
      intensity={3}
      shadow-mapSize-width={4042}
      shadow-mapSize-height={4048}
      shadow-camera-near={1}
      shadow-camera-far={500}
      shadow-camera-left={-120}
      shadow-camera-right={160}
      shadow-camera-top={100}
      shadow-camera-bottom={0}
    />
  );
};

export default Lights;
