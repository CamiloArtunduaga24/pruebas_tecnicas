import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBlockedPage } from './user-blocked.page';

const routes: Routes = [
  {
    path: '',
    component: UserBlockedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBlockedPageRoutingModule {}
