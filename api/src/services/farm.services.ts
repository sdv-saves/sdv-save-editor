import { Injectable } from '@nestjs/common';
import SaveGame from '../interfaces/saveGame';
import { Building } from '../models/saveFile';
import LocalSaveService from './localsave.service';

import { v4 as uuid } from 'uuid';
import * as xmlParser from 'fast-xml-parser';

import * as fs from 'fs';

@Injectable()
export default class FarmService {
    constructor(
        private readonly saveFileService: LocalSaveService,
    ) {}

    getFarmName(save: SaveGame) {
        return (save as any)._id + ' ' + save.player.farmName;
    }
    
    createNewCabin(save?: SaveGame): Building {
        let cabinTemplate = fs.readFileSync("./src/templates/cabinTemplate").toString();
        let cabin = xmlParser.parse(cabinTemplate, { ignoreAttributes: false, parseAttributeValue : true, ignoreNameSpace: false, parseTrueNumberOnly: true}).template.Building;
        cabin = this.generateCabinName(cabin);
        if (save) {
            save.farm.buildings.Building.push(cabin);
        }

        return cabin;
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