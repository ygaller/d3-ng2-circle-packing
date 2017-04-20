import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {HierarchyPointNode, HierarchyNode} from "d3-hierarchy";
import {D3Service, D3} from "d3-ng2-service";
import {HierarchicalData} from "./d3-hierarchical-data.type";

@Injectable()
export class FlareCsvService implements HierarchicalData {

  private url: string = "flare.csv";
  private d3: D3;
  private stratify;

  public root: Observable<HierarchyNode<any>>;

  constructor(private http: Http, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.stratify = this.d3.stratify()
      .id((d: HierarchyPointNode<any>) => (<any>d).name)
      .parentId((d: HierarchyPointNode<any>) => (<any>d).name.substring(0, (<any>d).name.lastIndexOf(".")));

    this.root = this.http.get('./assets/' + this.url).map(res => {
      const rawData = res['_body'] || '';
      const data = this.d3.csvParse(rawData);

      return this.stratify(data)
        .sum((d: HierarchyPointNode<any>) => d.value)
        .sort((a, b) => b.value - a.value);
    });
  }
}
