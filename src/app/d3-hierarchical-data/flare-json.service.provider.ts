import {Http} from "@angular/http";
import {D3Service} from "d3-ng2-service";
import {FlareJsonService} from "./flare-json.service";

let flareJsonServiceFactory = (url: string) => (http: Http, d3Service: D3Service) => {
  return new FlareJsonService(http, d3Service, url);
};

export let flareJsonServiceProvider = (url: string) =>
  ({
    provide: FlareJsonService,
    useFactory: flareJsonServiceFactory(url),
    deps: [Http, D3Service],
  });
