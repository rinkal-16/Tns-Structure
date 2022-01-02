import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptModule,
} from "@nativescript/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "~/app/home/home.module";
import { AuthGuard } from "~/app/services/auth-guard.service";
import { SplashOneModule } from "~/app/SplashScreens/splashOne/splash-one.module";
import { SplashTwoModule } from "~/app/SplashScreens/splashTwo/splash-two.module";
import { ContentLayoutComponent } from "~/app/layout/content/content-layout.component";
import { FullLayoutComponent } from "~/app/layout/full/full-layout.component";
import { LoginComponent } from "~/app/pages/auth/login/login.component";
import { RegistrationComponent } from "~/app/pages/auth/registration/registration.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HomeModule,
    SplashOneModule,
    SplashTwoModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FullLayoutComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthGuard],
})
export class AppModule {}
