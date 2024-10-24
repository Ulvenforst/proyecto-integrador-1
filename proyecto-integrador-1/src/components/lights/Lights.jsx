import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper, Object3D, PointLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  const targetRef = useRef(new Object3D());

  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <>
      <group rotation={[0, 0, 0]}>
        <spotLight
          ref={spotLightRef}
          color={0xe8832f}
          position={[0, -5, 0]}
          intensity={100}
          distance={30}
          decay={0.3}
          angle={1}
          target={targetRef.current} // Asignamos el target de la luz
          shadow-mapSize-width={3}
          shadow-mapSize-height={3}
          castShadow
        />
      </group>

      {/* Este es el objeto target al que la luz apuntará */}
      <primitive
        object={targetRef.current}
        position={[0, 360, 0]} // Cambia esta posición para ajustar el punto de destino
      />
    </>
  );
};

export default Lights;
