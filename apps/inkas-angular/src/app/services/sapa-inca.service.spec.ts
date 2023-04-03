import { TestBed } from '@angular/core/testing';

import { SapaIncaService } from './sapa-inca.service';

describe('SapaIncaService', () => {
  let service: SapaIncaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapaIncaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
