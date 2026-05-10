//Equivalent to C# range type
export interface Range {
    start: RangePart,
    end: RangePart
}

export interface RangePart {
    value: number,
    isFromEnd: boolean
}