import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 70);

  return (
    <directionalLight
      ref={directionalLightRef}
      castShadow
      color={0xffaa7f}
      position={[0, 150, 50]}
      intensity={4}
    />
  );
};

export default Lights;
