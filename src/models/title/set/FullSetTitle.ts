import {Type} from "class-transformer";
import {Title} from "../Title";

export class FullSetTitle {
    @Type(() => Title)
    set: Title;

    constructor() {
        this.set = new Title();
    }
}