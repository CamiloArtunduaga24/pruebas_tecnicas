import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-blocked',
  templateUrl: './user-blocked.page.html',
  styleUrls: ['./user-blocked.page.scss'],
})
export class UserBlockedPage implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit() {
  }

  backpage(){
    this.route.navigateByUrl('/tabs/tab1');
  }


}
