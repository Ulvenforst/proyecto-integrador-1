import GenericModelBlock from "../../utils/GenericModelBlock";
import { MUSHROOM_TYPES } from "./mushroomTypes";

const MushroomsBlock = (props) => (
  <GenericModelBlock
    modelTypes={MUSHROOM_TYPES}
    modelPath="models/forest/mushrooms"
    {...props}
  />
);

export default MushroomsBlock;
