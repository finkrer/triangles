import { Triangle } from "./geometry.js"

export class Drawer {
    constructor(readonly ctx: CanvasRenderingContext2D) {}

    drawTriangle(t: Triangle): void {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.moveTo(t.a.x, t.a.y)
        ctx.lineTo(t.b.x, t.b.y)
        ctx.lineTo(t.c.x, t.c.y)
        ctx.closePath()
        ctx.fill()
    }
}