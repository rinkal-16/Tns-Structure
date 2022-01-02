import { Component, OnInit, ViewChild} from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  LoadingIndicator,
  OptionsCommon,
} from '@nstudio/nativescript-loading-indicator';
import {MustMatch} from "~/app/pages/auth/registration/confirm.validator";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  password: any;
  confirm_password: any;
  submitted = false;

  indicator = new LoadingIndicator();
  options: OptionsCommon = {
    message: 'Loading...',
    dimBackground: true,
  };
  @ViewChild('myScroller') mySc: any

  constructor(private routerExtension: RouterExtensions,
              private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/)]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    },{
      validator: MustMatch('password', 'confirm_password')
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.registrationForm.invalid) {
      return;
    } else {
      this.indicator.show(this.options);
      this.routerExtension.navigate(['tabs']);
      this.indicator.show(this.options);
    }
  }


}

