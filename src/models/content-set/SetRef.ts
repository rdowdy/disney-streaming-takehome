import {ContentSet} from "./ContentSet";
import {Type} from "class-transformer";
import {SetTitleContent} from "../title/set/SetTitleContent";
import {ContentItem} from "../content-item/ContentItem";
import {CollectionService} from "../../services/CollectionService";

export class SetRef extends ContentSet {
    collectionService: CollectionService;

    @Type(() => SetTitleContent)
    text: SetTitleContent;

    refId: string;
    items: ContentItem[];

    constructor() {
        super();
        this.collectionService = new CollectionService();
        this.refId = "";
        this.text = new SetTitleContent();
        this.items = [];
    }

    getItems(): ContentItem[] {
        return this.items;
    }

    setItems(items: ContentItem[]): void {
        this.items = items;
    }

    getItemsAsync(): Promise<ContentItem[]> {
        return this.collectionService.getSetByRefId(this.refId);
    }

    isRef(): boolean {
        return this.items.length === 0;
    }
}