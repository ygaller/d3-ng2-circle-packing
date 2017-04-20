import {Injectable} from "@angular/core";

@Injectable()
export class HierarchicalDataActions {
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  loadStarted() {
    return {
      type: HierarchicalDataActions.LOAD_STARTED,
      meta: {},
    };
  }

  loadSucceeded(payload) {
    return {
      type: HierarchicalDataActions.LOAD_SUCCEEDED,
      meta: {},
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: HierarchicalDataActions.LOAD_FAILED,
      meta: {},
      error,
    };
  }
}
