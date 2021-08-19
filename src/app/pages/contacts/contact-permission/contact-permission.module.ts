import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPermissionPageRoutingModule } from './contact-permission-routing.module';

import { ContactPermissionPage } from './contact-permission.page';
import { ContactsListPageModule } from '../contacts-list/contacts-list.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPermissionPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [ContactPermissionPage],
})
export class ContactPermissionPageModule {}
