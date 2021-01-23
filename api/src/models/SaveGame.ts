export interface SaveGame {
    "@_xmlns:xsi":                   string;
    "@_xmlns:xsd":                   string;
    player:                          Player;
    locations:                       Locations;
    currentSeason:                   CurrentSeason;
    samBandName:                     string;
    elliottBookName:                 string;
    broadcastedMail:                 BroadcastedMail;
    worldStateIDs:                   WorldStateIDs;
    lostBooksFound:                  number;
    goldenWalnuts:                   number;
    goldenWalnutsFound:              number;
    miniShippingBinsObtained:        number;
    mineShrineActivated:             boolean;
    goldenCoconutCracked:            boolean;
    parrotPlatformsUnlocked:         boolean;
    farmPerfect:                     boolean;
    foundBuriedNuts:                 string;
    visitsUntilY1Guarantee:          number;
    shuffleMineChests:               string;
    dayOfMonth:                      number;
    year:                            number;
    farmerWallpaper:                 number;
    FarmerFloor:                     number;
    currentWallpaper:                number;
    currentFloor:                    number;
    currentSongIndex:                number;
    countdownToWedding:              CountdownToWedding;
    incubatingEgg:                   TileCoordinates;
    chanceToRainTomorrow:            number;
    dailyLuck:                       number;
    uniqueIDForThisGame:             number;
    weddingToday:                    boolean;
    isRaining:                       boolean;
    isDebrisWeather:                 boolean;
    shippingTax:                     boolean;
    bloomDay:                        boolean;
    isLightning:                     boolean;
    isSnowing:                       boolean;
    shouldSpawnMonsters:             boolean;
    hasApplied1_3_UpdateChanges:     boolean;
    hasApplied1_4_UpdateChanges:     boolean;
    musicVolume:                     number;
    soundVolume:                     number;
    cropsOfTheWeek:                  CropsOfTheWeek;
    dishOfTheDay:                    DishOfTheDay;
    highestPlayerLimit:              number;
    moveBuildingPermissionMode:      number;
    locationWeather:                 LocationWeather;
    bannedUsers:                     string;
    bundleData:                      BundleData;
    limitedNutDrops:                 string;
    latestID:                        string;
    options:                         Options;
    splitscreenOptions:              string;
    CustomData:                      string;
    mine_permanentMineChanges:       MinePermanentMineChanges;
    mine_lowestLevelReached:         number;
    minecartHighScore:               number;
    weatherForTomorrow:              number;
    whichFarm:                       number;
    mine_lowestLevelReachedForOrder: number;
    skullCavesDifficulty:            number;
    minesDifficulty:                 number;
    currentGemBirdIndex:             number;
    junimoKartLeaderboards:          JunimoKartLeaderboards;
    specialOrders:                   SpecialOrders;
    availableSpecialOrders:          AvailableSpecialOrders;
    completedSpecialOrders:          BroadcastedMail;
    acceptedSpecialOrderTypes:       string;
    returnedDonations:               string;
    junimoChest:                     string;
    collectedNutTracker:             string;
    farmerFriendships:               FarmerFriendships;
    cellarAssignments:               CellarAssignments;
    lastAppliedSaveFix:              number;
    gameVersion:                     string;
}

export interface AvailableSpecialOrders {
    SpecialOrder: SpecialOrderElement[];
}

export interface SpecialOrderElement {
    preSelectedItems:       string;
    selectedRandomElements: string;
    objectives:             ObjectiveElement[] | ObjectivesObjectives;
    generationSeed:         number;
    seenParticipantsIDs:    string;
    participantsIDs:        string;
    unclaimedRewardsIDs:    string;
    appliedSpecialRules:    boolean;
    rewards:                Reward[] | RewardsClass;
    questKey:               string;
    questName:              string;
    questDescription:       string;
    requester:              string;
    orderType:              string;
    specialRule:            string;
    readyForRemoval:        boolean;
    itemToRemoveOnEnd:      number;
    mailToRemoveOnEnd?:     string;
    dueDate:                number;
    duration:               string;
    questState:             string;
}

export interface ObjectiveElement {
    "@_xsi:type":             string;
    currentCount:             number;
    maxCount:                 number;
    description:              string;
    failOnCompletion:         boolean;
    acceptableContextTagSets: string;
    dropBox?:                 string;
    dropBoxGameLocation?:     string;
    dropBoxTileLocation?:     TileCoordinates;
    minimumCapacity?:         number;
    confirmed?:               boolean;
}

export interface TileCoordinates {
    X: number;
    Y: number;
}

export interface ObjectivesObjectives {
    "@_xsi:type":              string;
    currentCount:              number;
    maxCount:                  number;
    description:               string;
    failOnCompletion:          boolean;
    acceptableContextTagSets?: string;
    targetName?:               string;
    message?:                  string;
    skullCave?:                SleptInTemporaryBed;
}

export interface SleptInTemporaryBed {
    boolean: boolean;
}

export interface Reward {
    "@_xsi:type":  string;
    amount?:       MaxEntries;
    multiplier?:   MultiplierClass;
    noLetter?:     SleptInTemporaryBed;
    grantedMails?: WorldStateIDs;
    host?:         SleptInTemporaryBed;
}

export interface MaxEntries {
    int: number;
}

export interface WorldStateIDs {
    string: string;
}

export interface MultiplierClass {
    float: number;
}

export interface RewardsClass {
    "@_xsi:type": string;
    amount:       MaxEntries;
}

export interface BroadcastedMail {
    string: string[];
}

export interface BundleData {
    item: BundleDataItem[];
}

export interface BundleDataItem {
    key:   WorldStateIDs;
    value: WorldStateIDs;
}

export interface CellarAssignments {
    item: CellarAssignmentsItem[];
}

export interface CellarAssignmentsItem {
    key:   MaxEntries;
    value: KeyClass;
}

export interface KeyClass {
    long: string;
}

export interface CountdownToWedding {
    "@_xsi:nil": boolean;
}

export interface CropsOfTheWeek {
    int: number[];
}

export enum CurrentSeason {
    Fall = "fall",
    Spring = "spring",
    Summer = "summer",
    Winter = "winter",
}

export interface DishOfTheDay {
    isLostItem?:                boolean;
    category?:                  number;
    hasBeenInInventory?:        boolean;
    name?:                      string;
    parentSheetIndex?:          number;
    specialItem?:               boolean;
    SpecialVariable?:           number;
    DisplayName?:               string;
    Name?:                      string;
    Stack?:                     number;
    tileLocation?:              TileCoordinates;
    owner?:                     number;
    type?:                      DishOfTheDayType;
    canBeSetDown?:              boolean;
    canBeGrabbed?:              boolean;
    isHoedirt?:                 boolean;
    isSpawnedObject?:           boolean;
    questItem?:                 boolean;
    questId?:                   number;
    isOn?:                      boolean;
    fragility?:                 number;
    price?:                     number;
    edibility?:                 number;
    stack?:                     number;
    quality?:                   number;
    bigCraftable?:              boolean;
    setOutdoors?:               boolean;
    setIndoors?:                boolean;
    readyForHarvest?:           boolean;
    showNextIndex?:             boolean;
    flipped?:                   boolean;
    hasBeenPickedUpByFarmer?:   boolean;
    isRecipe?:                  boolean;
    isLamp?:                    boolean;
    minutesUntilReady?:         number;
    boundingBox?:               BoundingBox;
    scale?:                     TileCoordinates;
    uses?:                      number;
    preservedParentSheetIndex?: number;
    destroyOvernight?:          boolean;
    "@_xsi:nil"?:               boolean;
    "@_xsi:type"?:              DishOfTheDayXsiType;
    furniture_type?:            number;
    rotations?:                 number;
    currentRotation?:           number;
    sourceRect?:                BoundingBox;
    defaultSourceRect?:         BoundingBox;
    defaultBoundingBox?:        BoundingBox;
    drawHeldObjectLow?:         boolean;
    preserve?:                  DishOfTheDayPreserve;
}

export enum DishOfTheDayXsiType {
    Axe = "Axe",
    Boots = "Boots",
    Clothing = "Clothing",
    ColoredObject = "ColoredObject",
    FishingRod = "FishingRod",
    Furniture = "Furniture",
    Hat = "Hat",
    Hoe = "Hoe",
    MeleeWeapon = "MeleeWeapon",
    MilkPail = "MilkPail",
    Object = "Object",
    Pan = "Pan",
    Pickaxe = "Pickaxe",
    Ring = "Ring",
    Slingshot = "Slingshot",
    Torch = "Torch",
    WateringCan = "WateringCan",
}

export interface BoundingBox {
    X:        number;
    Y:        number;
    Width:    number;
    Height:   number;
    Location: TileCoordinates;
}

export enum DishOfTheDayPreserve {
    Pickle = "Pickle",
}

export enum DishOfTheDayType {
    Arch = "Arch",
    Asdf = "asdf",
    Basic = "Basic",
    Cooking = "Cooking",
    Crafting = "Crafting",
    Fish = "Fish",
    Minerals = "Minerals",
    Seeds = "Seeds",
}

export interface FarmerFriendships {
    item: FarmerFriendshipsItem[];
}

export interface FarmerFriendshipsItem {
    key:   PurpleKey;
    value: PurpleValue;
}

export interface PurpleKey {
    FarmerPair: FarmerPair;
}

export interface FarmerPair {
    Farmer1: string;
    Farmer2: string;
}

export interface PurpleValue {
    Friendship: Friendship;
}

export interface Friendship {
    Points:           number;
    GiftsThisWeek:    number;
    GiftsToday:       number;
    TalkedToToday:    boolean;
    ProposalRejected: boolean;
    Status:           Status;
    Proposer:         number;
    RoommateMarriage: boolean;
    LastGiftDate?:    LastGiftDate;
}

export interface LastGiftDate {
    Year:       number;
    DayOfMonth: number;
    Season:     CurrentSeason;
    TotalDays:  number;
}

export enum Status {
    Friendly = "Friendly",
}

export interface JunimoKartLeaderboards {
    entries:    string;
    maxEntries: MaxEntries;
}

export interface LocationWeather {
    item: LocationWeatherItem[];
}

export interface LocationWeatherItem {
    key:   FluffyKey;
    value: FluffyValue;
}

export interface FluffyKey {
    LocationContext: string;
}

export interface FluffyValue {
    LocationWeather: LocationWeatherClass;
}

export interface LocationWeatherClass {
    weatherForTomorrow: MaxEntries;
    isRaining:          SleptInTemporaryBed;
    isSnowing:          SleptInTemporaryBed;
    isLightning:        SleptInTemporaryBed;
    bloomDay:           SleptInTemporaryBed;
    isDebrisWeather:    SleptInTemporaryBed;
}

export interface Locations {
    GameLocation: GameLocation[];
}

