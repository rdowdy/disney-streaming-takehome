import {StandardCollection} from "./models/collection/StandardCollection";
import {Container} from "./models/Container";
import {ContentSet} from "./models/content-set/ContentSet";
import {ContentItem} from "./models/content-item/ContentItem";
import {CollectionGrid} from "./CollectionGrid";

export class HomePage {
    readonly rootEl: HTMLElement;
    readonly grid: CollectionGrid;

    constructor() {
        this.rootEl = this.getRootElement();
        this.grid = new CollectionGrid();
    }

    renderCollection(collection: StandardCollection): void {
        collection.containers.forEach((container, index) => {
            this.appendContainerHeader(this.rootEl, container)
            this.appendContentSet(this.rootEl, container.set, index);
        });

        console.log(this.grid);

        this.grid.registerGridEventHandlers();
        this.grid.focus(0, 0);
    }

    private appendContainerHeader(parentEl: HTMLElement, container: Container): void {
        let header =  window.document.createElement("h1");
        header.innerText = container.getHeaderText();
        parentEl.appendChild(header);
    }

    private appendContentSet(parentEl: HTMLElement, set: ContentSet, index: number): void {
        let imageSetContainer = window.document.createElement("div");
        set.getItems().forEach(item => {
            this.appendContentItem(imageSetContainer, item, index);
        });
        imageSetContainer.classList.add("image-set");
        parentEl.appendChild(imageSetContainer);
    }

    private appendContentItem(parentEl:HTMLElement, item: ContentItem, index: number) {
        let img = window.document.createElement("img");
        img.src = item.getImageUrl("1.78");
        img.tabIndex = 0;
        img.onerror = () => img.src = "https://via.placeholder.com/500x281";
        parentEl.appendChild(img);

        this.grid.appendElementToRow(index, img);
    }

    private getRootElement(): HTMLElement {
        let rootEl = window.document.getElementById("root");
        if (!rootEl) {
            throw Error("Document body is missing root element.");
        }
        return rootEl as HTMLElement;
    }
}