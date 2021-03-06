import Farm from './farm';

import { SaveGame as SaveModel, Player } from '../models/saveFile'

export default interface SaveGame extends SaveModel {}

export default class SaveGame {
    private readonly _id;

    constructor(saveId: string, saveGame: SaveModel) {
        Object.assign(this, saveGame);
        this._id = saveId;
    }
    
    get farm(): Farm { return new Farm(this.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm')); }
    get players(): Player[] {
        let players = [this.player];
        players = players.concat(this.farm.farmhands);
        return players;
    }
    
    // addPlayer(): string {

}