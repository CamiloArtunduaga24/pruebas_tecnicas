import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePasswordSelectPageRoutingModule } from './restore-password-select-routing.module';

import { RestorePasswordSelectPage } from './restore-password-select.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePasswordSelectPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [RestorePasswordSelectPage]
})
export class RestorePasswordSelectPageModule {}
