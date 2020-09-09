import { addFunctions } from "../shared/functions";

export default class SaveFileElement {
    element: any;
    constructor(doc: any) {
        this.element = doc;
        addFunctions(doc);
    }

    get child() {
        return this.element.child;
    }

    find(path: string) {
        return this.element.find(path);
    }

    findAll(path: string) {
        return this.element.findAll(path);
    }
} 