import Farm from './Farm';

import { SaveGame as SaveModel, Player } from '../models/SaveGame'

export default interface SaveGame extends SaveModel {}

export default class SaveGame {
    constructor(saveGame: SaveModel) {
        Object.assign(this, saveGame);
    }

    get farm(): Farm { return new Farm(this.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm')); }
    get players(): Player[] {
        let players = [this.player];
        players = players.concat(this.farm.farmhands);
        return players;
    }
    
    // addPlayer(): string {

}