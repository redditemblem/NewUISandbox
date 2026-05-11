import { CoordinateFormat } from "./coordinate";

//Equivalent to MapConstantsConfig.cs
export interface MapConstants {
    tileSize: number,
    hasHeaderTopLeft: boolean,
    HasHeaderBottomRight: boolean,
    coordinateFormat: CoordinateFormat,
    calculateRanges: boolean,
    calculatePairedUnitRanges: boolean,
    itemMaxRangeAllowedForCalculation: number,
    unitMovementStatName: string
}