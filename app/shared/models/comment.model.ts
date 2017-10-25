import { MetaData } from "./meta";
import { User } from "../user/user.model";

export class Comment {
    meta: MetaData;
    message: string;

    constructor(user: User, message: string) {
        this.meta = new MetaData(user);
        this.message = message;
    }
}
