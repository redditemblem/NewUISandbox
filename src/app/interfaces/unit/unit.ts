import { StringDictionary } from "../common/dictionaries"
import { UnitBattalion } from "./unit-battalion"
import { UnitEmblem } from "./unit-emblem"
import { UnitInventory } from "./unit-inventory"
import { UnitLocationData } from "./unit-location-data"
import { UnitRangeData } from "./unit-range-data"
import { UnitSkillSubsection } from "./unit-skill-subsection"
import { UnitSpriteData } from "./unit-sprite-data"
import { UnitStatsData } from "./unit-stats-data"
import { UnitStatus } from "./unit-status"

//Equivalent to Unit.cs
export interface Unit {
    name: string,
    unitNumber?: string,
    player?: string,
    characterApplicationUrl?: string,
    textFields?: string[]
    sprite: UnitSpriteData,
    location: UnitLocationData,
    classes?: string[],
    unitMovementType?: string,
    affiliation: string,
    stats: UnitStatsData,
    tags?: string[],
    behavior?: string,
    statusConditions?: UnitStatus[],
    skillSubsections?: UnitSkillSubsection[],
    ranges: UnitRangeData,
    normalizedName: string,
    movementType: string,
    hasSkills: boolean
    
    //Inventory
    weaponRanks?: StringDictionary<string>,
    inventory?: UnitInventory,

    //3H
    combatArts?: string[],
    battalion?: UnitBattalion,
    adjutants?: string[]

    //Engage
    emblem: UnitEmblem
}