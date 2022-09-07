import {Type} from "class-transformer";
import {SeriesFullSeriesTitle} from "./SeriesFullSeriesTitle";

export class SeriesFullTitle {
    @Type(() => SeriesFullSeriesTitle)
    full: SeriesFullSeriesTitle;

    constructor() {
        this.full = new SeriesFullSeriesTitle();
    }
}