import {plainToInstance, Transform} from "class-transformer";
import {Image} from "./Image";
import {SeriesImageContainer} from "./image-details/SeriesImageContainer";

export class SeriesImage implements Image {
    @Transform(({value}) => {
        let transformedObj = new Map<string, SeriesImageContainer>();
        Object.keys(value).forEach(aspectRatio => {
            transformedObj.set(aspectRatio, plainToInstance(SeriesImageContainer, value[aspectRatio]));
        })
        return transformedObj;
    })
    tile: Map<string, SeriesImageContainer>;

    constructor() {
        this.tile = new Map<string, SeriesImageContainer>();
    }
}