export interface GameLocation {
    "@_xsi:type"?:                string;
    characters:                   CharactersClass | string;
    objects:                      ObjectsObjects | string;
    resourceClumps:               ResourceClumpsClass | string;
    largeTerrainFeatures:         LargeTerrainFeaturesClass | string;
    terrainFeatures:              TerrainFeaturesClass | string;
    name:                         string;
    waterColor:                   HairstyleColor;
    isFarm:                       boolean;
    isOutdoors:                   boolean;
    isStructure:                  boolean;
    ignoreDebrisWeather:          boolean;
    ignoreOutdoorLighting:        boolean;
    ignoreLights:                 boolean;
    treatAsOutdoors:              boolean;
    numberOfSpawnedObjectsOnMap:  number;
    miniJukeboxCount:             number;
    miniJukeboxTrack:             string;
    furniture:                    FurnitureClass | string;
    IsGreenhouse:                 boolean;
    wallPaper?:                   CropsOfTheWeek;
    floor?:                       CropsOfTheWeek;
    farmerNumberOfOwner?:         number;
    fireplaceOn?:                 boolean;
    fridge?:                      GameLocationFridge;
    fridgePosition?:              TileCoordinates;
    cribStyle?:                   number;
    buildings?:                   Buildings;
    frameHouseColor?:             CountdownToWedding;
    housePaintColor?:             HousePaintColor;
    animals?:                     string;
    piecesOfHay?:                 number;
    grandpaScore?:                number;
    farmCaveReady?:               boolean;
    hasSeenGrandpaNote?:          boolean;
    houseSource?:                 BoundingBox;
    greenhouseUnlocked?:          boolean;
    greenhouseMoved?:             boolean;
    petBowlWatered?:              SleptInTemporaryBed;
    Animals?:                     GameLocationAnimals;
    daysUntilCommunityUpgrade?:   number;
    itemsFromPlayerToSell?:       string;
    itemsToStartSellingTomorrow?: string;
    bridgeFixed?:                 boolean;
    drivingOff?:                  boolean;
    drivingBack?:                 boolean;
    leaving?:                     boolean;
    hasSpawnedBugsToday?:         boolean;
    museumPieces?:                MuseumPieces;
    stumps?:                      Stumps;
    hasUnlockedStatue?:           boolean;
    witchStatueGone?:             boolean;
    areasComplete?:               AreasComplete;
    numberOfStarsOnPlaque?:       number;
    bundles?:                     Bundles;
    bundleRewards?:               ChestConsumedLevels;
    ownerUID?:                    OwnerUID;
    submerged?:                   boolean;
    ascending?:                   boolean;
    dayFirstEntered?:             number;
    nextRepathTime?:              number;
    repathTimeInterval?:          number;
    gateRect?:                    BoundingBox;
    _plankPosition?:              number;
    _plankDirection?:             number;
    animationState?:              string;
    shouldToggleResort?:          boolean;
    resortOpenToday?:             boolean;
    resortRestored?:              boolean;
    westernTurtleMoved?:          boolean;
    mermaidPuzzleFinished?:       boolean;
    fishedWalnut?:                boolean;
    drinksClaimed?:               string;
    bananaShrineComplete?:        SleptInTemporaryBed;
    bananaShrineNutAwarded?:      SleptInTemporaryBed;
    sandDuggy?:                   SandDuggy;
    farmhouseRestored?:           boolean;
    farmhouseMailbox?:            boolean;
    farmObelisk?:                 boolean;
    shippingBinPosition?:         TileCoordinates;
    traderActivated?:             boolean;
    boulderRemoved?:              boolean;
    caveOpened?:                  boolean;
    treeNutShot?:                 boolean;
    treeNutObtained?:             SleptInTemporaryBed;
    firstParrotDone?:             boolean;
    completed?:                   boolean;
    piecesDonated?:               boolean[];
    centerSkeletonRestored?:      boolean;
    snakeRestored?:               boolean;
    batRestored?:                 boolean;
    frogRestored?:                boolean;
    plantsRestoredLeft?:          boolean;
    plantsRestoredRight?:         boolean;
    hasFailedSurveyToday?:        SleptInTemporaryBed;
    visited?:                     boolean | SleptInTemporaryBed;
    puzzleFinished?:              boolean;
    gourmandRequestsFulfilled?:   number;
}

export interface GameLocationAnimals {
    SerializableDictionaryOfInt64FarmAnimal: string;
}

export interface AreasComplete {
    boolean: boolean[];
}

export interface Buildings {
    Building: Building[];
}

export interface Building {
    indoors?:               Indoors;
    tileX:                  number;
    tileY:                  number;
    tilesWide:              number;
    tilesHigh:              number;
    maxOccupants:           number;
    currentOccupants:       number;
    daysOfConstructionLeft: number;
    daysUntilUpgrade:       number;
    buildingType:           string;
    buildingPaintColor:     BuildingPaintColor;
    humanDoor:              TileCoordinates;
    animalDoor:             TileCoordinates;
    color:                  HairstyleColor;
    animalDoorOpen:         boolean;
    magical:                boolean;
    fadeWhenPlayerIsBehind: boolean;
    owner:                  number | string;
    isMoving:               boolean;
    "@_xsi:type"?:          string;
}

export interface BuildingPaintColor {
    ColorName:        OrName;
    Color1Default:    SleptInTemporaryBed;
    Color1Hue:        MaxEntries;
    Color1Saturation: MaxEntries;
    Color1Lightness:  MaxEntries;
    Color2Default:    SleptInTemporaryBed;
    Color2Hue:        MaxEntries;
    Color2Saturation: MaxEntries;
    Color2Lightness:  MaxEntries;
    Color3Default:    SleptInTemporaryBed;
    Color3Hue:        MaxEntries;
    Color3Saturation: MaxEntries;
    Color3Lightness:  MaxEntries;
}

export interface OrName {
    string: CountdownToWedding;
}

export interface HairstyleColor {
    R:           number;
    G:           number;
    B:           number;
    A:           number;
    PackedValue: number;
}

export interface Indoors {
    "@_xsi:type":                string;
    characters:                  string;
    objects:                     IndoorsObjects;
    resourceClumps:              string;
    largeTerrainFeatures:        string;
    terrainFeatures:             string;
    uniqueName:                  string;
    name:                        string;
    waterColor:                  HairstyleColor;
    isFarm:                      boolean;
    isOutdoors:                  boolean;
    isStructure:                 boolean;
    ignoreDebrisWeather:         boolean;
    ignoreOutdoorLighting:       boolean;
    ignoreLights:                boolean;
    treatAsOutdoors:             boolean;
    numberOfSpawnedObjectsOnMap: number;
    miniJukeboxCount:            number;
    miniJukeboxTrack:            string;
    furniture:                   FurnitureClass | string;
    IsGreenhouse:                boolean;
    wallPaper?:                  MaxEntries;
    floor?:                      MaxEntries;
    farmerNumberOfOwner?:        number;
    fireplaceOn?:                boolean;
    fridge?:                     IndoorsFridge;
    fridgePosition?:             TileCoordinates;
    cribStyle?:                  number;
    farmhand?:                   Player;
    animals?:                    Animals;
    animalLimit?:                number;
    animalsThatLiveHere?:        AnimalsThatLiveHere;
    incubatingEgg?:              TileCoordinates;
    Animals?:                    IndoorsAnimals;
}

export interface IndoorsAnimals {
    SerializableDictionaryOfInt64FarmAnimal: Animals;
}

export interface Animals {
    item: AnimalsItem[];
}

export interface AnimalsItem {
    key:   TentacledKey;
    value: TentacledValue;
}

export interface TentacledKey {
    long: number | string;
}

export interface TentacledValue {
    FarmAnimal: FarmAnimal;
}

export interface FarmAnimal {
    name:                                    string;
    forceOneTileWide:                        boolean;
    isEmoting:                               boolean;
    isCharging:                              boolean;
    isGlowing:                               boolean;
    coloredBorder:                           boolean;
    flip:                                    boolean;
    drawOnTop:                               boolean;
    faceTowardFarmer:                        boolean;
    ignoreMovementAnimation:                 boolean;
    faceAwayFromFarmer:                      boolean;
    scale:                                   MultiplierClass;
    timeBeforeAIMovementAgain:               number;
    glowingTransparency:                     number;
    glowRate:                                number;
    willDestroyObjectsUnderfoot:             boolean;
    Position:                                TileCoordinates;
    Speed:                                   number;
    FacingDirection:                         number;
    IsEmoting:                               boolean;
    CurrentEmote:                            number;
    Scale:                                   number;
    isSwimming:                              SleptInTemporaryBed;
    defaultProduceIndex:                     number;
    deluxeProduceIndex:                      number;
    currentProduce:                          number;
    friendshipTowardFarmer:                  number;
    daysSinceLastFed:                        number;
    pushAccumulator:                         number;
    uniqueFrameAccumulator:                  number;
    age:                                     number;
    daysOwned:                               number;
    meatIndex:                               number;
    health:                                  number;
    price:                                   number;
    produceQuality:                          number;
    daysToLay:                               number;
    daysSinceLastLay:                        number;
    ageWhenMature:                           number;
    harvestType:                             number;
    happiness:                               number;
    fullness:                                number;
    happinessDrain:                          number;
    fullnessDrain:                           number;
    wasAutoPet:                              boolean;
    wasPet:                                  boolean;
    showDifferentTextureWhenReadyForHarvest: boolean;
    allowReproduction:                       boolean;
    sound:                                   Sound;
    type:                                    string;
    buildingTypeILiveIn:                     BuildingTypeILiveIn;
    toolUsedForHarvest:                      ToolUsedForHarvest;
    frontBackBoundingBox:                    BoundingBox;
    sidewaysBoundingBox:                     BoundingBox;
    frontBackSourceRect:                     BoundingBox;
    sidewaysSourceRect:                      BoundingBox;
    myID:                                    number | string;
    ownerID:                                 string;
    parentId:                                number | string;
    homeLocation:                            TileCoordinates;
    moodMessage:                             number;
    isEating:                                boolean;
}

export enum BuildingTypeILiveIn {
    Barn = "Barn",
    Coop = "Coop",
}

export enum Sound {
    Cluck = "cluck",
    Cow = "cow",
    Duck = "Duck",
    Goat = "goat",
}

export enum ToolUsedForHarvest {
    MilkPail = "Milk Pail",
    Null = "null",
}

export interface AnimalsThatLiveHere {
    long: Array<number | string>;
}

