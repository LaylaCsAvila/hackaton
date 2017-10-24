import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    constructor(){

    }

    login() {
        console.log("esperando pelo backend");
    }
}
