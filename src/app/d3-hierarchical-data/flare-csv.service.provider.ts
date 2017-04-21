import {FlareCsvService} from "./flare-csv.service";
import {Http} from "@angular/http";
import {D3Service} from "d3-ng2-service";

let flareCsvServiceFactory = (url: string) => (http: Http, d3Service: D3Service) => {
  return new FlareCsvService(http, d3Service, url);
};

export let flareCsvServiceProvider = (url: string) =>
  ({
    provide: FlareCsvService,
    useFactory: flareCsvServiceFactory(url),
    deps: [Http, D3Service],
  });
