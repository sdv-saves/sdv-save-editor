import { Tile, KeyByInt, KeyByStringArrayOfBooleanValue, KeyByStringBooleanValue, ArrayOfBoolean, BoundingBox, KeyByFloat, Tint } from './shared';
import { Player } from './player';

export interface Locations {
    GameLocation: GameLocation[];
}

export interface GameLocation {
    "@_xsi:type"?: string;
    characters: any;
    objects: any;
    largeTerrainFeatures: any;
    terrainFeatures: any;
    name: string;
    waterColor: Tile;
    isFarm: boolean;
    isOutdoors: boolean;
    isStructure: boolean;
    ignoreDebrisWeather: boolean;
    ignoreOutdoorLighting: boolean;
    ignoreLights: boolean;
    treatAsOutdoors: boolean;
    numberOfSpawnedObjectsOnMap: number;
    wallPaper?: KeyByInt;
    floor?: KeyByInt;
    furniture?: FurnitureList;
    farmerNumberOfOwner?: number;
    fireplaceOn?: boolean;
    fridge?: Fridge;
    buildings?: Buildings;
    animals?: string;
    resourceClumps?: ResourceClumps;
    piecesOfHay?: number;
    grandpaScore?: number;
    hasSeenGrandpaNote?: boolean;
    daysUntilCommunityUpgrade?: number;
    itemsFromPlayerToSell?: string;
    itemsToStartSellingTomorrow?: string;
    bridgeFixed?: boolean;
    log?: Log;
    stockSeed?: number;
    drivingOff?: boolean;
    drivingBack?: boolean;
    leaving?: boolean;
    museumPieces?: string;
    stumps?: ResourceClumps;
    hasUnlockedStatue?: boolean;
    witchStatueGone?: boolean;
    bundles?: KeyByStringArrayOfBooleanValue;
    bundleRewards?: KeyByStringBooleanValue;
    areasComplete?: ArrayOfBoolean;
    numberOfStarsOnPlaque?: number;
    submerged?: boolean;
    ascending?: boolean;
}

export interface FurnitureList {
    Furniture: Furniture[];
}

export interface Furniture {
    category: number;
    name: string;
    parentSheetIndex: number;
    specialItem: boolean;
    hasBeenInInventory: boolean;
    SpecialVariable: number;
    Category: number;
    ParentSheetIndex: number;
    DisplayName: string;
    Name: string;
    Stack: number;
    tileLocation: Tile;
    owner: number;
    canBeSetDown: boolean;
    canBeGrabbed: boolean;
    isHoedirt: boolean;
    isSpawnedObject: boolean;
    questItem: boolean;
    questId: number;
    isOn: boolean;
    fragility: number;
    price: number;
    edibility: number;
    stack: number;
    quality: number;
    bigCraftable: boolean;
    setOutdoors: boolean;
    setIndoors: boolean;
    readyForHarvest: boolean;
    showNextIndex: boolean;
    flipped: boolean;
    hasBeenPickedUpByFarmer: boolean;
    isRecipe: boolean;
    isLamp: boolean;
    heldObject?: HeldObject;
    minutesUntilReady: number;
    boundingBox: BoundingBox;
    scale: KeyByFloat;
    preservedParentSheetIndex: number;
    furniture_type: number;
    rotations: number;
    currentRotation: number;
    sourceRect: BoundingBox;
    defaultSourceRect: BoundingBox;
    defaultBoundingBox: BoundingBox;
    drawHeldObjectLow: boolean;
    "@_xsi:type"?: string;
}

