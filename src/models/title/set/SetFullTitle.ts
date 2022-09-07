import {Type} from "class-transformer";
import {FullSetTitle} from "./FullSetTitle";

export class SetFullTitle {
    @Type(() => FullSetTitle)
    full: FullSetTitle;

    constructor() {
        this.full = new FullSetTitle();
    }
}