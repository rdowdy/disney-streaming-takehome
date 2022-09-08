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
        return axios.get(apiUrl).then(res => {
            console.log(res.data.data);

            if (res.data.data.CuratedSet) {
                return plainToInstance(CuratedSet, res.data.data.CuratedSet).items;
            } else if (res.data.data.TrendingSet) {
                return plainToInstance(TrendingSet, res.data.data.TrendingSet).items;
            } else if (res.data.data.PersonalizedCuratedSet) {
                return plainToInstance(PersonalizedCuratedSet, res.data.data.PersonalizedCuratedSet).items;
            } else {
                return [];
            }
        });
    }
}

