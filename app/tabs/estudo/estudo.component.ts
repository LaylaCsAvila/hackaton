import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BackendService } from "../../shared/backend-service/backend.service";
import { StudyGroup } from "./studygroups/studyGroups.model";
import { PrivateLessons } from "./privatelessons/privateLessons.model";
import { LessonExchange } from "./lessonexchange/lessonExchange.model";

import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Estudo",
    providers: [BackendService],
    styleUrls: ["./estudo.component.css"],
    moduleId: module.id,
    templateUrl: "./estudo.component.html"
})
export class EstudoComponent implements OnInit {

    area: number;
    /*  studyGroups = 0,
        lessonExchange = 1,
        privateLessons = 2,
    */
    loadedPostsGroup: StudyGroup[];
    loadedPostsPrivate: PrivateLessons[];
    loadedPostsExchange: LessonExchange[];

    constructor(
        private router: Router,
        private backendService: BackendService
    ) {}

    ngOnInit(): void {
        this.area = 4;
        this.loadedPostsGroup = [];
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

    loadStudyGroup(){
        this.loadedPostsGroup = []
        this.backendService.getPost("/estudos/grupo").then(
            (res) => {
                let it = res.value;
                for (let key in it) {
                    let post = it[key];
                    let obj = new StudyGroup (
                        post.postTitle,
                        post.observations,
                        post.tags,
                        post.meta,
                        post.periodicity,
                        post.maxPeople,
                        post.subject,
                        post.major
                    )
                    console.log(JSON.stringify(post));
                    this.loadedPostsGroup.push(obj);
                }
            }
        )
    }

    lessonExchange() {
        this.area = 1;
    }

    lessonExchangeForm() {
        this.router.navigate(["/exchange-form"])
    }

    loadLessonExchange(){
        this.loadedPostsExchange = []
        this.backendService.getPost("/estudos/troca").then(
            (res) => {
                let it = res.value;
                for (let key in it) {
                    let post = it[key];
                    let obj = new LessonExchange (
                        post.postTitle,
                        post.observations,
                        post.tags,
                        post.meta,
                        post.subject,
                        post.classes,
                        post.major,
                    )
                    console.log(JSON.stringify(post));
                    this.loadedPostsExchange.push(obj);
                }
            }
        )
    }

    privateLessons() {
        this.area = 2;
    }

    privateLessonsForm() {
        this.router.navigate(["/private-form"])
    }

    loadPrivateLesson(){
        this.loadedPostsPrivate = []
        this.backendService.getPost("/estudos/particular").then(
            (res) => {
                let it = res.value;
                for (let key in it) {
                    let post = it[key];
                    let obj = new PrivateLessons (
                        post.postTitle,
                        post.observations,
                        post.tags,
                        post.meta,
                        post.periodicity,
                        post.price,
                        post.subject,
                        post.major,
                        post.wasTutor,
                    )
                    console.log(JSON.stringify(post));
                    this.loadedPostsPrivate.push(obj);
                }
            }
        )
    }
}
