import React, { useRef } from "react";
import { Object3D } from "three";

const LoginLight = () => {
  const targetRef = useRef(new Object3D());

  return (
    <>
      <group rotation={[0, 0, 0]}>
        <spotLight
          color={0xe8832f}
          position={[0, -5, 0]}
          intensity={100}
          distance={30}
          decay={0.3}
          angle={1}
          target={targetRef.current}
          shadow-mapSize-width={3}
          shadow-mapSize-height={3}
          castShadow
        />
      </group>

      <primitive object={targetRef.current} position={[0, 360, 0]} />
    </>
  );
};

export default LoginLight;
