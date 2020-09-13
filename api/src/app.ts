import FileLoader from './utils/fileloader';
import ChangeHost from './services/ChangeHost';

const dir = 'Test_185212699';

const save = FileLoader.loadSaveFile(dir);

const gameSave = FileLoader.saveXml(save.element);

console.log(save.farm.cabins);

console.log(save.saveGame.player.Name);
ChangeHost.changeHost(save, save.farm.farmhands[0]);
console.log(save.saveGame.player.Name);