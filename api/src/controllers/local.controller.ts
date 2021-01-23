import { Controller, Get, Param } from '@nestjs/common';
import SaveFile from '../interfaces/saveFile';
import { LocalSaveService } from '../services/localsave.service';

@Controller("local")
export class LocalController {
    constructor(
        private readonly saveFileService: LocalSaveService
    ) {}

    @Get("save/:id")
    getSave(@Param("id") id: string): SaveFile {
      return this.saveFileService.getSave(id);
    }
  
    @Get("saves")
    getSaves(): Array<string> {
      return this.saveFileService.getSaves();
    }    
}