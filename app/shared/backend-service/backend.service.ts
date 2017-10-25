import { Injectable } from "@angular/core";

import firebase = require("nativescript-plugin-firebase");
import { EstudoComponent } from "../../tabs/estudo/estudo.component"

@Injectable()

export class BackendService {

    result;

    constructor(){}

    onQueryEvent(result) {
    };


    getPost(address: string) {
        return firebase.query(
            this.onQueryEvent,
            address,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: 'major'
                },
                limit: {
                    type: firebase.QueryLimitType.LAST,
                    value: 10
                }
            }
        )
    }
}
