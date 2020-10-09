import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { AuthGuardService } from "../services/auth-guard.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
