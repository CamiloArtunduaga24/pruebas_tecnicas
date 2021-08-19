import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactPermissionPageRoutingModule } from './contact-permission/contact-permission-routing.module';
import { ContactsListPageModule } from './contacts-list/contacts-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
