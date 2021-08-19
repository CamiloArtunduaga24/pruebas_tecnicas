import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePasswordEmailPageRoutingModule } from './restore-password-email-routing.module';

import { RestorePasswordEmailPage } from './restore-password-email.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePasswordEmailPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [RestorePasswordEmailPage]
})
export class RestorePasswordEmailPageModule {}
