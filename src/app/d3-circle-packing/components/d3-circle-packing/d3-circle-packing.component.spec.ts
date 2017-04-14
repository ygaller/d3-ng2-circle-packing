import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CirclePackingComponent } from './d3-circle-packing.component';
import {BaseRequestOptions, Http, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {D3Service} from "d3-ng2-service";

describe('D3CirclePackingComponent', () => {
  let component: D3CirclePackingComponent;
  let fixture: ComponentFixture<D3CirclePackingComponent>;

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
      declarations: [ D3CirclePackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CirclePackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(D3CirclePackingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Circle-Packing');
  }));
});
