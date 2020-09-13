import { Player } from "../interfaces/player";
import Save from "../models/Save";

export default class ChangeHost {

    static changeHost(save: Save, newHost: Player) {
        let previousHost = Object.assign(new Player(), save.saveGame.player);
        save.saveGame.player = newHost;
        save.farm.farmhands[
            save.farm.farmhands.findIndex((farmHand: Player, index: number) => farmHand.UniqueMultiplayerID === newHost.UniqueMultiplayerID)
        ] = previousHost;

        return save;
    }
}
