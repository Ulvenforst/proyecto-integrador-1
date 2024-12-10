import GenericModelBlock from "../../utils/GenericModelBlock";
import { ANIMALS_TYPES } from "./animalsTypes";

const AnimalsBlock = (props) => (
  <GenericModelBlock
    modelTypes={ANIMALS_TYPES}
    modelPath="models/forest/animals"
    {...props}
  />
);

export default AnimalsBlock;
