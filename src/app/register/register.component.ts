import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
        this.registerForm = this.formBuilder.group({
            username: ["", [Validators.required]],
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]]
        });
    }

    ngOnInit(): void {

    }

    register(): void {
        this.authService.register(this.registerForm.value).subscribe(data => {
            const user = {
                username: this.registerForm.get("username").value,
                password: this.registerForm.get("password").value
            };

            this.authService.login(user).subscribe(response => {
                this.authService.saveToken(response.token);
                this.router.navigate([""]);
            }, error => {
                console.error(error);
            });
        }, error => {
            console.error(error);
        });
    }

    get username(): AbstractControl {
        return this.registerForm.get("username");
    }

    get email(): AbstractControl {
        return this.registerForm.get("email");
    }

    get password(): AbstractControl {
        return this.registerForm.get("password");
    }

}
