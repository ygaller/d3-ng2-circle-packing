import { TestBed, inject } from '@angular/core/testing';

import { FlareCsvService } from './flare-csv.service';

describe('FlareCsvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlareCsvService]
    });
  });

  it('should ...', inject([FlareCsvService], (service: FlareCsvService) => {
    expect(service).toBeTruthy();
  }));
});
