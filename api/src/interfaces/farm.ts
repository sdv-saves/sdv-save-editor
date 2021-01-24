
import { GameLocation, Building, Player, ObjectsObjects, TentacledItem, LargeTerrainFeaturesClass, LargeTerrainFeatureElement, TerrainFeaturesClass, ResourceClumpsClass, ResourceClumpElement } from '../models/saveFile';
import FarmObject from './farmObject';
import { FarmType, GameObjectTypes } from '../models/enums';
import { FarmMap } from './farmMap';

export default interface Farm extends GameLocation {}

export default class Farm {
    constructor(gameLocation: GameLocation, public readonly farmType: FarmType) {
        Object.assign(this, gameLocation);

    }
    
    get cabins(): Building[] { return this.buildings.Building.filter((building: Building) => building.indoors && building.indoors['@_xsi:type'] === 'Cabin'); }
    get farmhands(): Player[] { return this.cabins.map(cabin => cabin.indoors.farmhand); }
    get farmMap(): FarmMap { 
        return new FarmMap(this, this.farmType);
    }
}
