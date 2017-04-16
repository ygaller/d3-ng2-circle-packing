import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {D3CirclePackingComponent} from "./components/d3-circle-packing/d3-circle-packing.component";
import {FlareCsvService} from "../d3-data/flare-csv.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    D3CirclePackingComponent
  ],
  exports: [
    D3CirclePackingComponent
  ],
  providers: [
    FlareCsvService
  ]
})
export class D3CirclePackingModule {
}
