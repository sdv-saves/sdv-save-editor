import FileLoader from './utils/fileloader';
import Farm from './models/farm';


const dir = 'Test_185212699';

const saveGame = FileLoader.loadSaveFile(dir);

const gameSave = FileLoader.saveXml(saveGame.element);
// console.log(saveGame.farm.buildings);
console.log(saveGame.farm.cabins);
// console.log(saveGame.farm);
