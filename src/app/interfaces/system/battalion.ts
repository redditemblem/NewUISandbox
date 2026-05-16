import { StringDictionary } from "../common/dictionaries";

//Equivalent to Battalion.cs
export interface Battalion {
    name: string,
    gambit?: string,
    spriteURL?: string,
    maxEndurance?: number,
    rank?: string,
    stats?: StringDictionary<number>,
    statModifiers?: StringDictionary<number>,
    textFields?: string[]
}