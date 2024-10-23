import GenericModelBlock from "../../utils/GenericModelBlock";
import { FLOWER_TYPES } from "./flowerTypes";

const FlowersBlock = (props) => (
  <GenericModelBlock
    modelTypes={FLOWER_TYPES}
    modelPath="models/forest/flowers"
    {...props}
  />
);

export default FlowersBlock;
