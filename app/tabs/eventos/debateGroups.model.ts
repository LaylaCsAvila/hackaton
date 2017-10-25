import { User } from "../../shared/user/user.model";
import { BasePost } from "../../shared/models/base-post"

export class debateGroups extends BasePost {
    periodicity: string;
    maxPeople: number;
    

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string, maxPeople: number){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
        this.maxPeople = maxPeople;
    }
}