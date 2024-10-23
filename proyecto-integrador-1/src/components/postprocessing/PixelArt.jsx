import { EffectComposer, Pixelation } from "@react-three/postprocessing";

const PixelArt = () => {
  return (
    <EffectComposer>
      <Pixelation granularity={3} />
    </EffectComposer>
  );
};

export default PixelArt;

