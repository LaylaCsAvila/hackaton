import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { IntroComponent } from "./shared/intro/intro.component";
import { StudyFormComponent } from "./tabs/estudo/studygroups/study-form.component";
import { LessonFormComponent } from "./tabs/estudo/lessonexchange/lesson-form.component";
import { PrivateFormComponent } from "./tabs/estudo/privatelessons/private-form.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        LoginModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        AppComponent,
        IntroComponent,
        StudyFormComponent,
        LessonFormComponent,
        PrivateFormComponent,
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
