import { Component, OnInit } from "@angular/core";

import firebase = require("nativescript-plugin-firebase");

import { LoginService } from "./login/login.service";

@Component({
    selector: "ns-app",
    providers: [ LoginService ],
    templateUrl: "app.component.html"
})


export class AppComponent {}
