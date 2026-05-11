import { StringDictionary } from "../common/dictionaries";

//Equivalent to UnitStatus.cs
export interface UnitStatus {
    status: string,
    remainingTurns?: number,
    additionalStats?: StringDictionary<number>
}