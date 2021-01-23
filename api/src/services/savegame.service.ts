import { Injectable } from '@nestjs/common';
import SaveFile from '../interfaces/SaveFile';
import { Player, Building } from '../models/SaveGame';
import LocalSaveService from './localsave.service';

@Injectable()
export class SaveGameService {
    constructor(private readonly saveFileService: LocalSaveService) {}

    addPlayer(saveId: string): string {
        let save = this.saveFileService.getSave(saveId);
        if (save.SaveGame.farm.createNewCabin()) {
            this.saveFileService.updateSave(saveId, save);
        }

        return "Success!";

    }

    updateHost(saveId: string, newHostId: string): SaveFile {
        let save = this.saveFileService.getSave(saveId);

        let previousHost = save.SaveGame.player;
        
        let newHost = save.SaveGame.players[
            save.SaveGame.players.findIndex((player: Player, index: number) => player.UniqueMultiplayerID === newHostId)
        ]

        save.SaveGame.player = newHost;

        save.SaveGame.farm.buildings.Building[
            save.SaveGame.farm.buildings.Building.findIndex((building: Building) => building.indoors && building.indoors['@_xsi:type'] === 'Cabin' && building.indoors.farmhand.UniqueMultiplayerID === newHost.UniqueMultiplayerID)
        ].indoors.farmhand = previousHost;
        save.SaveGame.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm').name = "test"
        this.saveFileService.updateSave(saveId, save);

        return save;
    }
}
