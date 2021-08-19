import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorePasswordEmailPage } from './restore-password-email.page';

const routes: Routes = [
  {
    path: '',
    component: RestorePasswordEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordEmailPageRoutingModule {}
