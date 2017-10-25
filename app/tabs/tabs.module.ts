import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RadioButtonModule } from 'nativescript-radiobutton/angular'
import { AtividadesComponent } from "./atividades/atividades.component";
import { CaronasComponent } from "./caronas/caronas.component";
import { EstudoComponent } from "./estudo/estudo.component";
import { EventosComponent } from "./eventos/eventos.component";
import { EstandeComponent } from "./estande/estande.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import * as switchModule from "tns-core-modules/ui/switch";
// import { StudyFormComponent } from "./estudo/studygroups/study-form.component";
// import { PrivateFormComponent } from "./estudo/privatelessons/private-form.component";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule,
        NativeScriptFormsModule,
        RadioButtonModule,
    ],
    declarations: [
        TabsComponent,
        CaronasComponent,
        AtividadesComponent,
        EventosComponent,
        EstudoComponent,
        EstandeComponent,
        // StudyFormComponent,
        // ExchangeFormComponent,
        // PrivateFormComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
