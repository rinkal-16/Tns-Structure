import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule, NativeScriptRouterModule} from "@nativescript/angular";
import { SplashOneComponent} from "./splash-one.component";
import {Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: SplashOneComponent },
]

@NgModule({
  declarations: [SplashOneComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SplashOneModule { }
