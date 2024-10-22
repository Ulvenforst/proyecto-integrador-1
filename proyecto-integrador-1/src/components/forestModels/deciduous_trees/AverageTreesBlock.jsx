import GenericModelBlock from "../utils/GenericModelBlock";
import { TREE_TYPES } from "./treeTypes";

const AverageTreesBlock = (props) => (
  <GenericModelBlock
    modelTypes={TREE_TYPES}
    modelPath="models/forest/deciduous_trees"
    {...props}
  />
);

export default AverageTreesBlock;
