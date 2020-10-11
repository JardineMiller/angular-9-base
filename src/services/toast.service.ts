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
      fillType: "filled",
      timeShown: 3000,
      hasDismissButton: true
    });
  }

}
