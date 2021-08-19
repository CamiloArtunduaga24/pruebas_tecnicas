import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorePasswordCodePage } from './restore-password-code.page';

const routes: Routes = [
  {
    path: '',
    component: RestorePasswordCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordCodePageRoutingModule {}
