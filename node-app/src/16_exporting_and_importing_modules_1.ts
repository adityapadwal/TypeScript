// Constant exports
export function add(x: number, y: number): number {
    return x + y;
}
export function subtract(x: number, y: number): number {
    return x - y;
}

// Default exports
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}