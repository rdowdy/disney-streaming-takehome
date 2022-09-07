import {ContentItem} from "./ContentItem";
import {Type} from "class-transformer";
import {CollectionImage} from "../image/CollectionImage";
import {CollectionTitle} from "../title/collection/CollectionTitle";

export class StandardCollectionRef extends ContentItem {
    @Type(() => CollectionImage)
    image: CollectionImage;

    @Type(() => CollectionTitle)
    text: CollectionTitle;

    constructor() {
        super();
        this.image = new CollectionImage();
        this.text = new CollectionTitle();
    }

    getImageUrl(aspectRatio: string): string {
        return this.image.tile.get(aspectRatio)?.getImageDetails().default.url ?? "";
    }

    getItemTitle(): string {
        return this.text.title.full.collection.default.content;
    }
}

