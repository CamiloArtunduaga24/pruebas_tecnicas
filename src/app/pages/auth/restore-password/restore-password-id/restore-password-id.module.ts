import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePasswordIdPageRoutingModule } from './restore-password-id-routing.module';

import { RestorePasswordIdPage } from './restore-password-id.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePasswordIdPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [RestorePasswordIdPage]
})
export class RestorePasswordIdPageModule {}
