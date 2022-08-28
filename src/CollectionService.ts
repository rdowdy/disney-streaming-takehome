import axios from "axios";

export class CollectionService {
    readonly CollectionApiBaseUrl: string = 'https://cd-static.bamgrid.com/dp-117731241344';

    async getCollectionByName(name: string): Promise<StandardCollection> {
        let apiUrl = `${this.CollectionApiBaseUrl}/${name}.json`;
        
        return axios.get(apiUrl).then(res => res.data.data.StandardCollection);
    }
}

export interface StandardCollection {
    containers: Container[];
}

export interface Container {
    
}