export interface Farmhand {
    name:                                  string;
    forceOneTileWide:                      boolean;
    isEmoting:                             boolean;
    isCharging:                            boolean;
    isGlowing:                             boolean;
    coloredBorder:                         boolean;
    flip:                                  boolean;
    drawOnTop:                             boolean;
    faceTowardFarmer:                      boolean;
    ignoreMovementAnimation:               boolean;
    faceAwayFromFarmer:                    boolean;
    scale:                                 MultiplierClass;
    timeBeforeAIMovementAgain:             number;
    glowingTransparency:                   number;
    glowRate:                              number;
    willDestroyObjectsUnderfoot:           boolean;
    Position:                              TileCoordinates;
    Speed:                                 number;
    FacingDirection:                       number;
    IsEmoting:                             boolean;
    CurrentEmote:                          number;
    Scale:                                 number;
    questLog:                              FarmhandQuestLog;
    professions:                           CropsOfTheWeek;
    newLevels:                             string;
    experiencePoints:                      CropsOfTheWeek;
    items:                                 FarmhandItems;
    dialogueQuestionsAnswered:             DialogueQuestionsAnsweredClass | string;
    furnitureOwned:                        string;
    cookingRecipes:                        CookingRecipes;
    craftingRecipes:                       CookingRecipes;
    activeDialogueEvents:                  string;
    eventsSeen:                            CropsOfTheWeek;
    secretNotesSeen:                       CropsOfTheWeek | string;
    songsHeard:                            BroadcastedMail;
    achievements:                          CropsOfTheWeek;
    specialItems:                          CropsOfTheWeek;
    specialBigCraftables:                  CropsOfTheWeek;
    mailReceived:                          BroadcastedMail;
    mailForTomorrow:                       string;
    mailbox:                               WorldStateIDs | string;
    timeWentToBed:                         MaxEntries;
    sleptInTemporaryBed:                   SleptInTemporaryBed;
    stats:                                 PlayerStats;
    blueprints:                            string;
    biteChime:                             number;
    itemsLostLastDeath:                    ItemsLostLastDeathClass | string;
    movementDirections:                    string;
    farmName:                              string;
    favoriteThing:                         string;
    slotCanHost:                           boolean;
    userID:                                string;
    catPerson:                             boolean;
    whichPetBreed:                         number;
    acceptedDailyQuest:                    boolean;
    mostRecentBed:                         TileCoordinates;
    performedEmotes:                       string;
    shirt:                                 number;
    hair:                                  number;
    skin:                                  number;
    shoes:                                 number;
    accessory:                             number;
    facialHair:                            number;
    pants:                                 number;
    hairstyleColor:                        HairstyleColor;
    pantsColor:                            HairstyleColor;
    newEyeColor:                           HairstyleColor;
    hat?:                                  Hat;
    boots:                                 Boots;
    shirtItem:                             Item;
    pantsItem:                             Item;
    divorceTonight:                        boolean;
    changeWalletTypeTonight:               boolean;
    woodPieces:                            number;
    stonePieces:                           number;
    copperPieces:                          number;
    ironPieces:                            number;
    coalPieces:                            number;
    goldPieces:                            number;
    iridiumPieces:                         number;
    quartzPieces:                          number;
    gameVersion:                           number;
    caveChoice:                            number;
    feed:                                  number;
    farmingLevel:                          number;
    miningLevel:                           number;
    combatLevel:                           number;
    foragingLevel:                         number;
    fishingLevel:                          number;
    luckLevel:                             number;
    newSkillPointsToSpend:                 number;
    addedFarmingLevel:                     number;
    addedMiningLevel:                      number;
    addedCombatLevel:                      number;
    addedForagingLevel:                    number;
    addedFishingLevel:                     number;
    addedLuckLevel:                        number;
    maxStamina:                            number;
    maxItems:                              number;
    lastSeenMovieWeek:                     number;
    resilience:                            number;
    attack:                                number;
    immunity:                              number;
    attackIncreaseModifier:                number;
    knockbackModifier:                     number;
    weaponSpeedModifier:                   number;
    critChanceModifier:                    number;
    critPowerModifier:                     number;
    weaponPrecisionModifier:               number;
    clubCoins:                             number;
    trashCanLevel:                         number;
    daysLeftForToolUpgrade:                number;
    houseUpgradeLevel:                     number;
    daysUntilHouseUpgrade:                 number;
    coopUpgradeLevel:                      number;
    barnUpgradeLevel:                      number;
    hasGreenhouse:                         boolean;
    hasUnlockedSkullDoor:                  boolean;
    hasDarkTalisman:                       boolean;
    hasMagicInk:                           boolean;
    showChestColorPicker:                  boolean;
    hasMagnifyingGlass:                    boolean;
    hasWateringCanEnchantment:             boolean;
    magneticRadius:                        number;
    temporaryInvincibilityTimer:           number;
    currentTemporaryInvincibilityDuration: number;
    health:                                number;
    maxHealth:                             number;
    difficultyModifier:                    number;
    isMale:                                boolean;
    hasBusTicket:                          boolean;
    stardewHero:                           boolean;
    hasClubCard:                           boolean;
    hasSpecialCharm:                       boolean;
    basicShipped:                          BasicShipped;
    mineralsFound:                         BasicShipped;
    recipesCooked:                         RecipesCooked;
    fishCaught:                            ArchaeologyFound;
    archaeologyFound:                      ArchaeologyFound;
    callsReceived:                         string;
    giftedItems:                           GiftedItems;
    tailoredItems:                         string;
    friendshipData:                        FriendshipData;
    dayOfMonthForSaveGame:                 number;
    seasonForSaveGame:                     number;
    yearForSaveGame:                       number;
    overallsColor:                         number;
    shirtColor:                            number;
    skinColor:                             number;
    hairColor:                             number;
    eyeColor:                              number;
    bobber:                                string;
    qiGems:                                number;
    hasUsedDailyRevive:                    boolean;
    chestConsumedLevels:                   ChestConsumedLevels;
    saveTime:                              number;
    isCustomized:                          boolean;
    homeLocation:                          string;
    lastSleepLocation:                     string;
    lastSleepPoint:                        TileCoordinates;
    daysMarried:                           number;
    movementMultiplier:                    number;
    theaterBuildDate:                      number;
    deepestMineLevel:                      number;
    stamina:                               number;
    totalMoneyEarned:                      number;
    millisecondsPlayed:                    number;
    hasRustyKey:                           boolean;
    hasSkullKey:                           boolean;
    canUnderstandDwarves:                  boolean;
    HasTownKey:                            boolean;
    useSeparateWallets:                    boolean;
    timesReachedMineBottom:                number;
    UniqueMultiplayerID:                   string;
    money:                                 number;
    leftRing?:                             TRing;
    rightRing?:                            TRing;
    recoveredItem?:                        DishOfTheDay;
}

export interface ArchaeologyFound {
    item: ArchaeologyFoundItem[];
}

export interface ArchaeologyFoundItem {
    key:   MaxEntries;
    value: StickyValue;
}

export interface StickyValue {
    ArrayOfInt: CropsOfTheWeek;
}

export interface BasicShipped {
    item: BasicShippedItem[];
}

export interface BasicShippedItem {
    key:   MaxEntries;
    value: MaxEntries;
}

export interface Boots {
    isLostItem:            boolean;
    category:              number;
    hasBeenInInventory:    boolean;
    name:                  string;
    specialItem:           boolean;
    SpecialVariable:       number;
    DisplayName:           string;
    Name:                  string;
    Stack:                 number;
    defenseBonus:          number;
    immunityBonus:         number;
    indexInTileSheet:      number;
    price:                 number;
    indexInColorSheet:     number;
    appliedBootSheetIndex: number;
}

export interface ChestConsumedLevels {
    item: ChestConsumedLevelsItem[];
}

export interface ChestConsumedLevelsItem {
    key:   MaxEntries;
    value: SleptInTemporaryBed;
}

export interface CookingRecipes {
    item: CookingRecipesItem[];
}

export interface CookingRecipesItem {
    key:   WorldStateIDs;
    value: MaxEntries;
}

export interface DialogueQuestionsAnsweredClass {
    int: number[] | number;
}

export interface FriendshipData {
    item: FriendshipDataItem[];
}

export interface FriendshipDataItem {
    key:   WorldStateIDs;
    value: PurpleValue;
}

export interface GiftedItems {
    item: GiftedItemsItem[];
}

export interface GiftedItemsItem {
    key:   WorldStateIDs;
    value: IndigoValue;
}

export interface IndigoValue {
    dictionary: Dictionary;
}

export interface Dictionary {
    item: BasicShippedItem[] | BasicShippedItem;
}

export interface Hat {
    isLostItem:            boolean;
    category:              number;
    hasBeenInInventory:    boolean;
    name:                  string;
    specialItem:           boolean;
    SpecialVariable:       number;
    DisplayName:           string;
    Name:                  string;
    Stack:                 number;
    which:                 number;
    skipHairDraw:          boolean;
    ignoreHairstyleOffset: boolean;
    hairDrawType:          number;
    isPrismatic:           boolean;
}

export interface FarmhandItems {
    Item: PurpleItem[];
}

export interface PurpleItem {
    "@_xsi:type"?:                     DishOfTheDayXsiType;
    isLostItem?:                       boolean;
    category?:                         number;
    hasBeenInInventory?:               boolean;
    name?:                             string;
    specialItem?:                      boolean;
    SpecialVariable?:                  number;
    DisplayName?:                      string;
    Name?:                             string;
    Stack?:                            number;
    initialParentTileIndex?:           number;
    currentParentTileIndex?:           number;
    indexOfMenuItemView?:              number;
    stackable?:                        boolean;
    instantUse?:                       boolean;
    isEfficient?:                      boolean;
    animationSpeedModifier?:           number;
    upgradeLevel?:                     number;
    numAttachmentSlots?:               number;
    attachments?:                      PurpleAttachments | string;
    BaseName?:                         string;
    InitialParentTileIndex?:           number;
    IndexOfMenuItemView?:              number;
    InstantUse?:                       boolean;
    IsEfficient?:                      boolean;
    AnimationSpeedModifier?:           number;
    Stackable?:                        boolean;
    additionalPower?:                  MaxEntries;
    "@_xsi:nil"?:                      boolean;
    type?:                             DishOfTheDayType | number;
    minDamage?:                        number;
    maxDamage?:                        number;
    speed?:                            number;
    addedPrecision?:                   number;
    addedDefense?:                     number;
    addedAreaOfEffect?:                number;
    knockback?:                        number;
    critChance?:                       number;
    critMultiplier?:                   number;
    appearance?:                       number;
    isOnSpecial?:                      boolean;
    parentSheetIndex?:                 number;
    tileLocation?:                     TileCoordinates;
    owner?:                            number | string;
    canBeSetDown?:                     boolean;
    canBeGrabbed?:                     boolean;
    isHoedirt?:                        boolean;
    isSpawnedObject?:                  boolean;
    questItem?:                        boolean;
    questId?:                          number;
    isOn?:                             boolean;
    fragility?:                        number;
    price?:                            number;
    edibility?:                        number;
    stack?:                            number;
    quality?:                          number;
    bigCraftable?:                     boolean;
    setOutdoors?:                      boolean;
    setIndoors?:                       boolean;
    readyForHarvest?:                  boolean;
    showNextIndex?:                    boolean;
    flipped?:                          boolean;
    hasBeenPickedUpByFarmer?:          boolean;
    isRecipe?:                         boolean;
    isLamp?:                           boolean;
    minutesUntilReady?:                number;
    boundingBox?:                      BoundingBox;
    scale?:                            TileCoordinates;
    uses?:                             number;
    preservedParentSheetIndex?:        number;
    destroyOvernight?:                 boolean;
    isBottomless?:                     boolean;
    waterCanMax?:                      number;
    WaterLeft?:                        number;
    IsBottomless?:                     boolean;
    color?:                            HairstyleColor;
    colorSameIndexAsParentSheetIndex?: boolean;
    ColorSameIndexAsParentSheetIndex?: boolean;
}

export interface PurpleAttachments {
    Object: DishOfTheDay[];
}

export interface ItemsLostLastDeathClass {
    Item: DishOfTheDay;
}

export interface TRing {
    isLostItem:         boolean;
    category:           number;
    hasBeenInInventory: boolean;
    name:               string;
    parentSheetIndex:   number;
    specialItem:        boolean;
    SpecialVariable:    number;
    DisplayName:        string;
    Name:               string;
    Stack:              number;
    price:              number;
    indexInTileSheet:   number;
    uniqueID:           number;
}

export interface Item {
    isLostItem:             boolean;
    category:               number;
    hasBeenInInventory:     boolean;
    name:                   string;
    parentSheetIndex:       number;
    specialItem:            boolean;
    SpecialVariable:        number;
    DisplayName:            string;
    Name:                   string;
    Stack:                  number;
    price:                  number;
    indexInTileSheet:       number;
    indexInTileSheetFemale: number;
    clothesType:            number;
    dyeable:                boolean;
    clothesColor:           HairstyleColor;
    otherData:              string;
    isPrismatic:            boolean;
    Price:                  number;
}

export interface FarmhandQuestLog {
    Quest: PurpleQuest[];
}

export interface PurpleQuest {
    "@_xsi:type"?:      QuestXsiType;
    _currentObjective:  string;
    _questDescription:  string;
    _questTitle:        string;
    rewardDescription?: number;
    accepted:           boolean;
    completed:          boolean;
    dailyQuest:         boolean;
    showNew:            boolean;
    canBeCancelled:     boolean;
    destroy:            boolean;
    id:                 number;
    moneyReward:        number;
    questType:          number;
    daysLeft:           number;
    dayQuestAccepted:   number;
    nextQuests:         MaxEntries | string;
    questTitle:         string;
    isBigCraftable?:    boolean;
    indexToCraft?:      number;
    npcName?:           string;
    locationOfItem?:    string;
    itemIndex?:         number;
    tileX?:             number;
    tileY?:             number;
    itemFound?:         boolean;
    target?:            string;
    item?:              number;
    number?:            number;
    parts?:             PartsClass | string;
    dialogueparts?:     DialoguepartsClass | string;
    deliveryItem?:      DishOfTheDay;
    objective?:         QuestObjective;
}

