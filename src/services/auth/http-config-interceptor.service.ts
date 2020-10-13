import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ToastService } from "../toast.service";

@Injectable({
    providedIn: "root"
})
export class HttpConfigInterceptor implements HttpInterceptor{

    constructor(
        public authService: AuthService,
        private toastService: ToastService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken()}`
            }
        });

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.toastService.createErrorToast("A problem has occurred...", `(${error.status}) ${error.error}`);
                return throwError(error);
            }));
    }
}
