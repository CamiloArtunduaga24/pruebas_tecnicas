import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.page.html',
  styleUrls: ['./contact-edit.page.scss'],
})
export class ContactEditPage implements OnInit {
  public formulario: FormGroup;
  edit = true;
  cambio: boolean;
  contactoId: string;
  contacto;

  constructor(
    private fb: FormBuilder,
    private activated: ActivatedRoute,
    private http_: HttpClient
  ) {
    this.formularios();
  }

  ngOnInit() {
    this.traerDatosContacto();
  }

  formularios(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    });
  }

  activateContactData() {
    if (this.edit === true) {
      console.log('se esta clicando');
      this.edit = false;
      this.cambio = true;
    } else {
      this.edit = true;
      this.cambio = false;
      console.log('npm');
    }
  }

  traerDatosContacto() {
    this.contactoId = this.activated.snapshot.paramMap.get('id');
    this.http_
      .get('https://jsonplaceholder.typicode.com/users/' + this.contactoId)
      .subscribe((resp) => {
        console.log(resp);
        this.contacto = resp;
      });
  }
}
