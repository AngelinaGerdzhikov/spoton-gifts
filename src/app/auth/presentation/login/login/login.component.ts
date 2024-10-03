import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginRequest } from '@auth/core/models/login-request';
import { ButtonComponent } from '@ui/components/button/button.component';
import { FormControlErrorComponent } from '@ui/components/form-control-error/form-control-error/form-control-error.component';
import { SectionComponent } from '@ui/components/section/section/section.component';

@Component({
  selector: 'sg-login',
  standalone: true,
  imports: [
    FormsModule,
    SectionComponent,
    FormControlErrorComponent,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loading = input<boolean>(false);
  onLogin = output<LoginRequest>();
  user = '';
  password = '';

  submitBtnText = computed(() => {
    return this.loading() ? 'Sending request...' : 'Login';
  });

  onSubmit(form: NgForm): void {
    console.log(`
      user: ${this.user},
      password: ${this.password}  
    `);
    this.onLogin.emit(form.value);
  }


}
