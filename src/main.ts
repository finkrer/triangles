import { Drawer } from "./drawer.js"
import { Triangle } from "./geometry.js"
{
    const c = <HTMLCanvasElement> document.getElementById("main-canvas")
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 100
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 100
    c.width = vw
    c.height = vh
    let ctx = c.getContext("2d")
    if (ctx === null) {
        throw new Error('This browser does not support 2-dimensional canvas rendering contexts.')
    }
    let d = new Drawer(ctx)
    d.drawTriangle(new Triangle({x: 1, y: 2}, {x: 100, y: 100}, {x: 50, y: 200}))
}