import {StandardCollection} from "../models/collection/StandardCollection";
import {Container} from "../models/Container";
import {ContentSet} from "../models/content-set/ContentSet";
import {ContentItem} from "../models/content-item/ContentItem";
import {CollectionGrid} from "./collection-grid/CollectionGrid";
import {DisneyMagic} from "./disney-magic/DisneyMagic";
import {SetRef} from "../models/content-set/SetRef";

export class HomePage {
    readonly TILE_ASPECT_RATIO = 1.78;
    readonly IMAGE_NOT_FOUND_FILEPATH = 'assets/mickey.svg';

    readonly rootEl: HTMLElement;
    readonly grid: CollectionGrid;

    readonly disneyMagic: DisneyMagic;

    constructor() {
        this.rootEl = this.getRootElement();
        this.grid = new CollectionGrid();
        this.disneyMagic = new DisneyMagic();
    }

    async renderCollection(collection: StandardCollection): Promise<void> {
        document.body.scrollTo({left: 0, top: 0});

        await this.populateRefSets(collection);
        this.populateSets(collection);

        this.grid.registerGridEventHandlers();
        this.grid.focus();
    }

    async populateRefSets(collection: StandardCollection): Promise<void> {
        for (const container of collection.containers) {
            if (container.set.isRef()) {
                const setRef = container.set as SetRef;
                const results = await setRef.getItemsAsync()
                setRef.setItems(results);
            }
        }
    }

    populateSets(collection: StandardCollection): void {
        collection.containers.forEach((container, index) => {
            let section = document.createElement("section");

            this.appendContainerHeader(section, container);
            this.appendContentSet(section, container.set, index);

            this.rootEl.appendChild(section);
        });
    }

    private appendContainerHeader(parentEl: HTMLElement, container: Container): void {
        let headerSection = document.createElement("header");
        let header =  document.createElement("h1");

        header.innerHTML = this.disneyMagic.hideHtmlMickeyInText(container.getHeaderText(), 'hidden-mickey');

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
        img.alt = item.getItemTitle();
        img.tabIndex = 0;
        img.onerror = () => this.imageErrorHandler(img);
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
        img.src = this.IMAGE_NOT_FOUND_FILEPATH;
        img.height = img.width / this.TILE_ASPECT_RATIO;
    }
}