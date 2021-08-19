import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./auth-login/auth-login.module').then(
        (m) => m.AuthLoginPageModule
      ),
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'restore-password-id',
    loadChildren: () =>
      import(
        './restore-password/restore-password-id/restore-password-id.module'
      ).then((m) => m.RestorePasswordIdPageModule),
  },
  {
    path: 'restore-password-select',
    loadChildren: () =>
      import(
        './restore-password/restore-password-select/restore-password-select.module'
      ).then((m) => m.RestorePasswordSelectPageModule),
  },
  {
    path: 'restore-password-email',
    loadChildren: () =>
      import(
        './restore-password/restore-password-email/restore-password-email.module'
      ).then((m) => m.RestorePasswordEmailPageModule),
  },
  {
    path: 'restore-password-code',
    loadChildren: () =>
      import(
        './restore-password/restore-password-code/restore-password-code.module'
      ).then((m) => m.RestorePasswordCodePageModule),
  },
  {
    path: 'restore-password-change',
    loadChildren: () =>
      import(
        './restore-password/restore-password-change/restore-password-change.module'
      ).then((m) => m.RestorePasswordChangePageModule),
  },
  {
    path: 'auth/user-blocked',
    loadChildren: () =>
      import('./user-blocked/user-blocked.module').then(
        (m) => m.UserBlockedPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
