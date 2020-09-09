import { Controller, Get } from '@nestjs/common';
import { readFile } from 'fs';
import { SaveFileService } from '../services/save-file.service';

@Controller('save-editor')
export class SaveEditorController {

    constructor(private readonly saveFileService: SaveFileService) {}

    @Get()
    readFile() {
        return this.saveFileService.readFile();
    }

}
