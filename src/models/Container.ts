import {Type} from "class-transformer";
import {ContentSet, EmptyContentSet} from "./content-set/ContentSet";
import {ContentSetDiscriminator} from "../shared/ContentSetDiscriminator";

export class Container {
    @Type(() => ContentSet, ContentSetDiscriminator)
    set: ContentSet;

    constructor() {
        this.set = new EmptyContentSet();
    }

    getHeaderText(): string {
        return this.set.text.title.full.set.default.content;
    }
}