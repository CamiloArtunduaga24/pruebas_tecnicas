import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorePasswordChangePage } from './restore-password-change.page';

const routes: Routes = [
  {
    path: '',
    component: RestorePasswordChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordChangePageRoutingModule {}
