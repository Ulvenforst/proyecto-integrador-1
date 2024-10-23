import { OrbitControls } from "@react-three/drei";

export default function ControlCamare() {
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 3}
      minPolarAngle={Math.PI * 0}
      maxAzimuthAngle={Math.PI * 3}
      minAzimuthAngle={-Math.PI * 0}
      target={[0, 5, 0]}
    />
  );
};

