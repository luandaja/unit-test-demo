import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SapaIncaCardComponent } from '../../components/sapa-inca-card/sapa-inca-card.component';
import {
  EMPTY,
  Observable,
  catchError,
  combineLatest,
  ignoreElements,
  map,
  of,
  startWith,
} from 'rxjs';
import { SapaInca } from '../../models/SapaInca.type';
import { SapaIncaService } from '../../services/sapa-inca.service';

@Component({
  selector: 'app-all-incas-page',
  standalone: true,
  imports: [CommonModule, SapaIncaCardComponent],
  template: `
    <ng-container *ngIf="vm$ | async as vm; else incasLoading">
      <app-sapa-inca-card [sapaInca]="inca" *ngFor="let inca of vm.incas" />
      <span *ngIf="vm.error">There was an error on loading list</span>
    </ng-container>
    <ng-template #incasLoading>
      <span>Loading...</span>
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllIncasPageComponent {
  incas$: Observable<SapaInca[]> = this.sapaIncaService.getAll();

  vm$ = combineLatest([
    this.incas$.pipe(
      startWith(null),
      catchError(() => EMPTY)
    ),
    this.incas$.pipe(
      ignoreElements(),
      startWith(null),
      catchError((err) => of(err))
    ),
  ]).pipe(map(([incas, error]) => ({ incas, error })));

  constructor(private sapaIncaService: SapaIncaService) {}
}
