import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-prueba',
  templateUrl: './lista-prueba.page.html',
  styleUrls: ['./lista-prueba.page.scss'],
})
export class ListaPruebaPage implements OnInit {
  contactos = [];

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.traerDatosContacto();
  }

  traerDatosContacto() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        console.log(res);
        this.contactos = res;
      });
  }
}
