import { BasePost } from "../../shared/models/base-post";
import { User } from "../../shared/user/user.model";

export class forEveryday extends BasePost {
    periodicity: string;
    price: number;
    maxPeople: number;
    neighborhood: string[];
    

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string, maxPeople: number, price: number, neighborhood: string[]){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
        this.price = price;
        this.maxPeople = maxPeople;
        this.neighborhood = neighborhood;
    }
}