export enum QuestXsiType {
    CraftingQuest = "CraftingQuest",
    ItemDeliveryQuest = "ItemDeliveryQuest",
    LostItemQuest = "LostItemQuest",
}

export interface DialoguepartsClass {
    DescriptionElement: DialoguepartsDescriptionElement[];
}

export interface DialoguepartsDescriptionElement {
    xmlKey: string;
    param:  ParamParam | string;
}

export interface ParamParam {
    anyType: PurpleAnyType;
}

export interface PurpleAnyType {
    "@_xsi:type": string;
    xmlKey?:      string;
    param?:       string;
    "#text"?:     string;
}

export interface QuestObjective {
    xmlKey: string;
    param:  ObjectiveParam;
}

export interface ObjectiveParam {
    anyType: AnyTypeElement[];
}

export interface AnyTypeElement {
    "@_xsi:type":                    string;
    name?:                           string;
    forceOneTileWide?:               boolean;
    isEmoting?:                      boolean;
    isCharging?:                     boolean;
    isGlowing?:                      boolean;
    coloredBorder?:                  boolean;
    flip?:                           boolean;
    drawOnTop?:                      boolean;
    faceTowardFarmer?:               boolean;
    ignoreMovementAnimation?:        boolean;
    faceAwayFromFarmer?:             boolean;
    scale?:                          AnyTypeScale;
    timeBeforeAIMovementAgain?:      number;
    glowingTransparency?:            number;
    glowRate?:                       number;
    willDestroyObjectsUnderfoot?:    boolean;
    Position?:                       TileCoordinates;
    Speed?:                          number;
    FacingDirection?:                number;
    IsEmoting?:                      boolean;
    CurrentEmote?:                   number;
    Scale?:                          number;
    lastCrossroad?:                  BoundingBox;
    daysAfterLastBirth?:             number;
    birthday_Season?:                CurrentSeason;
    birthday_Day?:                   number;
    age?:                            number;
    manners?:                        number;
    socialAnxiety?:                  number;
    optimism?:                       number;
    gender?:                         number;
    sleptInBed?:                     boolean;
    isInvisible?:                    boolean;
    lastSeenMovieWeek?:              number;
    datingFarmer?:                   boolean;
    divorcedFromFarmer?:             boolean;
    datable?:                        boolean;
    defaultMap?:                     string;
    loveInterest?:                   string;
    id?:                             number;
    homeRegion?:                     number;
    daysUntilNotInvisible?:          number;
    followSchedule?:                 boolean;
    moveTowardPlayerThreshold?:      number;
    hasBeenKissedToday?:             SleptInTemporaryBed;
    shouldPlayRobinHammerAnimation?: SleptInTemporaryBed;
    shouldPlaySpousePatioAnimation?: SleptInTemporaryBed;
    shouldWearIslandAttire?:         SleptInTemporaryBed;
    isMovingOnPathFindPath?:         SleptInTemporaryBed;
    queuedSchedulePaths?:            string;
    lastAttemptedSchedule?:          number;
    endOfRouteBehaviorName?:         OrName;
    squareMovementFacingPreference?: number;
    DefaultFacingDirection?:         number;
    DefaultMap?:                     string;
    DefaultPosition?:                TileCoordinates;
    IsWalkingInSquare?:              boolean;
    IsWalkingTowardPlayer?:          boolean;
    isLostItem?:                     boolean;
    category?:                       number;
    hasBeenInInventory?:             boolean;
    parentSheetIndex?:               number;
    specialItem?:                    boolean;
    SpecialVariable?:                number;
    DisplayName?:                    string;
    Name?:                           string;
    Stack?:                          number;
    tileLocation?:                   TileCoordinates;
    owner?:                          number;
    type?:                           DishOfTheDayType;
    canBeSetDown?:                   boolean;
    canBeGrabbed?:                   boolean;
    isHoedirt?:                      boolean;
    isSpawnedObject?:                boolean;
    questItem?:                      boolean;
    questId?:                        number;
    isOn?:                           boolean;
    fragility?:                      number;
    price?:                          number;
    edibility?:                      number;
    stack?:                          number;
    quality?:                        number;
    bigCraftable?:                   boolean;
    setOutdoors?:                    boolean;
    setIndoors?:                     boolean;
    readyForHarvest?:                boolean;
    showNextIndex?:                  boolean;
    flipped?:                        boolean;
    hasBeenPickedUpByFarmer?:        boolean;
    isRecipe?:                       boolean;
    isLamp?:                         boolean;
    minutesUntilReady?:              number;
    boundingBox?:                    BoundingBox;
    uses?:                           number;
    preservedParentSheetIndex?:      number;
    destroyOvernight?:               boolean;
    "#text"?:                        number;
}

export interface AnyTypeScale {
    X?:     number;
    Y?:     number;
    float?: number;
}

export interface PartsClass {
    DescriptionElement: PartsDescriptionElement[];
}

export interface PartsDescriptionElement {
    xmlKey: string;
    param:  DescriptionElementParamClass;
}

export interface DescriptionElementParamClass {
    anyType: AnyTypeElement;
}

export interface RecipesCooked {
    item: BasicShippedItem;
}

export interface FarmhandStats {
    seedsSown:              number;
    itemsShipped:           number;
    itemsCooked:            number;
    itemsCrafted:           number;
    chickenEggsLayed:       number;
    duckEggsLayed:          number;
    cowMilkProduced:        number;
    goatMilkProduced:       number;
    rabbitWoolProduced:     number;
    sheepWoolProduced:      number;
    cheeseMade:             number;
    goatCheeseMade:         number;
    trufflesFound:          number;
    stoneGathered:          number;
    rocksCrushed:           number;
    dirtHoed:               number;
    giftsGiven:             number;
    timesUnconscious:       number;
    averageBedtime:         number;
    timesFished:            number;
    fishCaught:             number;
    bouldersCracked:        number;
    stumpsChopped:          number;
    stepsTaken:             number;
    monstersKilled:         number;
    diamondsFound:          number;
    prismaticShardsFound:   number;
    otherPreciousGemsFound: number;
    caveCarrotsFound:       number;
    copperFound:            number;
    ironFound:              number;
    coalFound:              number;
    coinsFound:             number;
    goldFound:              number;
    iridiumFound:           number;
    barsSmelted:            number;
    beveragesMade:          number;
    preservesMade:          number;
    piecesOfTrashRecycled:  number;
    mysticStonesCrushed:    number;
    daysPlayed:             number;
    weedsEliminated:        number;
    sticksChopped:          number;
    notesFound:             number;
    questsCompleted:        number;
    starLevelCropsShipped:  number;
    cropsShipped:           number;
    itemsForaged:           number;
    slimesKilled:           number;
    geodesCracked:          number;
    goodFriends:            number;
    totalMoneyGifted:       number;
    individualMoneyEarned:  number;
    specificMonstersKilled: CookingRecipes;
    stat_dictionary:        StatDictionaryClass | string;
    GoodFriends:            number;
    CropsShipped:           number;
    ItemsForaged:           number;
    GeodesCracked:          number;
    SlimesKilled:           number;
    StarLevelCropsShipped:  number;
    StoneGathered:          number;
    QuestsCompleted:        number;
    FishCaught:             number;
    NotesFound:             number;
    SticksChopped:          number;
    WeedsEliminated:        number;
    DaysPlayed:             number;
    BouldersCracked:        number;
    MysticStonesCrushed:    number;
    GoatCheeseMade:         number;
    CheeseMade:             number;
    PiecesOfTrashRecycled:  number;
    PreservesMade:          number;
    BeveragesMade:          number;
    BarsSmelted:            number;
    IridiumFound:           number;
    GoldFound:              number;
    CoinsFound:             number;
    CoalFound:              number;
    IronFound:              number;
    CopperFound:            number;
    CaveCarrotsFound:       number;
    OtherPreciousGemsFound: number;
    PrismaticShardsFound:   number;
    DiamondsFound:          number;
    MonstersKilled:         number;
    StepsTaken:             number;
    StumpsChopped:          number;
    TimesFished:            number;
    AverageBedtime:         number;
    TimesUnconscious:       number;
    GiftsGiven:             number;
    DirtHoed:               number;
    RocksCrushed:           number;
    TrufflesFound:          number;
    SheepWoolProduced:      number;
    RabbitWoolProduced:     number;
    GoatMilkProduced:       number;
    CowMilkProduced:        number;
    DuckEggsLayed:          number;
    ItemsCrafted:           number;
    ChickenEggsLayed:       number;
    ItemsCooked:            number;
    ItemsShipped:           number;
    SeedsSown:              number;
    IndividualMoneyEarned:  number;
}

export interface StatDictionaryClass {
    item: StatDictionaryItem;
}

export interface StatDictionaryItem {
    key:   WorldStateIDs;
    value: IndecentValue;
}

export interface IndecentValue {
    unsignedInt: number;
}

export interface IndoorsFridge {
    isLostItem:                boolean;
    category:                  number;
    hasBeenInInventory:        boolean;
    name:                      DisplayName;
    parentSheetIndex:          number;
    specialItem:               boolean;
    SpecialVariable:           number;
    DisplayName:               DisplayName;
    Name:                      DisplayName;
    Stack:                     number;
    tileLocation:              TileCoordinates;
    owner:                     number;
    type:                      DishOfTheDayType;
    canBeSetDown:              boolean;
    canBeGrabbed:              boolean;
    isHoedirt:                 boolean;
    isSpawnedObject:           boolean;
    questItem:                 boolean;
    questId:                   number;
    isOn:                      boolean;
    fragility:                 number;
    price:                     number;
    edibility:                 number;
    stack:                     number;
    quality:                   number;
    bigCraftable:              boolean;
    setOutdoors:               boolean;
    setIndoors:                boolean;
    readyForHarvest:           boolean;
    showNextIndex:             boolean;
    flipped:                   boolean;
    hasBeenPickedUpByFarmer:   boolean;
    isRecipe:                  boolean;
    isLamp:                    boolean;
    minutesUntilReady:         number;
    boundingBox:               BoundingBox;
    scale:                     TileCoordinates;
    uses:                      number;
    preservedParentSheetIndex: number;
    destroyOvernight:          boolean;
    currentLidFrame:           number;
    lidFrameCount:             MaxEntries;
    frameCounter:              number;
    coins:                     number;
    items:                     string;
    separateWalletItems:       SeparateWalletItems;
    chestType:                 string;
    tint:                      HairstyleColor;
    playerChoiceColor:         HairstyleColor;
    playerChest:               boolean;
    fridge:                    boolean;
    giftbox:                   boolean;
    giftboxIndex:              number;
    spriteIndexOverride:       number;
    dropContents:              boolean;
    synchronized:              boolean;
    specialChestType:          SpecialChestType;
}

export enum DisplayName {
    Cask = "Cask",
    Chest = "Chest",
    Fence = "Fence",
    IndoorPot = "IndoorPot",
    ItemPedestal = "ItemPedestal",
    Torch = "Torch",
    WoodChipper = "WoodChipper",
    Workbench = "Workbench",
}

export interface SeparateWalletItems {
    SerializableDictionaryOfInt64NetObjectListOfItem: string;
}

export enum SpecialChestType {
    None = "None",
}

export interface FurnitureClass {
    Furniture: Furniture[];
}

