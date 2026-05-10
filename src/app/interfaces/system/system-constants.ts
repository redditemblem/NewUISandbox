import { CurrencyConstants } from "./currency-constants";

//Equivalent to SystemConstantsConfig.cs
export interface SystemConstants {
    currency?: CurrencyConstants
    weaponRanks?: string[],
    allowNonInventoryEquippedItems?: boolean
}