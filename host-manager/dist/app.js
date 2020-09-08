"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileloader_1 = __importDefault(require("./utils/fileloader"));
var dir = 'McFly_184948442';
var saveGame = fileloader_1.default.loadSaveFile(dir);
console.log(saveGame.file);
