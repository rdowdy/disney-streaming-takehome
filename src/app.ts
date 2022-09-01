import './styles/index.scss';
import 'reflect-metadata';

import {CollectionService} from './CollectionService'
import {ContentRenderer} from "./ContentRenderer";

async function StartUp(): Promise<void> {
    const result = await new CollectionService().getCollectionByName('home');
    new ContentRenderer().renderCollection(result);
}

window.addEventListener("load", StartUp);