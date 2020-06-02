export class Color {
    constructor(readonly r: number, readonly g: number, readonly b: number) {}

    toHex(): string {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`
    }
}