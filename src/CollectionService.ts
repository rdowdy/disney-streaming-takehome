import axios from "axios";
import {plainToInstance, Type} from "class-transformer";

export class CollectionService {
    readonly CollectionApiBaseUrl: string = 'https://cd-static.bamgrid.com/dp-117731241344';

    async getCollectionByName(name: string): Promise<StandardCollection> {
        let apiUrl = `${this.CollectionApiBaseUrl}/${name}.json`;
        return axios.get(apiUrl).then(res => {
            return plainToInstance(StandardCollection, res.data.data.StandardCollection)
        });
    }
}

export class StandardCollection {
    @Type(() => Container)
    containers: Container[];

    constructor() {
        this.containers = [];
    }
}

export class Container {
    @Type(() => ContentSet)
    set: ContentSet;

    constructor() {
        this.set = new ContentSet();
    }
}

export class ContentSet {
    text: ContentText;
    type: string;

    constructor() {
        this.text = {};
        this.type = "";
    }

    isSetRef(): boolean {
        return this.type === "SetRef";
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