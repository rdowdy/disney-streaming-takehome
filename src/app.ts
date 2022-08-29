import './styles/index.scss';
import 'reflect-metadata';

import {CollectionService} from './CollectionService'

function StartUp(): void {
    new CollectionService()
        .getCollectionByName('home')
        .then(res => {
            console.log(res);
            res.containers.forEach(container => {
                console.log(container);
                console.log(container.set.isSetRef());
            })
        });
}

window.addEventListener("load", StartUp);