export interface Furniture {
    "@_xsi:type"?:             FurnitureXsiType;
    isLostItem:                boolean;
    category:                  number;
    hasBeenInInventory:        boolean;
    name:                      string;
    parentSheetIndex:          number;
    specialItem:               boolean;
    SpecialVariable:           number;
    DisplayName:               string;
    Name:                      string;
    Stack:                     number;
    tileLocation:              TileCoordinates;
    owner:                     number | string;
    canBeSetDown:              boolean;
    canBeGrabbed:              boolean;
    isHoedirt:                 boolean;
    isSpawnedObject:           boolean;
    questItem:                 boolean;
    questId:                   number;
    isOn:                      boolean;
    fragility:                 number;
    price:                     number;
    edibility:                 number;
    stack:                     number;
    quality:                   number;
    bigCraftable:              boolean;
    setOutdoors:               boolean;
    setIndoors:                boolean;
    readyForHarvest:           boolean;
    showNextIndex:             boolean;
    flipped:                   boolean;
    hasBeenPickedUpByFarmer:   boolean;
    isRecipe:                  boolean;
    isLamp:                    boolean;
    minutesUntilReady:         number;
    boundingBox:               BoundingBox;
    scale:                     TileCoordinates;
    uses:                      number;
    preservedParentSheetIndex: number;
    destroyOvernight:          boolean;
    furniture_type:            number;
    rotations:                 number;
    currentRotation:           number;
    sourceRect:                BoundingBox;
    defaultSourceRect:         BoundingBox;
    defaultBoundingBox:        BoundingBox;
    drawHeldObjectLow:         boolean;
    bedType?:                  string;
    heldObject?:               DishOfTheDay;
}

export enum FurnitureXsiType {
    BedFurniture = "BedFurniture",
    Tv = "TV",
}

export interface IndoorsObjects {
    item: ObjectsItemClass[];
}

export interface ObjectsItemClass {
    key:   StickyKey;
    value: HilariousValue;
}

export interface StickyKey {
    Vector2: TileCoordinates;
}

export interface HilariousValue {
    Object: PurpleObject;
}

export interface PurpleObject {
    isLostItem:                boolean;
    category:                  number;
    hasBeenInInventory:        boolean;
    name:                      string;
    parentSheetIndex:          number;
    specialItem:               boolean;
    SpecialVariable:           number;
    DisplayName:               string;
    Name:                      string;
    Stack:                     number;
    tileLocation:              TileCoordinates;
    owner:                     number;
    type:                      DishOfTheDayType;
    canBeSetDown:              boolean;
    canBeGrabbed:              boolean;
    isHoedirt:                 boolean;
    isSpawnedObject:           boolean;
    questItem:                 boolean;
    questId:                   number;
    isOn:                      boolean;
    fragility:                 number;
    price:                     number;
    edibility:                 number;
    stack:                     number;
    quality:                   number;
    bigCraftable:              boolean;
    setOutdoors:               boolean;
    setIndoors:                boolean;
    readyForHarvest:           boolean;
    showNextIndex:             boolean;
    flipped:                   boolean;
    hasBeenPickedUpByFarmer:   boolean;
    isRecipe:                  boolean;
    isLamp:                    boolean;
    minutesUntilReady:         number;
    boundingBox:               BoundingBox;
    scale:                     TileCoordinates;
    uses:                      number;
    preservedParentSheetIndex: number;
    destroyOvernight:          boolean;
    heldObject?:               HeldObject;
    "@_xsi:type"?:             DisplayName;
    hoeDirt?:                  PurpleHoeDirt;
    currentLidFrame?:          number;
    lidFrameCount?:            MaxEntries;
    frameCounter?:             number;
    coins?:                    number;
    items?:                    PurpleItems | string;
    separateWalletItems?:      SeparateWalletItems;
    chestType?:                string;
    tint?:                     HairstyleColor;
    playerChoiceColor?:        HairstyleColor;
    playerChest?:              boolean;
    fridge?:                   boolean;
    giftbox?:                  boolean;
    giftboxIndex?:             number;
    spriteIndexOverride?:      number;
    dropContents?:             boolean;
    synchronized?:             boolean;
    specialChestType?:         string;
}

export interface HeldObject {
    isLostItem:                boolean;
    category:                  number;
    hasBeenInInventory:        boolean;
    name:                      string;
    parentSheetIndex?:         number;
    specialItem:               boolean;
    SpecialVariable:           number;
    DisplayName:               string;
    Name:                      string;
    Stack:                     number;
    tileLocation:              TileCoordinates;
    owner:                     number;
    type:                      PurpleType;
    canBeSetDown:              boolean;
    canBeGrabbed:              boolean;
    isHoedirt:                 boolean;
    isSpawnedObject:           boolean;
    questItem:                 boolean;
    questId:                   number;
    isOn:                      boolean;
    fragility:                 number;
    price:                     number;
    edibility:                 number;
    stack:                     number;
    quality:                   number;
    bigCraftable:              boolean;
    setOutdoors:               boolean;
    setIndoors:                boolean;
    readyForHarvest:           boolean;
    showNextIndex:             boolean;
    flipped:                   boolean;
    hasBeenPickedUpByFarmer:   boolean;
    isRecipe:                  boolean;
    isLamp:                    boolean;
    minutesUntilReady:         number;
    boundingBox:               BoundingBox;
    scale:                     TileCoordinates;
    uses:                      number;
    preservedParentSheetIndex: number;
    destroyOvernight:          boolean;
    preserve?:                 PurplePreserve;
    "@_xsi:type"?:             DisplayName;
    currentLidFrame?:          number;
    lidFrameCount?:            MaxEntries;
    frameCounter?:             number;
    coins?:                    number;
    items?:                    HeldObjectItems;
    separateWalletItems?:      SeparateWalletItems;
    chestType?:                string;
    tint?:                     HairstyleColor;
    playerChoiceColor?:        HairstyleColor;
    playerChest?:              boolean;
    fridge?:                   boolean;
    giftbox?:                  boolean;
    giftboxIndex?:             number;
    spriteIndexOverride?:      number;
    dropContents?:             boolean;
    synchronized?:             boolean;
    specialChestType?:         SpecialChestType;
}

export interface HeldObjectItems {
    Item: DishOfTheDay[];
}

export enum PurplePreserve {
    Wine = "Wine",
}

export enum PurpleType {
    Basic = "Basic",
    Crafting = "Crafting",
    Interactive = "interactive",
}

export interface PurpleHoeDirt {
    state:            number;
    fertilizer:       number;
    isGreenhouseDirt: boolean;
    crop:             PurpleCrop;
}

export interface PurpleCrop {
    phaseDays:                         CropsOfTheWeek;
    rowInSpriteSheet:                  number;
    phaseToShow:                       number;
    currentPhase:                      number;
    harvestMethod:                     number;
    indexOfHarvest:                    number;
    regrowAfterHarvest:                number;
    dayOfCurrentPhase:                 number;
    minHarvest:                        number;
    maxHarvest:                        number;
    maxHarvestIncreasePerFarmingLevel: number;
    daysOfUnclutteredGrowth:           number;
    whichForageCrop:                   number;
    seasonsToGrowIn:                   SeasonsToGrowInClass;
    tintColor:                         HairstyleColor;
    flip:                              boolean;
    fullGrown:                         boolean;
    raisedSeeds:                       boolean;
    programColored:                    boolean;
    dead:                              boolean;
    forageCrop:                        boolean;
    chanceForExtraCrops:               number;
    seedIndex:                         number;
}

export interface SeasonsToGrowInClass {
    string: CurrentSeason[] | CurrentSeason;
}

export interface PurpleItems {
    Item: FluffyItem[];
}

export interface FluffyItem {
    "@_xsi:type":               DishOfTheDayXsiType;
    isLostItem:                 boolean;
    category:                   number;
    hasBeenInInventory:         boolean;
    name:                       string;
    specialItem:                boolean;
    SpecialVariable:            number;
    DisplayName:                string;
    Name:                       string;
    Stack:                      number;
    initialParentTileIndex?:    number;
    currentParentTileIndex?:    number;
    indexOfMenuItemView?:       number;
    stackable?:                 boolean;
    instantUse?:                boolean;
    isEfficient?:               boolean;
    animationSpeedModifier?:    number;
    upgradeLevel?:              number;
    numAttachmentSlots?:        number;
    attachments?:               FluffyAttachments | string;
    BaseName?:                  string;
    InitialParentTileIndex?:    number;
    IndexOfMenuItemView?:       number;
    InstantUse?:                boolean;
    IsEfficient?:               boolean;
    AnimationSpeedModifier?:    number;
    Stackable?:                 boolean;
    type?:                      DishOfTheDayType | number;
    minDamage?:                 number;
    maxDamage?:                 number;
    speed?:                     number;
    addedPrecision?:            number;
    addedDefense?:              number;
    addedAreaOfEffect?:         number;
    knockback?:                 number;
    critChance?:                number;
    critMultiplier?:            number;
    appearance?:                number;
    isOnSpecial?:               boolean;
    defenseBonus?:              number;
    immunityBonus?:             number;
    indexInTileSheet?:          number;
    price?:                     number;
    indexInColorSheet?:         number;
    appliedBootSheetIndex?:     number;
    parentSheetIndex?:          number;
    tileLocation?:              TileCoordinates;
    owner?:                     number | string;
    canBeSetDown?:              boolean;
    canBeGrabbed?:              boolean;
    isHoedirt?:                 boolean;
    isSpawnedObject?:           boolean;
    questItem?:                 boolean;
    questId?:                   number;
    isOn?:                      boolean;
    fragility?:                 number;
    edibility?:                 number;
    stack?:                     number;
    quality?:                   number;
    bigCraftable?:              boolean;
    setOutdoors?:               boolean;
    setIndoors?:                boolean;
    readyForHarvest?:           boolean;
    showNextIndex?:             boolean;
    flipped?:                   boolean;
    hasBeenPickedUpByFarmer?:   boolean;
    isRecipe?:                  boolean;
    isLamp?:                    boolean;
    minutesUntilReady?:         number;
    boundingBox?:               BoundingBox;
    scale?:                     TileCoordinates;
    uses?:                      number;
    preservedParentSheetIndex?: number;
    destroyOvernight?:          boolean;
    furniture_type?:            number;
    rotations?:                 number;
    currentRotation?:           number;
    sourceRect?:                BoundingBox;
    defaultSourceRect?:         BoundingBox;
    defaultBoundingBox?:        BoundingBox;
    drawHeldObjectLow?:         boolean;
    which?:                     number;
    skipHairDraw?:              boolean;
    ignoreHairstyleOffset?:     boolean;
    hairDrawType?:              number;
    isPrismatic?:               boolean;
    enchantments?:              Enchantments;
    preserve?:                  PurplePreserve;
}

export interface FluffyAttachments {
    Object: CountdownToWedding[] | CountdownToWedding;
}

export interface Enchantments {
    "@_xsi:type": string;
    level:        number;
}

export interface Bundles {
    item: BundlesItem[];
}

export interface BundlesItem {
    key:   MaxEntries;
    value: AmbitiousValue;
}

export interface AmbitiousValue {
    ArrayOfBoolean: AreasComplete;
}

export interface CharactersClass {
    NPC: NPCElement[] | NPCElement;
}

