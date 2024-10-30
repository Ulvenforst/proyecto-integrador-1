import GenericModelBlock from "../../utils/GenericModelBlock";
import { SKULL_TYPES } from "./skullTypes";

const SkullBlock = (props) => (
  <GenericModelBlock
    modelTypes={SKULL_TYPES}
    modelPath="models/forest/skull"
    scale={0.002}
    {...props}
  />
);

export default SkullBlock;
