import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "Atividades",
    moduleId: module.id,
    templateUrl: "./atividades.component.html"
})
export class AtividadesComponent implements OnInit {
    
    area: number;
    /*  sports = 0,
        openCourses = 1,
    */

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        this.area = 4;
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }

    checkIf(area: number) {
        if (this.area == area) {
            return true;
        }
        else {
            return false;
        }
    }

    sports() {
        this.area = 0;
    }

    openCourses() {
        this.area = 1;
    }
}
