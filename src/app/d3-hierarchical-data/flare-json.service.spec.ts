import { TestBed, inject } from '@angular/core/testing';

import { FlareJsonService } from './flare-json.service';

describe('FlareJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlareJsonService]
    });
  });

  it('should ...', inject([FlareJsonService], (service: FlareJsonService) => {
    expect(service).toBeTruthy();
  }));
});
