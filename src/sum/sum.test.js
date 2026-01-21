import { sum } from "./sum.js"

describe('sum', () => {
    it('additionne deux nombres entier positif', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('additionne deux nombre entier négatifs', () => {
        expect(sum(-1, -2)).toBe(-3)
    })
})