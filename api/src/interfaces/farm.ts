import { KeyByFloat, Tile, KeyByVector, BoundingBox, Tint, KeyByLong, ArrayOfLong } from './shared';
import { Buildings, HeldObject } from './locations';
import { Player } from './player';

export interface FarmLocation {
    "@_xsi:type": string;
    characters: Characters;
    objects: ObjectList;
    largeTerrainFeatures: LargeTerrainFeatures;
    terrainFeatures: TerrainFeatures;
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
    buildings: Buildings;
    animals: string;
    resourceClumps: string;
    piecesOfHay: number;
    grandpaScore: number;
    hasSeenGrandpaNote: boolean;
}

export interface Characters {
    NPC: Npc;
}

export interface Npc {
    "@_xsi:type": string;
    name: string;
    isEmoting: boolean;
    isCharging: boolean;
    willDestroyObjectsUnderfoot: boolean;
    isGlowing: boolean;
    coloredBorder: boolean;
    flip: boolean;
    drawOnTop: boolean;
    faceTowardFarmer: boolean;
    ignoreMovementAnimation: boolean;
    faceAwayFromFarmer: boolean;
    scale: KeyByFloat;
    timeBeforeAIMovementAgain: number;
    glowingTransparency: number;
    glowRate: number;
    Position: Tile;
    Speed: number;
    FacingDirection: number;
    Name: string;
    IsEmoting: boolean;
    CurrentEmote: number;
    Scale: number;
    daysAfterLastBirth: number;
    birthday_Day: number;
    age: number;
    manners: number;
    socialAnxiety: number;
    optimism: number;
    gender: number;
    isInvisible: boolean;
    datable: boolean;
    id: number;
    homeRegion: number;
    followSchedule: boolean;
    moveTowardPlayerThreshold: number;
    DefaultFacingDirection: number;
    DefaultPosition: Tile;
    IsWalkingInSquare: boolean;
    IsWalkingTowardPlayer: boolean;
    HorseId: string;
}

export interface ObjectList {
    item: VectorKeyObjectValue[];
}

export interface VectorKeyObjectValue {
    key: KeyByVector;
    value: ObjectValue;
}

export interface ObjectValue {
    Object: Object;
}

export interface Object {
    "@_xsi:type"?: string;
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
    scale: Tile;
    preservedParentSheetIndex: number;
    health?: number;
    maxHealth?: number;
    whichType?: number;
    gatePosition?: number;
    gateMotion?: number;
    isGate?: boolean;
    heldObject?: HeldObject;
    honeyType?: string;
    currentLidFrame?: number;
    frameCounter?: number;
    coins?: number;
    items?: ObjectItems;
    chestType?: string;
    tint?: Tint;
    playerChoiceColor?: Tint;
    playerChest?: boolean;
    fridge?: boolean;
    giftbox?: boolean;
    Tint?: Tint;
}

export interface ObjectItems {
    Item: any;
}


export interface LargeTerrainFeatures {
    LargeTerrainFeature: LargeTerrainFeature[];
}

export interface LargeTerrainFeature {
    "@_xsi:type": string;
    tilePosition: Tile;
    size: number;
    tileSheetOffset: number;
    health: number;
    flipped: boolean;
    townBush: boolean;
    drawShadow: boolean;
}

export interface TerrainFeatures {
    item: VectorKeyTerrainFeatureValue[];
}

export interface VectorKeyTerrainFeatureValue {
    key: KeyByVector;
    value: TerrainFeatureValue;
}

export interface TerrainFeatureValue {
    TerrainFeature: TerrainFeature;
}

export interface TerrainFeature {
    "@_xsi:type": string;
    growthStage?: number;
    treeType?: number;
    health?: number;
    flipped?: boolean;
    stump?: boolean;
    tapped?: boolean;
    hasSeed?: boolean;
    shakeLeft?: boolean;
    grassType?: number;
    numberOfWeeds?: number;
    grassSourceOffset?: number;
    whichFloor?: number;
    whichView?: number;
    indexOfFruit?: number;
    daysUntilMature?: number;
    fruitsOnTree?: number;
    struckByLightningCountdown?: number;
    greenHouseTree?: boolean;
    greenHouseTileTree?: boolean;
    fruitSeason?: string;
    state?: number;
    fertilizer?: number;
    crop?: Crop;
}

