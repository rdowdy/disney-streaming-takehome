import {Type} from "class-transformer";
import {ContentSet, EmptyContentSet} from "./content-set/ContentSet";
import {ClassDiscriminators} from "../shared/ClassDiscriminators";

export class Container {
    @Type(() => ContentSet, ClassDiscriminators.ContentSet)
    set: ContentSet;

    constructor() {
        this.set = new EmptyContentSet();
    }

    getHeaderText(): string {
        return this.set.text.title.full.set.default.content;
    }
}