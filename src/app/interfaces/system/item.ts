import { UnitSkill } from "../unit/unit-skill";
import { ItemRange } from "./item-range";

//Equivalent to Item.cs
export interface Item {
    name: string,
    spriteURL?: string,
    category: string,
    weaponRank?: string,
    isAlwaysUsable?: boolean,
    utilizedStats?: string[],
    targetedStats?: string[],
    dealsDamage?: boolean,
    maxUses: number,
    equippedSkills?: UnitSkill[],
    range: ItemRange,
    textFields?: string[],
    graphicUrl?: string
}