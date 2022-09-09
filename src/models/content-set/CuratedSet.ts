import {Type} from "class-transformer";
import {ContentSet} from "./ContentSet";
import {ContentItem} from "../content-item/ContentItem";
import {SetTitleContent} from "../title/set/SetTitleContent";
import {ContentItemsDiscriminator} from "../../shared/ContentItemsDiscriminator";

export class CuratedSet extends ContentSet {
    @Type(() => ContentItem, ContentItemsDiscriminator)
    items: ContentItem[];

    @Type(() => SetTitleContent)
    text: SetTitleContent;

    constructor() {
        super();
        this.items = [];
        this.text = new SetTitleContent();
    }

    getItems(): ContentItem[] {
        return this.items;
    }

    isRef(): boolean {
        return false;
    }
}