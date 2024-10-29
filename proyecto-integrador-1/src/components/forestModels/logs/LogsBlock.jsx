import GenericModelBlock from "../../utils/GenericModelBlock";
import { LOG_TYPES } from "./logTypes";

const LogsBlock = (props) => (
  <GenericModelBlock
    modelTypes={LOG_TYPES}
    modelPath="models/forest/logs"
    {...props}
  />
);

export default LogsBlock;
