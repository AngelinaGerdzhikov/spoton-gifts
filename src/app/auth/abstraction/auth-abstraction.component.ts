import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginRequest } from '@auth/core/models/login-request';
import { AuthService } from './../core/auth.service';
import { AuthComponent } from './../presentation/auth/auth/auth.component';
import { LoginComponent } from './../presentation/login/login/login.component';

@Component({
  selector: 'sg-auth-abstraction',
  standalone: true,
  imports: [
    AuthComponent,
    LoginComponent,
    RouterModule
  ],
  templateUrl: './auth-abstraction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthAbstractionComponent {
  authService = inject<AuthService>(AuthService);
  router = inject<Router>(Router);
  route = inject<ActivatedRoute>(ActivatedRoute);

  #targetUrl = signal<string | null>(null);

  constructor() {
    this.loadTargetUrl();
    effect(() => {
        if (this.isLoggedIn() && this.#targetUrl() !== null) {
          this.router.navigateByUrl(this.#targetUrl()!);
        }
    })
  }

  loading = this.authService.loading;
  isLoggedIn = this.authService.isLoggedIn;
  currentUser = this.authService.currentUser;

  private loadTargetUrl(): void {
    this.route.queryParamMap.subscribe((map)=> {
      this.#targetUrl.set(map.get('targetUrl'));
    });
  }

  handleLogin(user: LoginRequest): void {
    this.authService.setUserLoginInput(user);
  }
}
