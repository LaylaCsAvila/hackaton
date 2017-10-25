import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AtividadesComponent } from "./atividades/atividades.component";
import { CaronasComponent } from "./caronas/caronas.component";
import { EstudoComponent } from "./estudo/estudo.component";
import { EventosComponent } from "./eventos/eventos.component";
import { EstandeComponent } from "./estande/estande.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import { BackendService } from "../shared/backend-service/backend.service"

// import { StudyFormComponent } from "./estudo/studygroups/study-form.component";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        TabsComponent,
        CaronasComponent,
        AtividadesComponent,
        EventosComponent,
        EstudoComponent,
        EstandeComponent,
        // StudyFormComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
