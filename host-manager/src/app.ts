import FileLoader from './utils/fileloader';

const dir = 'McFly_184948442';

const saveGame = FileLoader.loadSaveFile(dir);

const gameSave = FileLoader.saveXml(saveGame.element);
console.log(saveGame.farm);

