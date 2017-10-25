import { MetaData } from "./meta";
import { User } from "../user/user.model"
import { Comment } from "./comment.model";

export class BasePost {
    postTitle: string;
    meta: MetaData;
    observations: string;
    tags: string[];
    comments: Comment[];
    constructor( postTitle: string, observations: string,
        tags: string[], user: User){
        this.postTitle = postTitle;
        this.meta = new MetaData(user);
        this.observations = observations;
        this.tags = tags;
    }
}
