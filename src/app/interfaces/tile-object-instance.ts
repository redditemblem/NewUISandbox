import { Coordinate } from "./coordinate";
import { HealthPoints } from "./health-points";

//Equivalent to TileObjectInstance.cs
export interface TileObjectInstance {
    id: number,
    name: string,
    anchorCoordinate: Coordinate,
    hp?: HealthPoints,
    attackRange: Coordinate[]
}