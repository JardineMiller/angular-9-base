import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
        this.registerForm = this.formBuilder.group({
            username: ["", [Validators.required]],
            email: ["", [Validators.required]],
            password: ["", [Validators.required]]
        });
    }

    ngOnInit(): void {

    }

    register(): void {
        this.authService.register(this.registerForm.value).subscribe(data => {
            console.log(data);
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
