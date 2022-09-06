export class CollectionGrid {
    readonly grid: GridRow[];
    rovingRowIndex = 0;

    constructor() {
        this.grid = [new GridRow([])];
    }

    appendElementToRow(row: number, element: HTMLElement): void {
        if (this.grid[row] === undefined) {
            this.grid[row] = new GridRow([]);
        }

        this.grid[row].items.push(new GridItem(element));
    }

    registerGridEventHandlers(): void {
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            switch(ev.key) {
                case KeyCode.DOWN:
                    ev.preventDefault();
                    this.focusNextRow();
                    break;
                case KeyCode.UP:
                    ev.preventDefault();
                    this.focusPreviousRow();
                    break;
                case KeyCode.LEFT:
                    ev.preventDefault();
                    this.focusPreviousItem();
                    break;
                case KeyCode.RIGHT:
                    ev.preventDefault();
                    this.focusNextItem();
                    break;
            }
        })
    }

    focusNextRow(): void {
        this.rovingRowIndex++;

        if (this.rovingRowIndex >= this.grid.length) {
            this.rovingRowIndex = 0;
        }

        this.focus();
    }

    focusPreviousRow(): void {
        this.rovingRowIndex--;

        if (this.rovingRowIndex < 0) {
            this.rovingRowIndex = this.grid.length - 1;
        }

        this.focus();
    }

    focusNextItem(): void {
        const row = this.grid[this.rovingRowIndex];
        row.rovingItemIndex++;

        if (row.rovingItemIndex >= row.items.length) {
            row.rovingItemIndex = 0;
        }

        this.focus();
    }

    focusPreviousItem(): void {
        const row = this.grid[this.rovingRowIndex];
        row.rovingItemIndex--;

        if (row.rovingItemIndex < 0) {
            row.rovingItemIndex = row.items.length - 1;
        }

        this.focus();
    }

    focus(): void {
        const row = this.grid[this.rovingRowIndex];
        row.items[row.rovingItemIndex].item.focus();
    }
}

class GridItem {
    item: HTMLElement;

    constructor(item: HTMLElement) {
        this.item = item;
    }
}

class GridRow {
    items: GridItem[];
    rovingItemIndex: number;

    constructor(items: GridItem[], rovingIndex = 0) {
        this.items = items;
        this.rovingItemIndex = rovingIndex;
    }
}

const enum KeyCode {
    UP = "ArrowUp",
    DOWN = "ArrowDown",
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight"
}
