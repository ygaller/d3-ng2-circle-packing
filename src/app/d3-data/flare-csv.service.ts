import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class FlareCsvService {

  private csvUrl: string = "./assets/flare.csv";

  constructor(private http: Http) {
  }

  getData(): Observable<string> {
    return this.http.get(this.csvUrl).map(res => res['_body'] || '');
  }
}
