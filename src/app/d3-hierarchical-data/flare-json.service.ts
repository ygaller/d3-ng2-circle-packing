import {Injectable} from "@angular/core";
import {D3, D3Service} from "d3-ng2-service";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {HierarchyNode, HierarchyPointNode} from "d3-hierarchy";
import {HierarchicalData} from "./d3-hierarchical-data.type";

@Injectable()
export class FlareJsonService implements HierarchicalData {

  private d3: D3;

  public root: Observable<HierarchyNode<any>>;

  constructor(private http: Http, d3Service: D3Service, private url: string) {
    this.d3 = d3Service.getD3();

    this.root = this.http.get('./assets/' + this.url).map(res => {
      const rawData = res['_body'] || '';
      let parsedJson = JSON.parse(rawData);
      return this.d3.hierarchy(parsedJson)
        .sum((d: HierarchyPointNode<any>) => (<any>d).size)
        .sort((a, b) => (<any>b).value - (<any>a).value);
    });
  }
}
