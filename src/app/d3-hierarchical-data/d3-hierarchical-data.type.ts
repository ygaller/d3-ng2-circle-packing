import {HierarchyNode} from "d3-hierarchy";
import {Observable} from "rxjs";

export interface HierarchicalData {
  getRoot(): Observable<HierarchyNode<any>>;
}

export interface HierarchicalDataState {
  item: HierarchyNode<any>;
  loading: boolean;
  error: any;
}
