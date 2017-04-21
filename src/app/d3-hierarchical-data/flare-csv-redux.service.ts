import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HierarchyPointNode} from "d3-hierarchy";
import {D3Service, D3} from "d3-ng2-service";
import {IAppState} from "../store/root.types";
import {NgRedux} from "@angular-redux/store";
import {HierarchicalDataActions} from "./d3-hierarchical-data.actions";

@Injectable()
export class FlareCsvReduxService {

  private d3: D3;
  private stratify;

  constructor(private http: Http, d3Service: D3Service, store: NgRedux<IAppState>, actions: HierarchicalDataActions, private url: string) {
    this.d3 = d3Service.getD3();
    this.stratify = this.d3.stratify()
      .id((d: HierarchyPointNode<any>) => (<any>d).name)
      .parentId((d: HierarchyPointNode<any>) => (<any>d).name.substring(0, (<any>d).name.lastIndexOf(".")));

    store.dispatch(actions.loadStarted());
    this.http.get('./assets/' + this.url).map(res => {
      const rawData = res['_body'] || '';
      const data = this.d3.csvParse(rawData);

      store.dispatch(actions.loadSucceeded(this.stratify(data)
        .sum((d: HierarchyPointNode<any>) => d.value)
        .sort((a, b) => b.value - a.value)));

      return res;
    }).subscribe(res => {
    });
  }
}
