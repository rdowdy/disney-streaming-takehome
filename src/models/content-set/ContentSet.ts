import {Type} from "class-transformer";
import {SetTitleContent} from "../title/set/SetTitleContent";
import {ContentItem} from "../content-item/ContentItem";

export class ContentSet {
    @Type(() => SetTitleContent)
    text: SetTitleContent;

    constructor() {
        this.text = new SetTitleContent();
    }

    getItems(): ContentItem[] {
        return [];
    }
}