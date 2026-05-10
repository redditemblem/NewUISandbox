import { StringDictionary } from "../dictionaries";
import { InterfaceLabels } from "./interface-labels";
import { Class } from "./class";
import { SystemConstants } from "./system-constants";
import { TerrainType } from "./terrain-type";
import { Affiliation } from "./affiliation";
import { Item } from "./item";
import { TileObject } from "./tile-object";
import { Skill } from "./skill";
import { StatusCondition } from "./status-condition";
import { Tag } from "./tag";
import { Engraving } from "./engraving";
import { CombatArt } from "./combat-art";
import { Battalion } from "./battalion";
import { Gambit } from "./gambit";
import { Adjutant } from "./adjutant";
import { BattleStyle } from "./battle-style";
import { Emblem } from "./emblem";
import { EngageAttack } from "./engage-attack";

//Equivalent to SystemInfo.cs
export interface SystemInfo {
    constants: SystemConstants,
    interfaceLabels: InterfaceLabels,
    terrainTypes?: StringDictionary<TerrainType>,
    classes?: StringDictionary<Class>,
    affiliations?: StringDictionary<Affiliation>,
    items?: StringDictionary<Item>,
    tileObjects?: StringDictionary<TileObject>,
    skills?: StringDictionary<Skill>,
    statusConditions?: StringDictionary<StatusCondition>,
    tags?: StringDictionary<Tag>,
    engravings?: StringDictionary<Engraving>,
    combatArts?: StringDictionary<CombatArt>,
    battalions?: StringDictionary<Battalion>,
    gambits?: StringDictionary<Gambit>,
    adjutants?: StringDictionary<Adjutant>,
    battleStyles?: StringDictionary<BattleStyle>,
    emblems?: StringDictionary<Emblem>,
    engageAttacks?: StringDictionary<EngageAttack>
}