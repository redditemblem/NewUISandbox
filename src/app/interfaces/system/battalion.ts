import { StringDictionary } from "../dictionaries";

//Equivalent to Battalion.cs
export interface Battalion {
    name: string,
    gambit: string,
    spriteUrl: string,
    maxEndurance: number,
    rank: string,
    stats: StringDictionary<number>,
    statModifiers: StringDictionary<number>,
    textFields: string[]
}