import {Image} from "../image/Image";

// This is an abstract class because class-transformer requires value types in @Type declarations
export abstract class ContentItem {
    abstract image: Image;
    // abstract text:
    abstract getImageUrl(aspectRatio: string): string;
    abstract getItemTitle(): string;
}


