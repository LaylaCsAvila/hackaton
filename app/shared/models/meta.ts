import { User } from "../user/user.model";

export class MetaData {
    owner: User;
    date: Date;

    constructor(user: User) {
        this.owner = user;
        this.date = new Date();
    }
}
