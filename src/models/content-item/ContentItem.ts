import {Image} from "../image/Image";

export abstract class ContentItem {
    abstract image: Image;
    abstract getImageUrl(aspectRatio: string): string;
}