export interface NPCElement {
    name:                           string;
    forceOneTileWide:               boolean;
    isEmoting:                      boolean;
    isCharging:                     boolean;
    isGlowing:                      boolean;
    coloredBorder:                  boolean;
    flip:                           boolean;
    drawOnTop:                      boolean;
    faceTowardFarmer:               boolean;
    ignoreMovementAnimation:        boolean;
    faceAwayFromFarmer:             boolean;
    scale:                          MultiplierClass;
    timeBeforeAIMovementAgain:      number;
    glowingTransparency:            number;
    glowRate:                       number;
    willDestroyObjectsUnderfoot:    boolean;
    Position:                       TileCoordinates;
    Speed:                          number;
    FacingDirection:                number;
    IsEmoting:                      boolean;
    CurrentEmote:                   number;
    Scale:                          number;
    lastCrossroad:                  BoundingBox;
    daysAfterLastBirth:             number;
    birthday_Season?:               CurrentSeason;
    birthday_Day:                   number;
    age:                            number;
    manners:                        number;
    socialAnxiety:                  number;
    optimism:                       number;
    gender:                         number;
    sleptInBed:                     boolean;
    isInvisible:                    boolean;
    lastSeenMovieWeek:              number;
    datingFarmer:                   boolean;
    divorcedFromFarmer:             boolean;
    datable:                        boolean;
    defaultMap?:                    string;
    loveInterest?:                  string;
    id:                             number;
    homeRegion:                     number;
    daysUntilNotInvisible:          number;
    followSchedule:                 boolean;
    moveTowardPlayerThreshold:      number;
    hasBeenKissedToday:             SleptInTemporaryBed;
    shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
    shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
    shouldWearIslandAttire:         SleptInTemporaryBed;
    isMovingOnPathFindPath:         SleptInTemporaryBed;
    queuedSchedulePaths:            string;
    lastAttemptedSchedule:          number;
    dayScheduleName?:               DayScheduleName;
    endOfRouteBehaviorName:         EndOfRouteBehaviorName;
    squareMovementFacingPreference: number;
    DefaultFacingDirection:         number;
    DefaultMap?:                    string;
    DefaultPosition:                TileCoordinates;
    IsWalkingInSquare:              boolean;
    IsWalkingTowardPlayer:          boolean;
    "@_xsi:type"?:                  string;
    whichBreed?:                    number;
    lastPetDay?:                    LastPetDay;
    grantedFriendshipForPet?:       boolean;
    friendshipTowardFarmer?:        number;
    isSleepingOnFarmerBed?:         SleptInTemporaryBed;
    CurrentBehavior?:               number;
}

export enum DayScheduleName {
    Bus = "bus",
    Default = "default",
    Mon = "Mon",
    Spring = "spring",
    SpringMon = "spring_Mon",
}

export interface EndOfRouteBehaviorName {
    string: CountdownToWedding | string;
}

export interface LastPetDay {
    item: LastPetDayItem[];
}

export interface LastPetDayItem {
    key:   KeyClass;
    value: MaxEntries;
}

export interface GameLocationFridge {
    isLostItem:                boolean;
    category:                  number;
    hasBeenInInventory:        boolean;
    name:                      DisplayName;
    parentSheetIndex:          number;
    specialItem:               boolean;
    SpecialVariable:           number;
    DisplayName:               DisplayName;
    Name:                      DisplayName;
    Stack:                     number;
    tileLocation:              TileCoordinates;
    owner:                     number;
    type:                      DishOfTheDayType;
    canBeSetDown:              boolean;
    canBeGrabbed:              boolean;
    isHoedirt:                 boolean;
    isSpawnedObject:           boolean;
    questItem:                 boolean;
    questId:                   number;
    isOn:                      boolean;
    fragility:                 number;
    price:                     number;
    edibility:                 number;
    stack:                     number;
    quality:                   number;
    bigCraftable:              boolean;
    setOutdoors:               boolean;
    setIndoors:                boolean;
    readyForHarvest:           boolean;
    showNextIndex:             boolean;
    flipped:                   boolean;
    hasBeenPickedUpByFarmer:   boolean;
    isRecipe:                  boolean;
    isLamp:                    boolean;
    minutesUntilReady:         number;
    boundingBox:               BoundingBox;
    scale:                     TileCoordinates;
    uses:                      number;
    preservedParentSheetIndex: number;
    destroyOvernight:          boolean;
    currentLidFrame:           number;
    lidFrameCount:             MaxEntries;
    frameCounter:              number;
    coins:                     number;
    items:                     HeldObjectItems | string;
    separateWalletItems:       SeparateWalletItems;
    chestType:                 string;
    tint:                      HairstyleColor;
    playerChoiceColor:         HairstyleColor;
    playerChest:               boolean;
    fridge:                    boolean;
    giftbox:                   boolean;
    giftboxIndex:              number;
    spriteIndexOverride:       number;
    dropContents:              boolean;
    synchronized:              boolean;
    specialChestType:          SpecialChestType;
}

export interface HousePaintColor {
    BuildingPaintColor: BuildingPaintColor;
}

export interface LargeTerrainFeaturesClass {
    LargeTerrainFeature: LargeTerrainFeatureElement[] | LargeTerrainFeatureElement;
}

export interface LargeTerrainFeatureElement {
    "@_xsi:type":    LargeTerrainFeatureXsiType;
    tilePosition:    TileCoordinates;
    size:            number;
    datePlanted:     number;
    tileSheetOffset: number;
    overrideSeason:  number;
    health:          number;
    flipped:         boolean;
    townBush:        boolean;
    greenhouseBush:  boolean;
    drawShadow:      boolean;
}

export enum LargeTerrainFeatureXsiType {
    Bush = "Bush",
}

export interface MuseumPieces {
    item: MuseumPiecesItem[];
}

export interface MuseumPiecesItem {
    key:   StickyKey;
    value: MaxEntries;
}

export interface ObjectsObjects {
    item: TentacledItem[] | StickyItem;
}

export interface TentacledItem {
    key:   StickyKey;
    value: CunningValue;
}

export interface CunningValue {
    Object: FluffyObject;
}

export interface FluffyObject {
    "@_xsi:type"?:             DisplayName;
    isLostItem:                boolean;
    category:                  number;
    hasBeenInInventory:        boolean;
    name:                      string;
    parentSheetIndex:          number;
    specialItem:               boolean;
    SpecialVariable:           number;
    DisplayName:               string;
    Name:                      string;
    Stack:                     number;
    tileLocation:              TileCoordinates;
    owner:                     number;
    type?:                     DishOfTheDayType;
    canBeSetDown:              boolean;
    canBeGrabbed:              boolean;
    isHoedirt:                 boolean;
    isSpawnedObject:           boolean;
    questItem:                 boolean;
    questId:                   number;
    isOn:                      boolean;
    fragility:                 number;
    price:                     number;
    edibility:                 number;
    stack:                     number;
    quality:                   number;
    bigCraftable:              boolean;
    setOutdoors:               boolean;
    setIndoors:                boolean;
    readyForHarvest:           boolean;
    showNextIndex:             boolean;
    flipped:                   boolean;
    hasBeenPickedUpByFarmer:   boolean;
    isRecipe:                  boolean;
    isLamp:                    boolean;
    minutesUntilReady:         number;
    boundingBox:               BoundingBox;
    scale:                     TileCoordinates;
    uses:                      number;
    preservedParentSheetIndex: number;
    destroyOvernight:          boolean;
    hoeDirt?:                  FluffyHoeDirt;
    currentLidFrame?:          number;
    lidFrameCount?:            MaxEntries;
    frameCounter?:             number;
    coins?:                    number;
    items?:                    FluffyItems | string;
    separateWalletItems?:      SeparateWalletItems;
    chestType?:                string;
    tint?:                     HairstyleColor;
    playerChoiceColor?:        HairstyleColor;
    playerChest?:              boolean;
    fridge?:                   boolean;
    giftbox?:                  boolean;
    giftboxIndex?:             number;
    spriteIndexOverride?:      number;
    dropContents?:             boolean;
    synchronized?:             boolean;
    specialChestType?:         SpecialChestType;
    heldObject?:               DishOfTheDay;
    depositedItem?:            DepositedItem;
    nextSmokeTime?:            number;
    nextShakeTime?:            number;
    health?:                   number;
    maxHealth?:                number;
    whichType?:                number;
    gatePosition?:             number;
    gateMotion?:               number;
    isGate?:                   boolean;
    agingRate?:                number;
    daysToMature?:             number;
    pedestalType?:             number;
    requiredItem?:             DishOfTheDay;
    successColor?:             HairstyleColor;
    lockOnSuccess?:            boolean;
    locked?:                   boolean;
    match?:                    boolean;
}

export interface DepositedItem {
    Object: CountdownToWedding;
}

export interface FluffyHoeDirt {
    state:            number;
    fertilizer:       number;
    isGreenhouseDirt: boolean;
    crop?:            FluffyCrop;
}

export interface FluffyCrop {
    phaseDays:                         CropsOfTheWeek;
    rowInSpriteSheet:                  number;
    phaseToShow:                       number;
    currentPhase:                      number;
    harvestMethod:                     number;
    indexOfHarvest:                    number;
    regrowAfterHarvest:                number;
    dayOfCurrentPhase:                 number;
    minHarvest:                        number;
    maxHarvest:                        number;
    maxHarvestIncreasePerFarmingLevel: number;
    daysOfUnclutteredGrowth:           number;
    whichForageCrop:                   number;
    seasonsToGrowIn:                   BroadcastedMail;
    tintColor:                         HairstyleColor;
    flip:                              boolean;
    fullGrown:                         boolean;
    raisedSeeds:                       boolean;
    programColored:                    boolean;
    dead:                              boolean;
    forageCrop:                        boolean;
    chanceForExtraCrops:               number;
    seedIndex:                         number;
}

export interface FluffyItems {
    Item: ItemItem[] | DishOfTheDay;
}

export interface ItemItem {
    "@_xsi:type":                      DishOfTheDayXsiType;
    isLostItem:                        boolean;
    category:                          number;
    hasBeenInInventory:                boolean;
    name:                              string;
    parentSheetIndex?:                 number;
    specialItem:                       boolean;
    SpecialVariable:                   number;
    DisplayName:                       string;
    Name:                              string;
    Stack:                             number;
    tileLocation?:                     TileCoordinates;
    owner?:                            number | string;
    type?:                             DishOfTheDayType | number;
    canBeSetDown?:                     boolean;
    canBeGrabbed?:                     boolean;
    isHoedirt?:                        boolean;
    isSpawnedObject?:                  boolean;
    questItem?:                        boolean;
    questId?:                          number;
    isOn?:                             boolean;
    fragility?:                        number;
    price?:                            number;
    edibility?:                        number;
    stack?:                            number;
    quality?:                          number;
    bigCraftable?:                     boolean;
    setOutdoors?:                      boolean;
    setIndoors?:                       boolean;
    readyForHarvest?:                  boolean;
    showNextIndex?:                    boolean;
    flipped?:                          boolean;
    hasBeenPickedUpByFarmer?:          boolean;
    isRecipe?:                         boolean;
    isLamp?:                           boolean;
    minutesUntilReady?:                number;
    boundingBox?:                      BoundingBox;
    scale?:                            TileCoordinates;
    uses?:                             number;
    preservedParentSheetIndex?:        number;
    destroyOvernight?:                 boolean;
    initialParentTileIndex?:           number;
    currentParentTileIndex?:           number;
    indexOfMenuItemView?:              number;
    stackable?:                        boolean;
    instantUse?:                       boolean;
    isEfficient?:                      boolean;
    animationSpeedModifier?:           number;
    upgradeLevel?:                     number;
    numAttachmentSlots?:               number;
    attachments?:                      TentacledAttachments | string;
    BaseName?:                         string;
    InitialParentTileIndex?:           number;
    IndexOfMenuItemView?:              number;
    InstantUse?:                       boolean;
    IsEfficient?:                      boolean;
    AnimationSpeedModifier?:           number;
    Stackable?:                        boolean;
    isBottomless?:                     boolean;
    waterCanMax?:                      number;
    WaterLeft?:                        number;
    IsBottomless?:                     boolean;
    defenseBonus?:                     number;
    immunityBonus?:                    number;
    indexInTileSheet?:                 number;
    indexInColorSheet?:                number;
    appliedBootSheetIndex?:            number;
    which?:                            number;
    skipHairDraw?:                     boolean;
    ignoreHairstyleOffset?:            boolean;
    hairDrawType?:                     number;
    isPrismatic?:                      boolean;
    indexInTileSheetFemale?:           number;
    clothesType?:                      number;
    dyeable?:                          boolean;
    clothesColor?:                     HairstyleColor;
    otherData?:                        string;
    Price?:                            number;
    uniqueID?:                         number;
    minDamage?:                        number;
    maxDamage?:                        number;
    speed?:                            number;
    addedPrecision?:                   number;
    addedDefense?:                     number;
    addedAreaOfEffect?:                number;
    knockback?:                        number;
    critChance?:                       number;
    critMultiplier?:                   number;
    appearance?:                       number;
    isOnSpecial?:                      boolean;
    additionalPower?:                  MaxEntries;
    preserve?:                         string;
    color?:                            HairstyleColor;
    colorSameIndexAsParentSheetIndex?: boolean;
    ColorSameIndexAsParentSheetIndex?: boolean;
}

