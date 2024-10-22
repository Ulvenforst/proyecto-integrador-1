import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const GenericLight = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <directionalLight 
        intensity={1.5} 
        castShadow 
        position={[10, 15, 10]} 
        // ref={directionalLightRef} 
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={100}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
        shadow-bias={-0.0001}
      />
    <ambientLight intensity={1.5} />
    </>
  );
}

export default GenericLight;
