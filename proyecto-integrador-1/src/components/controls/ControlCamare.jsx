import { OrbitControls } from "@react-three/drei";

export default function ControlCamare() {
  console.log(Math.PI * 0.4);
  console.log(Math.PI * 0.3);
  console.log(Math.PI * 0.25);
  console.log(-Math.PI * 0.25);
  return (
    <OrbitControls
      maxPolarAngle={Math.PI * 0.48}
      minPolarAngle={Math.PI * 0.4}
      maxAzimuthAngle={Math.PI * 0.25}
      minAzimuthAngle={-Math.PI * 0.25}
      target={[0, 0, 0]}
    />
  );
}
