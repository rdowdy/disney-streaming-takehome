import './styles/index.scss';
import 'reflect-metadata';

import {CollectionService} from './CollectionService'
import {HomePage} from "./HomePage";

async function StartUp(): Promise<void> {
    const result = await new CollectionService().getCollectionByName('home');
    new HomePage().renderCollection(result);
}

window.addEventListener("load", StartUp);