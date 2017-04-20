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
import {NgReduxModule} from "@angular-redux/store";
import {FlareCsvReduxService} from "./d3-hierarchical-data/flare-csv-redux.service";
import {HierarchicalDataActions} from "./d3-hierarchical-data/d3-hierarchical-data.actions";
import {StoreModule} from "./store/store.module";
import {NgReduxRouterModule} from "@angular-redux/router";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
    D3HierarchicalDataModule,
    D3CirclePackingModule
  ],
  providers: [
    D3Service,
    FlareCsvService,
    FlareJsonService,
    FlareCsvReduxService,
    HierarchicalDataActions,
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
