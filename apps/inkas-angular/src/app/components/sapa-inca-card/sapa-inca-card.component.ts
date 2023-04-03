import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SapaInca } from '@app/models';

@Component({
  selector: 'app-sapa-inca-card[sapaInca]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './sapa-inca-card.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SapaIncaCardComponent {
  @Input() sapaInca!: SapaInca;

  get name() {
    return this.sapaInca.name;
  }
  get portrait_url() {
    return this.sapaInca.portrait_url;
  }
  get description() {
    return this.sapaInca.description;
  }
  get years() {
    return this.sapaInca.years;
  }
}
