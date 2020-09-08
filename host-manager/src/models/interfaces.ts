import { Tile, KeyByFloat, KeyByInt, KeyByStringList, KeyByIntList, BoundingBox, KeyByStringIntValue, KeyByStringArrayOfIntValue, KeyByStringArrayOfBooleanValue, KeyByStringBooleanValue, ArrayOfBoolean, ArrayOfInt, KeyByString, Tint } from './shared';

export interface SaveFile {
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

export interface Player {
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
    questLog: QuestLog;
    professions: string;
    newLevels: string;
    experiencePoints: KeyByIntList;
    items: ItemList;
    dialogueQuestionsAnswered: string;
    furnitureOwned: string;
    cookingRecipes: KeyByStringIntValue;
    craftingRecipes: KeyByStringIntValue;
    activeDialogueEvents: string;
    eventsSeen: KeyByIntList;
    secretNotesSeen: string;
    songsHeard: KeyByStringList;
    achievements: string;
    specialItems: string;
    specialBigCraftables: string;
    mailReceived: KeyByStringList;
    mailForTomorrow: string;
    mailbox: KeyByString;
    stats: Stats;
    blueprints: string;
    toolBox: ToolList;
    cupboard: Cupboard;
    farmName: string;
    favoriteThing: string;
    slotCanHost: boolean;
    userID: string;
    catPerson: boolean;
    mostRecentBed: Tile;
    shirt: number;
    hair: number;
    skin: number;
    shoes: number;
    accessory: number;
    facialHair: number;
    hairstyleColor: Tint;
    pantsColor: Tint;
    newEyeColor: Tint;
    hat: Hat;
    boots: Boots;
    divorceTonight: boolean;
    deepestMineLevel: number;
    woodPieces: number;
    stonePieces: number;
    copperPieces: number;
    ironPieces: number;
    coalPieces: number;
    goldPieces: number;
    iridiumPieces: number;
    quartzPieces: number;
    caveChoice: number;
    feed: number;
    farmingLevel: number;
    miningLevel: number;
    combatLevel: number;
    foragingLevel: number;
    fishingLevel: number;
    luckLevel: number;
    newSkillPointsToSpend: number;
    addedFarmingLevel: number;
    addedMiningLevel: number;
    addedCombatLevel: number;
    addedForagingLevel: number;
    addedFishingLevel: number;
    addedLuckLevel: number;
    maxStamina: number;
    maxItems: number;
    stamina: number;
    resilience: number;
    attack: number;
    immunity: number;
    attackIncreaseModifier: number;
    knockbackModifier: number;
    weaponSpeedModifier: number;
    critChanceModifier: number;
    critPowerModifier: number;
    weaponPrecisionModifier: number;
    clubCoins: number;
    daysLeftForToolUpgrade: number;
    houseUpgradeLevel: number;
    daysUntilHouseUpgrade: number;
    coopUpgradeLevel: number;
    barnUpgradeLevel: number;
    hasGreenhouse: boolean;
    hasUnlockedSkullDoor: boolean;
    hasDarkTalisman: boolean;
    hasMagicInk: boolean;
    showChestColorPicker: boolean;
    hasMagnifyingGlass: boolean;
    hasWateringCanEnchantment: boolean;
    magneticRadius: number;
    temporaryInvincibilityTimer: number;
    health: number;
    maxHealth: number;
    timesReachedMineBottom: number;
    difficultyModifier: number;
    isMale: boolean;
    hasBusTicket: boolean;
    stardewHero: boolean;
    hasClubCard: boolean;
    hasSpecialCharm: boolean;
    basicShipped: KeyByStringIntValue;
    mineralsFound: KeyByStringIntValue;
    recipesCooked: string;
    archaeologyFound: string;
    fishCaught: KeyByStringArrayOfIntValue;
    friendshipData: FriendshipData;
    dayOfMonthForSaveGame: number;
    seasonForSaveGame: number;
    yearForSaveGame: number;
    overallsColor: number;
    shirtColor: number;
    skinColor: number;
    hairColor: number;
    eyeColor: number;
    bobber: string;
    saveTime: number;
    isCustomized: boolean;
    homeLocation: string;
    daysMarried: number;
    movementMultiplier: number;
    money: number;
    totalMoneyEarned: number;
    millisecondsPlayed: number;
    hasRustyKey: boolean;
    hasSkullKey: boolean;
    canUnderstandDwarves: boolean;
    UniqueMultiplayerID: number;
}

export interface QuestLog {
    Quest: Quest[];
}

export interface Quest {
    "@_xsi:type"?: string;
    _currentObjective: string;
    _questDescription: string;
    _questTitle: string;
    rewardDescription: number;
    accepted: boolean;
    completed: boolean;
    dailyQuest: boolean;
    showNew: boolean;
    canBeCancelled: boolean;
    destroy: boolean;
    id: number;
    moneyReward: number;
    questType: number;
    daysLeft: number;
    nextQuests: KeyByInt;
    questTitle: string;
    whoToGreet?: KeyByStringList;
    total?: number;
    parts?: Parts;
    objective?: Objective;
    completionString?: string;
    targetMessage?: string;
    monsterName?: string;
    target?: string;
    monster?: Monster;
    numberToKill?: number;
    reward?: number;
    numberKilled?: number;
    dialogueparts?: Parts;
    itemIndex?: number;
    number?: number;
}

export interface Parts {
    DescriptionElement: DescriptionElement[];
}
  
export interface DescriptionElement {
    xmlKey: string;
    param: any;
}

export interface Objective {
    xmlKey: string;
    param: Param;
}
  
export interface Param {
    anyType: AnyType[];
}

export interface AnyType {
    "#text"?: number;
    "@_xsi:type": string;
    name?: string;
    isEmoting?: boolean;
    isCharging?: boolean;
    willDestroyObjectsUnderfoot?: boolean;
    isGlowing?: boolean;
    coloredBorder?: boolean;
    flip?: boolean;
    drawOnTop?: boolean;
    faceTowardFarmer?: boolean;
    ignoreMovementAnimation?: boolean;
    faceAwayFromFarmer?: boolean;
    scale?: KeyByFloat;
    timeBeforeAIMovementAgain?: number;
    glowingTransparency?: number;
    glowRate?: number;
    Position?: Tile;
    Speed?: number;
    FacingDirection?: number;
    Name?: string;
    IsEmoting?: boolean;
    CurrentEmote?: number;
    Scale?: number;
    daysAfterLastBirth?: number;
    birthday_Day?: number;
    age?: number;
    manners?: number;
    socialAnxiety?: number;
    optimism?: number;
    gender?: number;
    isInvisible?: boolean;
    datable?: boolean;
    id?: number;
    homeRegion?: number;
    followSchedule?: boolean;
    moveTowardPlayerThreshold?: number;
    DefaultFacingDirection?: number;
    DefaultPosition?: Tile;
    IsWalkingInSquare?: boolean;
    IsWalkingTowardPlayer?: boolean;
    damageToFarmer?: number;
    health?: number;
    maxHealth?: number;
    coinsToDrop?: number;
    durationOfRandomMovements?: number;
    resilience?: number;
    slipperiness?: number;
    experienceGained?: number;
    jitteriness?: number;
    missChance?: number;
    isGlider?: boolean;
    mineMonster?: boolean;
    hasSpecialItem?: boolean;
    objectsToDrop?: KeyByInt;
}

export interface Monster {
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
    damageToFarmer: number;
    health: number;
    maxHealth: number;
    coinsToDrop: number;
    durationOfRandomMovements: number;
    resilience: number;
    slipperiness: number;
    experienceGained: number;
    jitteriness: number;
    missChance: number;
    isGlider: boolean;
    mineMonster: boolean;
    hasSpecialItem: boolean;
    objectsToDrop: KeyByInt;
}

export interface ItemList {
    Item: Item[];
}
  
export interface Item {
    "@_xsi:type"?: string;
    category?: number;
    name?: string;
    specialItem?: boolean;
    hasBeenInInventory?: boolean;
    SpecialVariable?: number;
    Category?: number;
    ParentSheetIndex?: number;
    DisplayName?: string;
    Name?: string;
    Stack?: number;
    initialParentTileIndex?: number;
    currentParentTileIndex?: number;
    indexOfMenuItemView?: number;
    stackable?: boolean;
    instantUse?: boolean;
    upgradeLevel?: number;
    numAttachmentSlots?: number;
    attachments?: string;
    BaseName?: string;
    InitialParentTileIndex?: number;
    IndexOfMenuItemView?: number;
    InstantUse?: boolean;
    Stackable?: boolean;
    type: any;
    minDamage?: number;
    maxDamage?: number;
    speed?: number;
    addedPrecision?: number;
    addedDefense?: number;
    addedAreaOfEffect?: number;
    knockback?: number;
    critChance?: number;
    critMultiplier?: number;
    isOnSpecial?: boolean;
    parentSheetIndex?: number;
    tileLocation?: Tile;
    owner?: number;
    canBeSetDown?: boolean;
    canBeGrabbed?: boolean;
    isHoedirt?: boolean;
    isSpawnedObject?: boolean;
    questItem?: boolean;
    questId?: number;
    isOn?: boolean;
    fragility?: number;
    price?: number;
    edibility?: number;
    stack?: number;
    quality?: number;
    bigCraftable?: boolean;
    setOutdoors?: boolean;
    setIndoors?: boolean;
    readyForHarvest?: boolean;
    showNextIndex?: boolean;
    flipped?: boolean;
    hasBeenPickedUpByFarmer?: boolean;
    isRecipe?: boolean;
    isLamp?: boolean;
    minutesUntilReady?: number;
    boundingBox?: BoundingBox;
    scale?: Tile;
    preservedParentSheetIndex?: number;
    "@_xsi:nil"?: boolean;
}

export interface Stats {
    seedsSown: number;
    itemsShipped: number;
    itemsCooked: number;
    itemsCrafted: number;
    chickenEggsLayed: number;
    duckEggsLayed: number;
    cowMilkProduced: number;
    goatMilkProduced: number;
    rabbitWoolProduced: number;
    sheepWoolProduced: number;
    cheeseMade: number;
    goatCheeseMade: number;
    trufflesFound: number;
    stoneGathered: number;
    rocksCrushed: number;
    dirtHoed: number;
    giftsGiven: number;
    timesUnconscious: number;
    averageBedtime: number;
    timesFished: number;
    fishCaught: number;
    bouldersCracked: number;
    stumpsChopped: number;
    stepsTaken: number;
    monstersKilled: number;
    diamondsFound: number;
    prismaticShardsFound: number;
    otherPreciousGemsFound: number;
    caveCarrotsFound: number;
    copperFound: number;
    ironFound: number;
    coalFound: number;
    coinsFound: number;
    goldFound: number;
    iridiumFound: number;
    barsSmelted: number;
    beveragesMade: number;
    preservesMade: number;
    piecesOfTrashRecycled: number;
    mysticStonesCrushed: number;
    daysPlayed: number;
    weedsEliminated: number;
    sticksChopped: number;
    notesFound: number;
    questsCompleted: number;
    starLevelCropsShipped: number;
    cropsShipped: number;
    itemsForaged: number;
    slimesKilled: number;
    geodesCracked: number;
    goodFriends: number;
    specificMonstersKilled: KeyByStringIntValue;
    GoodFriends: number;
    CropsShipped: number;
    ItemsForaged: number;
    GeodesCracked: number;
    SlimesKilled: number;
    StarLevelCropsShipped: number;
    StoneGathered: number;
    QuestsCompleted: number;
    FishCaught: number;
    NotesFound: number;
    SticksChopped: number;
    WeedsEliminated: number;
    DaysPlayed: number;
    BouldersCracked: number;
    MysticStonesCrushed: number;
    GoatCheeseMade: number;
    CheeseMade: number;
    PiecesOfTrashRecycled: number;
    PreservesMade: number;
    BeveragesMade: number;
    BarsSmelted: number;
    IridiumFound: number;
    GoldFound: number;
    CoinsFound: number;
    CoalFound: number;
    IronFound: number;
    CopperFound: number;
    CaveCarrotsFound: number;
    OtherPreciousGemsFound: number;
    PrismaticShardsFound: number;
    DiamondsFound: number;
    MonstersKilled: number;
    StepsTaken: number;
    StumpsChopped: number;
    TimesFished: number;
    AverageBedtime: number;
    TimesUnconscious: number;
    GiftsGiven: number;
    DirtHoed: number;
    RocksCrushed: number;
    TrufflesFound: number;
    SheepWoolProduced: number;
    RabbitWoolProduced: number;
    GoatMilkProduced: number;
    CowMilkProduced: number;
    DuckEggsLayed: number;
    ItemsCrafted: number;
    ChickenEggsLayed: number;
    ItemsCooked: number;
    ItemsShipped: number;
    SeedsSown: number;
  }

export interface ToolList {
    Tool: Tool[];
}

export interface Tool {
    "@_xsi:nil": boolean;
}

export interface Cupboard {
    Object: Object[];
}
  
export interface Object {
    "@_xsi:nil": boolean;
}
  

export interface Hat {
    category: number;
    name: string;
    specialItem: boolean;
    hasBeenInInventory: boolean;
    SpecialVariable: number;
    Category: number;
    ParentSheetIndex: number;
    DisplayName: string;
    Name: string;
    Stack: number;
    which: number;
    skipHairDraw: boolean;
    ignoreHairstyleOffset: boolean;
}
  
export interface Boots {
    category: number;
    name: string;
    specialItem: boolean;
    hasBeenInInventory: boolean;
    SpecialVariable: number;
    Category: number;
    ParentSheetIndex: number;
    DisplayName: string;
    Name: string;
    Stack: number;
    defenseBonus: number;
    immunityBonus: number;
    indexInTileSheet: number;
    price: number;
    indexInColorSheet: number;
}

export interface FriendshipDataList {
    item: FriendshipData;
}

export interface FriendshipData {
    key: KeyByString;
    value: FriendshipValue;
}

export interface FriendshipValue {
    Friendship: Friendship;
}

export interface Friendship {
    Points: number;
    GiftsThisWeek: number;
    GiftsToday: number;
    TalkedToToday: boolean;
    ProposalRejected: boolean;
    Status: string;
    Proposer: number;
    LastGiftDate?: LastGiftDate;
}
  
export interface LastGiftDate {
    Year: number;
    DayOfMonth: number;
    Season: string;
    TotalDays: number;
}

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

