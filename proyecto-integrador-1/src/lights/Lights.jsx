import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 100);

  return (
    <directionalLight
      //ref={directionalLightRef}
      castShadow
      color={0xff804f}
      position={[-80, 150, 300]}
      intensity={3}
      shadow-mapSize-width={4047} // Mejora la calidad de las sombras (resolución)
      shadow-mapSize-height={4048} // Mejora la calidad de las sombras (resolución)
      shadow-camera-near={1} // Ajuste de cámara de sombras
      shadow-camera-far={500} // Ajuste de cámara de sombras
      shadow-camera-left={-120} // Limita el área donde se calculan sombras (izquierda)
      shadow-camera-right={160} // Limita el área donde se calculan sombras (derecha)
      shadow-camera-top={100} // Limita el área donde se calculan sombras (arriba)
      shadow-camera-bottom={0} // Limita el área donde se calculan sombras (abajo)
    />
  );
};

export default Lights;
