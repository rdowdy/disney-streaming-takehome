import {Type} from "class-transformer";
import {DefaultDetails} from "./DefaultDetails";

export class ImageDetails {
    @Type(() => DefaultDetails)
    default: DefaultDetails;

    constructor() {
        this.default = new DefaultDetails();
    }
}