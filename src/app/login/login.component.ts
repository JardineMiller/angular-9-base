import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import halfmoon from "halfmoon";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit {
    loginForm: FormGroup;
    loading = true;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
        this.loginForm = this.formBuilder.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.loading = false;
    }

    login(): void {
        this.loading = true;
        this.authService.login(this.loginForm.value).subscribe(response => {
            this.authService.saveToken(response.token);
            this.loading = false;
            this.router.navigate([""]);
        }, error => {
            console.error(error);
            this.loading = false;
        });
    }

    get username(): AbstractControl {
        return this.loginForm.get("username");
    }

    get password(): AbstractControl {
        return this.loginForm.get("password");
    }

    ngAfterViewInit(): void {
        halfmoon.onDOMContentLoaded();
    }


}
