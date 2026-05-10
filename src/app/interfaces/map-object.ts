import { MapConstants } from "./map-constants";
import { MapSegment } from "./map-segment";

//Equivalent to MapObj.cs
export interface MapObject {
    constants: MapConstants,
    chapterPostURL: string,
    segments: MapSegment[]
}