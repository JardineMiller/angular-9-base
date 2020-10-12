import { Component, AfterViewInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import halfmoon from "halfmoon";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements AfterViewInit {
    code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

    constructor(private authService: AuthService, private router: Router) { }

    ngAfterViewInit(): void {
        halfmoon.onDOMContentLoaded();
    }

    toggleSidebar(): void {
        halfmoon.toggleSidebar();
    }
}
