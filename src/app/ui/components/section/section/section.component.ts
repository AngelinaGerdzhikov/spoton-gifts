import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { HeadingTagLevel } from '../../heading-tag/heading-tag/heading-tag-level';
import { HeadingTagComponent } from "../../heading-tag/heading-tag/heading-tag.component";

@Component({
  selector: 'sg-section',
  standalone: true,
  imports: [HeadingTagComponent, NgClass],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  title = input<string>();
  position = input<'left' | 'center' | 'right'>('left');
  headingLevel = input<HeadingTagLevel>('h1');
  subtitle = input<string | null>(null);
  width = input<'full' | 'contained' | 'box'>('full');

  wrapperClasses = computed(() => {
    return {
      'full': this.width() === 'full',
      'contained': this.width() === 'contained',
      left: this.position() === 'left',
      center: this.position() === 'center',
      right: this.position() === 'right'
    }
  })
}
