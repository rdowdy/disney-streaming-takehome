import {CuratedSet} from "../models/content-set/CuratedSet";
import {SetRef} from "../models/content-set/SetRef";

export const ContentSetDiscriminator = {
    discriminator: {
        property: 'type',
        subTypes: [
            {value: CuratedSet, name: 'CuratedSet'},
            {value: SetRef, name: 'SetRef'}
        ]
    }
};