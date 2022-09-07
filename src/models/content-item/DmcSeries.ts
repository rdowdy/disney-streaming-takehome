import {ContentItem} from "./ContentItem";
import {Type} from "class-transformer";
import {SeriesImage} from "../image/SeriesImage";
import {SeriesTitle} from "../title/series/SeriesTitle";

export class DmcSeries extends ContentItem {
    @Type(() => SeriesImage)
    image: SeriesImage;

    @Type(() => SeriesTitle)
    text: SeriesTitle;

    constructor() {
        super();
        this.image = new SeriesImage();
        this.text = new SeriesTitle();
    }

    getImageUrl(aspectRatio: string): string {
        return this.image.tile.get(aspectRatio)?.getImageDetails().default.url ?? "";
    }

    getItemTitle(): string {
        return this.text.title.full.series.default.content;
    }
}

