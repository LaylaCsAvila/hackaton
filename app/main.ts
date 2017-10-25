// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { Router } from "@angular/router";

import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");

import { Config } from "./shared/config"


firebase.init({
    onAuthStateChanged(data) {
        Config.isLogged = data.loggedIn;
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
