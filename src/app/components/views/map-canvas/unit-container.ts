import { Container, FillGradient, Filter, Graphics, Sprite } from "pixi.js";
import { SpriteFilters } from "./sprite-filters";
import { TeamDataService } from "../../../services/team-data-service";
import { IUnit } from "../../../data/interfaces/unit/unit";
import { StringDictionary } from "../../../data/interfaces/common/dictionaries";
import { IMapConstants } from "../../../data/interfaces/map/map-constants";
import { SpriteLoader } from "./sprite-loader";
import { IAffiliation } from "../../../data/interfaces/system/affiliation";
import { IStatusCondition } from "../../../data/interfaces/system/status-condition";
import { ITag } from "../../../data/interfaces/system/tag";
import { inject, Injector, runInInjectionContext } from "@angular/core";

export class UnitContainer extends Container {

  //Constants
  /** Number of milliseconds. Used to establish rotation intervals for status condition and tag sprites. */
  private readonly SPRITE_ROTATION_INTERVAL: number = 2000;
  /** Maximum height/width in pixels for status condition and tag sprites. */
  private readonly SPRITE_MAX_DIMENSIONS: number = 12;

  private readonly GRAYSCALE_FILTER: string = "grayscale";
  private readonly BRIGHT_FILTER: string = "bright";
  private readonly GLOW_FILTER: string = "glow";
  private readonly PINNED_FILTER: string = "pinned";

  //Internal attributes
  private teamDataService: TeamDataService | undefined;

  public readonly unitName: string;
  public unit: IUnit | undefined;
  public unitDimensions: number = 0;

  private sprite: Sprite | undefined;
  private activeSpriteFilters: StringDictionary<Filter> = {};

  constructor(injector: Injector, unitName: string) {
    super({
      label: unitName,
      interactive: false,
      interactiveChildren: false
    });
    
    this.unitName = unitName;

    runInInjectionContext(injector, () => {
      this.teamDataService = inject(TeamDataService);
    });
  }

  public async init() {
    //Attempt to load the unit by its name
    this.unit = this.teamDataService?.getUnitByName(this.unitName);
    if(this.unit === undefined) {
      console.error(`Failed to locate unit name ${this.unitName}.`);
      return;
    }

    const constants: IMapConstants | undefined = this.teamDataService?.getMapConstants();
    const tileDimensions: number = (constants?.tileSize ?? 16);
    this.unitDimensions = tileDimensions * this.unit.location.unitSize;

    await Promise.all([
      this.loadUnitSprite(),
      this.renderHealthBar(),
      this.renderUnitNumber(),
      this.renderStatusConditions(),
      this.renderTags()
    ]);

    //Set initial filter list
    const filters = Object.values(this.activeSpriteFilters);
    if(this.sprite !== undefined && filters.length > 0) {
      this.sprite.filters = filters;
    }
  }

  private async loadUnitSprite() {
    if (this.unit === undefined) return;

    const url = this.unit.sprite.spriteURL ?? "";
    if (url.length < 1) return;

    const assetAlias = `unit ${this.unit.normalizedName}`;
    this.sprite = await SpriteLoader.getExternalSpriteByExtension(assetAlias, url);
    if (this.sprite === undefined) return;

    this.addChild(this.sprite);
    this.sprite.label = 'unit_sprite';
    this.sprite.anchor.set(0.5); //manipulate sprite relative to its center
    this.sprite.position.set(
      this.unitDimensions / 2, //horizonal center
      this.unitDimensions - (this.sprite.height / 2) - 2 //2px from bottom
    );

    //Horizontally flip sprite
    const affiliation: IAffiliation | undefined = this.teamDataService?.getAffiliationByName(this.unit.affiliation);
    if (affiliation?.flipUnitSprites ?? false)
      this.sprite.scale.x *= -1;

    //Add grayscale filter
    if(this.unit.sprite.hasMoved ?? false)
      this.activeSpriteFilters[this.GRAYSCALE_FILTER] = SpriteFilters.getGrayscaleFilter();

    //Add aura glow filter
    const auraColor: string = (this.unit.sprite.aura ?? "");
    if(auraColor.length > 0)
      this.activeSpriteFilters[this.GLOW_FILTER] = SpriteFilters.getGlowFilter(auraColor);
  }

