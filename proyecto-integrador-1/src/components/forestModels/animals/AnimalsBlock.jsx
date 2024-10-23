import GenericModelBlock from "../../utils/GenericModelBlock";
import { MUSHROOM_TYPES } from "./animalsTypes";

const MushroomsBlock = (props) => (
  <GenericModelBlock
    modelTypes={MUSHROOM_TYPES}
    modelPath="models/forest/mushrooms"
    {...props}
  />
);

export default MushroomsBlock;