  export interface Farmhand {
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
    questLog: QuestLog;
    professions: any;
    newLevels: any;
    experiencePoints: KeyByIntList;
    items: ItemList;
    dialogueQuestionsAnswered: string;
    furnitureOwned: string;
    cookingRecipes: KeyByStringIntValue;
    craftingRecipes: KeyByStringIntValue;
    activeDialogueEvents: any;
    eventsSeen: KeyByIntList;
    secretNotesSeen: string;
    songsHeard: KeyByStringList;
    achievements: any;
    specialItems: any;
    specialBigCraftables: any;
    mailReceived: KeyByStringList;
    mailForTomorrow: any;
    mailbox: KeyByString;
    stats: Stats;
    blueprints: string;
    toolBox: ToolList;
    cupboard: Cupboard;
    farmName: string;
    favoriteThing: string;
    slotCanHost: boolean;
    userID: number;
    catPerson: boolean;
    mostRecentBed: Tile;
    shirt: number;
    hair: number;
    skin: number;
    shoes: number;
    accessory: number;
    facialHair: number;
    hairstyleColor: Tint;
    pantsColor: Tint;
    newEyeColor: Tint;
    divorceTonight: boolean;
    deepestMineLevel: number;
    woodPieces: number;
    stonePieces: number;
    copperPieces: number;
    ironPieces: number;
    coalPieces: number;
    goldPieces: number;
    iridiumPieces: number;
    quartzPieces: number;
    caveChoice: number;
    feed: number;
    farmingLevel: number;
    miningLevel: number;
    combatLevel: number;
    foragingLevel: number;
    fishingLevel: number;
    luckLevel: number;
    newSkillPointsToSpend: number;
    addedFarmingLevel: number;
    addedMiningLevel: number;
    addedCombatLevel: number;
    addedForagingLevel: number;
    addedFishingLevel: number;
    addedLuckLevel: number;
    maxStamina: number;
    maxItems: number;
    stamina: number;
    resilience: number;
    attack: number;
    immunity: number;
    attackIncreaseModifier: number;
    knockbackModifier: number;
    weaponSpeedModifier: number;
    critChanceModifier: number;
    critPowerModifier: number;
    weaponPrecisionModifier: number;
    clubCoins: number;
    daysLeftForToolUpgrade: number;
    houseUpgradeLevel: number;
    daysUntilHouseUpgrade: number;
    coopUpgradeLevel: number;
    barnUpgradeLevel: number;
    hasGreenhouse: boolean;
    hasUnlockedSkullDoor: boolean;
    hasDarkTalisman: boolean;
    hasMagicInk: boolean;
    showChestColorPicker: boolean;
    hasMagnifyingGlass: boolean;
    hasWateringCanEnchantment: boolean;
    magneticRadius: number;
    temporaryInvincibilityTimer: number;
    health: number;
    maxHealth: number;
    timesReachedMineBottom: number;
    difficultyModifier: number;
    isMale: boolean;
    hasBusTicket: boolean;
    stardewHero: boolean;
    hasClubCard: boolean;
    hasSpecialCharm: boolean;
    basicShipped: KeyByStringIntValue;
    mineralsFound: KeyByStringIntValue;
    recipesCooked: string;
    archaeologyFound: any;
    fishCaught: KeyByStringArrayOfIntValue;
    friendshipData: FriendshipData;
    dayOfMonthForSaveGame: number;
    seasonForSaveGame: number;
    yearForSaveGame: number;
    overallsColor: number;
    shirtColor: number;
    skinColor: number;
    hairColor: number;
    eyeColor: number;
    bobber: string;
    saveTime: number;
    isCustomized: boolean;
    homeLocation: string;
    daysMarried: number;
    movementMultiplier: number;
    money: number;
    totalMoneyEarned: number;
    millisecondsPlayed: number;
    hasRustyKey: boolean;
    hasSkullKey: boolean;
    canUnderstandDwarves: boolean;
    UniqueMultiplayerID: number;
    boots?: Boots;
    leftRing?: LeftRing;
  }

  export interface LeftRing {
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
    price: number;
    indexInTileSheet: number;
    uniqueID: number;
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
  
  