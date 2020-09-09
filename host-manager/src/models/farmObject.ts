import { GameObjectTypes } from './enums';
import { LargeTerrainFeature, TerrainFeature, VectorKeyObjectValue, VectorKeyTerrainFeatureValue, ObjectList } from '../interfaces/farm';
import { Building, ResourceClump } from '../interfaces/locations';

export interface FarmObjectConfig {
    type: GameObjectTypes;
    element?: VectorKeyObjectValue | Building | LargeTerrainFeature | VectorKeyTerrainFeatureValue | ResourceClump;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}


export default class FarmObject {
    element: VectorKeyObjectValue | Building | LargeTerrainFeature | VectorKeyTerrainFeatureValue | ResourceClump | undefined;
    x: number;
    y: number;
    width: number;
    height: number;
    xyRange: [number, number][];
    type: GameObjectTypes;

    constructor(config: FarmObjectConfig) {
        this.type = config.type;
        this.element = config.element;
        if (this.type == GameObjectTypes.Building && this.element) {
            this.x = (this.element as Building).tileX;
            this.y = (this.element as Building).tileY;
            this.width = (this.element as Building).tilesWide + 1;
            this.height = (this.element as Building).tilesHigh + 1;            
        }
        if (!this.element) {
            this.x = config.x as number;
            this.y = config.y as number;
            this.width = config.width as number;
            this.height = config.height as number;            
        }
        this.setValues();
        this.setTileXYRange();
    }

    canBeRemovedList: GameObjectTypes[] = [
        GameObjectTypes.Tree,
        GameObjectTypes.Grass,
        GameObjectTypes.Bush,
        GameObjectTypes.LogsAndRocks
    ];
    cannotBeRemovedList: GameObjectTypes[] = [
        GameObjectTypes.Building,
        GameObjectTypes.Meteorite,
        GameObjectTypes.FruitTree,
        GameObjectTypes.OtherBuildings
    ];

    cannotBeRemovedObjectList: string[] = [
        "Wood Fence",
        "Gate",
        "Crab Pot",
        "Artifact Spot"
    ]

    get canBeRemoved() { 
        if (this.canBeRemovedList.indexOf(this.type) !== -1) {
            return true;
        }
        if (this.cannotBeRemovedList.indexOf(this.type) !== -1) {
            return false;
        }
        if (this.type == GameObjectTypes.HoeDirt) {
            return !(this.element as TerrainFeature).crop;
        }
        if (this.type == GameObjectTypes.Object) {
            const category = (this.element as VectorKeyObjectValue).value.Object.category;
            if(category == -9 || category == -8) {
                return false;
            }
            if (category == 0) {
                const name = (this.element as VectorKeyObjectValue).value.Object.name;
                if (this.cannotBeRemovedObjectList.indexOf(name) !== -1) {
                    return false;
                }
            }
        }
        return true;
    }

    setValues(): void {
        switch(this.type) {
            case GameObjectTypes.Object:
            case GameObjectTypes.Tree:
            case GameObjectTypes.FruitTree:
            case GameObjectTypes.HoeDirt:
            case GameObjectTypes.Grass:
                this.width = 1;
                this.height = 1;
                this.x = (this.element as VectorKeyTerrainFeatureValue).key.Vector2.X;
                this.y = (this.element as VectorKeyTerrainFeatureValue).key.Vector2.Y;
                break;
            case GameObjectTypes.Bush:
                this.width = 1; // TODO: Figure out Bush types
                this.height = 1; // TODO: Figure out Bush types to determine W and H
                this.x = (this.element as LargeTerrainFeature).tilePosition.X;
                this.y = (this.element as LargeTerrainFeature).tilePosition.Y;
                break;
            case GameObjectTypes.LogsAndRocks:
            case GameObjectTypes.Meteorite:
                this.width = (this.element as ResourceClump).width;
                this.height = (this.element as ResourceClump).height;
                this.x = (this.element as ResourceClump).tile.X;
                this.y = (this.element as ResourceClump).tile.Y;
                break;
            case GameObjectTypes.Building:                  
                this.width = (this.element as Building).tilesWide + 1;
                this.height = (this.element as Building).tilesHigh + 1;
                this.x = (this.element as Building).tileX;
                this.y = (this.element as Building).tileY;
                break;
        }
    }

    setTileXYRange() {
        this.xyRange = []; 

        // returns a list of coords like this: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 1], [1, 2], [1, 3], [1, 4]]

        // need to translate this C# beauty to JS
        // TileXYRange = Enumerable.Range(TileX, Width)
        // .SelectMany(x =>
        //     Enumerable.Range(TileY, Height)
        //     .Select(y => new Tuple<int, int>(x, y))
        // );
    }
}


