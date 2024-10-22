import GenericModelBlock from "../../utils/GenericModelBlock";
import { CONI_TREE_TYPES } from "./coniTreeTypes";

const ConiTreesBlock = (props) => (
  <GenericModelBlock
    modelTypes={CONI_TREE_TYPES}
    modelPath="models/forest/coniferous_trees"
    {...props}
  />
);

export default ConiTreesBlock;
