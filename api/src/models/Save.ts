import { Tile, ArrayOfInt, BoundingBox, KeyByString } from './shared';
import { Player, FriendshipValue } from './player';
import { Locations, } from './locations';

export interface SaveGame {
    "@_xmlns:xsi": string;
    "@_xmlns:xsd": string;
    player: Player;
    locations: Locations;
    currentSeason: string;
    samBandName: string;
    elliottBookName: string;
    dayOfMonth: number;
    year: number;
    farmerWallpaper: number;
    FarmerFloor: number;
    currentWallpaper: number;
    currentFloor: number;
    currentSongIndex: number;
    countdownToWedding: CountdownToWedding;
    incubatingEgg: Tile;
    chanceToRainTomorrow: number;
    dailyLuck: number;
    uniqueIDForThisGame: number;
    weddingToday: boolean;
    isRaining: boolean;
    isDebrisWeather: boolean;
    shippingTax: boolean;
    bloomDay: boolean;
    isLightning: boolean;
    isSnowing: boolean;
    shouldSpawnMonsters: boolean;
    hasApplied1_3_UpdateChanges: boolean;
    musicVolume: number;
    soundVolume: number;
    cropsOfTheWeek: ArrayOfInt;
    dishOfTheDay: DishOfTheDay;
    latestID: number;
    options: Options;
    CustomData: string;
    mine_permanentMineChanges: MinePermanentMineChanges;
    mine_lowestLevelReached: number;
    minecartHighScore: number;
    weatherForTomorrow: number;
    whichFarm: number;
    farmerFriendships: FarmerFriendships;
}

export interface CountdownToWedding {
    "@_xsi:nil": boolean;
}

export interface DishOfTheDay {
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
}

export interface Options {
    autoRun: boolean;
    dialogueTyping: boolean;
    fullscreen: boolean;
    windowedBorderlessFullscreen: boolean;
    showPortraits: boolean;
    showMerchantPortraits: boolean;
    showMenuBackground: boolean;
    playFootstepSounds: boolean;
    alwaysShowToolHitLocation: boolean;
    hideToolHitLocationWhenInMotion: boolean;
    pauseWhenOutOfFocus: boolean;
    pinToolbarToggle: boolean;
    mouseControls: boolean;
    keyboardControls: boolean;
    gamepadControls: boolean;
    rumble: boolean;
    ambientOnlyToggle: boolean;
    zoomButtons: boolean;
    invertScrollDirection: boolean;
    screenFlash: boolean;
    hardwareCursor: boolean;
    showPlacementTileForGamepad: boolean;
    snappyMenus: boolean;
    ipConnectionsEnabled: boolean;
    enableServer: boolean;
    enableFarmhandCreation: boolean;
    musicVolumeLevel: number;
    soundVolumeLevel: number;
    zoomLevel: number;
    footstepVolumeLevel: number;
    ambientVolumeLevel: number;
    snowTransparency: number;
    preferredResolutionX: number;
    preferredResolutionY: number;
    lightingQuality: number;
    serverPrivacy: string;
    actionButton: InputButtonList;
    toolSwapButton: string;
    cancelButton: InputButtonValue;
    useToolButton: InputButtonList;
    moveUpButton: InputButtonValue;
    moveRightButton: InputButtonValue;
    moveDownButton: InputButtonValue;
    moveLeftButton: InputButtonValue;
    menuButton: InputButtonList;
    runButton: InputButtonValue;
    tmpKeyToReplace: InputButtonValue;
    chatButton: InputButtonList;
    mapButton: InputButtonValue;
    journalButton: InputButtonValue;
    inventorySlot1: InputButtonValue;
    inventorySlot2: InputButtonValue;
    inventorySlot3: InputButtonValue;
    inventorySlot4: InputButtonValue;
    inventorySlot5: InputButtonValue;
    inventorySlot6: InputButtonValue;
    inventorySlot7: InputButtonValue;
    inventorySlot8: InputButtonValue;
    inventorySlot9: InputButtonValue;
    inventorySlot10: InputButtonValue;
    inventorySlot11: InputButtonValue;
    inventorySlot12: InputButtonValue;
}

export interface InputButtonList {
    InputButton: InputButton[];
}
export interface InputButtonValue {
    InputButton: InputButton;
}

export interface InputButton {
    key: string;
    mouseLeft: boolean;
    mouseRight: boolean;
}

export interface FarmerFriendships {
    item: FarmerFriendshipsKeyValue[];
}

export interface FarmerFriendshipsKeyValue {
    key: FarmerPairValue;
    value: FriendshipValue;
}

export interface FarmerPairValue {
    FarmerPair: FarmerPair;
}

export interface FarmerPair {
    Farmer1: number;
    Farmer2: number;
}

export interface KeyByStringMineInfoValue {
    key: KeyByString;
    value: MineInfoValue;
}

export interface MineInfo {
    platformContainersLeft: number;
    chestsLeft: number;
    coalCartsLeft: number;
    elevator: number;
}

export interface MineInfoValue {
    MineInfo: MineInfo;
}

export interface MinePermanentMineChanges {
    item: KeyByStringMineInfoValue[];
}