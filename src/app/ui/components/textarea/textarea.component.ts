import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sg-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent { }
