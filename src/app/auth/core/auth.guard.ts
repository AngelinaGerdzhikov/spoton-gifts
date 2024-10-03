import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject<AuthService>(AuthService);
  const router = inject<Router>(Router);
  const isLoggedIn = authService.isLoggedIn;

  if (isLoggedIn()) {
    return true;
  } else {
    console.log(state.url);
    router.navigate(['auth'], {
      queryParams: {
        'targetUrl': state.url
      }
    });
  }
  return isLoggedIn();
};
