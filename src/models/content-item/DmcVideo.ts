import {ContentItem} from "./ContentItem";
import {Type} from "class-transformer";
import {ProgramImage} from "../image/ProgramImage";
import {VideoTitle} from "../title/video/VideoTitle";

export class DmcVideo extends ContentItem {
    @Type(() => ProgramImage)
    image: ProgramImage;

    @Type(() => VideoTitle)
    text: VideoTitle;

    constructor() {
        super();
        this.image = new ProgramImage();
        this.text = new VideoTitle();
    }

    getImageUrl(aspectRatio: string): string {
        return this.image.tile.get(aspectRatio)?.getImageDetails().default.url ?? "";
    }

    getItemTitle(): string {
        return this.text.title.full.series.default.content;
    }
}

