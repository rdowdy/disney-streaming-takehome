import './styles/index.scss';

import { CollectionService } from './CollectionService'

new CollectionService()
    .getCollectionByName('home')
    .then(res => {
        console.log(res);
    });