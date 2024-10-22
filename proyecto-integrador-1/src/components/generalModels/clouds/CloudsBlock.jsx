import GenericModelBlock from "../../utils/GenericModelBlock";
import { CLOUD_TYPES } from "./cloudTypes";

const CloudsBlock = ({ 
  n = 10, 
  factor = 40, 
  seed = 12345,
  scale = 1,
  textureOffsetX = 0,
  textureOffsetY = 1,
  position = [0, 60, 0], // Altura predeterminada para las nubes
  ...props 
}) => (
  <group position={position}>
    <GenericModelBlock
      modelTypes={CLOUD_TYPES}
      modelPath="models/general/clouds"
      n={n}
      factor={factor}
      seed={seed}
      scale={scale}
      textureOffsetX={textureOffsetX}
      textureOffsetY={textureOffsetY}
      minRadius={8} // Asegura que las nubes no se amontonen demasiado
      {...props}
    />
  </group>
);

export default CloudsBlock;
