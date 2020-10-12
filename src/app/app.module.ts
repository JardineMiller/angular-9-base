import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { AuthGuardService } from "../services/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HighlightModule, HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import { ToastService } from "../services/toast.service";
import { TokenInterceptorService } from "../services/token-interceptor.service";

const highlightJsConfig = {
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        lineNumbersLoader: () => import("highlightjs-line-numbers.js"),
        languages: {
            javascript: () => import("highlight.js/lib/languages/javascript"),
            css: () => import("highlight.js/lib/languages/css"),
            html: () => import("highlight.js/lib/languages/xml")
        }
    }
};

const tokenInterceptorConfig = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        SidebarComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        HighlightModule
    ],
    providers: [
        highlightJsConfig,
        AuthService,
        AuthGuardService,
        ToastService,
        tokenInterceptorConfig
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
