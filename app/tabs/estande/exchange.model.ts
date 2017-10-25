import { User } from "../../shared/user/user.model";
import { BasePost } from "../../shared/models/base-post"

export class exchange extends BasePost {
    offeringProduct: string;
    seekingProduct: string[];

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, offeringProduct: string, seekingProduct: string[]){
        super(postTitle, observations, tags, user);
        this.offeringProduct = offeringProduct;
        this.seekingProduct = seekingProduct;
    }
}