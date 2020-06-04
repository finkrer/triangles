import { Triangle, Point, Segment } from './geometry.js';
import { Size } from './main.js';

export class Tesselator {
    static readonly scale: number = 150
    frontier: Array<Segment> = new Array<Segment>()

    constructor(readonly size: Size) {}

    *getTriangles(): Iterable<Triangle> {
        const start = {x: 0, y: 0}
        const x = {x: this.getRandomLength(), y: 0}
        const y = {x: 0, y: this.getRandomLength()}
        this.frontier.push({a: start, b: x}, {a: start, b: y})
        yield new Triangle({x: 1, y: 2}, {x: 100, y: 100}, {x: 50, y: 200})
    }

    getRandomLength(): number {
        return Math.random() * Tesselator.scale
    }
}