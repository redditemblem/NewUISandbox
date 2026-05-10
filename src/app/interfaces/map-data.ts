import { MapObject } from "./map-object";
import { SystemInfo } from "./system/system-info";

//Equivalent to MapData.cs
export interface MapData {
    map: MapObject
    system: SystemInfo
}