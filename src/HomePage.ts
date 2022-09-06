import {StandardCollection} from "./models/collection/StandardCollection";
import {Container} from "./models/Container";
import {ContentSet} from "./models/content-set/ContentSet";
import {ContentItem} from "./models/content-item/ContentItem";
import {CollectionGrid} from "./CollectionGrid";

export class HomePage {
    readonly TILE_ASPECT_RATIO = 1.78;

    readonly rootEl: HTMLElement;
    readonly grid: CollectionGrid;

    constructor() {
        this.rootEl = this.getRootElement();
        this.grid = new CollectionGrid();
    }

    renderCollection(collection: StandardCollection): void {
        collection.containers.forEach((container, index) => {
            let section = document.createElement("section");
            this.appendContainerHeader(section, container);
            this.appendContentSet(section, container.set, index);
            this.rootEl.appendChild(section);
        });

        this.grid.registerGridEventHandlers();
        this.grid.focus();
    }

    private appendContainerHeader(parentEl: HTMLElement, container: Container): void {
        let headerSection = document.createElement("header");
        let header =  document.createElement("h1");
        header.innerText = container.getHeaderText();
        headerSection.appendChild(header);
        parentEl.appendChild(headerSection);
    }

    private appendContentSet(parentEl: HTMLElement, set: ContentSet, index: number): void {
        let imageSetContainer = window.document.createElement("ul");
        set.getItems().forEach(item => {
            let li = document.createElement("li");
            this.appendContentItem(li, item, index);
            imageSetContainer.appendChild(li);
        });
        imageSetContainer.classList.add("image-set");
        parentEl.appendChild(imageSetContainer);
    }

    private appendContentItem(parentEl:HTMLElement, item: ContentItem, index: number) {
        let img = window.document.createElement("img");
        img.src = item.getImageUrl(`${this.TILE_ASPECT_RATIO}`);
        img.tabIndex = 0;
        img.onerror = () => this.imageErrorHandler(img)
        img.setAttribute("loading", "lazy");
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

    private imageErrorHandler(img: HTMLImageElement): void {
        img.src = "assets/mickey.svg";
        img.height = img.width / this.TILE_ASPECT_RATIO;
    }
}