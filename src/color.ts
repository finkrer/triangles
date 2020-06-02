export class Color {
    constructor(readonly r: number, readonly g: number, readonly b: number) {}

    toHex(): string {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`
    }

    averageWith(other: Color): Color {
        return new Color(
            (this.r + other.r) / 2,
            (this.g + other.g) / 2,
            (this.b + other.b) / 2,
            )
    }

    fuzz(amount: number): Color {
        const r = this.r * (1 + amount - Math.random() * amount * 2)
        const g = this.g * (1 + amount - Math.random() * amount * 2)
        const b = this.b * (1 + amount - Math.random() * amount * 2)
        return new Color(
            this.normalize(r),
            this.normalize(g),
            this.normalize(b),
        )
    }

    private normalize(channel: number): number {
        if (channel < 0)
            return 0
        else if (channel > 255)
            return 255
        else
            return channel
    }
}