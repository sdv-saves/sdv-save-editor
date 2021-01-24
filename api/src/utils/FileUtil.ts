import SaveGame from '../interfaces/saveGame';

import * as fs from 'fs';
import { homedir, platform } from 'os';
import * as path from 'path';

import * as parser from 'fast-xml-parser';

const j2xParser = new parser.j2xParser({
    ignoreAttributes: false
})

const appDataDir = platform() === 'win32' ? (process.env.APPDATA as string) : path.join(homedir(), '.config');

export default class FileUtil {
    static saveDir = path.join(appDataDir, 'StardewValley', 'Saves');

    static getSaveFiles(): string[] {
        return fs.readdirSync(FileUtil.saveDir);
    }

    static readSaveFile(saveId: string): SaveGame {
        let file = fs.readFileSync(path.join(this.saveDir, saveId, saveId)).toString();
        let data = parser.parse(file, { ignoreAttributes: false, parseAttributeValue : true, ignoreNameSpace: false, parseTrueNumberOnly: true});
        return new SaveGame(saveId, data.SaveGame);
    }

    static writeSaveFile(save: SaveGame): string {
        const id = (save as any)._id;
        delete (save as any)._id;
        fs.writeFileSync(
            path.join(this.saveDir, id, id),
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
            new parser.j2xParser({ignoreAttributes: false, format: true}).parse({ SaveGame: save })
        );
        (save as any)._id = id;
        return "Success!";
    }

    static saveJson(data: any) {
        fs.writeFileSync('saveGame.json', JSON.stringify(data));
    }

    static saveXml(data: SaveGame) {
        let xml = j2xParser.parse(data);
        fs.writeFileSync('saveGame.xml', xml);
    }
}
