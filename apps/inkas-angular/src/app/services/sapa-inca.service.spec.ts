import { TestBed } from '@angular/core/testing';

import { SapaIncaService } from './sapa-inca.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SapaInca } from '@app/models';
import { MockFactory } from '@app/test';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

describe('SapaIncaService', () => {
  let service: SapaIncaService;
  let http: HttpClient;
  let httpController: HttpTestingController;
  const LIST_LENGTH = 5;
  const mockSapaInca: SapaInca = {
    name: 'Luandaja',
    description: 'was here',
    years: '2016-2022',
    portrait_url: 'mock_url.jpg',
  };
  const mockList = MockFactory.generateMany<SapaInca>({
    length: LIST_LENGTH,
    demoObject: mockSapaInca,
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SapaIncaService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Given values from url When call getAll Then return an observable', () => {
    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockList);
    });
    httpController
      .expectOne({ method: 'GET', url: 'assets/sapa-incas.json' })
      .flush(mockList);
  });

  it('Given error from url When call getAll Then retry 2 times', () => {
    jest.spyOn(http, 'get');
    httpController.expectNone({ method: 'GET', url: 'assets/sapa-incas.json' });
    service
      .getAll()
      .pipe(
        finalize(() => {
          expect(http.get).toBeCalledTimes(2);
        })
      )
      .subscribe();
  });
});
