import {HierarchicalDataState} from "./d3-hierarchical-data.type";
import {HierarchicalDataActions} from "./d3-hierarchical-data.actions";
import {IPayloadAction} from "../core/utils/payload-action.types";
import {HierarchyNode} from "d3-hierarchy";

const INITIAL_STATE: HierarchicalDataState = {
  item: null,
  loading: false,
  error: null,
};

// A higher-order reducer: returns a reducer
// that responds to actions for hierarchical data.
export function createHierarchicalDataReducer() {
  return function hierarchicalDataReducer(state: HierarchicalDataState = INITIAL_STATE,
                                action: IPayloadAction<HierarchyNode<any>, any>): HierarchicalDataState {

    switch (action.type) {
      case HierarchicalDataActions.LOAD_STARTED:
        return {
          item: null,
          loading: true,
          error: null,
        };
      case HierarchicalDataActions.LOAD_SUCCEEDED:
        return {
          item: action.payload,
          loading: false,
          error: null
        };
      case HierarchicalDataActions.LOAD_FAILED:
        return {
          item: null,
          loading: false,
          error: action.error
        };
    }

    return state;
  };
}
