import { GameObjectTypes } from '../models/enums';
import { Building, LargeTerrainFeatureElement, ResourceClumpElement, TerrainFeaturesItem, TentacledItem, TerrainFeature } from '../models/saveFile';

export interface FarmObjectConfig {
    type: GameObjectTypes;
    element?: TentacledItem |  Building | LargeTerrainFeatureElement | TerrainFeaturesItem | ResourceClumpElement | undefined;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}


export default class FarmObject {
    element: FarmObjectConfig["element"]
    x: number;
    y: number;
    width: number;
    height: number;
    xyRange: [number, number][];
    type: GameObjectTypes;

    constructor(config: FarmObjectConfig) {
        this.type = config.type;
        this.element = config.element;
        if (!this.element) {
            this.x = config.x as number;
            this.y = config.y as number;
            this.width = config.width as number;
            this.height = config.height as number;            
        } else {
            this.setValues();
        }
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
            return !(this.element as TerrainFeaturesItem).value.TerrainFeature.crop;
        }
        if (this.type == GameObjectTypes.Object) {
            const category = (this.element as TentacledItem).value.Object.category;
            if(category == -9 || category == -8) {
                return false;
            }
            if (category == 0) {
                const name = (this.element as TentacledItem).value.Object.name;
                if (this.cannotBeRemovedObjectList.indexOf(name) !== -1) {
                    return false;
                }
            }
        }
        return true;
    }

    setValues(): void {
        switch(this.type) {
            case GameObjectTypes.FruitTree:
                this.width = 3;
                this.height = 3;
                this.x = (this.element as TentacledItem).key.Vector2.X - 1;
                this.y = (this.element as TentacledItem).key.Vector2.Y - 1;
                break;
            case GameObjectTypes.Object:
            case GameObjectTypes.Tree:
            case GameObjectTypes.HoeDirt:
            case GameObjectTypes.Grass:
                this.width = 1;
                this.height = 1;
                this.x = (this.element as TentacledItem).key.Vector2.X;
                this.y = (this.element as TentacledItem).key.Vector2.Y;
                break;
            case GameObjectTypes.Bush:
                this.width = (this.element as LargeTerrainFeatureElement).size; // TODO: Figure out Bush types
                this.height = (this.element as LargeTerrainFeatureElement).size;
                this.x = (this.element as LargeTerrainFeatureElement).tilePosition.X;
                this.y = (this.element as LargeTerrainFeatureElement).tilePosition.Y;
                break;
            case GameObjectTypes.LogsAndRocks:
            case GameObjectTypes.Meteorite:
                this.width = (this.element as ResourceClumpElement).width;
                this.height = (this.element as ResourceClumpElement).height;
                this.x = (this.element as ResourceClumpElement).tile.X;
                this.y = (this.element as ResourceClumpElement).tile.Y;
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
        // returns a list of coords like this: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 1], [1, 2], [1, 3], [1, 4]]
        
        // need to translate this C# beauty to JS
        // TileXYRange = Enumerable.Range(TileX, Width)
        // .SelectMany(x =>
        //     Enumerable.Range(TileY, Height)
        //     .Select(y => new Tuple<int, int>(x, y))
        // );
        this.xyRange = Array.from(Range(this.x, this.width)).flatMap(x => Array.from(Range(this.y, this.height)).map(y => [x, y])) as [number, number][];
    }
}

function* Range(min,ct) {
    for (let x=min;x<min+ct;x++) {
        yield x;
    }
}