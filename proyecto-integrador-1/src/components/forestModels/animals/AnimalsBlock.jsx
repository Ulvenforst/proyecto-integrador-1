import GenericModelBlock from "../../utils/GenericModelBlock";
import { MUSHROOM_TYPES } from "./animalsTypes";

const AnimalsBlock = (props) => (
  <GenericModelBlock
    modelTypes={MUSHROOM_TYPES}
    modelPath="models/forest/animals"
    scale={1.5}
    {...props}
  />
);

export default AnimalsBlock;
