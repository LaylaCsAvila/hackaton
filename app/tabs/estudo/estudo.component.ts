import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Estudo",
    moduleId: module.id,
    templateUrl: "./estudo.component.html"
})
export class EstudoComponent implements OnInit {

    area: number;
    /*  studyGroups = 0,
        lessonExchange = 1,
        privateLessons = 2,
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

    studyGroups() {
        this.area = 0;
    }

    lessonExchange() {
        this.area = 1;
    }

    privateLessons() {
        this.area = 2;
    }
}
