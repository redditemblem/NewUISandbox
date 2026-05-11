import { Coordinate } from "../map/coordinate";

//Equivalent to UnitLocationData.cs
export interface UnitLocationData { 
    coordinate: Coordinate,
    unitSize: number,
    isBackOfPair: boolean,
    pairedUnit?: string
}