import { StringDictionary } from "../dictionaries";
import { TileObjectRange } from "./tile-object-range";

//Equivalent to TileObject.cs
export interface TileObject {
    name: string
    spriteUrl: string,
    size: number,
    layer: TileObjectLayer,
    range: TileObjectRange,
    hpModifier: number,
    combatStatModifiers: StringDictionary<number>,
    statModifiers: StringDictionary<number>,
    textFields: string[]
}

export enum TileObjectLayer {
    Below = 0,
    Above = 1
}