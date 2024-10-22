import { OrbitControls } from "@react-three/drei";

export default function ControlCamare() {
  return (
    <OrbitControls    
      maxPolarAngle={Math.PI * 6}
      minPolarAngle={Math.PI * 0}
      maxAzimuthAngle={Math.PI * 6}
      minAzimuthAngle={-Math.PI * 0}
      target={[0, 5, 0]}
    />
  );
};

