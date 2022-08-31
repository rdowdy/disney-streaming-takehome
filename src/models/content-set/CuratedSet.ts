import {Type} from "class-transformer";
import {ContentSet} from "./ContentSet";
import {StandardCollectionRef} from "../content-item/StandardCollectionRef";
import {ContentItem} from "../content-item/ContentItem";
import {DmcSeries} from "../content-item/DmcSeries";
import {DmcVideo} from "../content-item/DmcVideo";

export class CuratedSet extends ContentSet {
    @Type(() => ContentItem, {
        discriminator: {
            property: 'type',
            subTypes: [
                {value: DmcSeries, name: 'DmcSeries'},
                {value: DmcVideo, name: 'DmcVideo'},
                {value: StandardCollectionRef, name: 'StandardCollection'}
            ]
        }
    })
    items: ContentItem[];

    constructor() {
        super();
        this.items = [];
    }

    getItems(): ContentItem[] {
        return this.items;
    }
}