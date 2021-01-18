import { Building, GameLocation } from '../models/locations';
import { Player } from '../models/player';

import { v4 as uuid } from 'uuid';
import * as xmlParser from 'fast-xml-parser';

import * as fs from 'fs';

export default interface Farm extends GameLocation {}

export default class Farm {
    constructor(gameLocation: GameLocation) {
        Object.assign(this, gameLocation);
    }
    
    get cabins(): Building[] { return this.buildings.Building.filter((building: Building) => building.indoors && building.indoors['@_xsi:type'] === 'Cabin'); }
    get farmhands(): Player[] { return this.cabins.map(cabin => cabin.indoors.farmhand) as Player[]; }

    createNewCabin(): boolean {
        let cabinTemplate = fs.readFileSync("./src/templates/cabinTemplate").toString();
        let cabin = xmlParser.parse(cabinTemplate, { ignoreAttributes: false, parseAttributeValue : true, ignoreNameSpace: false, parseTrueNumberOnly: true}).template.Building;
        cabin = this.generateCabinName(cabin);
        this.buildings.Building.push(cabin);

        return true;
    }

    generateCabinName(cabin: Building): Building {
        cabin.indoors.uniqueName = "Cabin" + uuid();

        return cabin;
    }

    generateUniqueMultiplayerId(cabin: Building): Building {
        cabin.indoors.farmhand.UniqueMultiplayerID = 
            Math.random() > 0.5 ? "-" : "" +
            Math.floor(999999999 * Math.random()).toString() +
            Math.floor(9999999999 * Math.random()).toString();
        return cabin;
    }
}



    