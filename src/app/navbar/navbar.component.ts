import { AfterViewInit, Component } from "@angular/core";
import { Router } from "@angular/router";
import halfmoon from "halfmoon";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements AfterViewInit{

  constructor(private router: Router) { }

  toggleDarkMode(): void {
    halfmoon.toggleDarkMode();
  }

  toggleSidebar(): void {
    halfmoon.toggleSidebar();
  }

  ngAfterViewInit(): void {
    halfmoon.pageWrapper = document.getElementsByClassName("page-wrapper")[0];
    halfmoon.stickyAlerts = document.getElementsByClassName("sticky-alerts")[0];
  }
}
