import {Type} from "class-transformer";
import {TitleContent} from "./TitleContent";

export class TitleSet {
    @Type(() => TitleContent)
    default: TitleContent;

    constructor() {
        this.default = new TitleContent();
    }
}