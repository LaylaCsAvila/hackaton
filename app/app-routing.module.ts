import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";
import { IntroComponent } from "./shared/intro/intro.component";

const routes: Routes = [
    { path: "", component:  IntroComponent },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
