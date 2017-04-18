import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CirclePackingRendererComponent } from './d3-circle-packing-renderer.component';
import {BaseRequestOptions, Http, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {D3Service} from "d3-ng2-service";

describe('D3CirclePackingComponent', () => {
  let component: D3CirclePackingRendererComponent;
  let fixture: ComponentFixture<D3CirclePackingRendererComponent>;

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
      declarations: [ D3CirclePackingRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CirclePackingRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
