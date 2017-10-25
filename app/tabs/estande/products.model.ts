import { User } from "../../shared/user/user.model";
import { BasePost } from "../../shared/models/base-post"

export class products extends BasePost {
    price: number;
    periodicity: string;
    

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, price: number, periodicity: string){
        super(postTitle, observations, tags, user);
        this.price = price;
        this.periodicity = periodicity;
    }
}