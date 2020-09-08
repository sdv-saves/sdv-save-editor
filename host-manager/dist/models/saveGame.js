"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SaveGame = /** @class */ (function () {
    function SaveGame(data) {
        this.data = data.SaveGame;
    }
    Object.defineProperty(SaveGame.prototype, "file", {
        get: function () { return this.data; },
        enumerable: false,
        configurable: true
    });
    ;
    return SaveGame;
}());
exports.default = SaveGame;