  private async renderHealthBar() {
    if (this.unit === undefined) return;

    const healthBarGradient = this.getUnitHpBarGradient(this.unit.stats.hp.percentage);
    const healthBar = new Graphics()
      .rect(2, this.unitDimensions - 4, this.unitDimensions - 3, 3)
      .fill(healthBarGradient)
      .stroke({ width: 1, color: 0x000000, pixelLine: true });

    this.addChild(healthBar);
  }

  /**
   * Determine the colors codes appropriate for the unit's current hpPercentage
   * 
   * @returns A new FillGradient with a linear left-right gradient utilizes the color codes
   */
  private getUnitHpBarGradient(hpPercentage: number) : FillGradient 
  { 
    //Primary and secondary color hexes should match the ones from unit-hp-bar.ts
    let primaryColor: string, secondaryColor: string;
    if(hpPercentage > 100){
      primaryColor = "#992DE4";
      secondaryColor = "#d9cce3";
    } 
    else if(hpPercentage <= 100 && hpPercentage > 50)
    {
      primaryColor = "#3CD66F";
      secondaryColor = "#d3efdd";
    } 
    else if(hpPercentage <= 50 && hpPercentage > 25)
    {
      primaryColor = "#FFC107";
      secondaryColor = "#fff4d4";
    }
    else
    {
      primaryColor = "#F13535";
      secondaryColor = "#efd1d1";
    }

    //Prevent overfilled HP from going above 1.0
    const hpFraction = Math.min(hpPercentage / 100, 1.0);
    return new FillGradient({
      type: 'linear',
      start: { x: 0, y: 0.5 }, //linear left-to-right gradient
      end: { x: 1, y: 0.5 },
      colorStops: [
        //Transition colors immediately at the hpFraction
        { offset: hpFraction, color: primaryColor },
        { offset: hpFraction, color: secondaryColor },
      ],
    });
  }

  private async renderUnitNumber() {
    if (this.unit === undefined) return;

    const unitNumber = this.unit.unitNumber ?? "";
    if(unitNumber.length < 1) return;

    const numbersContainer: Container = new Container({
      interactive: false,
      interactiveChildren: false
    });

    unitNumber.split('').forEach((digit) => 
    {
      const sprite: Sprite = Sprite.from(digit);
      numbersContainer.addChild(sprite);
      sprite.x = numbersContainer.width; //move sprite to end of the container
    });

    this.addChild(numbersContainer);
    numbersContainer.position.set(
      this.unitDimensions - numbersContainer.width - 7,
      this.unitDimensions - numbersContainer.height - 5
    );
  }

  private async renderStatusConditions() {
    if (this.unit === undefined) return;

    const unitStatuses = this.unit.statusConditions ?? [];
    if(unitStatuses.length < 1) return;

    let conditionSprites: Sprite[] = [];
    let useDefaultSprite: boolean = false;

    //Load sprites in parallel
    await Promise.all(unitStatuses.map(async status =>
    {
      const statusData: IStatusCondition | undefined = this.teamDataService?.getStatusConditionByName(status.name);
      if(statusData === undefined) return;

      const url: string = statusData.spriteURL ?? "";
      if (url.length < 1) {
        useDefaultSprite = true;
        return;
      }

      const assetAlias = `status ${statusData.name}`;      
      const sprite: Sprite | undefined = await SpriteLoader.getExternalSpriteByExtension(assetAlias, url);
      if (sprite === undefined) {
        useDefaultSprite = true;
        return;
      }

      //Scale sprite down if it exceeds max dimensions
      sprite.height = Math.min(sprite.height, this.SPRITE_MAX_DIMENSIONS);
      sprite.width = Math.min(sprite.width, this.SPRITE_MAX_DIMENSIONS);

      conditionSprites.push(sprite);
    }));

    //If we flagged a condition without a sprite, push the default sprite to the front of the list
    if (useDefaultSprite) {
      const heart: Sprite = Sprite.from('status_heart');
      conditionSprites.unshift(heart);
    }

    const statusContainer: Container = new Container({
      interactive: false,
      interactiveChildren: false
    });
    
    const shouldRotateSprites: boolean = (conditionSprites.length > 1);
    conditionSprites.forEach((sprite) => {
      statusContainer.addChild(sprite);
      sprite.visible = !shouldRotateSprites; //make invisible if we're going to rotate
    }); 

    //If we have multiple sprites, make only the first sprite visible and 
    //establish an interval to rotate the visible sprite.
    if (shouldRotateSprites) {
      statusContainer.getChildAt(0).visible = true;
      setInterval(this.RotateVisibilityOfContainerChildren, this.SPRITE_ROTATION_INTERVAL, statusContainer);
    }

    this.addChild(statusContainer);
  }

