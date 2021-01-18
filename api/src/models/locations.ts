import { Tile, KeyByInt, KeyByStringArrayOfBooleanValue, KeyByStringBooleanValue, ArrayOfBoolean, BoundingBox, KeyByFloat, Tint } from './shared';
import { Player } from './player';
import { LargeTerrainFeature, TerrainFeature, Indoors, FurnitureList, Fridge } from './farm';

export interface Locations {
    GameLocation: GameLocation[];
}

export interface GameLocation {
    "@_xsi:type"?: string;
    characters: any;
    objects: any;
    largeTerrainFeatures: LargeTerrainFeature;
    terrainFeatures: TerrainFeature;
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

export interface HeldObject {
    "@_xsi:type": string;
    bigCraftable: boolean;
    boundingBox: BoundingBox;
    canBeGrabbed: boolean;
    canBeSetDown: boolean;
    category: number;
    Category: number;
    currentRotation: number;
    defaultBoundingBox: BoundingBox;
    defaultSourceRect: BoundingBox;
    DisplayName: string;
    drawHeldObjectLow: boolean;
    edibility: number;
    flipped: boolean;
    fragility: number;
    furniture_type: number;
    hasBeenInInventory: boolean;
    hasBeenPickedUpByFarmer: boolean;
    isHoedirt: boolean;
    isLamp: boolean;
    isOn: boolean;
    isRecipe: boolean;
    isSpawnedObject: boolean;
    minutesUntilReady: number;
    name: string;
    Name: string;
    owner: number;
    parentSheetIndex: number;
    ParentSheetIndex: number;
    preservedParentSheetIndex: number;
    price: number;
    quality: number;
    questId: number;
    questItem: boolean;
    readyForHarvest: boolean;
    rotations: number;
    scale: KeyByFloat;
    setIndoors: boolean;
    setOutdoors: boolean;
    showNextIndex: boolean;
    sourceRect: BoundingBox;
    specialItem: boolean;
    SpecialVariable: number;
    Stack: number;
    stack: number;
    tileLocation: Tile;
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