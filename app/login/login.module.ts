import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LoginComponent } from './login.component';
import { LoginService } from "./login.service";
import { UserService } from "../shared/user/user.service";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
    ],
    providers: [LoginService, UserService, ],
    declarations: [
        LoginComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
