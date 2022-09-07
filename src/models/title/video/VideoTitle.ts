import {Type} from "class-transformer";
import {VideoFullTitle} from "./VideoFullTitle";

export class VideoTitle {
    @Type(() => VideoFullTitle)
    title: VideoFullTitle;

    constructor() {
        this.title = new VideoFullTitle();
    }

}