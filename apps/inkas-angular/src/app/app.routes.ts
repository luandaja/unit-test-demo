import { Route } from '@angular/router';
import { AllIncasPageComponent } from './pages/all-incas-page/all-incas-page.component';

export const appRoutes: Route[] = [
  { path: 'inkas', component: AllIncasPageComponent },
  { path: '', redirectTo: '/inkas', pathMatch: 'full' },
];
