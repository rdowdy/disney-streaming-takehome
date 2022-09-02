export class CollectionGrid {
    readonly grid: GridItem[][];
    focusedElement: Coordinate;

    constructor() {
        this.grid = [[]];
        this.focusedElement = new Coordinate(0, 0);
    }

    appendElementToRow(row: number, element: HTMLElement): void {
        if (this.grid[row] === undefined) {
            this.grid[row] = [];
        }

        this.grid[row].push(new GridItem(element));
    }

    registerGridEventHandlers(): void {
        const directionMap: {[key: string]: Coordinate} = {
            "ArrowUp": new Coordinate(0, -1),
            "ArrowDown": new Coordinate(0, 1),
            "ArrowLeft": new Coordinate(-1, 0),
            "ArrowRight": new Coordinate(1, 0)
        };

        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            if (directionMap[ev.key]) {
                ev.preventDefault();
                const direction = directionMap[ev.key];
                this.focus(
                    direction.x + this.focusedElement.x,
                    direction.y + this.focusedElement.y
                );
            }
        })
    }

    focus(x: number, y: number): void {
        if (y < 0) {
            y = this.grid.length - 1;
        }

        if (y >= this.grid.length) {
            y = 0;
        }

        if (x < 0) {
            x = this.grid[y].length - 1;
        }

        if (x >= this.grid[y].length) {
            x = 0;
        }

        this.focusedElement = new Coordinate(x, y);

        let element = this.grid[y][x];
        element?.item.focus();
    }
}

export class GridItem {
    item: HTMLElement;

    constructor(item: HTMLElement) {
        this.item = item;
    }
}

export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
