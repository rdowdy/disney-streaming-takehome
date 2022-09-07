import {SetFullTitle} from "./SetFullTitle";
import {Type} from "class-transformer";

export class SetTitleContent {
    @Type(() => SetFullTitle)
    title: SetFullTitle;

    constructor() {
        this.title = new SetFullTitle();
    }
}