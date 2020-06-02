import { Drawer } from "./drawer.js"
import { Tesselator } from './tesselator.js'

export interface Size {
    width: number
    height: number
}

const size = getSize()
const canvas = createCanvas(size)
const ctx = get2DContext(canvas)
const tesselator = new Tesselator(size)
const drawer = new Drawer(ctx)
const g = ctx.createLinearGradient(0, 0, 150, 150)
g.addColorStop(0.0, '#abcdef')
g.addColorStop(1.0, '#fedcba')
for (let t of tesselator.getTriangles()) {
    drawer.drawTriangle(t).withGradient(g)
}

function getSize(): Size {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 100
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 100
    return {width: vw, height: vh}
}

function createCanvas(size: Size): HTMLCanvasElement {
    const c = <HTMLCanvasElement> document.getElementById("main-canvas")
    c.width = size.width
    c.height = size.height
    return c
}

function get2DContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const ctx = canvas.getContext("2d")
    if (ctx === null) {
        throw new Error('This browser does not support 2-dimensional canvas rendering contexts.')
    }
    return ctx
}