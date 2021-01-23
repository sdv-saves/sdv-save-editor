import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../services/app.service';
import SaveFile from '../interfaces/SaveFile';

@Controller("stardew")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("save/:id")
  getSave(@Param() params): SaveFile {
    return this.appService.getSave(params.id);
  }

  @Get("saves")
  getSaves(): Array<string> {
    return this.appService.getSaves();
  }

  @Post("save/:saveId/player")
  addPlayer(@Param() params): string {
    return this.appService.addPlayer(params.saveId);
  }

  @Post("save/:saveId/host/:hostId")
  updateHost(@Param() params): SaveFile {
    return this.appService.updateHost(params.saveId, params.hostId);
  }
}
