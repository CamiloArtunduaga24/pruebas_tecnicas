import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restore-password-change',
  templateUrl: './restore-password-change.page.html',
  styleUrls: ['./restore-password-change.page.scss'],
})
export class RestorePasswordChangePage implements OnInit {
  public changeForm: FormGroup;
  public showErrorMessage = true;
  public hiddenPasswordMessage = true;
  public upperReq = false;
  public specialReq = false;
  public numbersReq = false;
  public lowerReq = false;
  public lengReq = false;
  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private alertCtrl: AlertController
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm() {
    this.changeForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      coPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  creationRegExp(resExp?) {
    const upper = new RegExp('^(?=.*[A-Z])');
    const special = new RegExp('^(?=.*[!@#$%&*])');
    const numbers = new RegExp('^(?=.*[0-9])');
    const lower = new RegExp('^(?=.*[a-z])');
    const len = new RegExp('^(?=.{8,})');
    return (resExp = [upper, special, numbers, lower, len]);
  }

  validationEvent(event) {
    const resExp = this.creationRegExp();
    const elements = ['upperCase', 'special', 'numbers', 'lowerCase', 'length'];
    for (let i = 0; i < 5; i++) {
      if (resExp[i].test(event.target.value)) {
        if (elements[i] === 'upperCase') {
          this.upperReq = true;
        }
        if (elements[i] === 'special') {
          this.specialReq = true;
        }
        if (elements[i] === 'numbers') {
          this.numbersReq = true;
        }
        if (elements[i] === 'lowerCase') {
          this.lowerReq = true;
        }
        if (elements[i] === 'length') {
          this.lengReq = true;
        }
      }
      if (resExp[i].test(event.target.value) === false) {
        if (elements[i] === 'upperCase') {
          this.upperReq = false;
        }
        if (elements[i] === 'special') {
          this.specialReq = false;
        }
        if (elements[i] === 'numbers') {
          this.numbersReq = false;
        }
        if (elements[i] === 'lowerCase') {
          this.lowerReq = false;
        }
        if (elements[i] === 'length') {
          this.lengReq = false;
        }
      }
    }

    if (
      this.upperReq ||
      this.specialReq ||
      this.numbersReq ||
      this.lowerReq ||
      this.lengReq
    ) {
      this.showErrorMessage = false;
    }
    if (
      this.upperReq &&
      this.specialReq &&
      this.numbersReq &&
      this.lowerReq &&
      this.lengReq
    ) {
      this.showErrorMessage = true;
    }
    if (event.target.value === '') {
      this.showErrorMessage = true;
    }
  }

  matchEvent(event) {
    if (
      this.changeForm.controls.newPassword.value ===
      this.changeForm.controls.coPassword.value
    ) {
      this.hiddenPasswordMessage = true;
    } else {
      this.hiddenPasswordMessage = false;
    }
    if (event.target.value === '') {
      this.hiddenPasswordMessage = true;
    }
  }

  verify() {
    if (
      this.changeForm.controls.newPassword.value ===
      this.changeForm.controls.coPassword.value
    ) {
      console.log('contraseña coincide');
      if (
        this.upperReq &&
        this.specialReq &&
        this.numbersReq &&
        this.lowerReq &&
        this.lengReq
      ) {
        this.passwordChanged();
      }
    } else {
      console.log('contraseña no concide');
    }
  }

  backpage() {
    this.router.navigateByUrl('restore-password-code');
  }

  async passwordChanged() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: '¡Contraseña Cambiada correctamente!',
      buttons: [
        {
          text: 'Continuar',
          cssClass: 'my-custom-class',
          handler: () => {
            this.router.navigateByUrl('auth/login');
          },
        },
      ],
    });
    await alert.present();
  }
}
