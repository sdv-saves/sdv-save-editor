
import { Test, TestingModule } from '@nestjs/testing';
import { GameObjectTypes } from '../models/enums';
import { Building, LargeTerrainFeatureElement, ResourceClumpElement, TentacledItem, TerrainFeatureCrop, TerrainFeaturesItem } from '../models/saveFile';
import FileUtil from '../utils/FileUtil';
import FarmObject, { FarmObjectConfig } from './farmObject';


const stoneObject: TentacledItem = JSON.parse('{"key":{"Vector2":{"X":23,"Y":23}},"value":{"Object":{"category":0,"name":"Stone","parentSheetIndex":450,"specialItem":false,"hasBeenInInventory":false,"SpecialVariable":0,"Category":0,"ParentSheetIndex":450,"DisplayName":"Stone","Name":"Stone","Stack":1,"tileLocation":{"X":23,"Y":23},"owner":0,"type":"asdf","canBeSetDown":true,"canBeGrabbed":true,"isHoedirt":false,"isSpawnedObject":false,"questItem":false,"questId":0,"isOn":true,"fragility":0,"price":0,"edibility":-300,"stack":1,"quality":0,"bigCraftable":false,"setOutdoors":false,"setIndoors":false,"readyForHarvest":false,"showNextIndex":false,"flipped":false,"hasBeenPickedUpByFarmer":false,"isRecipe":false,"isLamp":false,"minutesUntilReady":1,"boundingBox":{"X":1472,"Y":1472,"Width":64,"Height":64,"Location":{"X":1472,"Y":1472}},"scale":{"X":0,"Y":0},"preservedParentSheetIndex":0}}}');
const shippingBin: Building = JSON.parse('{    "@_xsi:type": "ShippingBin",    "tileX": 76,    "tileY": 14,    "tilesWide": 2,    "tilesHigh": 1,    "maxOccupants": -1,    "currentOccupants": 0,    "daysOfConstructionLeft": 0,    "daysUntilUpgrade": 0,    "buildingType": "Shipping Bin",    "buildingPaintColor": {        "ColorName": {            "string": {                "@_xsi:nil": true            }        },        "Color1Default": {            "boolean": true        },        "Color1Hue": {            "int": 0        },        "Color1Saturation": {            "int": 0        },        "Color1Lightness": {            "int": 0        },        "Color2Default": {            "boolean": true        },        "Color2Hue": {            "int": 0        },        "Color2Saturation": {            "int": 0        },        "Color2Lightness": {            "int": 0        },        "Color3Default": {            "boolean": true        },        "Color3Hue": {            "int": 0        },        "Color3Saturation": {            "int": 0        },        "Color3Lightness": {            "int": 0        }    },    "humanDoor": {        "X": -1,        "Y": -1    },    "animalDoor": {        "X": -1,        "Y": -1    },    "color": {        "R": 255,        "G": 255,        "B": 255,        "A": 255,        "PackedValue": 4294967295    },    "animalDoorOpen": false,    "magical": false,    "fadeWhenPlayerIsBehind": true,    "owner": 0,    "isMoving": false}');
const resourceClump: ResourceClumpElement = JSON.parse('{"width": 2,"height": 2,"parentSheetIndex": 600,"health": 10,"tile": {"X": 5,"Y": 32}}');
const fruitTree: TerrainFeaturesItem = JSON.parse('{"key":{"Vector2":{"X":57,"Y":45}},"value":{"TerrainFeature":{"@_xsi:type":"FruitTree","growthStage":4,"treeType":5,"indexOfFruit":613,"daysUntilMature":-93,"fruitsOnTree":0,"struckByLightningCountdown":0,"health":6.66,"flipped":true,"stump":false,"greenHouseTree":false,"greenHouseTileTree":false,"shakeLeft":true,"fruitSeason":"fall"}}}');
const smallBush: LargeTerrainFeatureElement = JSON.parse('{"@_xsi:type":"Bush","tilePosition":{"X":15,"Y":71},"size":1,"datePlanted":0,"tileSheetOffset":0,"overrideSeason":-1,"health":0,"flipped":false,"townBush":false,"greenhouseBush":false,"drawShadow":true}');
const cropHoeDirt: TerrainFeaturesItem = JSON.parse('{"key":{"Vector2":{"X":5,"Y":10}},"value":{"TerrainFeature":{"@_xsi:type":"HoeDirt","state":1,"fertilizer":0,"isGreenhouseDirt":true,"crop":{"phaseDays":{"int":[2,4,6,6,6,99999]},"rowInSpriteSheet":32,"phaseToShow":-1,"currentPhase":2,"harvestMethod":0,"indexOfHarvest":417,"regrowAfterHarvest":-1,"dayOfCurrentPhase":5,"minHarvest":1,"maxHarvest":1,"maxHarvestIncreasePerFarmingLevel":0,"daysOfUnclutteredGrowth":0,"whichForageCrop":0,"seasonsToGrowIn":{"string":"fall"},"tintColor":{"R":0,"G":0,"B":0,"A":0,"PackedValue":0},"flip":true,"fullGrown":false,"raisedSeeds":false,"programColored":false,"dead":false,"forageCrop":false,"chanceForExtraCrops":0,"seedIndex":347}}}}');
const sprinkler: TentacledItem = JSON.parse('{"key": {"Vector2": {"X": 16,"Y": 14}},"value": {"Object": {"isLostItem": false,"category": -8,"hasBeenInInventory": true,"name": "Quality Sprinkler","parentSheetIndex": 621,"specialItem": false,"SpecialVariable": 0,"DisplayName": "Quality Sprinkler","Name": "Quality Sprinkler","Stack": 1,"tileLocation": {"X": 16,"Y": 14},"owner": 0,"type": "Crafting","canBeSetDown": true,"canBeGrabbed": true,"isHoedirt": false,"isSpawnedObject": false,"questItem": false,"questId": 0,"isOn": true,"fragility": 0,"price": 450,"edibility": -300,"stack": 1,"quality": 0,"bigCraftable": false,"setOutdoors": false,"setIndoors": false,"readyForHarvest": false,"showNextIndex": false,"flipped": false,"hasBeenPickedUpByFarmer": true,"isRecipe": false,"isLamp": false,"minutesUntilReady": 0,"boundingBox": {"X": 0,"Y": 0,"Width": 64,"Height": 64,"Location": {"X": 0,"Y": 0}},"scale": {"X": 0,"Y": 0},"uses": 0,"preservedParentSheetIndex": 0,"destroyOvernight": false}}}');
const rareCrow: TentacledItem = JSON.parse('{"key": {"Vector2": {"X": 44,"Y": 18}},"value": {"Object": {"isLostItem": false,"category": -9,"hasBeenInInventory": false,"name": "Rarecrow","parentSheetIndex": 113,"specialItem": false,"SpecialVariable": 2,"DisplayName": "Rarecrow","Name": "Rarecrow","Stack": 1,"tileLocation": {"X": 44,"Y": 18},"owner": 0,"type": "Crafting","canBeSetDown": true,"canBeGrabbed": true,"isHoedirt": false,"isSpawnedObject": false,"questItem": false,"questId": 0,"isOn": true,"fragility": 0,"price": 0,"edibility": -300,"stack": 1,"quality": 0,"bigCraftable": true,"setOutdoors": true,"setIndoors": true,"readyForHarvest": false,"showNextIndex": false,"flipped": false,"hasBeenPickedUpByFarmer": false,"isRecipe": false,"isLamp": false,"minutesUntilReady": 0,"boundingBox": {"X": 0,"Y": 0,"Width": 64,"Height": 64,"Location": {"X": 0,"Y": 0}},"scale": {"X": 0,"Y": 0},"uses": 0,"preservedParentSheetIndex": 0,"destroyOvernight": false}}}');
const artifactSpot: TentacledItem = JSON.parse('{"key": {"Vector2": {"X": 110,"Y": 25}},"value": {"Object": {"isLostItem": false,"category": 0,"hasBeenInInventory": false,"name": "Artifact Spot","parentSheetIndex": 590,"specialItem": false,"SpecialVariable": 0,"DisplayName": "Artifact Spot","Name": "Artifact Spot","Stack": 1,"tileLocation": {"X": 110,"Y": 25},"owner": 0,"type": "asdf","canBeSetDown": true,"canBeGrabbed": true,"isHoedirt": false,"isSpawnedObject": false,"questItem": false,"questId": 0,"isOn": true,"fragility": 0,"price": 0,"edibility": -300,"stack": 1,"quality": 0,"bigCraftable": false,"setOutdoors": false,"setIndoors": false,"readyForHarvest": false,"showNextIndex": false,"flipped": false,"hasBeenPickedUpByFarmer": false,"isRecipe": false,"isLamp": false,"minutesUntilReady": 0,"boundingBox": {"X": 7040,"Y": 1600,"Width": 64,"Height": 64,"Location": {"X": 7040,"Y": 1600}},"scale": {"X": 0,"Y": 0},"uses": 0,"preservedParentSheetIndex": 0,"destroyOvernight": false}}}');

