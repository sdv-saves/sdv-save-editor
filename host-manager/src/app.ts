import FileLoader from './utils/fileloader';

const dir = 'Test_185212699';

const saveGame = FileLoader.loadSaveFile(dir);

const gameSave = FileLoader.saveXml(saveGame.element);

console.log(saveGame.farm.cabins);
