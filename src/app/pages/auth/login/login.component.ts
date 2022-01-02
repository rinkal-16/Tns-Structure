import { Component, OnInit, ViewChild} from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {
    LoadingIndicator,
    OptionsCommon,
} from '@nstudio/nativescript-loading-indicator';
import {openUrl} from "@nativescript/core/utils";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    email: any;
    password: any;
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
        this.loginForm = this._fb.group({
            email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', Validators.required]
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      } else {
        this.indicator.show(this.options);
        const data = JSON.stringify({
          email: this.email,
          password: this.password,
        });
        this.routerExtension.navigate(['tabs'])
        this.indicator.hide(this.options);
      }
    }

  onSignup() {
      this.routerExtension.navigate(['register'])
  }

    // validateEmail(email) {
    //     const re = /^\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/;
    //     return re.test(String(email).toLowerCase());
    // }
    //
    // onScroll() {
    //     this.mySc.nativeElement.scrollToVerticalOffset(this.mySc.nativeElement.scrollableHeight, false);
    // }


}

