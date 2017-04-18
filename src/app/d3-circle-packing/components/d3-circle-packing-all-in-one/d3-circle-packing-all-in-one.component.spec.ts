import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {BaseRequestOptions, Http, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {D3Service} from "d3-ng2-service";
import {D3CirclePackingAllInOneComponent} from "./d3-circle-packing-all-in-one.component";

describe('D3CirclePackingComponent', () => {
  let component: D3CirclePackingAllInOneComponent;
  let fixture: ComponentFixture<D3CirclePackingAllInOneComponent>;

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
      declarations: [ D3CirclePackingAllInOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CirclePackingAllInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
