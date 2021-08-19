import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPruebaPage } from './lista-prueba.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPruebaPageRoutingModule {}
