import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeadingTagLevel } from './heading-tag-level';

@Component({
  selector: 'sg-heading-tag',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './heading-tag.component.html',
  styleUrl: './heading-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingTagComponent {
  headingLevel = input<HeadingTagLevel>('h1');
}
