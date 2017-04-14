import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {D3CirclePackingComponent} from "./d3-circle-packing/components/d3-circle-packing/d3-circle-packing.component";
import {Http, BaseRequestOptions, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {D3Service} from "d3-ng2-service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        D3Service,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        },
      ],
      declarations: [
        AppComponent,
        D3CirclePackingComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
