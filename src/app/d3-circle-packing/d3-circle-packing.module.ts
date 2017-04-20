import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {D3CirclePackingAllInOneComponent} from "./components/d3-circle-packing-all-in-one/d3-circle-packing-all-in-one.component";
import {D3CirclePackingRendererComponent} from "./components/d3-circle-packing-renderer/d3-circle-packing-renderer.component";
import {D3CirclePackingReduxComponent} from "./components/d3-circle-packing-redux/d3-circle-packing-redux.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    D3CirclePackingAllInOneComponent,
    D3CirclePackingRendererComponent,
    D3CirclePackingReduxComponent,
  ],
  exports: [
    D3CirclePackingAllInOneComponent,
    D3CirclePackingRendererComponent,
    D3CirclePackingReduxComponent,
  ],
})
export class D3CirclePackingModule {
}
