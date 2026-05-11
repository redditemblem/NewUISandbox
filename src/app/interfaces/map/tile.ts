import { Coordinate } from "./coordinate";

//Equivalent to Tile.cs
export interface Tile {
    coordinate: Coordinate,
    neighbors: Tile[]
}