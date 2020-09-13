import { Building, Buildings, GameLocation } from '../interfaces/locations';
import { Farmhand } from '../interfaces/farm';

export default interface Farm extends GameLocation {
    buildings: Buildings;
};
export default class Farm {
    constructor(gameLocation: GameLocation) {
        Object.assign(this, gameLocation);
    }

    get cabins(): Building[] { return this.buildings.Building.filter((building: Building) => building.indoors['@_xsi:type'] === 'Cabin'); }
    get farmhands(): Farmhand[] { return this.cabins.map(cabin => cabin.indoors.farmhand) as Farmhand[]; }
}