export interface Crop {
    phaseDays: PhaseDays;
    rowInSpriteSheet: number;
    phaseToShow: number;
    currentPhase: number;
    harvestMethod: number;
    indexOfHarvest: number;
    regrowAfterHarvest: number;
    dayOfCurrentPhase: number;
    minHarvest: number;
    maxHarvest: number;
    maxHarvestIncreasePerFarmingLevel: number;
    daysOfUnclutteredGrowth: number;
    whichForageCrop: number;
    seasonsToGrowIn: SeasonsToGrowIn;
    tintColor: Tint;
    flip: boolean;
    fullGrown: boolean;
    raisedSeeds: boolean;
    programColored: boolean;
    dead: boolean;
    forageCrop: boolean;
    chanceForExtraCrops: number;
}

export interface PhaseDays {
    int: number[];
}

export interface SeasonsToGrowIn {
    string: string;
}

export interface Indoors {
    "@_xsi:type": string;
    characters: string;
    objects: ObjectList;
    largeTerrainFeatures: string;
    terrainFeatures: string;
    uniqueName: string;
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
    wallPaper?: string;
    floor?: string;
    furniture?: FurnitureList;
    farmerNumberOfOwner?: number;
    fireplaceOn?: boolean;
    fridge?: Fridge;
    farmhand?: Farmhand;
    animals?: AnimalList;
    animalLimit?: number;
    animalsThatLiveHere?: ArrayOfLong;
    incubatingEgg?: Tile;
}

export interface Farmhand extends Player { }

export interface AnimalList {
    item: LongKeyFarmAnimalValue[];
}

export interface LongKeyFarmAnimalValue {
    key: KeyByLong;
    value: FarmAnimalValue;
}

export interface FarmAnimalValue {
    FarmAnimal: FarmAnimal;
}

export interface FarmAnimal {
    name: string;
    isEmoting: boolean;
    isCharging: boolean;
    willDestroyObjectsUnderfoot: boolean;
    isGlowing: boolean;
    coloredBorder: boolean;
    flip: boolean;
    drawOnTop: boolean;
    faceTowardFarmer: boolean;
    ignoreMovementAnimation: boolean;
    faceAwayFromFarmer: boolean;
    scale: KeyByFloat;
    timeBeforeAIMovementAgain: number;
    glowingTransparency: number;
    glowRate: number;
    Position: Tint;
    Speed: number;
    FacingDirection: number;
    Name: string;
    IsEmoting: boolean;
    CurrentEmote: number;
    Scale: number;
    defaultProduceIndex: number;
    deluxeProduceIndex: number;
    currentProduce: number;
    friendshipTowardFarmer: number;
    daysSinceLastFed: number;
    pushAccumulator: number;
    uniqueFrameAccumulator: number;
    age: number;
    meatIndex: number;
    health: number;
    price: number;
    produceQuality: number;
    daysToLay: number;
    daysSinceLastLay: number;
    ageWhenMature: number;
    harvestType: number;
    happiness: number;
    fullness: number;
    happinessDrain: number;
    fullnessDrain: number;
    wasPet: boolean;
    showDifferentTextureWhenReadyForHarvest: boolean;
    allowReproduction: boolean;
    sound: string;
    type: string;
    buildingTypeILiveIn: string;
    toolUsedForHarvest: string;
    frontBackBoundingBox: BoundingBox;
    sidewaysBoundingBox: BoundingBox;
    frontBackSourceRect: BoundingBox;
    sidewaysSourceRect: BoundingBox;
    myID: number;
    ownerID: number;
    parentId: number;
    homeLocation: Tile;
    moodMessage: number;
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
