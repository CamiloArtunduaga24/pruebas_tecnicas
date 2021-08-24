import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
})
export class WhatsappPage implements OnInit {
  constructor() {}

  phones: number = 3183095565;

  ngOnInit() {}

  public openWhatsapp(phone: string): void {
    window.open('https://api.whatsapp.com/send?phone=' + {}, '_system');
  }
}
