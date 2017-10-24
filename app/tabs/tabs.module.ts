import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AtividadesComponent } from "./atividades/atividades.component";
import { CaronasComponent } from "./caronas/caronas.component";
import { EstudoComponent } from "./estudo/estudo.component";
import { EventosComponent } from "./eventos/eventos.component";
import { SettingsComponent } from "./settings/settings.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        CaronasComponent,
        AtividadesComponent,
        EventosComponent,
        EstudoComponent,
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
