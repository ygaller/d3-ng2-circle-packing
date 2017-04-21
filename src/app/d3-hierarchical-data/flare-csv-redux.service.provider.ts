import {Http} from "@angular/http";
import {D3Service} from "d3-ng2-service";
import {FlareCsvReduxService} from "./flare-csv-redux.service";
import {IAppState} from "../store/root.types";
import {NgRedux} from "@angular-redux/store";
import {HierarchicalDataActions} from "./d3-hierarchical-data.actions";

let flareCsvReduxServiceFactory = (url: string) => (http: Http, d3Service: D3Service, store: NgRedux<IAppState>, actions: HierarchicalDataActions) => {
  return new FlareCsvReduxService(http, d3Service, store, actions, url);
};

export let flareCsvReduxServiceProvider = (url: string) =>
  ({
    provide: FlareCsvReduxService,
    useFactory: flareCsvReduxServiceFactory(url),
    deps: [Http, D3Service, NgRedux, HierarchicalDataActions],
  });
