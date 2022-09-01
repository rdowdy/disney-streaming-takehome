import {StandardCollection} from "./models/collection/StandardCollection";
import {Container} from "./models/Container";
import {ContentSet} from "./models/content-set/ContentSet";
import {ContentItem} from "./models/content-item/ContentItem";

export class ContentRenderer {
    renderCollection(collection: StandardCollection): void {
        let rootEl = this.getRootElement();

        collection.containers.forEach(container => {
            this.appendContainerHeader(rootEl, container)
            this.appendContentSet(rootEl, container.set);
        });
    }

    private appendContainerHeader(parentEl: HTMLElement, container: Container) {
        let header =  window.document.createElement("h1");
        header.innerText = container.getHeaderText();
        parentEl.appendChild(header);
    }

    private appendContentSet(parentEl: HTMLElement, set: ContentSet) {
        let imageSetContainer = window.document.createElement("div");
        set.getItems().forEach(item => {
            this.appendContentItem(imageSetContainer, item);
        });
        imageSetContainer.classList.add("image-set");
        parentEl.appendChild(imageSetContainer);
    }

    private appendContentItem(parentEl:HTMLElement, item: ContentItem) {
        let img = window.document.createElement("img");
        img.src = item.getImageUrl("1.78");
        img.onerror = () => {
            img.src = "https://via.placeholder.com/500x281";
        }
        parentEl.appendChild(img);
    }

    private getRootElement(): HTMLElement {
        let rootEl = window.document.getElementById("root");
        if (!rootEl) {
            throw Error("Document body is missing root element.");
        }
        return rootEl as HTMLElement;
    }
}