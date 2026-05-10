import { StringDictionary } from "../dictionaries";

//Equivalent to UnitSkill.cs
export interface UnitSkill {
    name: string,
    additionalStats: StringDictionary<number>
}