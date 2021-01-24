
import { Test, TestingModule } from '@nestjs/testing';
import { GameObjectTypes } from '../models/enums';
import { Building, TentacledItem } from '../models/saveFile';
import FileUtil from '../utils/FileUtil';
import FarmObject, { FarmObjectConfig } from './farmObject';


const stoneObject: TentacledItem = JSON.parse('{"key":{"Vector2":{"X":23,"Y":23}},"value":{"Object":{"category":0,"name":"Stone","parentSheetIndex":450,"specialItem":false,"hasBeenInInventory":false,"SpecialVariable":0,"Category":0,"ParentSheetIndex":450,"DisplayName":"Stone","Name":"Stone","Stack":1,"tileLocation":{"X":23,"Y":23},"owner":0,"type":"asdf","canBeSetDown":true,"canBeGrabbed":true,"isHoedirt":false,"isSpawnedObject":false,"questItem":false,"questId":0,"isOn":true,"fragility":0,"price":0,"edibility":-300,"stack":1,"quality":0,"bigCraftable":false,"setOutdoors":false,"setIndoors":false,"readyForHarvest":false,"showNextIndex":false,"flipped":false,"hasBeenPickedUpByFarmer":false,"isRecipe":false,"isLamp":false,"minutesUntilReady":1,"boundingBox":{"X":1472,"Y":1472,"Width":64,"Height":64,"Location":{"X":1472,"Y":1472}},"scale":{"X":0,"Y":0},"preservedParentSheetIndex":0}}}');
describe('FarmObject', () => {

  beforeEach(async () => {

  });

  describe('constructor', () => {
    it("correctly set up the object (Object)", async () => {
      const config: FarmObjectConfig = {
          type: GameObjectTypes.Object,
          element: stoneObject
      }
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(23);
      expect(farmObject.y).toBe(23);
      expect(farmObject.xyRange.length).toBe(4);
    });
  });
});
