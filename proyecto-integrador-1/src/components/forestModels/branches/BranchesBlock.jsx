import GenericModelBlock from "../../utils/GenericModelBlock";
import { BRANCHES_TYPES } from "./branchesTypes";

const BranchesBlock = (props) => (
  <GenericModelBlock
    modelTypes={BRANCHES_TYPES}
    modelPath="models/forest/branches"
    {...props}
  />
);

export default BranchesBlock;
