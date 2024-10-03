import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'sg-form-control-error',
  standalone: true,
  imports: [NgIf, TitleCasePipe],
  templateUrl: './form-control-error.component.html',
  styleUrl: './form-control-error.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlErrorComponent {
  model = input.required<NgModel>();
  dirty = input.required<boolean>();
  touched = input.required<boolean>();

  displayError = computed(() => {
    return (this.dirty() || this.touched()) && this.model().invalid;
  });

  hasRequiredError = computed(() => this.model().hasError('required'));


}
