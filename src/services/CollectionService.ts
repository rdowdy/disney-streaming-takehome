import axios from "axios";
import {plainToInstance} from "class-transformer";
import {StandardCollection} from "../models/collection/StandardCollection";
import {ContentItem} from "../models/content-item/ContentItem";
import {CuratedSet} from "../models/content-set/CuratedSet";
import {TrendingSet} from "../models/content-set/TrendingSet";
import {PersonalizedCuratedSet} from "../models/content-set/PersonalizedCuratedSet";

export class CollectionService {
    readonly CollectionApiBaseUrl: string = 'https://cd-static.bamgrid.com/dp-117731241344';

    async getCollectionByName(name: string): Promise<StandardCollection> {
        let apiUrl = `${this.CollectionApiBaseUrl}/${name}.json`;
        return axios.get(apiUrl).then(res => {
            return plainToInstance(StandardCollection, res.data.data.StandardCollection)
        });
    }

    async getSetByRefId(refId: string): Promise<ContentItem[]> {
        let apiUrl = `${this.CollectionApiBaseUrl}/sets/${refId}.json`;
        return axios.get(apiUrl).then(res => this.getContentItemsFromJson(res.data.data));
    }

    private getContentItemsFromJson(json: any): ContentItem[] {
        if (json.CuratedSet) {
            return plainToInstance(CuratedSet, json.CuratedSet).items;
        } else if (json.TrendingSet) {
            return plainToInstance(TrendingSet, json.TrendingSet).items;
        } else if (json.PersonalizedCuratedSet) {
            return plainToInstance(PersonalizedCuratedSet, json.PersonalizedCuratedSet).items;
        } else {
            return [];
        }
    }
}

