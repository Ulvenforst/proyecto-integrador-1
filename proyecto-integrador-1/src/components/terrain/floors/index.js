import GenericFloor from "../../forestModels/GenericFloor";
import DeforestationFloor from "./DeforestationFloor";

export const FLOOR_TYPES = {
  DEFAULT: {
    Component: GenericFloor,
    props: {
    }
  },
  DEFORESTED: {
    Component: DeforestationFloor,
    props: {
    }
  },
  DRY: {
    Component: GenericFloor,
    props: {
    }
  }
};
