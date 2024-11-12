import GenericFloor from "../../forestModels/GenericFloor";
import DeforestationFloor from "./DeforestationFloor";
import SoilErosionFloor from "./SoilErosionFloor";
import LostFloor from "./LostFloor";

export const FLOOR_TYPES = {
  DEFAULT: {
    Component: GenericFloor,
    props: {},
  },
  DEFORESTED: {
    Component: DeforestationFloor,
    props: {},
  },
  DRY: {
    Component: SoilErosionFloor,
    props: {},
  },
  LOST: {
    Component: LostFloor,
    props: {},
  },
};
