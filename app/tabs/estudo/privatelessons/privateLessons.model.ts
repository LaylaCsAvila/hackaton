import { BasePost } from "../../../shared/models/base-post";
import { User } from "../../../shared/user/user.model";

export class PrivateLessons extends BasePost {

    periodicity: string;
    price: number;
    subject: string;
    major: string;

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string, price: number, subject: string, major: string){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
        this.price = price;
        this.subject = subject;
        this.major = major;
    }
}
