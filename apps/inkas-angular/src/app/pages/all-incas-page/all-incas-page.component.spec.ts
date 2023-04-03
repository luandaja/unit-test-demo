import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllIncasPageComponent } from './all-incas-page.component';
import { SapaIncaService } from '../../services/sapa-inca.service';
import { MockFactory } from '@app/test';
import { SapaInca } from '@app/models';
import { delay, of, throwError } from 'rxjs';

describe('AllIncasPageComponent', () => {
  let component: AllIncasPageComponent;
  let fixture: ComponentFixture<AllIncasPageComponent>;
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

  const mockService: Pick<SapaIncaService, 'getAll'> = {
    getAll: jest.fn(() => of(mockList)),
  };

  async function reloadFixture() {
    await TestBed.compileComponents();
    fixture = TestBed.createComponent(AllIncasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AllIncasPageComponent],
      providers: [{ provide: SapaIncaService, useValue: mockService }],
    });
    await reloadFixture();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given a 5 incas When component loads Then renders 5 card items', async () => {
    //Arange

    //Act
    const element: HTMLElement = fixture.nativeElement;
    //Assert
    expect(mockService.getAll).toHaveBeenCalledTimes(1);
    expect(element.getElementsByTagName('app-sapa-inca-card').length).toBe(5);
  });

  it('Given error on getAll from service When component loads Then display error message', async () => {
    //Arange
    const mockServiceError: Pick<SapaIncaService, 'getAll'> = {
      getAll: jest.fn(() => throwError(() => 'ups')),
    };
    TestBed.resetTestingModule();
    TestBed.overrideProvider(SapaIncaService, {
      useValue: mockServiceError,
    });
    await reloadFixture();
    //Act
    const element: HTMLElement = fixture.nativeElement;
    //Assert
    expect(element.querySelector('span')?.textContent).toBe(
      'There was an error on loading list'
    );
  });

  it('Given slow response from service When component loads Then display loading message', async () => {
    //Arange
    const mockServiceDelay: Pick<SapaIncaService, 'getAll'> = {
      getAll: jest.fn(() => of(mockList).pipe(delay(Infinity))),
    };
    TestBed.resetTestingModule();
    TestBed.overrideProvider(SapaIncaService, {
      useValue: mockServiceDelay,
    });
    await reloadFixture();
    //Act
    const element: HTMLElement = fixture.nativeElement;
    //Assert

    expect(element.querySelector('span')?.textContent).toBe('Loading...');
  });
});
