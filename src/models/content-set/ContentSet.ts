import {Type} from "class-transformer";
import {ContentText} from "../title/ContentText";

export class ContentSet {
    @Type(() => ContentText)
    text: ContentText;

    constructor() {
        this.text = new ContentText();
    }
}