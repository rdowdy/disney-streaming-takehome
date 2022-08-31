import {Type} from "class-transformer";
import {SetRef} from "./content-set/SetRef";
import {CuratedSet} from "./content-set/CuratedSet";
import {ContentSet} from "./content-set/ContentSet";

export class Container {
    @Type(() => ContentSet, {
        discriminator: {
            property: 'type',
            subTypes: [
                {value: CuratedSet, name: 'CuratedSet'},
                {value: SetRef, name: 'SetRef'}
            ]
        }
    })
    set: ContentSet;

    constructor() {
        this.set = new ContentSet();
    }

    getHeaderText(): string {
        return this.set.text.title.full.set.default.content;
    }
}