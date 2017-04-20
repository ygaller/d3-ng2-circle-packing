import {NgModule} from "@angular/core";
// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";
import {NgReduxRouterModule, NgReduxRouter} from "@angular-redux/router";
import {provideReduxForms} from "@angular-redux/form";
// Redux ecosystem stuff.
import * as ReduxLogger from "redux-logger";
// The top-level reducers and epics that make up our app's logic.
import {IAppState} from "./root.types";
import {rootReducer} from "./root.reducer";

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [ReduxLogger.createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    // Enable syncing of Angular router state with our Redux store.
    ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
