import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const SoilErosionFloor = () => {
  const PATH = useMemo(() => "textures/forest/floor/mud_cracked_dry_03_", []);

  const floorTexture = useTexture({
    map: PATH + "diff.jpg",
    displacementMap: PATH + "disp.png",
    normalMap: PATH + "nor_gl.jpg",
    roughnessMap: PATH + "rough.jpg",
    ambientOcclusionMap: PATH + "ao.jpg",
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[40, 40]} />

      <meshStandardMaterial {...floorTexture} />
    </mesh>
  );
};

export default SoilErosionFloor;
