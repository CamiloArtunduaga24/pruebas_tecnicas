import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePasswordChangePageRoutingModule } from './restore-password-change-routing.module';

import { RestorePasswordChangePage } from './restore-password-change.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePasswordChangePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [RestorePasswordChangePage]
})
export class RestorePasswordChangePageModule {}
