const calculation = require('../src/calculation')
// describe('CLIENT: Function that takes in any parameter and returns 0', () => {
//     it("Should return 0 given any parameter", () => {
//         expect(calculation(" ")).toEqual("0")
//     })
// })

describe('CLIENT: Argument is 0-20 characters in length, is any ASCII character', () => {
    test.each([
            ['ÁÉÍÓÚÝĆǴḰĹḾŃṔŔŚẂŹÁÉÍÓÚÝĆǴḰĹḾŃṔŔŚẂŹÁÉÍÓÚÝĆǴḰĹḾŃṔŔŚẂŹ'],
            ['ÁÉÍÓÚÝĆǴḰĹḾŃ'],
            ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
        ])('Should throw an error if criteria is not met', (input) => {
            const callback = () => calculation(input)
            expect(callback).toThrow(new Error("Invalid input"));
    })
})

describe("CLIENT: Calculation takes in any number and returns the same number.", () => {
    test.each([ ["1", "1"], ["10", "10"], ["-3", "-3"], ["2", "2"] ])("Should return %s when input is %s", (input, expected) => {
        expect(calculation(input)).toEqual(expected)
    })
})

describe("CLIENT: Throw error if input contains non-numeric characters", () => {
    test.each([ ["Hello"], ["World!"], ["Hello?"], ["A1C2E"] ])("Should throw error", (input) => {
        const callback = () => calculation(input)
        expect(callback).toThrow(new Error("Invalid input"))
    })
})

// ? CLIENT QUESTION: Can we combine the tests for addition, subtraction, multiplication, and division into one test for simplification?
describe("CLIENT: return the sum of two numbers", () => {
    test.each([ ["2 + 2", "4"], ["5 + 6", "11"], ["-9 + 10", "1"], ["-2 + -2", "-4"]])("%s should equal %s", (equation , sum) => {
        expect(calculation(equation)).toEqual(sum)
    })
})

describe("CLIENT: return the difference between two numbers", () => {
    test.each([ ["2 - 2", "0"], ["-10 - -9", "-1"], ["10 - 12", "-2"], ["16 - 8", "8"] ])("%s should equal %s", (equation , difference) => {
        expect(calculation(equation)).toEqual(difference)
    })
})

describe("CLIENT: return the product between two numbers", () => {
    test.each([ ["6 * 10", "60"], ["0 * 100000", "0"], ["-3 * -3", "9"], ["9 * -2", "-18"] ])("%s should equal %s", (equation , product) => {
        expect(calculation(equation)).toEqual(product)
    })
})

/* 
? CLIENT QUESTION: 
? How should we handle improper or proper fractions? Should we return 
? the original fraction, or return a decimal number? If we do want to 
? return a decimal number, how many decimal places should we round it to? 
*/
describe("CLIENT: return the quotient between two numbers", () => {
    test.each([ ["6 / 2", "3"], ["1 / 0", "Infinity"] ])("%s should equal %s", (equation , quotient) => {
        expect(calculation(equation)).toEqual(quotient)
    })
})

// eval(input.replace(/[^0-9\(\)\+\-\*\/\.]/g, ""));