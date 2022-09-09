import {DmcSeries} from "../models/content-item/DmcSeries";
import {DmcVideo} from "../models/content-item/DmcVideo";
import {StandardCollectionRef} from "../models/content-item/StandardCollectionRef";
import {CuratedSet} from "../models/content-set/CuratedSet";
import {SetRef} from "../models/content-set/SetRef";

export class ClassDiscriminators {
    static ContentItems = {
        discriminator: {
            property: 'type',
            subTypes: [
                {value: DmcSeries, name: 'DmcSeries'},
                {value: DmcVideo, name: 'DmcVideo'},
                {value: StandardCollectionRef, name: 'StandardCollection'}
            ]
        }
    };

    static ContentSet = {
        discriminator: {
            property: 'type',
            subTypes: [
                {value: CuratedSet, name: 'CuratedSet'},
                {value: SetRef, name: 'SetRef'}
            ]
        }
    };
}