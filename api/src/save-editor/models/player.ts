import { proxyHandler } from "../shared/functions";
import { Position } from '../types/shared';
import SaveFileElement from "./element";
export default class Player extends SaveFileElement {
    constructor(element: any) {
        super(element);
    }

    get name() {
        return this.child.name;
    }

    set name(val: string) {
        this.child.name = val;
    }

    get items() {
        return this.find('items').list;
    }
    get position(): Position {
        const position = this.child.position;
        return {
            X: position.child.X,
            Y: position.child.Y
        }
    }

    set position({X, Y}) {
        const position = this.child.position;
        position.child.X = X;
        position.child.Y = Y;
    }
}