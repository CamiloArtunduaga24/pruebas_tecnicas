import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPruebaPageRoutingModule } from './lista-prueba-routing.module';

import { ListaPruebaPage } from './lista-prueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPruebaPageRoutingModule
  ],
  declarations: [ListaPruebaPage]
})
export class ListaPruebaPageModule {}
