import { StringDictionary } from "../common/dictionaries";

//Equivalent to UnitSkill.cs
export interface UnitSkill {
    name: string,
    additionalStats: StringDictionary<number>
}