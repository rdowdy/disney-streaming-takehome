import {Type} from "class-transformer";
import {TitleSet} from "./TitleSet";

export class FullTitle {
    @Type(() => TitleSet)
    set: TitleSet;

    constructor() {
        this.set = new TitleSet();
    }
}