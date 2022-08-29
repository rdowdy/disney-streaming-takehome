import {Type} from "class-transformer";
import {Container} from "../Container";

export class StandardCollection {
    @Type(() => Container)
    containers: Container[];

    constructor() {
        this.containers = [];
    }
}