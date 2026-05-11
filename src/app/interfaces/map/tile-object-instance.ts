import { HealthPoints } from "../system/health-points";
import { Coordinate } from "./coordinate";

//Equivalent to TileObjectInstance.cs
export interface TileObjectInstance {
    id: number,
    name: string,
    anchorCoordinate: Coordinate,
    hp?: HealthPoints,
    attackRange: Coordinate[]
}