import { Injectable } from '@nestjs/common';
import SaveGame from '../interfaces/saveGame';
import LocalSaveService from './localsave.service';


@Injectable()
export default class FarmService {
    constructor(
        private readonly saveFileService: LocalSaveService,
    ) {}

    getFarmName(save: SaveGame) {
        return (save as any)._id + ' ' + save.player.farmName;
    }
}