import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const LostFloor = () => {
  const PATH = useMemo(() => "textures/forest/floor/gravelly_floor/gravelly_sand_", []);

  const floorTexture = useTexture({
    map: PATH + "diff.jpg",
    displacementMap: PATH + "disp.jpg",
    normalMap: PATH + "nor_gl.jpg",
    roughnessMap: PATH + "rough.jpg",
    ambientOcclusionMap: PATH + "ao.jpg",
  });

  /* 
  const floorTexture = useTexture({
    map: PATH + "diff.jpg",
    displacementMap: PATH + "disp.jpg",
    normalMap: PATH + "nor_gl.jpg",
    aoRoughnessMetallicMap: PATH + "arm.jpg",
  });
  */

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} scale={1} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial {...floorTexture} />
    </mesh>
  );
};

export default LostFloor;