  private async renderTags() {
    if (this.unit === undefined) return;

    const tagNames: string[] = this.unit.tags ?? [];
    if (tagNames.length < 1) return;

    let tagSprites: Sprite[] = [];

    //Load sprites in parallel
    await Promise.all(tagNames.map(async name =>
    {
      const tagData: ITag | undefined = this.teamDataService?.getTagByName(name);
      const url: string = tagData?.spriteURL ?? "";
      const showOnUnit: boolean = tagData?.showOnUnit ?? false;

      if(url.length < 1 || !showOnUnit) return;

      const assetAlias: string = `tag ${name}`;
      const sprite: Sprite | undefined = await SpriteLoader.getExternalSpriteByExtension(assetAlias, url);
      if(sprite === undefined) return;

      //Scale sprite down if it exceeds max dimensions
      sprite.height = Math.min(sprite.height, this.SPRITE_MAX_DIMENSIONS);
      sprite.width = Math.min(sprite.width, this.SPRITE_MAX_DIMENSIONS);

      tagSprites.push(sprite);
    }));

    const tagsContainer: Container = new Container({
      interactive: false,
      interactiveChildren: false
    });
    
    const shouldRotateSprites: boolean = (tagSprites.length > 1);
    tagSprites.forEach((sprite) => {
      tagsContainer.addChild(sprite);
      sprite.visible = !shouldRotateSprites; //make invisible if we're going to rotate
    }); 

    //If we have multiple sprites, make only the first sprite visible and 
    //establish an interval to rotate the visible sprite.
    if (shouldRotateSprites) {
      tagsContainer.getChildAt(0).visible = true;
      setInterval(this.RotateVisibilityOfContainerChildren, this.SPRITE_ROTATION_INTERVAL, tagsContainer);
    }

    this.addChild(tagsContainer);
    tagsContainer.x = this.width - 12;
  }

  /**
   * Intended to be called on an inverval system. Looks for the current visible child of container,
   * makes it invisible, then sets the next child to visible. Loops when it reaches the end of the
   * child list.
   */
  private RotateVisibilityOfContainerChildren(container: Container) {
    if(container.children.length === 0) return;

    let visibleChildIndex: number = container.children.findIndex(s => s.visible);
    container.getChildAt(visibleChildIndex).visible = false;

    //Increment index, reset to 0 if we exceed list length
    if(++visibleChildIndex >= container.children.length)
      visibleChildIndex = 0;

    container.getChildAt(visibleChildIndex).visible = true;
  }

  // #region Event Handling

  public pinUnit() {
    if(this.sprite === undefined) return;

    this.activeSpriteFilters[this.PINNED_FILTER] = SpriteFilters.getUnitPinnedFilter();
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  public unpinUnit() {
    if(this.sprite === undefined) return;

    delete this.activeSpriteFilters[this.PINNED_FILTER];
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  public onPointerEnter() {
    if(this.sprite === undefined) return;

    this.activeSpriteFilters[this.BRIGHT_FILTER] = SpriteFilters.getBrightFilter();
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  public onPointerLeave() {
    if(this.sprite === undefined) return;

    delete this.activeSpriteFilters[this.BRIGHT_FILTER];
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  // #endregion Event Handling
}