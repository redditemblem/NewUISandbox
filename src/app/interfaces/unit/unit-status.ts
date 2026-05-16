import { StringDictionary } from "../common/dictionaries";

//Equivalent to UnitStatus.cs
export interface UnitStatus {
    name: string,
    remainingTurns?: number,
    additionalStats?: StringDictionary<number>
}