import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {D3CirclePackingModule} from "./d3-circle-packing/d3-circle-packing.module";
import {D3Service} from "d3-ng2-service";
import {D3HierarchicalDataModule} from "./d3-hierarchical-data/d3-hierarchical-data.module";
import {FlareCsvService} from "./d3-hierarchical-data/flare-csv.service";
import {FlareJsonService} from "./d3-hierarchical-data/flare-json.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    D3HierarchicalDataModule,
    D3CirclePackingModule
  ],
  providers: [
    D3Service,
    FlareCsvService,
    FlareJsonService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor() {
  }
}
