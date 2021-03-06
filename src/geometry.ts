export class Point {
    constructor(readonly x: number, readonly y: number) {}
}

export class Segment {
    constructor(readonly a: Point, readonly b: Point) {}
}

export class Vector {
    constructor(readonly x: number, readonly y: number) {}

    getDirection(): number {
        return Math.atan2(this.y, this.x)
    }
}

export class Triangle {
    readonly ab: Segment
    readonly bc: Segment
    readonly ca: Segment

    constructor(readonly a: Point, readonly b: Point, readonly c: Point) {
        this.ab = new Segment(a, b)
        this.bc = new Segment(b, c)
        this.ca = new Segment(c, a)
    }
}
