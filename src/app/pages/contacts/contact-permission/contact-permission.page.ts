import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-permission',
  templateUrl: './contact-permission.page.html',
  styleUrls: ['./contact-permission.page.scss'],
})
export class ContactPermissionPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async contactAlert() {
    this.router.navigateByUrl('contacts/contacts-list');
  }
}
