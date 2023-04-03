import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllIncasPageComponent } from './all-incas-page.component';

describe('AllIncasPageComponent', () => {
  let component: AllIncasPageComponent;
  let fixture: ComponentFixture<AllIncasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllIncasPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllIncasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
