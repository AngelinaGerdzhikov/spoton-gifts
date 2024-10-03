import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundImageWithOverlay } from '@ui/directives/background-image-with-overlay/background-image-with-overlay.directive';

@Component({
  selector: 'sg-auth',
  standalone: true,
  imports: [BackgroundImageWithOverlay],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent { }
