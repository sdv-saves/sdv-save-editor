import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SaveGameService } from '../services/savegame.service';
import SaveFile from '../interfaces/saveFile';

@Controller("host")
export class HostController {
  constructor(
    private readonly saveGameService: SaveGameService
  ) {}

  @Post("save/:saveId/host/:hostId")
  updateHost(@Param("saveId") saveId: string, @Param("hostId") hostId: string): SaveFile {
    return this.saveGameService.updateHost(saveId, hostId);
  }
}
