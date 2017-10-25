import { BasePost } from "../../shared/models/base-post";
import { User } from "../../shared/user/user.model";

export class sports extends BasePost {
    periodicity: string;

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
    }
}