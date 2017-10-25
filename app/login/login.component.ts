import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LoginService } from "./login.service";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    email: string;
    senha: string;

    constructor(
        private loginService: LoginService
    ){}

    login() {
        this.loginService.login(this.email, this.senha)
    }
}
