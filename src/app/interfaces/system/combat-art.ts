import { StringDictionary } from "../common/dictionaries";
import { CombatArtRange } from "./combat-art-range";

//Equivalent to CombatArt.cs
export interface CombatArt {
    name: string,
    spriteUrl?: string,
    weaponRank?: string,
    category?: string,
    utilizedStats?: string[],
    range: CombatArtRange,
    stats?: StringDictionary<number>,
    durabilityCost?: number,
    tags?: string[],
    textFields?: string[]
}