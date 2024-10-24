import { OrbitControls } from "@react-three/drei";

export default function ControlCamera() {
  console.log(Math.PI * 0.4);
  console.log(Math.PI * 0.3);
  console.log(Math.PI * 0.25);
  console.log(-Math.PI * 0.25);
  
  return (
    <OrbitControls
      maxPolarAngle={Math.PI * 0.55}
      // minPolarAngle={Math.PI * 0.1}
      // maxAzimuthAngle={Math.PI * 0.25}
      // minAzimuthAngle={-Math.PI * 0.25}
      target={[0, 2.5, 0]}
      enableZoom={true}
      enablePan={false}
      minDistance={3.5}  // Establece la distancia mínima
      maxDistance={15} // Establece la distancia máxima
    />
  );
}

