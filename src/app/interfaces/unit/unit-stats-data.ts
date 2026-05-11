import { StringDictionary } from "../common/dictionaries";
import { ModifiedStatValue } from "../common/modified-stat-value";
import { HealthPoints } from "../system/health-points";

//Equivalent to UnitStatsData.cs
export interface UnitStatsData { 
    level: number,
    experience?: number,
    heldCurrency?: number,
    hp: HealthPoints,
    combat?: StringDictionary<ModifiedStatValue>,
    system?: StringDictionary<ModifiedStatValue>,
    general: StringDictionary<ModifiedStatValue>
}