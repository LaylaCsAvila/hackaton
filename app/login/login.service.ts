import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase = require("nativescript-plugin-firebase");

import { UserService } from "../shared/user/user.service";

@Injectable()
export class LoginService {

    isLogged: boolean;

    constructor(
        private router: Router,
        private userService: UserService,
    ){}

    handleLoginChange(data) {
        if(data.isLogged) {
            this.router.navigate(["/tabs"]);
        }
        else {
            this.router.navigate(["login"]);
        }
    }

    login(uffMail: string, senha: string) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions:{
            email: uffMail,
            password: senha }
    })
        .then(
            (res) => this.successfulLoginChores(res),
            (erro) => console.log(JSON.stringify(erro))
        )
    }

    logout(){
        firebase.logout();
    }

    successfulLoginChores(data: any): void{
        this.userService.saveLoggedUser(data);
        this.router.navigate(["/tabs"])
    }
}
