import { Injectable } from "@angular/core";

import firebase = require("nativescript-plugin-firebase");

import { User } from "./user.model";

@Injectable()
export class UserService {
    user: User;

    saveLoggedUser(userDB) {
        this.user = new User(userDB);
    }
}
