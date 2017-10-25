import { User } from "../../shared/user/user.model";
import { BasePost } from "../../shared/models/base-post"

export class academics extends BasePost {
    subject: string;
    major: string;
    price: number;
    periodicity: string;
    
    constructor(postTitle: string, observations: string, tags: string[],
        user: User, subject: string, price: number, periodicity: string, major: string){
        super(postTitle, observations, tags, user);
        this.subject = subject;
        this.price = price;
        this.periodicity = periodicity;
        this.major = major;
    }
}