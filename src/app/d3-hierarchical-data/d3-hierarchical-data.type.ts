import {HierarchyNode} from "d3-hierarchy";
import {Observable} from "rxjs";

export interface HierarchicalData {
  root: Observable<HierarchyNode<any>>;
}
