import { User } from "../../shared/user/user.model";

export class privateLessons {
    owner: User;
    postTitle: string;
    periodicity: string;
    subject: string;
    text: string;
    tags: string[];
}
