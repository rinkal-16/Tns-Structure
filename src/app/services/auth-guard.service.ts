import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

import {ApplicationSettings} from "@nativescript/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {
  }

  // @ts-ignore
  canActivate(): boolean {
      this.router.navigate(['/home']);
  }

}
