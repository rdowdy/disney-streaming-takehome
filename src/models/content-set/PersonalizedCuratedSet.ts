import {ContentSet} from "./ContentSet";
import {ContentItem} from "../content-item/ContentItem";
import {SetTitleContent} from "../title/set/SetTitleContent";
import {Type} from "class-transformer";
import {ContentItemsDiscriminator} from "../../shared/ContentItemsDiscriminator";

export class PersonalizedCuratedSet extends ContentSet {
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
        return this.items;
    }

    isRef(): boolean {
        return false;
    }
}