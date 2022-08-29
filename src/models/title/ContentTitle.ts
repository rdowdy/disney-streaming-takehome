import {Type} from "class-transformer";
import {FullTitle} from "./FullTitle";

export class ContentTitle {
    @Type(() => FullTitle)
    full: FullTitle;

    constructor() {
        this.full = new FullTitle();
    }
}