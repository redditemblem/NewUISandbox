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

//Equivalent to CoordinateFormat enum
export enum CoordinateFormat {
    XY = 0,
    Alphanumerical = 1
}