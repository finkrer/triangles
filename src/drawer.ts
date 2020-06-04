import { Triangle, Point } from './geometry.js'
import { Color } from './color.js'

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

    createGradientAt(startPoint: Point, endPoint: Point): GradientCreatingContext {
        return new GradientCreatingContext(this, startPoint, endPoint)
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

class GradientCreatingContext {
    constructor(private readonly d: Drawer, private readonly a: Point, private readonly b: Point) {}

    withColors(startColor: Color, endColor: Color): CanvasGradient {
        const g = this.d.ctx.createLinearGradient(this.a.x, this.a.y, this.b.x, this.b.y)
        g.addColorStop(0.0, startColor.toHex())
        g.addColorStop(1.0, endColor.toHex())
        return g
    }
}