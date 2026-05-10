import { StringDictionary } from "../dictionaries";

//Equivalent to TerrainTypeStats.cs
export interface TerrainTypeStats {
    hpModifier: number,
    combatStatModifiers: StringDictionary<number>,
    statModifiers: StringDictionary<number>,
    movementCosts: StringDictionary<number>,
    affiliationNames?: string[]
}