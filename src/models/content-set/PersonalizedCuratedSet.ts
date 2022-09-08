import {ContentSet} from "./ContentSet";
import {ContentItem} from "../content-item/ContentItem";
import {SetTitleContent} from "../title/set/SetTitleContent";
import {Type} from "class-transformer";
import {ClassDiscriminators} from "../../shared/ClassDiscriminators";

export class PersonalizedCuratedSet extends ContentSet {
    @Type(() => SetTitleContent)
    text: SetTitleContent;

    @Type(() => ContentItem, ClassDiscriminators.ContentItems)
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