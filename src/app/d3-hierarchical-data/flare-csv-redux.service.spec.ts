import { TestBed, inject } from '@angular/core/testing';

import { FlareCsvReduxService } from './flare-csv-redux.service';

describe('FlareCsvReduxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlareCsvReduxService]
    });
  });

  it('should ...', inject([FlareCsvReduxService], (service: FlareCsvReduxService) => {
    expect(service).toBeTruthy();
  }));
});
