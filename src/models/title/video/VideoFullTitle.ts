import {Type} from "class-transformer";
import {VideoFullProgramTitle} from "./VideoFullProgramTitle";

export class VideoFullTitle {
    @Type(() => VideoFullProgramTitle)
    full: VideoFullProgramTitle;

    constructor() {
        this.full = new VideoFullProgramTitle();
    }
}