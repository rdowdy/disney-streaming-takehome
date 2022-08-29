import {ContentSet} from "./ContentSet";

export class SetRef extends ContentSet {
    refId: string;

    constructor() {
        super();
        this.refId = "";
    }
}