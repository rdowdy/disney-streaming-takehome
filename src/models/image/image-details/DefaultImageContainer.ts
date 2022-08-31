import {ImageDetailsContainer} from "./ImageDetailsContainer";
import {Type} from "class-transformer";
import {ImageDetails} from "./ImageDetails";

export class DefaultImageContainer implements ImageDetailsContainer {
    @Type(() => ImageDetails)
    default: ImageDetails;

    constructor() {
        this.default = new ImageDetails();
    }

    getImageDetails(): ImageDetails {
        return this.default;
    }
}