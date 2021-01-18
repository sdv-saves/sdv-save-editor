import { Player } from '../models/player';
import { Building } from '../models/locations'
import SaveFile from '../interfaces/SaveFile';
import FileUtil from '../utils/FileUtil'

import * as fs from 'fs';
import { homedir, platform } from 'os';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    getSave(saveId: string): SaveFile {
        return FileUtil.readSaveFile(saveId);
    }

    getSaves(): Array<string> {
        let appDataDir = platform() === 'win32' ? (process.env.APPDATA as string) : path.join(homedir(), '.config');
        let sdvSaveDir = path.join(appDataDir, 'StardewValley', 'Saves');

        return fs.readdirSync(sdvSaveDir);
    }

    updateSave(saveId: string, save: SaveFile): string {
        return FileUtil.writeSaveFile(saveId, save);
    }

    addPlayer(saveId: string): string {
        let save = FileUtil.readSaveFile(saveId);
        if (save.SaveGame.farm.createNewCabin()) {
            FileUtil.writeSaveFile(saveId, save);
        }

        return "Success!";

    }

    updateHost(saveId: string, newHostId: string): SaveFile {
        let save = FileUtil.readSaveFile(saveId);

        let previousHost = Object.assign(new Player(), save.SaveGame.player);
        
        let newHost = save.SaveGame.players[
            save.SaveGame.players.findIndex((player: Player, index: number) => player.UniqueMultiplayerID === newHostId)
        ]

        save.SaveGame.player = newHost;

        save.SaveGame.farm.buildings.Building[
            save.SaveGame.farm.buildings.Building.findIndex((building: Building) => building.indoors && building.indoors['@_xsi:type'] === 'Cabin' && building.indoors.farmhand.UniqueMultiplayerID === newHost.UniqueMultiplayerID)
        ].indoors.farmhand = previousHost;
        save.SaveGame.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm').name = "test"
        this.updateSave(saveId, save);

        return save;
    }
}
