import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsListPageRoutingModule } from './contacts-list-routing.module';

import { ContactsListPage } from './contacts-list.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsListPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [ContactsListPage]
})
export class ContactsListPageModule {}
