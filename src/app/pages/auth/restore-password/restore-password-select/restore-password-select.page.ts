import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore-password-select',
  templateUrl: './restore-password-select.page.html',
  styleUrls: ['./restore-password-select.page.scss'],
})
export class RestorePasswordSelectPage implements OnInit {
  public selectForm: FormGroup;
  public repsonseAuth: any;
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
    ) {
      this.buildForm();
    }

  ngOnInit() {
  }

  buildForm() {
    this.selectForm = this.formBuilder.group({
      check: [false, [Validators.required, Validators.requiredTrue]],
    });
  }



  backpage(){
    this.router.navigateByUrl('restore-password-id');
  }

  toEmail(){
    this.router.navigateByUrl('restore-password-email');
  }
}
