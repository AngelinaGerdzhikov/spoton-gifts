import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { GiftIdeaInput } from '../../../core/models/gift-idea-input';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'sg-gift-idea-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent, JsonPipe],
  templateUrl: './gift-idea-form.component.html',
  styleUrl: './gift-idea-form.component.scss'
})
export class GiftIdeaFormComponent {
  giftIdeaInput = input<GiftIdeaInput | null>(null);
  loading = input<boolean>(false);
  onFormSubmit = output<GiftIdeaInput>();
  
  genderOptions = [
    {id: 'female', label: 'Female'},
    {id: 'male', label: 'Male'}
  ];
  protected model = {...this.giftIdeaInput()}; 

  onSubmit(form: NgForm) {
    this.onFormSubmit.emit(form.value as GiftIdeaInput);
  }
}
