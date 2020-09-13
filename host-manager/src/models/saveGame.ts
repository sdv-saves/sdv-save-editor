import { GameLocation, SaveFile } from './interfaces';
import Farm from './farm'

export default class Save {
    element: any;

    constructor(data: any) {
        this.element = data;
    }

    get saveGame(): SaveFile { return this.element.SaveGame; }

    get farm(): Farm { return new Farm(this.saveGame.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm') as GameLocation); }
}
