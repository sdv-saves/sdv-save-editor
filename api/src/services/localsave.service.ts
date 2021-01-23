import FileUtil from '../utils/FileUtil'
import { Injectable } from '@nestjs/common';
import SaveFile from '../interfaces/saveFile';

@Injectable()
export class LocalSaveService {
    getSave(saveId: string): SaveFile {
        return FileUtil.readSaveFile(saveId);
    }

    getSaves(): Array<string> {
        return FileUtil.getSaveFiles();
    }

    updateSave(saveId: string, save: SaveFile): string {
        return FileUtil.writeSaveFile(saveId, save);
    }
}