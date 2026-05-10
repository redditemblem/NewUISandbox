import { StringDictionary } from "../dictionaries";
import { GambitRange } from "./gambit-range";

//Equivalent to Gambit.cs
export interface Gambit {
    name: string,
    spriteUrl: string,
    maxUses: number,
    utilizedStats: string[],
    range: GambitRange,
    stats: StringDictionary<number>,
    textFields: string[]
}