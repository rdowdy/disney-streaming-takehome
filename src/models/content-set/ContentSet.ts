import {SetTitleContent} from "../title/set/SetTitleContent";
import {ContentItem} from "../content-item/ContentItem";

export abstract class ContentSet {
    abstract text: SetTitleContent;
    abstract items: ContentItem[];
    abstract getItems(): ContentItem[];
    abstract isRef(): boolean;
}

export class EmptyContentSet extends ContentSet {
    text = new SetTitleContent();
    items = [];

    constructor() {
        super();
        this.text = new SetTitleContent();
    }


    getItems(): ContentItem[] {
        return this.items;
    }

    isRef(): boolean {
        return false;
    }

}