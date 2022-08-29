import {ContentTitle} from "./ContentTitle";
import {Type} from "class-transformer";

export class ContentText {
    @Type(() => ContentTitle)
    title: ContentTitle;

    constructor() {
        this.title = new ContentTitle();
    }
}