import { Component, input } from '@angular/core';
import { HeadingTagLevel } from './heading-tag-level';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'sg-heading-tag',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './heading-tag.component.html',
  styleUrl: './heading-tag.component.scss'
})
export class HeadingTagComponent {
  headingLevel = input<HeadingTagLevel>('h1');
}
