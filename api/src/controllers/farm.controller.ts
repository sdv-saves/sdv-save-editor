import { Controller, Param, Post } from '@nestjs/common';
import { SaveGameService } from '../services/savegame.service';

@Controller("farm")
export default class FarmController {
    constructor(
        private readonly saveGameService: SaveGameService
    ) {}

    @Post("save/:saveId/player")
    addPlayer(@Param("saveId") saveId: string): string {
      return this.saveGameService.addPlayer(saveId);
    }
}