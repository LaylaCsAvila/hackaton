import { Component, NgModule } from "@angular/core";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Router } from "@angular/router"

import { UserService } from "../../../shared/user/user.service";
import { User } from "../../../shared/user/user.model";
import { StudyGroup } from "./studyGroups.model";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "study-form",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./study-form.html"
})
export class StudyFormComponent {
    user: User;
    postTitle: string;
    observations: string;
    tags: string;
    periodicity: string;
    maxPeople: number;
    subject: string;
    major: string;


    constructor(
        private router: Router,
        private userService: UserService){        
        this.user = this.userService.user;
    }

    filterTags(tags:string): string[] {
        return tags.split(",");
    }

    submit() {
        console.log("this.tags");
        console.log(this.tags);
        let formatTags = this.filterTags(this.tags);
        console.log("formatTags");
        console.log(formatTags);
        let studyGroupItem = new StudyGroup(
            this.postTitle,
            this.observations,
            formatTags,
            this.user,
            this.periodicity,
            this.maxPeople,
            this.subject,
            this.major,
        )
        firebase.push(
            '/estudos/grupo',
            studyGroupItem
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
