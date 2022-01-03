import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";
import { AuthGuard } from "~/app/services/auth-guard.service";
import { SplashOneComponent } from "~/app/SplashScreens/splashOne/splash-one.component";
import { Full_ROUTES } from "~/app/shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "~/app/shared/routes/content-layout.routes";
import { FullLayoutComponent } from "~/app/layout/full/full-layout.component";
import { ContentLayoutComponent } from "~/app/layout/content/content-layout.component";
import { LoginComponent } from "~/app/pages/auth/login/login.component";
import { RegistrationComponent } from "~/app/pages/auth/registration/registration.component";

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)',
  //   pathMatch: 'full',
  // },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  // {
  //   path: 'splash-one',
  //   component: SplashOneComponent,
  // },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "tabs",
    children: Full_ROUTES,
    component: FullLayoutComponent,
  },
  {
    path: "",
    children: CONTENT_ROUTES,
    component: ContentLayoutComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
