import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app.routes';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-mock-component' })
class MockComponent {}

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  let fixture: ComponentFixture<AppComponent>;
  const mockedRoutes = appRoutes.map((route) => ({
    ...route,
    component: route.component !== undefined ? MockComponent : undefined,
  }));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule.withRoutes(mockedRoutes)],
    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation();
  });

  it('Given a blank path When load page Then redirect to /inkas', () => {
    router.navigate(['/']);
    expect(location.path()).toBe('/inkas');
  });

  it('Given /inkas path When load page Then render AllInkasPage', () => {
    router.navigate(['/inkas']);

    fixture.detectChanges();

    const hmtlElement = fixture.nativeElement as HTMLElement;

    expect(
      hmtlElement.getElementsByTagName('app-mock-component')
    ).not.toBeUndefined();
  });
});
