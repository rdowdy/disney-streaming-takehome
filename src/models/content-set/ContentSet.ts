import {Type} from "class-transformer";
import {ContentText} from "../title/ContentText";
import {ContentItem} from "../content-item/ContentItem";

export class ContentSet {
    @Type(() => ContentText)
    text: ContentText;

    constructor() {
        this.text = new ContentText();
    }

    getItems(): ContentItem[] {
        return [];
    }
}