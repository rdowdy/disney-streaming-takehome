import './styles/index.scss';
import 'reflect-metadata';

import {CollectionService} from './CollectionService'

function StartUp(): void {
    new CollectionService()
        .getCollectionByName('home')
        .then(res => {
            res.containers.forEach(container => {
                console.log(container.set.text.title.full.set.default.content);
                container.set.getItems().forEach(item => {
                    console.log(item.getImageUrl("1.78"))
                })
            })
        });
}

window.addEventListener("load", StartUp);