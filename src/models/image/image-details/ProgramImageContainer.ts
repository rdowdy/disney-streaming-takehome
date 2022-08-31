import {ImageDetailsContainer} from "./ImageDetailsContainer";
import {Type} from "class-transformer";
import {ImageDetails} from "./ImageDetails";

export class ProgramImageContainer implements ImageDetailsContainer {
    @Type(() => ImageDetails)
    program: ImageDetails;

    constructor() {
        this.program = new ImageDetails();
    }

    getImageDetails(): ImageDetails {
        return this.program;
    }
}