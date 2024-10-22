import GenericModelBlock from "../utils/GenericModelBlock";
import { GRASS_TYPES } from "./grassTypes";

const GrassBlock = (props) => (
  <GenericModelBlock
    modelTypes={GRASS_TYPES}
    modelPath="models/forest/grass"
    {...props}
  />
);

export default GrassBlock;
