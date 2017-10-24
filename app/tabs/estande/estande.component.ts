import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "Estande",
    moduleId: module.id,
    templateUrl: "./estande.component.html"
})
export class EstandeComponent implements OnInit {

    area: number;
    /*  foodAdvertisement = 0,
        exchange = 1,
        products = 2,
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

    foodAdvertisement() {
        this.area = 0;
    }

    exchange() {
        this.area = 1;
    }

    products() {
        this.area = 2;
    }
}
