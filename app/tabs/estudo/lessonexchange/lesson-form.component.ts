import { Component, NgModule } from "@angular/core";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Router } from "@angular/router"

import { UserService } from "../../../shared/user/user.service";
import { User } from "../../../shared/user/user.model";
import { LessonExchange } from "./lessonExchange.model";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "lesson-form",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./lesson-form.html"
})
export class LessonFormComponent {
    user: User;
    postTitle: string;
    observations: string;
    tags: string;
    subject: string;
    major: string;
    classesOfInterest: string[];


    constructor(
        private router: Router,
        private userService: UserService){
        this.user = this.userService.user;
    }

    filterTags(tags:string): string[] {
        return tags.split(",");
    }

    submit() {
        let formatTags = this.filterTags(this.tags);
        let lessonExchangeItem = new LessonExchange(
            this.postTitle,
            this.observations,
            formatTags,
            this.user,
            this.subject,
            this.classesOfInterest,
            this.major
        )
        firebase.push(
            '/estudos/troca',
            lessonExchangeItem
        ).then(
            (res) => console.log(JSON.stringify(res)),
            (erro) => console.log(JSON.stringify(erro))
        )
        this.goBack();
    }

    goBack(){
        this.router.navigate(["/tabs"]);
    }

}
