export function range(end: number): Array<number>
export function range(start: number, end: number): Array<number>
export function range(a: number, b?: number): Array<number> {
    if (b === undefined) {
        return Array.from({ length: a }, (_, i) => i)
    } else {
        return Array.from({ length: b - a }, (_, i) => i + a)
    }
}
