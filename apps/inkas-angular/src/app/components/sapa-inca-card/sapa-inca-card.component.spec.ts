import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SapaIncaCardComponent } from './sapa-inca-card.component';

describe('SapaIncaCardComponent', () => {
  let component: SapaIncaCardComponent;
  let fixture: ComponentFixture<SapaIncaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SapaIncaCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SapaIncaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
