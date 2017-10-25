import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";
import { IntroComponent } from "./shared/intro/intro.component";
import { StudyFormComponent } from "./tabs/estudo/studygroups/study-form.component";
import { LessonFormComponent } from "./tabs/estudo/lessonexchange/lesson-form.component";
import { PrivateFormComponent } from "./tabs/estudo/privatelessons/private-form.component";

const routes: Routes = [
    { path: "", component:  IntroComponent },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" },
    { path: "login", component: LoginComponent },
    { path: "group-form", component: StudyFormComponent },
    { path: "exchange-form", component: LessonFormComponent },
    { path: "private-form", component: PrivateFormComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
