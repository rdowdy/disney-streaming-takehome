import {Type} from "class-transformer";
import {TitleContent} from "./TitleContent";

export class Title {
    @Type(() => TitleContent)
    default: TitleContent;

    constructor() {
        this.default = new TitleContent();
    }
}