import axios from "axios";
import {plainToInstance} from "class-transformer";
import {StandardCollection} from "./models/collection/StandardCollection";

export class CollectionService {
    readonly CollectionApiBaseUrl: string = 'https://cd-static.bamgrid.com/dp-117731241344';

    async getCollectionByName(name: string): Promise<StandardCollection> {
        let apiUrl = `${this.CollectionApiBaseUrl}/${name}.json`;
        return axios.get(apiUrl).then(res => {
            console.log(res.data.data);
            return plainToInstance(StandardCollection, res.data.data.StandardCollection)
        });
    }
}

