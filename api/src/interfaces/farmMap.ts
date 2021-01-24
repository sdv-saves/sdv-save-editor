import { FarmType, GameObjectTypes } from '../models/enums';
import { GameLocation, ObjectsObjects, TentacledItem, LargeTerrainFeaturesClass, LargeTerrainFeatureElement, TerrainFeaturesClass, ResourceClumpsClass, ResourceClumpElement } from '../models/saveFile';
import FarmObject from './farmObject';

export class FarmMap {
    otherBuildings: FarmObject[];

    constructor(private readonly gameLocation: GameLocation, private readonly farmType: FarmType) {
       this.setOtherBuildings();
    }
    

    get objects() { 
        return ((this.gameLocation.objects as ObjectsObjects)
            .item as TentacledItem[])
            .map(x => 
                new FarmObject(
                    { type: GameObjectTypes.Object, 
                        element: x
                    })
            );
    }

    get building() { 
        return this.gameLocation.buildings
            .Building
            .map(x => 
                new FarmObject(
                    { type: GameObjectTypes.Building, 
                        element: x
                }));
    }

    get bushes() { 
        return ((this.gameLocation.largeTerrainFeatures as LargeTerrainFeaturesClass)
            .LargeTerrainFeature as LargeTerrainFeatureElement[])
            .map(x => 
                new FarmObject({
                    type: GameObjectTypes.Bush, 
                    element: x
                }));
    }

    get terrain() {
        return (this.gameLocation.terrainFeatures as TerrainFeaturesClass)
            .item
    }

    get trees() {
        return this.terrain
        .filter(x => x.value.TerrainFeature['@_xsi:type'] == 'Tree')
        .map(x =>
            new FarmObject({
                type: GameObjectTypes.Tree,
                element: x
            }));;
    }

    get fruitTrees() {
        return this.terrain
        .filter(x => x.value.TerrainFeature['@_xsi:type'] == 'FruitTree')
        .map(x =>
            new FarmObject({
                type: GameObjectTypes.FruitTree,
                element: x
            }));;
    }
    get grass() {
        return this.terrain
            .filter(x => x.value.TerrainFeature['@_xsi:type'] == 'Grass')
            .map(x =>
                new FarmObject({
                    type: GameObjectTypes.Grass,
                    element: x
                }));;
    }
    get hoeDirt() {
        return this.terrain
            .filter(x => x.value.TerrainFeature['@_xsi:type'] == 'HoeDirt')
            .map(x =>
                new FarmObject({
                    type: GameObjectTypes.HoeDirt,
                    element: x
                }));
    }
    get logsAndRocks() {
        return ((this.gameLocation.resourceClumps as ResourceClumpsClass)
            .ResourceClump as ResourceClumpElement[])
            .map(x =>
                new FarmObject({
                    type: GameObjectTypes.LogsAndRocks,
                    element: x
                }));
    }

    setOtherBuildings() {
        this.otherBuildings = [];
        this.otherBuildings = [
            ...this.otherBuildings, 

            // TODO: These seem like they need to be only for the regular farm
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 59, y: 11, width: 10, height:6}), // Farmhouse
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 7, y:8, width: 3, height:2}), // Grandpas
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 72, y: 14, width: 2, height: 1}), // Selling Bin
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 69, y: 16, width: 1, height: 1}), // Mailbox
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 33, y: 8, width: 3, height:1}), // Cave Entrance
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 25, y: 10, width: 7, height: 6}), // Greenhouse
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 27, y: 16, width: 3, height: 2}), // Greenhouse entrance mat
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 50, y: 0, width: 29, height: 10}), // rectangle including dog bowl and unusable upper right area
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 40, y: 0, width: 2, height:9}), // Farm northern entrance
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 76, y: 15, width: 4, height: 3}), // Farm eastern entrance
            new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 40, y: 60, width: 2, height: 5}) // Farm southern entrance
        ];

        if (this.farmType == FarmType.Regular) {
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 33, y: 49, width: 8, height: 10 }));  // Large Pond           
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 70, y: 28, width: 6, height: 6 }));   // Tiny Pond
        }
        if (this.farmType == FarmType.Forest) {
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 38, y: 31, width: 17, height: 14 })); // Large Pond
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 42, y: 52, width: 10, height: 6 })); // South Pond
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 60, y: 42, width: 13, height: 10 })); // South East Pond
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 70, y: 28, width: 6, height: 6 })); // East Pond           
        }
        if (this.farmType == FarmType.Wilderness) {
            this.otherBuildings.push(new FarmObject({ type: GameObjectTypes.OtherBuildings, x: 39, y: 24, width: 19, height: 16 })); // Large Pond 
        }
    }
}