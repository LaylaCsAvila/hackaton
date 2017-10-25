import { BasePost } from "../../shared/models/base-post";
import { User } from "../../shared/user/user.model";

export class privateLessons extends BasePost {
    periodicity: string;
    subject: string;
    major: string;
    price: number;
    wasTutor: boolean;

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, periodicity: string, maxPeople: number, subject: string,
        major: string, price: number, wasTutor: boolean){
        super(postTitle, observations, tags, user);
        this.periodicity = periodicity;
        this.subject = subject;
        this.major = major;
        this.price = price;
        this.wasTutor = wasTutor;
    }
}
