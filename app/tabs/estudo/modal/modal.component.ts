import { Component, OnInit, NgModule, ViewContainerRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { BackendService } from "../../../shared/backend-service/backend.service";
import { StudyGroup } from "./../studygroups/studyGroups.model";
import { PrivateLessons } from "./../privatelessons/privateLessons.model";
import { LessonExchange } from "./../lessonexchange/lessonExchange.model";

import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Modal",
    providers: [BackendService],
    styleUrls: [],
    moduleId: module.id,
    templateUrl: "./modal.html"
})
export class ModalComponent implements OnInit {
    key: string

    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params.subscribe(
            (params) => this.key = params["key"]
        )
    }
}
