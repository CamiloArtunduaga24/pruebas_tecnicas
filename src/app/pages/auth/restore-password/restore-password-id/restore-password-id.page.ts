import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-restore-password-id',
  templateUrl: './restore-password-id.page.html',
  styleUrls: ['./restore-password-id.page.scss'],
})
export class RestorePasswordIdPage implements OnInit {
  public recoverForm: FormGroup;
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
    this.recoverForm = this.formBuilder.group({
      document: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  verify() {
    this.authService
      .recoverPassword(this.recoverForm.controls.document.value)
      .subscribe((data) => {
        this.repsonseAuth = data;
        if (data.code === 200) {
          console.log(data.code);
          this.recoverForm.controls.document.setValue('');
          this.router.navigateByUrl('restore-password-select');
        }
      });
  }

  backpage() {
    this.router.navigateByUrl('auth/login');
  }
}
