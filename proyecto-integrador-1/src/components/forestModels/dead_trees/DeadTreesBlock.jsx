import GenericModelBlock from "../../utils/GenericModelBlock";
import { TREE_TYPES } from "./treeTypes";

const DeadTreesBlock = (props) => (
  <GenericModelBlock
    modelTypes={TREE_TYPES}
    modelPath="models/forest/deciduous_trees"
    {...props}
  />
);

export default DeadTreesBlock;
