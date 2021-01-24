import { Controller, Get, Param } from '@nestjs/common';
import FarmService from '../services/farm.services';
import LocalSaveService from '../services/localsave.service';
import MultiplayerService from '../services/mulitplayer.service';

@Controller("farm")
export default class FarmController {
    constructor(
        private readonly saveFileService: LocalSaveService,
        private readonly farmService: FarmService
    ) {}

    @Get("save/:saveId/name")
    getFarmName(@Param("saveId") saveId: string) {
        const save = this.saveFileService.getSave(saveId);
        return this.farmService.getFarmName(save);
    }
}