export interface TentacledAttachments {
    Object: DishOfTheDay[] | CountdownToWedding;
}

export interface StickyItem {
    key:   StickyKey;
    value: MagentaValue;
}

export interface MagentaValue {
    Object: DishOfTheDay;
}

export interface OwnerUID {
    long: number;
}

export interface ResourceClumpsClass {
    ResourceClump: ResourceClumpElement[] | ResourceClumpElement;
}

export interface ResourceClumpElement {
    width:            number;
    height:           number;
    parentSheetIndex: number;
    health:           number;
    tile:             TileCoordinates;
}

export interface SandDuggy {
    whacked: boolean;
}

export interface Stumps {
    ResourceClump: ResourceClumpElement[];
}

export interface TerrainFeaturesClass {
    item: TerrainFeaturesItem[];
}

export interface TerrainFeaturesItem {
    key:   StickyKey;
    value: FriskyValue;
}

export interface FriskyValue {
    TerrainFeature: TerrainFeature;
}

export interface TerrainFeature {
    "@_xsi:type":                TerrainFeatureXsiType;
    whichFloor?:                 number;
    whichView?:                  number;
    isPathway?:                  boolean;
    isSteppingStone?:            boolean;
    drawContouredShadow?:        boolean;
    cornerDecoratedBorders?:     boolean;
    texture?:                    string;
    growthStage?:                number;
    treeType?:                   number;
    health?:                     number;
    flipped?:                    boolean;
    stump?:                      boolean;
    tapped?:                     boolean;
    hasSeed?:                    boolean;
    fertilized?:                 boolean;
    shakeLeft?:                  boolean;
    treeTopSourceRect?:          BoundingBox;
    indexOfFruit?:               number;
    daysUntilMature?:            number;
    fruitsOnTree?:               number;
    struckByLightningCountdown?: number;
    greenHouseTree?:             boolean;
    greenHouseTileTree?:         boolean;
    fruitSeason?:                CurrentSeason;
    state?:                      number;
    fertilizer?:                 number;
    isGreenhouseDirt?:           boolean;
    crop?:                       TerrainFeatureCrop;
    grassType?:                  number;
    numberOfWeeds?:              number;
    grassSourceOffset?:          number;
}

export enum TerrainFeatureXsiType {
    Flooring = "Flooring",
    FruitTree = "FruitTree",
    Grass = "Grass",
    HoeDirt = "HoeDirt",
    Tree = "Tree",
}

export interface TerrainFeatureCrop {
    phaseDays:                         CropsOfTheWeek | string;
    rowInSpriteSheet:                  number;
    phaseToShow:                       number;
    currentPhase:                      number;
    harvestMethod:                     number;
    indexOfHarvest:                    number;
    regrowAfterHarvest:                number;
    dayOfCurrentPhase:                 number;
    minHarvest:                        number;
    maxHarvest:                        number;
    maxHarvestIncreasePerFarmingLevel: number;
    daysOfUnclutteredGrowth:           number;
    whichForageCrop:                   number;
    seasonsToGrowIn:                   SeasonsToGrowInClass | string;
    tintColor:                         HairstyleColor;
    flip:                              boolean;
    fullGrown:                         boolean;
    raisedSeeds:                       boolean;
    programColored:                    boolean;
    dead:                              boolean;
    forageCrop:                        boolean;
    chanceForExtraCrops:               number;
    seedIndex:                         number;
}

export interface MinePermanentMineChanges {
    item: MinePermanentMineChangesItem[];
}

export interface MinePermanentMineChangesItem {
    key:   MaxEntries;
    value: MischievousValue;
}

export interface MischievousValue {
    MineInfo: MineInfo;
}

export interface MineInfo {
    platformContainersLeft: number;
    chestsLeft:             number;
    coalCartsLeft:          number;
    elevator:               number;
}

export interface Options {
    autoRun:                         boolean;
    dialogueTyping:                  boolean;
    fullscreen:                      boolean;
    windowedBorderlessFullscreen:    boolean;
    showPortraits:                   boolean;
    showMerchantPortraits:           boolean;
    showMenuBackground:              boolean;
    playFootstepSounds:              boolean;
    alwaysShowToolHitLocation:       boolean;
    hideToolHitLocationWhenInMotion: boolean;
    pauseWhenOutOfFocus:             boolean;
    pinToolbarToggle:                boolean;
    mouseControls:                   boolean;
    keyboardControls:                boolean;
    gamepadControls:                 boolean;
    rumble:                          boolean;
    ambientOnlyToggle:               boolean;
    zoomButtons:                     boolean;
    invertScrollDirection:           boolean;
    screenFlash:                     boolean;
    showPlacementTileForGamepad:     boolean;
    snappyMenus:                     boolean;
    ipConnectionsEnabled:            boolean;
    enableServer:                    boolean;
    enableFarmhandCreation:          boolean;
    showAdvancedCraftingInformation: boolean;
    showMPEndOfNightReadyStatus:     boolean;
    vsyncEnabled:                    boolean;
    muteAnimalSounds:                boolean;
    stowingMode:                     string;
    gamepadMode:                     string;
    useLegacySlingshotFiring:        boolean;
    musicVolumeLevel:                number;
    soundVolumeLevel:                number;
    footstepVolumeLevel:             number;
    ambientVolumeLevel:              number;
    snowTransparency:                number;
    zoomLevel:                       number;
    localCoopBaseZoomLevel:          number;
    uiScale:                         number;
    localCoopDesiredUIScale:         number;
    preferredResolutionX:            number;
    preferredResolutionY:            number;
    lightingQuality:                 number;
    serverPrivacy:                   string;
    actionButton:                    Button;
    toolSwapButton:                  string;
    cancelButton:                    CancelButton;
    useToolButton:                   Button;
    moveUpButton:                    CancelButton;
    moveRightButton:                 CancelButton;
    moveDownButton:                  CancelButton;
    moveLeftButton:                  CancelButton;
    menuButton:                      Button;
    runButton:                       CancelButton;
    tmpKeyToReplace:                 CancelButton;
    chatButton:                      Button;
    mapButton:                       CancelButton;
    journalButton:                   CancelButton;
    inventorySlot1:                  CancelButton;
    inventorySlot2:                  CancelButton;
    inventorySlot3:                  CancelButton;
    inventorySlot4:                  CancelButton;
    inventorySlot5:                  CancelButton;
    inventorySlot6:                  CancelButton;
    inventorySlot7:                  CancelButton;
    inventorySlot8:                  CancelButton;
    inventorySlot9:                  CancelButton;
    inventorySlot10:                 CancelButton;
    inventorySlot11:                 CancelButton;
    inventorySlot12:                 CancelButton;
    toolbarSwap:                     CancelButton;
    emoteButton:                     CancelButton;
    hardwareCursor:                  boolean;
}

export interface Button {
    InputButton: InputButton[];
}

export interface InputButton {
    key:        string;
    mouseLeft:  boolean;
    mouseRight: boolean;
}

export interface CancelButton {
    InputButton: InputButton;
}

export interface Player {
    name:                                  string;
    forceOneTileWide:                      boolean;
    isEmoting:                             boolean;
    isCharging:                            boolean;
    isGlowing:                             boolean;
    coloredBorder:                         boolean;
    flip:                                  boolean;
    drawOnTop:                             boolean;
    faceTowardFarmer:                      boolean;
    ignoreMovementAnimation:               boolean;
    faceAwayFromFarmer:                    boolean;
    scale:                                 MultiplierClass;
    timeBeforeAIMovementAgain:             number;
    glowingTransparency:                   number;
    glowRate:                              number;
    willDestroyObjectsUnderfoot:           boolean;
    Position:                              TileCoordinates;
    Speed:                                 number;
    FacingDirection:                       number;
    IsEmoting:                             boolean;
    CurrentEmote:                          number;
    Scale:                                 number;
    questLog:                              PlayerQuestLog;
    professions:                           CropsOfTheWeek;
    newLevels:                             string;
    experiencePoints:                      CropsOfTheWeek;
    items:                                 PlayerItems;
    dialogueQuestionsAnswered:             CropsOfTheWeek;
    furnitureOwned:                        string;
    cookingRecipes:                        CookingRecipes;
    craftingRecipes:                       CookingRecipes;
    activeDialogueEvents:                  string;
    eventsSeen:                            CropsOfTheWeek;
    secretNotesSeen:                       CropsOfTheWeek;
    songsHeard:                            BroadcastedMail;
    achievements:                          CropsOfTheWeek;
    specialItems:                          CropsOfTheWeek;
    specialBigCraftables:                  CropsOfTheWeek;
    mailReceived:                          BroadcastedMail;
    mailForTomorrow:                       string;
    mailbox:                               WorldStateIDs;
    timeWentToBed:                         MaxEntries;
    sleptInTemporaryBed:                   SleptInTemporaryBed;
    stats:                                 PlayerStats;
    blueprints:                            string;
    biteChime:                             number;
    itemsLostLastDeath:                    ItemsLostLastDeathClass | string;
    movementDirections:                    string;
    farmName:                              string;
    favoriteThing:                         string;
    slotCanHost:                           boolean;
    userID:                                string;
    catPerson:                             boolean;
    whichPetBreed:                         number;
    acceptedDailyQuest:                    boolean;
    mostRecentBed:                         TileCoordinates;
    performedEmotes:                       string;
    shirt:                                 number;
    hair:                                  number;
    skin:                                  number;
    shoes:                                 number;
    accessory:                             number;
    facialHair:                            number;
    pants:                                 number;
    hairstyleColor:                        HairstyleColor;
    pantsColor:                            HairstyleColor;
    newEyeColor:                           HairstyleColor;
    hat:                                   Hat;
    boots:                                 Boots;
    leftRing:                              TRing;
    rightRing:                             TRing;
    shirtItem:                             Item;
    divorceTonight:                        boolean;
    changeWalletTypeTonight:               boolean;
    woodPieces:                            number;
    stonePieces:                           number;
    copperPieces:                          number;
    ironPieces:                            number;
    coalPieces:                            number;
    goldPieces:                            number;
    iridiumPieces:                         number;
    quartzPieces:                          number;
    gameVersion:                           string;
    caveChoice:                            number;
    feed:                                  number;
    farmingLevel:                          number;
    miningLevel:                           number;
    combatLevel:                           number;
    foragingLevel:                         number;
    fishingLevel:                          number;
    luckLevel:                             number;
    newSkillPointsToSpend:                 number;
    addedFarmingLevel:                     number;
    addedMiningLevel:                      number;
    addedCombatLevel:                      number;
    addedForagingLevel:                    number;
    addedFishingLevel:                     number;
    addedLuckLevel:                        number;
    maxStamina:                            number;
    maxItems:                              number;
    lastSeenMovieWeek:                     number;
    resilience:                            number;
    attack:                                number;
    immunity:                              number;
    attackIncreaseModifier:                number;
    knockbackModifier:                     number;
    weaponSpeedModifier:                   number;
    critChanceModifier:                    number;
    critPowerModifier:                     number;
    weaponPrecisionModifier:               number;
    clubCoins:                             number;
    trashCanLevel:                         number;
    daysLeftForToolUpgrade:                number;
    houseUpgradeLevel:                     number;
    daysUntilHouseUpgrade:                 number;
    coopUpgradeLevel:                      number;
    barnUpgradeLevel:                      number;
    hasGreenhouse:                         boolean;
    hasUnlockedSkullDoor:                  boolean;
    hasDarkTalisman:                       boolean;
    hasMagicInk:                           boolean;
    showChestColorPicker:                  boolean;
    hasMagnifyingGlass:                    boolean;
    hasWateringCanEnchantment:             boolean;
    magneticRadius:                        number;
    temporaryInvincibilityTimer:           number;
    currentTemporaryInvincibilityDuration: number;
    health:                                number;
    maxHealth:                             number;
    difficultyModifier:                    number;
    isMale:                                boolean;
    hasBusTicket:                          boolean;
    stardewHero:                           boolean;
    hasClubCard:                           boolean;
    hasSpecialCharm:                       boolean;
    basicShipped:                          BasicShipped;
    mineralsFound:                         BasicShipped;
    recipesCooked:                         BasicShipped;
    fishCaught:                            ArchaeologyFound;
    archaeologyFound:                      ArchaeologyFound;
    callsReceived:                         string;
    giftedItems:                           GiftedItems;
    tailoredItems:                         string;
    friendshipData:                        FriendshipData;
    dayOfMonthForSaveGame:                 number;
    seasonForSaveGame:                     number;
    yearForSaveGame:                       number;
    overallsColor:                         number;
    shirtColor:                            number;
    skinColor:                             number;
    hairColor:                             number;
    eyeColor:                              number;
    bobber:                                string;
    qiGems:                                number;
    hasUsedDailyRevive:                    boolean;
    chestConsumedLevels:                   ChestConsumedLevels;
    saveTime:                              number;
    isCustomized:                          boolean;
    homeLocation:                          string;
    lastSleepLocation:                     string;
    lastSleepPoint:                        TileCoordinates;
    daysMarried:                           number;
    movementMultiplier:                    number;
    theaterBuildDate:                      number;
    deepestMineLevel:                      number;
    stamina:                               number;
    totalMoneyEarned:                      number;
    millisecondsPlayed:                    number;
    hasRustyKey:                           boolean;
    hasSkullKey:                           boolean;
    canUnderstandDwarves:                  boolean;
    HasTownKey:                            boolean;
    useSeparateWallets:                    boolean;
    timesReachedMineBottom:                number;
    UniqueMultiplayerID:                   string;
    money:                                 number;
}

