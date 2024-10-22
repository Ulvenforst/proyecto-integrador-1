import GenericModelBlock from "../../utils/GenericModelBlock";
import { STUMP_TYPES } from "./stumpTypes";

const StumpsBlock = (props) => (
  <GenericModelBlock
    modelTypes={STUMP_TYPES}
    modelPath="models/forest/stumps"
    {...props}
  />
);

export default StumpsBlock;
