// import { useTexture } from "@react-three/drei";
// import { useMemo } from "react";

const DeforestationFloor = () => {
  // const PATH = useMemo(() => "textures/forest/floor/rocky_terrain_", []);

  // I didn't like much the result of this texture, we should try another one
  // const floorTexture = useTexture({
  //   map: PATH + "diff.jpg",
  //   displacementMap: PATH + "disp.png",
  //   normalMap: PATH + "nor_gl.jpg",
  //   roughnessMap: PATH + "rough.jpg",
  //   ambientOcclusionMap: PATH + "ao.jpg",
  // });

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[40, 40]} />

      <meshStandardMaterial color="#674107"/>
    </mesh>
  );
};

export default DeforestationFloor;

