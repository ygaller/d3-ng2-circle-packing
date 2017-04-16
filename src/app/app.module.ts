import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {D3CirclePackingModule} from "./d3-circle-packing/d3-circle-packing.module";
import {D3Service} from "d3-ng2-service";
import {D3DataModule} from "./d3-data/d3-data.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    D3DataModule,
    D3CirclePackingModule
  ],
  providers: [
    D3Service
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