export interface HeldObject {
    "@_xsi:type": string;
    category: number;
    name: string;
    parentSheetIndex: number;
    specialItem: boolean;
    hasBeenInInventory: boolean;
    SpecialVariable: number;
    Category: number;
    ParentSheetIndex: number;
    DisplayName: string;
    Name: string;
    Stack: number;
    tileLocation: Tile;
    owner: number;
    canBeSetDown: boolean;
    canBeGrabbed: boolean;
    isHoedirt: boolean;
    isSpawnedObject: boolean;
    questItem: boolean;
    questId: number;
    isOn: boolean;
    fragility: number;
    price: number;
    edibility: number;
    stack: number;
    quality: number;
    bigCraftable: boolean;
    setOutdoors: boolean;
    setIndoors: boolean;
    readyForHarvest: boolean;
    showNextIndex: boolean;
    flipped: boolean;
    hasBeenPickedUpByFarmer: boolean;
    isRecipe: boolean;
    isLamp: boolean;
    minutesUntilReady: number;
    boundingBox: BoundingBox;
    scale: KeyByFloat;
    preservedParentSheetIndex: number;
    furniture_type: number;
    rotations: number;
    currentRotation: number;
    sourceRect: BoundingBox;
    defaultSourceRect: BoundingBox;
    defaultBoundingBox: BoundingBox;
    drawHeldObjectLow: boolean;
}

export interface Fridge {
    category: number;
    name: string;
    parentSheetIndex: number;
    specialItem: boolean;
    hasBeenInInventory: boolean;
    SpecialVariable: number;
    Category: number;
    ParentSheetIndex: number;
    DisplayName: string;
    Name: string;
    Stack: number;
    tileLocation: Tile;
    owner: number;
    type: string;
    canBeSetDown: boolean;
    canBeGrabbed: boolean;
    isHoedirt: boolean;
    isSpawnedObject: boolean;
    questItem: boolean;
    questId: number;
    isOn: boolean;
    fragility: number;
    price: number;
    edibility: number;
    stack: number;
    quality: number;
    bigCraftable: boolean;
    setOutdoors: boolean;
    setIndoors: boolean;
    readyForHarvest: boolean;
    showNextIndex: boolean;
    flipped: boolean;
    hasBeenPickedUpByFarmer: boolean;
    isRecipe: boolean;
    isLamp: boolean;
    minutesUntilReady: number;
    boundingBox: BoundingBox;
    scale: KeyByFloat;
    preservedParentSheetIndex: number;
    currentLidFrame: number;
    frameCounter: number;
    coins: number;
    items: string;
    chestType: string;
    tint: Tint;
    playerChoiceColor: Tint;
    playerChest: boolean;
    fridge: boolean;
    giftbox: boolean;
    Tint: Tint;
}

export interface Buildings {
    Building: Building[];
  }
  
  export interface Building {
    indoors: Indoors;
    tileX: number;
    tileY: number;
    tilesWide: number;
    tilesHigh: number;
    maxOccupants: number;
    currentOccupants: number;
    daysOfConstructionLeft: number;
    daysUntilUpgrade: number;
    buildingType: string;
    humanDoor: Tile;
    animalDoor: Tile;
    color: Tint;
    animalDoorOpen: boolean;
    magical: boolean;
    owner: number;
    "@_xsi:type"?: string;
  }
  
  export interface Indoors {
    "@_xsi:type"?: string;
    characters: string;
    objects: any;
    largeTerrainFeatures: string;
    terrainFeatures: string;
    name: string;
    waterColor: Tint;
    isFarm: boolean;
    isOutdoors: boolean;
    isStructure: boolean;
    ignoreDebrisWeather: boolean;
    ignoreOutdoorLighting: boolean;
    ignoreLights: boolean;
    treatAsOutdoors: boolean;
    numberOfSpawnedObjectsOnMap: number;
    wallPaper: any;
    floor: any;
    furniture?: Furniture;
    farmerNumberOfOwner?: number;
    fireplaceOn?: boolean;
    fridge?: Fridge;
    farmhand?: Farmhand;
    uniqueName: string;
    animals?: string;
    animalLimit?: number;
    animalsThatLiveHere?: string;
    incubatingEgg?: Tile;
  }

export interface Farmhand extends Player {

}



export interface ResourceClumps {
    ResourceClump: ResourceClump[];
}
  
export interface ResourceClump {
    width: number;
    height: number;
    parentSheetIndex: number;
    health: number;
    tile: Tile;
}

export interface Log {
    width: number;
    height: number;
    parentSheetIndex: number;
    health: number;
    tile: Tile;
}