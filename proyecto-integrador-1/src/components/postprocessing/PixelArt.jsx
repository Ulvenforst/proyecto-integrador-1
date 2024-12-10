import { EffectComposer, Pixelation } from "@react-three/postprocessing";

const PixelArt = () => {
  return (
    <EffectComposer>
      <Pixelation granularity={2.5} />
    </EffectComposer>
  );
};

export default PixelArt;
