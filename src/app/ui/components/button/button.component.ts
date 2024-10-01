import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'button[sgCta]',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class.left]': 'position() === "left"',
    '[class.center]': 'position() === "center"',
    '[class.right]': 'position() === "right"',
    '[class.full]': 'width() === "full"',
    '[class.fixed]': 'width() === "fixed"',
    '[class.auto]': 'width() === "auto"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  position = input<'left' | 'center' | 'right'>('left');
  width = input<'full' | 'fixed' | 'auto'>('auto');
  onClick = output(); 
}
