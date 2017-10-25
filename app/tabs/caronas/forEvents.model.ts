import { BasePost } from "../../shared/models/base-post";
import { User } from "../../shared/user/user.model";

export class forEvents extends BasePost {
    periodicity: string;
    price: number;
    maxPeople: number

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string, maxPeople: number, price: number){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
        this.price = price;
        this.maxPeople = maxPeople;
    }
}