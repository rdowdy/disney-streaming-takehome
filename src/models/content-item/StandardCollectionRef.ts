import {ContentItem} from "./ContentItem";
import {Type} from "class-transformer";
import {CollectionImage} from "../image/CollectionImage";

export class StandardCollectionRef extends ContentItem {
    @Type(() => CollectionImage)
    image: CollectionImage;

    constructor() {
        super();
        this.image = new CollectionImage();
    }

    getImageUrl(aspectRatio: string): string {
        return this.image.tile.get(aspectRatio)?.getImageDetails().default.url ?? "";
    }
}