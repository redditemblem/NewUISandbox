import { StringDictionary } from "../../common/dictionaries";
import { IEngraving } from "../../system/engraving";
import { IItem } from "../../system/item";
import { ISkill } from "../../system/skill";
import { ITag } from "../../system/tag";
import { IFilterParameters } from "../filter-parameters";
import { IShopItem } from "./shop-item";

/** Equivalent to `ShopData.cs` */
export interface IShopData {
    parameters: IFilterParameters,
    workbookID: string,
    showConvoyLink: boolean,
    shopItems: IShopItem[],
    items: StringDictionary<IItem>,
    skills: StringDictionary<ISkill>,
    tags: StringDictionary<ITag>,
    engravings: StringDictionary<IEngraving>
}