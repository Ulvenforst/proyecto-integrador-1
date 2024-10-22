import GenericModelBlock from "../../utils/GenericModelBlock";
import { STONE_TYPES } from "./stoneTypes";

const StonesBlock = (props) => (
  <GenericModelBlock
    modelTypes={STONE_TYPES}
    modelPath="models/forest/stones"
    {...props}
  />
);

export default StonesBlock;
