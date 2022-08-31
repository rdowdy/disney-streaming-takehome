import {ImageDetailsContainer} from "./ImageDetailsContainer";
import {Type} from "class-transformer";
import {ImageDetails} from "./ImageDetails";

export class SeriesImageContainer implements ImageDetailsContainer {
    @Type(() => ImageDetails)
    series: ImageDetails;

    constructor() {
        this.series = new ImageDetails();
    }

    getImageDetails(): ImageDetails {
        return this.series;
    }
}