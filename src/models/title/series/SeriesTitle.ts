import {Type} from "class-transformer";
import {SeriesFullTitle} from "./SeriesFullTitle";

export class SeriesTitle {
    @Type(() => SeriesFullTitle)
    title: SeriesFullTitle;

    constructor() {
        this.title = new SeriesFullTitle();
    }

}