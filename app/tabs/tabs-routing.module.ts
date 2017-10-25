import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StudyFormComponent } from "./estudo/studygroups/study-form.component";
import { TabsComponent } from "./tabs.component";

const routes: Routes = [
    { path: "", component: TabsComponent },
    // { path: "group-form", component: StudyFormComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
