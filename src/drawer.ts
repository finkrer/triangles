import { Triangle, Point } from "./geometry.js"

export class Drawer {
    constructor(readonly ctx: CanvasRenderingContext2D) {}

    drawTriangle(t: Triangle): TriangleDrawingContext {
        return new TriangleDrawingContext(this, t)
    }

    fillContour(...points: Array<Point>): void {
        if (points.length < 1)
            return
        this.startAt(points.shift()!)
        points.forEach(p => this.continueTo(p))
        this.finish()
    }

    private startAt(p: Point): void {
        this.ctx.beginPath()
        this.ctx.moveTo(p.x, p.y)
    }

    private continueTo(p: Point): void {
        this.ctx.lineTo(p.x, p.y)
    }

    private finish(): void {
        this.ctx.closePath()
        this.ctx.fill()
    }
}

class TriangleDrawingContext {
    constructor(private readonly d: Drawer, private readonly t: Triangle) {}

    withGradient(g: CanvasGradient) {
        this.d.ctx.fillStyle = g
        this.d.fillContour(this.t.a, this.t.b, this.t.c)
    }
}