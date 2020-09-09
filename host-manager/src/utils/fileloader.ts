import * as fs from 'fs';
import { homedir, platform } from 'os';
import path from 'path';
import SaveGameService from '../models/saveGame';
import { SaveFile } from '../interfaces/saveFile';

import parser, { j2xParser } from 'fast-xml-parser';
const xmlParser = new j2xParser({
    ignoreAttributes: false
})
const appDataDir = platform() === 'win32' ? (process.env.APPDATA as string) : path.join(homedir(), '.config');
export default class FileLoader {
    static dir = path.join(appDataDir, 'StardewValley', 'Saves');

    static loadSaveFile(dir: string): SaveGameService {
        const file = fs.readFileSync(path.join(this.dir, dir, dir)).toString();
        const data = parser.parse(file, { ignoreAttributes: false, parseAttributeValue : true, ignoreNameSpace: false});
        return new SaveGameService(data);
    }

    static saveJson(data: string) {
        fs.writeFileSync('saveGame.json', JSON.stringify(data));
    }

    static saveXml(data: SaveFile) {
        const xml = xmlParser.parse(data);
        fs.writeFileSync('saveGame.xml', xml);
    }
}
