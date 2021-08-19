import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorePasswordSelectPage } from './restore-password-select.page';

const routes: Routes = [
  {
    path: '',
    component: RestorePasswordSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordSelectPageRoutingModule {}
