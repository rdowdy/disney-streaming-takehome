import {Type} from "class-transformer";
import {Title} from "../Title";

export class SeriesFullSeriesTitle {
    @Type(() => Title)
    series: Title;

    constructor() {
        this.series = new Title();
    }
}