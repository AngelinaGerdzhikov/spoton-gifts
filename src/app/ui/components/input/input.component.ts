import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sg-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

}
