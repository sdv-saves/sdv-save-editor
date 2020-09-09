import Farm from './farm'
import { SaveFile } from '../interfaces/saveFile';
import { GameLocation } from '../interfaces/locations';


export default class SaveGameService {
    element: any;

    constructor(data: any) {
        this.element = data;
    }

    get saveGame(): SaveFile { return this.element.SaveGame; }

    get farm(): GameLocation { return this.saveGame.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm') as GameLocation; }
    
}