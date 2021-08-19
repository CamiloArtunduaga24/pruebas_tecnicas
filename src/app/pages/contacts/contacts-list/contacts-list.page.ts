import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {
  Contact,
  ContactFieldType,
  Contacts,
  IContactFindOptions,
} from '@ionic-native/contacts/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.page.html',
  styleUrls: ['./contacts-list.page.scss'],
})
export class ContactsListPage implements OnInit {
  ourtype: ContactFieldType[] = ['name.givenName'];
  contactsResult: Contact[] = [];
  checkboxAll = false;
  hiddenToSearch = false;
  constructor(private readonly contacts: Contacts, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  vacio: boolean;

  ngOnInit() {
    this.searchContacts('');
  }

  searchContacts(name) {
    const option: IContactFindOptions = {
      filter: name,
      multiple: true,
      hasPhoneNumber: true,
    };
    this.contacts.find(this.ourtype, option).then((contacts: Contact[]) => {
      this.contactsResult = contacts;
      this.vacio = true;
      console.log(this.contactsResult);
    });
  }

  onKeyUp(event) {
    console.log(event);
    if (event.target.value === '') {
      this.hiddenToSearch = false;
      this.searchContacts(event.target.value);
    } else {
      this.searchContacts(event.target.value);
      this.hiddenToSearch = true;
    }
  }

  checkAll(event: CustomEvent) {
    if (event.detail.checked) {
      this.checkboxAll = true;
    } else {
      this.checkboxAll = false;
    }
  }

  onClear(event) {
    if (event) {
      this.hiddenToSearch = false;
      this.searchContacts('');
    }
  }

  continuar() {
    this.router.navigateByUrl('contacts/contacts-permission');
  }
}
