import './styles/index.scss';

import { CollectionService } from './CollectionService'

console.log('Hello');

new CollectionService()
    .getCollectionByName('home')
    .then(res => {
        console.log(res);
    });