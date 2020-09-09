export interface KeyByStringIntValue {
    key: KeyByString;
    value: KeyByInt;
}

export interface KeyByVector {
    Vector2: Tile;
}

export interface KeyByInt {
    int: number;
}

export interface KeyByString {
    string: string;
}

export interface KeyByFloat {
    float: number;
}

export interface KeyByLong {
    long: number;
}

export interface KeyByStringList {
    string: string[];
}

  
export interface KeyByIntList {
    int: number[];
}

export interface Tile {
    X: number;
    Y: number;
}

export interface BoundingBox {
    X: number;
    Y: number;
    Width: number;
    Height: number;
    Location: Tile;
}

export interface Tint {
    R: number;
    G: number;
    B: number;
    A: number;
    PackedValue: any;
}

export interface KeyByStringArrayOfIntValue {
    key: KeyByString
    value: ArrayOfIntValue
}

export interface ArrayOfIntValue {
    ArrayOfInt: ArrayOfInt;
}

export interface ArrayOfInt {
    int: number[];
}

export interface KeyByStringArrayOfBooleanValue {
    key: KeyByString
    value: ArrayOfBooleanValue
}

export interface ArrayOfBooleanValue {
    ArrayOfBoolean: ArrayOfBoolean;
  }
  
export interface ArrayOfBoolean {
    boolean: boolean[];
  }

export interface KeyByStringBooleanValue {
    key: KeyByString
    value: BooleanValue
}

export interface BooleanValue {
    boolean: ArrayOfBoolean;
  }
  
export interface ArrayOfBoolean {
boolean: boolean[];
}

export interface ArrayOfLong {
    long: number[];
}
  