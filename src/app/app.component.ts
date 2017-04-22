import {Component} from "@angular/core";
import {FlareJsonService} from "./d3-hierarchical-data/flare-json.service";
import {FlareCsvReduxService} from "./d3-hierarchical-data/flare-csv-redux.service";
import {flareCsvServiceProvider} from "./d3-hierarchical-data/flare-csv.service.provider";
import {FlareCsvService} from "./d3-hierarchical-data/flare-csv.service";
import {flareJsonServiceProvider} from "./d3-hierarchical-data/flare-json.service.provider";
import {flareCsvReduxServiceProvider} from "./d3-hierarchical-data/flare-csv-redux.service.provider";

const FLARE_CSV = 'flare.csv';
const FLARE_JSON = 'flare.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    flareCsvServiceProvider(FLARE_CSV),
    flareJsonServiceProvider(FLARE_JSON),
    flareCsvReduxServiceProvider(FLARE_CSV),
  ],
})
export class AppComponent {
  public csvRoot;
  public jsonRoot;

  constructor(private flareCsvService: FlareCsvService,
              private flareJsonService: FlareJsonService,
              private flareCsvReduxService: FlareCsvReduxService) {
    this.csvRoot = flareCsvService.getRoot();
    this.jsonRoot = flareJsonService.getRoot();
  }
}
