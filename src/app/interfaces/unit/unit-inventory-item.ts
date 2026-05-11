import { StringDictionary } from "../common/dictionaries";
import { UnitInventoryItemStat } from "./unit-inventory-item-stat";

//Equivalent to UnitInventoryItem.cs
export interface UnitInventoryItem {
    name: string,
    uses?: number,
    maxUses?: number,
    stats?: StringDictionary<UnitInventoryItemStat>,
    minRange?: UnitInventoryItemStat,
    maxRange?: UnitInventoryItemStat,
    canEquip?: boolean,
    isPrimaryEquipped?: boolean,
    isSecondaryEquipped?: boolean,
    isDroppable?: boolean,
    isUsePrevented?: boolean,
    isNotInInventory?: boolean,
    maxRangeExceedsCalculationLimit?: boolean,
    allowMeleeRange?: boolean,
    tags?: string[],
    engravings?: string[]
}