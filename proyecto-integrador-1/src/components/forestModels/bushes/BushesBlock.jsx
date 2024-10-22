import GenericModelBlock from "../../utils/GenericModelBlock";
import { BUSHES_TYPES } from "./bushesTypes";

const BushesBlock = (props) => (
  <GenericModelBlock
    modelTypes={BUSHES_TYPES}
    modelPath="models/forest/bushes"
    {...props}
  />
);

export default BushesBlock;

