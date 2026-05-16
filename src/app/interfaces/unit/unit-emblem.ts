import { UnitInventoryItem } from "./unit-inventory-item";
import { UnitSkill } from "./unit-skill";

//Equivalent to UnitEmblem.cs
export interface UnitEmblem {
    name: string,
    bondLevel?: number,
    engageMeterCount?: number,
    isEngaged?: boolean,
    syncSkills?: UnitSkill[],
    engageSkills?: UnitSkill[],
    engageWeapons?: UnitInventoryItem[]
    engageAttacks?: string[]
}