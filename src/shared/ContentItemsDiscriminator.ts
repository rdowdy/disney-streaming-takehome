import {DmcSeries} from "../models/content-item/DmcSeries";
import {DmcVideo} from "../models/content-item/DmcVideo";
import {StandardCollectionRef} from "../models/content-item/StandardCollectionRef";

export const ContentItemsDiscriminator = {
    discriminator: {
        property: 'type',
        subTypes: [
            {value: DmcSeries, name: 'DmcSeries'},
            {value: DmcVideo, name: 'DmcVideo'},
            {value: StandardCollectionRef, name: 'StandardCollection'}
        ]
    }
}