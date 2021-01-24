import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import MultiplayerService from '../services/mulitplayer.service';
import SaveGame from '../interfaces/saveGame';
import LocalSaveService from '../services/localsave.service';

@Controller("mp")
export default class HostController {
  constructor(
    private readonly saveFileService: LocalSaveService,
    private readonly multiplayerService: MultiplayerService
  ) {}

  @Post("save/:saveId/host/:hostId")
  updateHost(@Param("saveId") saveId: string, @Param("hostId") hostId: string): SaveGame {
    const save = this.saveFileService.getSave(saveId);
    return this.multiplayerService.updateHost(save, hostId);
  }

  @Post("save/:saveId/player")
  addPlayer(@Param("saveId") saveId: string): string {
    const save = this.saveFileService.getSave(saveId);
    return this.multiplayerService.addPlayer(save);
  }
}
