import './styles/index.scss';
import 'reflect-metadata';

import {CollectionService} from './CollectionService'
import {StandardCollection} from "./models/collection/StandardCollection";
import {ContentItem} from "./models/content-item/ContentItem";

function renderCollection(collection: StandardCollection): void {
    let rootEl = getRootElement();

    collection.containers.forEach(container => {
       let header =  window.document.createElement("h1");
       header.innerText = container.getHeaderText();
       rootEl.appendChild(header);

       let imageSetContainer = window.document.createElement("div");
       container.set.getItems().forEach(item => {
            renderItem(imageSetContainer, item);
       });
       imageSetContainer.classList.add("image-set");
       rootEl.appendChild(imageSetContainer);
    });
}

function renderItem(parentEl:HTMLElement, item: ContentItem) {
    let img = window.document.createElement("img");
    img.src = item.getImageUrl("1.78");
    img.onerror = () => {
        img.src = "https://via.placeholder.com/500x281";
    }
    parentEl.appendChild(img);
}

function getRootElement(): HTMLElement {
    let rootEl = window.document.getElementById("root");
    if (!rootEl) {
        throw Error("Document body is missing root element.");
    }
    return rootEl as HTMLElement;
}

async function StartUp(): Promise<void> {
    const result = await new CollectionService().getCollectionByName('home');
    console.log(result);
    renderCollection(result);
}

window.addEventListener("load", StartUp);