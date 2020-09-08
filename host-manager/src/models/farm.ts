import { Building, Farmhand } from './interfaces';
import { GameObjectTypes } from './enums';

export default class FarmService {
    constructor(private element: any) {
        
    }

    get buildings(): Building[] { return this.element.buildings.Building; }
    get cabins(): Building[] { return this.buildings.filter((building: Building) => building.indoors['@_xsi:type'] === 'Cabin'); }
    get farmhands(): Farmhand[] { return this.cabins.map(cabin => cabin.indoors.farmhand) as Farmhand[]; }

    ge

}