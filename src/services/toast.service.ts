import { Injectable } from "@angular/core";
import halfmoon from "halfmoon";

@Injectable({
    providedIn: "root"
})
export class ToastService {

    constructor() { }

    alertTypes = {
        default: "",
        primary: "alert-primary",
        success: "alert-success",
        secondary: "alert-secondary",
        danger: "alert-danger"
    };

    createToast(title: string, content: string, alertType: string): void {
        halfmoon.initStickyAlert({
            title,
            content,
            alertType,
            timeShown: 3000,
            hasDismissButton: true
        });
    }

    createErrorToast(title: string, content: string): void {
        halfmoon.initStickyAlert({
            title,
            content,
            alertType: this.alertTypes.danger,
            timeShown: 3000,
            hasDismissButton: true
        });
    }
}
