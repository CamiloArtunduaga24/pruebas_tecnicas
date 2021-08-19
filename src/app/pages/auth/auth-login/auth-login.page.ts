import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
})
export class AuthLoginPage implements OnInit {
  public loginForm: FormGroup;
  public repsonseAuth: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  private login() {
    this.authService.login(this.loginForm.value).subscribe((data) => {
      this.repsonseAuth = data;
      if (data.code === 200) {
        this.router.navigateByUrl('tabs/tab1');
        this.welcomeTitan();
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  redirectRePassword() {
    this.router.navigateByUrl('restore-password-id');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  async welcomeTitan() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      cssClass: 'title-welcome',
      header: 'Bienvenido, Titán',
      message:
        '!Ahora comienza tu camino como especialista en marketing digital en Gran Titán!',
      buttons: [
        {
          text: 'Continuar',
          cssClass: 'my-custom-class',
          handler: () => {
            this.router.navigateByUrl('tabs/tab1');
          },
        },
      ],
    });
    await alert.present();
  }
}
