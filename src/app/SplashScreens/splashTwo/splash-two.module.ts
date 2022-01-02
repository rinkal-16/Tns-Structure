import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule, NativeScriptRouterModule} from "@nativescript/angular";
import { SplashTwoComponent} from "./splash-two.component";
import {Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: SplashTwoComponent },
]

@NgModule({
  declarations: [SplashTwoComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SplashTwoModule { }
