import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePasswordCodePageRoutingModule } from './restore-password-code-routing.module';

import { RestorePasswordCodePage } from './restore-password-code.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePasswordCodePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [RestorePasswordCodePage]
})
export class RestorePasswordCodePageModule {}
