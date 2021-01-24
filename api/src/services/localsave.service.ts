import FileUtil from '../utils/FileUtil'
import { Injectable } from '@nestjs/common';
import SaveGame from '../interfaces/saveGame';

@Injectable()
export default class LocalSaveService {
    getSave(saveId: string): SaveGame {
        return FileUtil.readSaveFile(saveId);
    }

    getSaves(): string[] {
        return FileUtil.getSaveFiles();
    }

    updateSave(save: SaveGame): string {
        return FileUtil.writeSaveFile(save);
    }
}