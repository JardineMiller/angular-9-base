import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
        this.loginForm = this.formBuilder.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required]]
        });
    }

    ngOnInit(): void {

    }

    login(): void {
        this.authService.login(this.loginForm.value).subscribe(response => {
            this.authService.saveToken(response.token);
        });
    }

    get username(): AbstractControl {
        return this.loginForm.get("username");
    }

    get password(): AbstractControl {
        return this.loginForm.get("password");
    }
}
