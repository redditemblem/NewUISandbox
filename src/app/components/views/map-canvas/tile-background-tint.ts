import { Graphics } from "pixi.js";
import { ITileState, MapEventService } from "../../../services/map-event-service";
import { effect, inject, Injector, runInInjectionContext } from "@angular/core";
import { ICoordinate } from "../../../data/interfaces/map/coordinate";

export class TileBackgroundTint extends Graphics {
    
    //Constants
    private readonly RANGE_MOV_COLOR: string = "#5cb4ef";
    private readonly RANGE_ATK_COLOR: string = "#d81b62";
    private readonly RANGE_UTIL_COLOR: string = "#9dff00";

    constructor(private readonly injector: Injector, private readonly coordinate: ICoordinate, private readonly dimensions: number) {
        super({ 
            visible: false,
            interactive: false,
            interactiveChildren: false
         });

        this.rect(1, 1, dimensions-1, dimensions-1)
        .fill({
            color: "#ffffff",
            alpha: 0.5
        });

        //Watch for tile state changes
        runInInjectionContext(injector, () => {
            const eventService = inject(MapEventService);

            effect(() => {
                const state: ITileState = eventService.getStateForTile(coordinate);
                this.updateBackgroundTint(state);
            });
        });
    }

    /** Sets the background tint color according to `state`. */
    private updateBackgroundTint(state: ITileState) {
        let tint: string = "";
        if(state.movement > 0) { tint = this.RANGE_MOV_COLOR; }
        else if(state.attack > 0) { tint = this.RANGE_ATK_COLOR; }
        else if(state.utility > 0) { tint = this.RANGE_UTIL_COLOR; }

        //If we picked a tint color, update
        if(tint.length > 0) {
            this.tint = tint;
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    }
}