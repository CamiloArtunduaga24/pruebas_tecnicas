import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPermissionPage } from './contact-permission.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPermissionPageRoutingModule {}
