import { Injectable } from '@nestjs/common';
import SaveGame from '../interfaces/saveGame';
import { Player, Building } from '../models/saveFile';
import LocalSaveService from './localsave.service';

@Injectable()
export default class MultiplayerService {
    constructor(
        private readonly saveFileService: LocalSaveService
    ) {}

    addPlayer(save: SaveGame): string {
        if (save.farm.createNewCabin()) {
            this.saveFileService.updateSave(save);
        }

        return "Success!";

    }

    updateHost(save: SaveGame, newHostId: string): SaveGame {
        const previousHost = save.player;
        
        let newHost = save.players[
            save.players.findIndex((player: Player, index: number) => player.UniqueMultiplayerID === newHostId)
        ]

        save.player = newHost;

        save.farm.buildings.Building[
            save.farm.buildings.Building.findIndex((building: Building) => building.indoors && building.indoors['@_xsi:type'] === 'Cabin' && building.indoors.farmhand.UniqueMultiplayerID === newHost.UniqueMultiplayerID)
        ].indoors.farmhand = previousHost;
        save.locations.GameLocation.find((x: any) => x['@_xsi:type'] === 'Farm').name = "test"
        this.saveFileService.updateSave(save);

        return save;
    }
}
