import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sg-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  errorMessage = input<string | null>(null);
}
