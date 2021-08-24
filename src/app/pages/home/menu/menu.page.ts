import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonSlides,
  ModalController,
  NavController,
  NavParams,
} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('slidesRef') slides: IonSlides;

  constructor(private readonly route: Router, private navCtrl: NavController) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  ngOnInit() {}
  onSlideMoved(event) {
    /** isEnd true when slides reach at end slide */
    event.target.isEnd().then((isEnd) => {
      console.log('End of slide', isEnd);
    });

    event.target.isBeginning().then((istrue) => {
      console.log('End of slide', istrue);
    });
  }

  permisoContactos() {
    this.navCtrl.navigateForward('contacts/contacts-permission', {
      animated: true,
    });
  }
  toUserBlock() {
    this.route.navigateByUrl('whatsapp');
  }
}
