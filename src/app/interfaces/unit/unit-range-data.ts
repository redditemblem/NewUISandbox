import { Coordinate } from "../map/coordinate";

//Equivalent to UnitRangeData.cs
export interface UnitRangeData {
    movement?: Coordinate[],
    attack?: Coordinate[],
    utility?: Coordinate[]
}