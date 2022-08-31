import {ContentItem} from "./ContentItem";
import {Type} from "class-transformer";
import {ProgramImage} from "../image/ProgramImage";

export class DmcVideo extends ContentItem {
    @Type(() => ProgramImage)
    image: ProgramImage;

    constructor() {
        super();
        this.image = new ProgramImage();
    }

    getImageUrl(aspectRatio: string): string {
        return this.image.tile.get(aspectRatio)?.getImageDetails().default.url ?? "";
    }
}