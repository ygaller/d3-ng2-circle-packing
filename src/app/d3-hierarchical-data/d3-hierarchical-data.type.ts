import {HierarchyNode} from "d3-hierarchy";
import {Observable} from "rxjs";

export interface HierarchicalData {
  getRoot(): Observable<HierarchyNode<any>>;
}
