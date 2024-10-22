import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { AxesHelper } from "three";

//componentes
import ControlCamare from "../controls/ControlCamare";
import Staging from "../staging/Staging";
import Lights from "../lights/Lights";
import Forest from "../world/Forest";

export default function TestPage() {
  const cameraSettings = {
    position: [0, 15, 15],
  };

  return (
    <>
      <Canvas shadows camera={cameraSettings}>
        <Suspense fallback={null}>
          <Perf position={"top-left"} />
          <ControlCamare />
          <Lights />
          <Staging />
          <primitive object={new AxesHelper(500)} />
          <Physics debug={false}>
            <Forest />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
