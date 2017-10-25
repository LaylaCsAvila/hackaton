import { Component, NgModule } from "@angular/core";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { Router } from "@angular/router"

import { UserService } from "../../../shared/user/user.service";
import { User } from "../../../shared/user/user.model";
import { PrivateLessons } from "./privateLessons.model";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "private-form",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./private-form.html"
})
export class PrivateFormComponent {
    user: User;
    postTitle: string;
    observations: string;
    tags: string;
    periodicity: string;
    price: number;
    subject: string;
    major: string;
    wasTutor: Boolean;


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
        let privateLessonsItem = new PrivateLessons(
            this.postTitle,
            this.observations,
            formatTags,
            this.user,
            this.periodicity,
            this.price,
            this.subject,
            this.major,
            this.wasTutor,
        )
        firebase.push(
            '/estudos/grupo',
            privateLessonsItem
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
