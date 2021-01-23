import SaveGame from './SaveGame';

export default class SaveFile {
    SaveGame;

    constructor(saveData: any) {
        this.SaveGame = new SaveGame(saveData.SaveGame);
    }

    get save(): SaveGame { return this.SaveGame }
}