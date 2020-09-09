import { Injectable } from '@nestjs/common';
import SaveFile from '../models/save-file';
import * as fs from 'fs';

@Injectable()
export class SaveFileService {


    readFile() {

        const fileLocation = '/mnt/c/Users/Tom/AppData/Roaming/StardewValley/Saves/BB611_184948442/BB611_184948442';
        const fileName = fileLocation.split('/')[fileLocation.split('/').length - 1];
        const file = fs.readFileSync(fileLocation).toString();
        
        const saveFile = new SaveFile(file);
        
        
        console.log(saveFile.host.child.scale.child.float);
        console.log(saveFile.host.items.find(x => x.getAttribute('p4:type') === 'MeleeWeapon').child.name);
        //saveFile.host.child.items.find('Item[p4:type="MeleeWeapon"]').child.name = 'Not So Rusty Sword';
        console.log(saveFile.host.child.items.find('Item[p4:type="MeleeWeapon"]').child.name);
        console.log(saveFile.host.position);
        //saveFile.host.position = {X:120, Y:150};
        console.log(saveFile.host.position);

        return {
            fileName: fileName,
            host: saveFile.host.name,
            farmhands: saveFile.cabins.map(x => x.farmhand.name).join(', '),
        }

    }

}
