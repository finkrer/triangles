import { Triangle, Point } from './geometry.js';
import { Size } from './main.js';

export class Tesselator {
    constructor(readonly size: Size) {}

    *getTriangles(): Iterable<Triangle> {
        yield new Triangle(new Point(1, 2), new Point(100, 100), new Point(50, 200))
    }
}