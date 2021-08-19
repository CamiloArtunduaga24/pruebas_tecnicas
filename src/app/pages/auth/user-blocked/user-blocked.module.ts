import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBlockedPageRoutingModule } from './user-blocked-routing.module';

import { UserBlockedPage } from './user-blocked.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBlockedPageRoutingModule,
    TranslateModule
  ],
  declarations: [UserBlockedPage]
})
export class UserBlockedPageModule {}
