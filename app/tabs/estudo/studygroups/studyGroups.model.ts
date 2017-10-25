import { BasePost } from "../../../shared/models/base-post";
import { User } from "../../../shared/user/user.model";

export class StudyGroup extends BasePost {

    periodicity: string;
    maxPeople: number;
    subject: string;
    major: string;

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string, maxPeople: number, subject: string,
        major: string){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
        this.maxPeople = maxPeople;
        this.subject = subject;
        this.major = major;
    }
}
