import Farm from './Farm';

import { GameLocation, Locations, Building } from '../models/locations';
import { SaveGame as SaveModel } from '../models/save'
import { Player } from '../models/player'

export default interface SaveGame extends SaveModel {}

export default class SaveGame {
    constructor(saveGame: SaveModel) {
        Object.assign(this, saveGame);
    }

    get farm(): Farm { return new Farm(this.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm')); }
    get players(): Player[] {
        let players = [this.player];
        players = players.concat(this.farm.farmhands as Player[]);
        return players;
    }
    
    // addPlayer(): string {

}