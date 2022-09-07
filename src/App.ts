import './styles/index.scss';
import 'reflect-metadata';

import {CollectionService} from './services/CollectionService'
import {HomePage} from "./features/HomePage";

export class App {
    async StartUp(): Promise<void> {
        const result = await new CollectionService().getCollectionByName('home');
        new HomePage().renderCollection(result);
    }
}

window.addEventListener("load", new App().StartUp);