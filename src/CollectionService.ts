import axios from "axios";

export class CollectionService {
    readonly CollectionApiBaseUrl: string = 'https://cd-static.bamgrid.com/dp-117731241344';

    async getCollectionByName(name: string): Promise<StandardCollection> {
        let apiUrl = `${this.CollectionApiBaseUrl}/${name}.json`;
        return axios.get(apiUrl).then(res => {
            return res.data.data.StandardCollection;
        });
    }
}

// Container types: ShelfContainer, BecauseYouSet, TrendingSet

// Containers contain sets
// Set types: CuratedSet, SetRef

// Sets contain items
// Item types: DmcSeries, DmcVideo, CollectionRef

// Reused types

export interface StandardCollection {
    containers: Container[];
}

export interface Container {
    set: ContentSet;
}

export class ContentSet {
    text: ContentText;
    type: string;

    constructor() {
        this.text = {};
        this.type = "";
    }
}
export class CuratedSet extends ContentSet {
    items: ContentItem[];

    constructor() {
        super();
        this.items = [];
    }
}
export class SetRef extends ContentSet {
    refId: string;

    constructor() {
        super();
        this.refId = "";
    }
}

export class ContentItem {}
export class DmcSeries extends ContentItem {}
export class DmcVideo extends ContentItem {}
export class StandardCollectionRef extends ContentItem {}

export interface ContentText {

}