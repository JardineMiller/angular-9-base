import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private loginPath = `${ environment.apiUrl }/identity/login`;
    private registerPath = `${ environment.apiUrl }/identity/register`;

    constructor(private http: HttpClient) {
    }

    login(data): Observable<any> {
        return this.http.post(this.loginPath, data);
    }

    logout(): void {
        localStorage.removeItem("token");
    }

    register(data): Observable<any> {
        return this.http.post(this.registerPath, data);
    }

    saveToken(token): void {
        localStorage.setItem("token", token);
    }

    getToken(): any {
        return localStorage.getItem("token");
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}
