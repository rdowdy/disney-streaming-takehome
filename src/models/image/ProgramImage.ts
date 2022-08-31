import {plainToInstance, Transform} from "class-transformer";
import {Image} from "./Image";
import {ProgramImageContainer} from "./image-details/ProgramImageContainer";

export class ProgramImage implements Image {
    @Transform(({value}) => {
        let transformedObj = new Map<string, ProgramImageContainer>();
        Object.keys(value).forEach(aspectRatio => {
            transformedObj.set(aspectRatio, plainToInstance(ProgramImageContainer, value[aspectRatio]));
        })
        return transformedObj;
    })
    tile: Map<string, ProgramImageContainer>;

    constructor() {
        this.tile = new Map<string, ProgramImageContainer>();
    }
}