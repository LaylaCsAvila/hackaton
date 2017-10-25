import { User } from "../../shared/user/user.model";

export class lessonExchange {
    owner: User;
    postTitle: string;
    subject: string;
    text: string;
    tags: string[];
}
