import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-restore-password-code',
  templateUrl: './restore-password-code.page.html',
  styleUrls: ['./restore-password-code.page.scss'],
})
export class RestorePasswordCodePage implements OnInit {
  public codeForm: FormGroup;
  public repsonseAuth: any;
  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() { }

  buildForm() {
    this.codeForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  verify() {

    this.authService.recoverCode(this.codeForm.controls.code.value).subscribe((data) => {
      this.repsonseAuth = data;
      if (data.code === 200) {
        console.log(this.repsonseAuth);
        this.codeForm.controls.code.setValue('');
        this.router.navigateByUrl('restore-password-change');

      }
    });
  }

  backpage() {
    this.router.navigateByUrl('restore-password-email');
  }

}
