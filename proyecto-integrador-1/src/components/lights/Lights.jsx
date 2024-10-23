import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import { SpotLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <spotLight
      ref={spotLightRef}
      color={0xff0d00}
      position={[0, 0, 30]}
      intensity={50}
      distance={50}
      decay={0.1}
      shadow-mapSize-width={3}
      shadow-mapSize-height={3}
    />
  );
};

export default Lights;