export interface PlayerItems {
    Item: IndigoItem[];
}

export interface IndigoItem {
    "@_xsi:type"?:              DishOfTheDayXsiType;
    isLostItem?:                boolean;
    category?:                  number;
    hasBeenInInventory?:        boolean;
    name?:                      string;
    specialItem?:               boolean;
    SpecialVariable?:           number;
    DisplayName?:               string;
    Name?:                      string;
    Stack?:                     number;
    initialParentTileIndex?:    number;
    currentParentTileIndex?:    number;
    indexOfMenuItemView?:       number;
    stackable?:                 boolean;
    instantUse?:                boolean;
    isEfficient?:               boolean;
    animationSpeedModifier?:    number;
    upgradeLevel?:              number;
    numAttachmentSlots?:        number;
    attachments?:               string;
    BaseName?:                  string;
    InitialParentTileIndex?:    number;
    IndexOfMenuItemView?:       number;
    InstantUse?:                boolean;
    IsEfficient?:               boolean;
    AnimationSpeedModifier?:    number;
    Stackable?:                 boolean;
    additionalPower?:           MaxEntries;
    type?:                      DishOfTheDayType | number;
    minDamage?:                 number;
    maxDamage?:                 number;
    speed?:                     number;
    addedPrecision?:            number;
    addedDefense?:              number;
    addedAreaOfEffect?:         number;
    knockback?:                 number;
    critChance?:                number;
    critMultiplier?:            number;
    appearance?:                number;
    isOnSpecial?:               boolean;
    parentSheetIndex?:          number;
    tileLocation?:              TileCoordinates;
    owner?:                     number | string;
    canBeSetDown?:              boolean;
    canBeGrabbed?:              boolean;
    isHoedirt?:                 boolean;
    isSpawnedObject?:           boolean;
    questItem?:                 boolean;
    questId?:                   number;
    isOn?:                      boolean;
    fragility?:                 number;
    price?:                     number;
    edibility?:                 number;
    stack?:                     number;
    quality?:                   number;
    bigCraftable?:              boolean;
    setOutdoors?:               boolean;
    setIndoors?:                boolean;
    readyForHarvest?:           boolean;
    showNextIndex?:             boolean;
    flipped?:                   boolean;
    hasBeenPickedUpByFarmer?:   boolean;
    isRecipe?:                  boolean;
    isLamp?:                    boolean;
    minutesUntilReady?:         number;
    boundingBox?:               BoundingBox;
    scale?:                     TileCoordinates;
    uses?:                      number;
    preserve?:                  PurplePreserve;
    preservedParentSheetIndex?: number;
    destroyOvernight?:          boolean;
    "@_xsi:nil"?:               boolean;
}

export interface PlayerQuestLog {
    Quest: FluffyQuest[];
}

export interface FluffyQuest {
    "@_xsi:type"?:     QuestXsiType;
    _currentObjective: string;
    _questDescription: string;
    _questTitle:       string;
    rewardDescription: number;
    accepted:          boolean;
    completed:         boolean;
    dailyQuest:        boolean;
    showNew:           boolean;
    canBeCancelled:    boolean;
    destroy:           boolean;
    id:                number;
    moneyReward:       number;
    questType:         number;
    daysLeft:          number;
    dayQuestAccepted:  number;
    nextQuests:        MaxEntries;
    questTitle:        string;
    npcName?:          string;
    locationOfItem?:   string;
    itemIndex?:        number;
    tileX?:            number;
    tileY?:            number;
    itemFound?:        boolean;
    targetMessage?:    string;
    target?:           string;
    item?:             number;
    number?:           number;
    parts?:            string;
    dialogueparts?:    string;
}

export interface PlayerStats {
    seedsSown:              number;
    itemsShipped:           number;
    itemsCooked:            number;
    itemsCrafted:           number;
    chickenEggsLayed:       number;
    duckEggsLayed:          number;
    cowMilkProduced:        number;
    goatMilkProduced:       number;
    rabbitWoolProduced:     number;
    sheepWoolProduced:      number;
    cheeseMade:             number;
    goatCheeseMade:         number;
    trufflesFound:          number;
    stoneGathered:          number;
    rocksCrushed:           number;
    dirtHoed:               number;
    giftsGiven:             number;
    timesUnconscious:       number;
    averageBedtime:         number;
    timesFished:            number;
    fishCaught:             number;
    bouldersCracked:        number;
    stumpsChopped:          number;
    stepsTaken:             number;
    monstersKilled:         number;
    diamondsFound:          number;
    prismaticShardsFound:   number;
    otherPreciousGemsFound: number;
    caveCarrotsFound:       number;
    copperFound:            number;
    ironFound:              number;
    coalFound:              number;
    coinsFound:             number;
    goldFound:              number;
    iridiumFound:           number;
    barsSmelted:            number;
    beveragesMade:          number;
    preservesMade:          number;
    piecesOfTrashRecycled:  number;
    mysticStonesCrushed:    number;
    daysPlayed:             number;
    weedsEliminated:        number;
    sticksChopped:          number;
    notesFound:             number;
    questsCompleted:        number;
    starLevelCropsShipped:  number;
    cropsShipped:           number;
    itemsForaged:           number;
    slimesKilled:           number;
    geodesCracked:          number;
    goodFriends:            number;
    totalMoneyGifted:       number;
    individualMoneyEarned:  number;
    specificMonstersKilled: CookingRecipes;
    stat_dictionary:        StatDictionaryClass;
    GoodFriends:            number;
    CropsShipped:           number;
    ItemsForaged:           number;
    GeodesCracked:          number;
    SlimesKilled:           number;
    StarLevelCropsShipped:  number;
    StoneGathered:          number;
    QuestsCompleted:        number;
    FishCaught:             number;
    NotesFound:             number;
    SticksChopped:          number;
    WeedsEliminated:        number;
    DaysPlayed:             number;
    BouldersCracked:        number;
    MysticStonesCrushed:    number;
    GoatCheeseMade:         number;
    CheeseMade:             number;
    PiecesOfTrashRecycled:  number;
    PreservesMade:          number;
    BeveragesMade:          number;
    BarsSmelted:            number;
    IridiumFound:           number;
    GoldFound:              number;
    CoinsFound:             number;
    CoalFound:              number;
    IronFound:              number;
    CopperFound:            number;
    CaveCarrotsFound:       number;
    OtherPreciousGemsFound: number;
    PrismaticShardsFound:   number;
    DiamondsFound:          number;
    MonstersKilled:         number;
    StepsTaken:             number;
    StumpsChopped:          number;
    TimesFished:            number;
    AverageBedtime:         number;
    TimesUnconscious:       number;
    GiftsGiven:             number;
    DirtHoed:               number;
    RocksCrushed:           number;
    TrufflesFound:          number;
    SheepWoolProduced:      number;
    RabbitWoolProduced:     number;
    GoatMilkProduced:       number;
    CowMilkProduced:        number;
    DuckEggsLayed:          number;
    ItemsCrafted:           number;
    ChickenEggsLayed:       number;
    ItemsCooked:            number;
    ItemsShipped:           number;
    SeedsSown:              number;
    IndividualMoneyEarned:  number;
}

export interface SpecialOrders {
    SpecialOrder: SpecialOrdersSpecialOrder;
}

export interface SpecialOrdersSpecialOrder {
    preSelectedItems:       PreSelectedItems;
    selectedRandomElements: PreSelectedItems;
    objectives:             SpecialOrderObjectivesClass;
    generationSeed:         number;
    seenParticipantsIDs:    SeenParticipantsIDs;
    participantsIDs:        SIDs;
    unclaimedRewardsIDs:    SIDs;
    appliedSpecialRules:    boolean;
    rewards:                Reward[];
    questKey:               string;
    questName:              string;
    questDescription:       string;
    requester:              string;
    orderType:              string;
    specialRule:            string;
    readyForRemoval:        boolean;
    itemToRemoveOnEnd:      number;
    dueDate:                number;
    duration:               string;
    questState:             string;
}

export interface SpecialOrderObjectivesClass {
    "@_xsi:type":             string;
    currentCount:             number;
    maxCount:                 number;
    description:              string;
    failOnCompletion:         boolean;
    acceptableContextTagSets: string;
}

export interface SIDs {
    item: ParticipantsIDsItem;
}

export interface ParticipantsIDsItem {
    key:   KeyClass;
    value: SleptInTemporaryBed;
}

export interface PreSelectedItems {
    item: CookingRecipesItem;
}

export interface SeenParticipantsIDs {
    item: ParticipantsIDsItem[];
}
