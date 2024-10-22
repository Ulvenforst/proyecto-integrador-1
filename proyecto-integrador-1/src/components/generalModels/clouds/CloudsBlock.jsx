import GenericModelBlock from "../../utils/GenericModelBlock";
import { CLOUD_TYPES } from "./cloudTypes";

const CloudsBlock = (props) => (
  <GenericModelBlock
    modelTypes={CLOUD_TYPES}
    modelPath="models/general/clouds"
    position={[0, 20, 0]}
    {...props}
  />
);

export default CloudsBlock;
