import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-restore-password-email',
  templateUrl: './restore-password-email.page.html',
  styleUrls: ['./restore-password-email.page.scss'],
})
export class RestorePasswordEmailPage implements OnInit {
  public emailForm: FormGroup;
  public repsonseAuth: any;
  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  verify() {

    this.authService
      .recoverEmail(this.emailForm.controls.email.value)
      .subscribe((data) => {
        this.repsonseAuth = data;
        if (data.code === 200) {
          console.log(data.code);
          this.emailForm.controls.email.setValue('');
          this.router.navigateByUrl('restore-password-code');
        }
      });
  }

  backpage() {
    this.router.navigateByUrl('restore-password-select');
  }
}
