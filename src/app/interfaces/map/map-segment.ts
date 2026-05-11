import { NumberDictionary } from "../common/dictionaries";
import { Range } from "../common/range";
import { Tile } from "./tile";
import { TileObjectInstance } from "./tile-object-instance";

//Equivalent to MapSegment.cs
export interface MapSegment {
    imageURL: string,
    title: string,
    heightInPixels: number,
    widthInPixels: number,
    heightInTiles: number,
    widthInTiles: number,
    horizontalTileRangeWithinMap: Range,
    tiles: Tile[][],
    tileObjectInstances: NumberDictionary<TileObjectInstance>
}