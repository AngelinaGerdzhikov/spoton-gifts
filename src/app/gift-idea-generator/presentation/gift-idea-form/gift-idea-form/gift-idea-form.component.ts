import { Component, computed, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GiftIdeaInput } from '../../../core/models/gift-idea-input';
import { ButtonComponent } from '@ui/components/button/button.component';

@Component({
  selector: 'sg-gift-idea-form',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent
  ],
  templateUrl: './gift-idea-form.component.html',
  styleUrl: './gift-idea-form.component.scss'
})
export class GiftIdeaFormComponent {
  giftIdeaInput = input<GiftIdeaInput | null>(null);
  loading = input<boolean>(false);
  onFormSubmit = output<GiftIdeaInput>();

  submitBtnText = computed(() => {
    return this.loading() ? 'Generating Ideas...' : 'Discover Gifts';
  });
  
  protected model = {...this.giftIdeaInput()}; 
  
  genderOptions = [
    {id: 'female', label: 'Female'},
    {id: 'male', label: 'Male'}
  ];

  onSubmit(form: NgForm) {
    this.onFormSubmit.emit(form.value as GiftIdeaInput);
  }
}
