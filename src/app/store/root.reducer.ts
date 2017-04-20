import {routerReducer} from "@angular-redux/router";
import {combineReducers} from "redux";
import {defaultFormReducer, composeReducers} from "@angular-redux/form/dist/source";
import {createHierarchicalDataReducer} from "../d3-hierarchical-data/d3-hierarchical-data.reducer";

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    flareData: createHierarchicalDataReducer(),
    router: routerReducer,
  }));
