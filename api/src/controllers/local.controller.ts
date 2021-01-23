import { Controller, Get, Param } from '@nestjs/common';
import SaveFile from '../interfaces/SaveFile';
import LocalSaveService from '../services/localsave.service';

@Controller("local")
export default class LocalController {
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