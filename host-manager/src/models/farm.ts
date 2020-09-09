import { Building, Buildings, Farmhand, GameLocation } from './interfaces';
import { GameObjectTypes } from './enums';

export default interface Farm extends GameLocation {
    buildings: Buildings;
};
export default class Farm {
    constructor(gameLocations: GameLocation[]) {
        Object.assign(this, gameLocations.find((x: any) => x['@_xsi:type'] === 'Farm'));
    }

    get cabins(): Building[] { return this.buildings.Building.filter((building: Building) => building.indoors['@_xsi:type'] === 'Cabin'); }
    get farmhands(): Farmhand[] { return this.cabins.map(cabin => cabin.indoors.farmhand) as Farmhand[]; }
}
