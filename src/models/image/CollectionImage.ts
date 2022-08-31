import {plainToInstance, Transform} from "class-transformer";
import {Image} from "./Image";
import {DefaultImageContainer} from "./image-details/DefaultImageContainer";

export class CollectionImage implements Image {
    @Transform(({value}) => {
        let transformedObj = new Map<string, DefaultImageContainer>();
        Object.keys(value).forEach(aspectRatio => {
            transformedObj.set(aspectRatio, plainToInstance(DefaultImageContainer, value[aspectRatio]));
        })
        return transformedObj;
    })
    tile: Map<string, DefaultImageContainer>;

    constructor() {
        this.tile = new Map<string, DefaultImageContainer>();
    }
}