describe('FarmObject', () => {

  beforeEach(async () => {

  });

  describe('constructor', () => {
    it("correctly set up an Object", async () => {
      const config: FarmObjectConfig = {
          type: GameObjectTypes.Object,
          element: stoneObject
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(23);
      expect(farmObject.y).toBe(23);
      expect(farmObject.xyRange.length).toBe(1);
    });

    it ('correctly set up a Building', async () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.Building,
        element: shippingBin
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(76);
      expect(farmObject.y).toBe(14);
      expect(farmObject.xyRange.length).toBe(6);  
    });

    it ('correctly set up a resource clump', async () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.LogsAndRocks,
        element: resourceClump
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(5);
      expect(farmObject.y).toBe(32);
      expect(farmObject.xyRange.length).toBe(4);  
    });

    it ('correctly set up a fruit tree', async () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.FruitTree,
        element: fruitTree
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(57 - 1);
      expect(farmObject.y).toBe(45 - 1);
      expect(farmObject.xyRange.length).toBe(9);  
    });

    it ('correctly set up a fruit tree', async () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.FruitTree,
        element: fruitTree
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(57 - 1);
      expect(farmObject.y).toBe(45 - 1);
      expect(farmObject.xyRange.length).toBe(9);  
    });

    it ('correctly set up a small bush', async () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.Bush,
        element: smallBush
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(15);
      expect(farmObject.y).toBe(71);
      expect(farmObject.xyRange.length).toBe(1);
    });

    it ('correctly sets up a non-element', async () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.HoeDirt,
        x: 15,
        y: 15,
        width: 2,
        height: 2
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.x).toBe(15);
      expect(farmObject.y).toBe(15);
      expect(farmObject.xyRange.length).toBe(4);
    });
  });

  describe('canBeRemoved', () => {
    it ('returns true if item is in removable list', () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.LogsAndRocks,
        element: resourceClump
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.canBeRemoved).toBe(true);      
    });
    it ('returns false if item is in non-removable list', () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.Building,
        element: shippingBin
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.canBeRemoved).toBe(false);      
    });
    it ('is not removable if it contains a crop', () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.HoeDirt,
        element: cropHoeDirt
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.canBeRemoved).toBe(false);          
    });
    it ('is not removable if the object is a not allowed category', () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.Object,
        element: sprinkler
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.canBeRemoved).toBe(false);
      const config2: FarmObjectConfig = {
        type: GameObjectTypes.Object,
        element: rareCrow
      };
      const farmObject2 = new FarmObject(config2);
      expect(farmObject2.canBeRemoved).toBe(false);
    });
    it ('is not removable if the object is in the nonremovable list', () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.Object,
        element: artifactSpot
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.canBeRemoved).toBe(false);             
    });
    it ('otherwise, it is removable', () => {
      const config: FarmObjectConfig = {
        type: GameObjectTypes.Twig,
        x: 15,
        y: 15,
        width: 2,
        height: 2
      };
      const farmObject = new FarmObject(config);
      expect(farmObject.canBeRemoved).toBe(true);  
    })
  });
});
