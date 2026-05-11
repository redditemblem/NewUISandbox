import { StringDictionary } from "../common/dictionaries";

//Equivalent to UnitInventoryItemStat
export interface UnitInventoryItemStat {
    baseValue: number,
    finalValue: number,
    modifiers?: StringDictionary<number>,
    invertModifiedDisplayColors?: boolean
}