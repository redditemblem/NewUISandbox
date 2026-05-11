import { MapObject } from "./map-object";
import { SystemInfo } from "../system/system-info";
import { Unit } from "../unit/unit";

//Equivalent to MapData.cs
export interface MapData {
    map?: MapObject
    system?: SystemInfo
    units?: Unit[],
    workbookId?: string,
    showConvoyLink?: boolean,
    showShopLink?: boolean
}