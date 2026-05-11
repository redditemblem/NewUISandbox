import { UnitInventoryItem } from "./unit-inventory-item";

//Equivalent to UnitInventorySubsection.cs
export interface UnitInventorySubsection {
    items: UnitInventoryItem[],
    emptySlotCount: number
}