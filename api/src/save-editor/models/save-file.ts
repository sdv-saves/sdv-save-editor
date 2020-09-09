import { JSDOM } from 'jsdom';
import Player from './player';
import { find, findAll } from '../shared/functions';
import Cabin from './cabins';
export default class SaveFile {
    doc: any; 
    private _host: Player;
    private _cabins: Cabin[];
    constructor(rawXML: string) {
        this.doc = new JSDOM(rawXML).window.document;
        this.doc.find = find;
        this.doc.findAll = findAll;
    }


    get host() {
        if (!this._host) {
            this._host = new Player(this.doc.find('player'));
        }
        return this._host;
    }

    get cabins() {
        if (!this._cabins) {
            this._cabins = this.doc.findAll('locations GameLocation[xsi:type="Farm"] buildings Building')
                                    .filter(x => x.child.indoors.getAttribute('p3:type') === 'Cabin' || 
                                                x.child.indoors.getAttribute('xsi:type') === 'Cabin')
                                    .map(x => new Cabin(x));
        }
        return this._cabins;
    }
}

