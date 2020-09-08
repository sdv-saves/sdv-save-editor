import * as fs from 'fs';
import path from 'path';
import SaveGameService from '../models/saveGame';
import { SaveFile } from '../models/interfaces';

import parser, { j2xParser } from 'fast-xml-parser';
const xmlParser = new j2xParser({
    ignoreAttributes: false
})
export default class FileLoader {
    static dir = path.join((process.env.APPDATA as string), 'StardewValley', 'Saves');

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
