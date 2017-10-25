import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { isAndroid } from "platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import firebase = require("nativescript-plugin-firebase");
import { Config } from "../config";

@Component({
    selector: "intro",
    moduleId: module.id,
    templateUrl: "./intro.component.html",
    styleUrls: []
})
export class IntroComponent implements OnInit {

    constructor(
        private router: Router
    ){}

    ngOnInit(){
        if (Config.isLogged) {
            this.router.navigate(["/tabs"]);
        }
        else {
            this.router.navigate(["login"])
        }
    }
}
