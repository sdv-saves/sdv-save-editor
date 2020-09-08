import { GameObjectTypes } from './enums';

export default class FarmObject {
    element: any;
    x: number;
    y: number;
    width: number;
    height: number;
    xyRange: [number, number][];
    type: GameObjectTypes;

    constructor(data: any) {

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

    get canBeRemoved() { 
                if (this.canBeRemovedList.Contains(Type)) {
                    return true;
                }
                if (this.canBeRemovedList.Contains(Type)) {
                    return false;
                }
                if (this.type == GameObjectTypes.HoeDirt) {
                    return Element.Element("value").Element("TerrainFeature").Element("crop") == null;
                }
                if (this.type == GameObjectTypes.Object) {
                    var category = int.Parse(Element.Element("value").Element("Object").Element("category").Value);
                    if(category == -9 || category == -8) {
                        return false;
                    }
                    if (category == 0) {
                        var name = Element.Element("value").Element("Object").Element("name").Value;
                        var cantBeRemoved = new List<string> {
                            "Wood Fence",
                            "Gate",
                            "Crab Pot",
                            "Artifact Spot"
                        };
                        if (cantBeRemoved.Contains(name)) {
                            return false;
                        }
                    }
                }
                return true;
            }
        }

}
