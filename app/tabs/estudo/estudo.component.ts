import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BackendService } from "../../shared/backend-service/backend.service"
import { StudyGroup } from "./studygroups/studyGroups.model"

import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Estudo",
    providers: [BackendService],
    moduleId: module.id,
    templateUrl: "./estudo.component.html"
})
export class EstudoComponent implements OnInit {

    area: number;
    /*  studyGroups = 0,
        lessonExchange = 1,
        privateLessons = 2,
    */
    loadedPosts: StudyGroup[];

    constructor(
        private router: Router,
        private backendService: BackendService
    ) {}

    ngOnInit(): void {
        this.area = 4;
        this.loadedPosts = [];
    }

    testThisShit(){
        let it = null;
        this.backendService.getPost("/estudos/grupo").then(
            (res) => {
                let it = res.value;
                for (let key in it) {
                    let post = it[key];
                    let obj = new StudyGroup (
                        post.postTitle,
                        post.observations,
                        post.tags,
                        post.meta.user,
                        post.periodicity,
                        post.maxPeople,
                        post.subject,
                        post.major
                    )
                    console.log(JSON.stringify(post));
                    this.loadedPosts.push(obj);
                }
            }
        )
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
        this.router.navigate(["/group-form"])
    }

    lessonExchange() {
        this.area = 1;
    }

    privateLessons() {
        this.area = 2;
    }
}
