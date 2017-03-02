import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard.service';
import { CanDeactivateGuard } from "./guard/can-deactivate-guard.service";
import { AuthService } from './guard/auth.service';
import { LoginComponent } from './login.component';

//로그인 라우팅
export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

export const authProviders = [
  AuthGuard,
  CanDeactivateGuard,
  AuthService
];
