import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {D3CirclePackingAllInOneComponent} from "./components/d3-circle-packing-all-in-one/d3-circle-packing-all-in-one.component";
import {D3CirclePackingRendererComponent} from "./components/d3-circle-packing-renderer/d3-circle-packing-renderer.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    D3CirclePackingAllInOneComponent,
    D3CirclePackingRendererComponent,
  ],
  exports: [
    D3CirclePackingAllInOneComponent,
    D3CirclePackingRendererComponent,
  ],
})
export class D3CirclePackingModule {
}
