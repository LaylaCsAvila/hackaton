import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Eventos",
    moduleId: module.id,
    templateUrl: "./eventos.component.html"
})
export class EventosComponent implements OnInit {
    
    area: number;
    /*  academics = 0,
        cultureAndRecreation = 1,
        debateGroups = 2,
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
    
    academics() {
        this.area = 0;
    }
    
    cultureAndRecreation() {
        this.area = 1;
    }
    
    debateGroups() {
        this.area = 2;
    }
}
    
