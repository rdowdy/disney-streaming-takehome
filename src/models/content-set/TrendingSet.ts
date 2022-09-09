import {ContentSet} from "./ContentSet";
import {SetTitleContent} from "../title/set/SetTitleContent";
import {Type} from "class-transformer";
import {ContentItem} from "../content-item/ContentItem";
import {ContentItemsDiscriminator} from "../../shared/ContentItemsDiscriminator";

export class TrendingSet extends ContentSet {
    @Type(() => SetTitleContent)
    text: SetTitleContent;

    @Type(() => ContentItem, ContentItemsDiscriminator)
    items: ContentItem[];

    constructor() {
        super();
        this.text = new SetTitleContent();
        this.items = [];
    }

    getItems(): ContentItem[] {
        return [];
    }

    isRef(): boolean {
        return false;
    }

}