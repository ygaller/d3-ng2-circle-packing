import { Component } from '@angular/core';
import {FlareCsvService} from "./d3-hierarchical-data/flare-csv.service";
import {FlareJsonService} from "./d3-hierarchical-data/flare-json.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private flareCsvService: FlareCsvService, private flareJsonService: FlareJsonService) {
  }
}
