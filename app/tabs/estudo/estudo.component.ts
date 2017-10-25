import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

    constructor(
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.area = 4;
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

    studyGroupForm() {
        console.log("yay");
        this.router.navigate(["/group-form"])
    }

    lessonExchange() {
        this.area = 1;
    }

    privateLessons() {
        this.area = 2;
    }
}
