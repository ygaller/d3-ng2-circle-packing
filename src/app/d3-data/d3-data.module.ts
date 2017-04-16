import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlareCsvService} from "./flare-csv.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FlareCsvService
  ],
})
export class D3DataModule { }
