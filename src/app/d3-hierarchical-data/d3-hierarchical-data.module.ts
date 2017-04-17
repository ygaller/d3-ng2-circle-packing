import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FlareCsvService} from "./flare-csv.service";
import {D3Service} from "d3-ng2-service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    D3Service,
    FlareCsvService
  ],
})
export class D3HierarchicalDataModule { }
