import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Caronas",
    moduleId: module.id,
    templateUrl: "./caronas.component.html"
})
export class CaronasComponent implements OnInit {

    area: number;
    /*  forEvents = 0,
        forEveryday = 1
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

    forEvents() {
        this.area = 0;
    }

    forEveryday() {
        this.area = 1;
    }

}