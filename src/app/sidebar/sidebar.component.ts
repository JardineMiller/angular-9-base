import { AfterViewInit, Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {

    constructor(private authService: AuthService, private router: Router) { }


    logout(): void {
        this.authService.logout();
        this.router.navigate(["login"]);
    }
}
