import Player from "./player";
import SaveFileElement from "./element";

export default class Cabin extends SaveFileElement {
    _farmhand;
    constructor(element: any) {
        super(element);
    }

    get farmhand() {
        if (!this._farmhand) {
            this._farmhand = new Player(this.child.indoors.child.farmhand);
        }
        return this._farmhand;
    }
}