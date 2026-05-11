import { StringDictionary } from "./dictionaries";

//Equivalent to ModifiedStatValue.cs
export interface ModifiedStatValue {
    baseValue: number,
    finalValue: number,
    modifiers?: StringDictionary<number>,
    invertModifiedDisplayColors?: boolean,
    usePrioritizedDisplay?: boolean
}