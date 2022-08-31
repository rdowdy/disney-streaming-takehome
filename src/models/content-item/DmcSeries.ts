import {ContentItem} from "./ContentItem";
import {Type} from "class-transformer";
import {SeriesImage} from "../image/SeriesImage";

export class DmcSeries extends ContentItem {
    @Type(() => SeriesImage)
    image: SeriesImage;

    constructor() {
        super();
        this.image = new SeriesImage();
    }

    getImageUrl(aspectRatio: string): string {
        return this.image.tile.get(aspectRatio)?.getImageDetails().default.url ?? "";
    }
}