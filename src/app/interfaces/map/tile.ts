import { Coordinate } from "./coordinate";
import { TileUnitData } from "./tile-unit-data";
import { TileWarpData } from "./tile-warp-data";

//Equivalent to Tile.cs
export interface Tile {
    coordinate: Coordinate,
    terrainType: string,
    unitData: TileUnitData,
    warpData?: TileWarpData,
    tileObjectInstanceIDs?: number[],
    movCount?: number,
    atkCount?: number,
    utilCount?: number,
    tileObjCount?: number
}