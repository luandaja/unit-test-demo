import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SapaIncaCardComponent } from './sapa-inca-card.component';
import { SapaInca } from '@app/models';

describe('SapaIncaCardComponent', () => {
  let component: SapaIncaCardComponent;
  let fixture: ComponentFixture<SapaIncaCardComponent>;
  const mockSapaInca: SapaInca = {
    name: 'Luandaja',
    description: 'was here',
    years: '2016-2022',
    portrait_url: 'mock_url.jpg',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SapaIncaCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SapaIncaCardComponent);

    component = fixture.componentInstance;
    component.sapaInca = mockSapaInca;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Given valid SapaInca When loads the component Then render card', () => {
    //arange

    //act
    const card: HTMLElement = fixture.nativeElement;

    //assert
    expect(card.querySelector('article img')?.getAttribute('src')).toBe(
      mockSapaInca.portrait_url
    );
    expect(card.querySelector('article div b')?.textContent).toBe(
      mockSapaInca.name
    );
    expect(card.querySelector('article div span')?.textContent).toBe(
      `(${mockSapaInca.years})`
    );
    expect(card.querySelector('article p')?.textContent?.trim()).toBe(
      mockSapaInca.description
    );
  });
});
