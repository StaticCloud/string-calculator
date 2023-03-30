const calculation = require('../src/calculation')
// describe('CLIENT: Function that takes in any parameter and returns 0', () => {
//     it("Should return 0 given any parameter", () => {
//         expect(calculation(" ")).toEqual("0")
//     })
// })

const client_cases = [
    ['ÁÉÍÓÚÝĆǴḰĹḾŃṔŔŚẂŹÁÉÍÓÚÝĆǴḰĹḾŃṔŔŚẂŹÁÉÍÓÚÝĆǴḰĹḾŃṔŔŚẂŹ'],
    ['ÁÉÍÓÚÝĆǴḰĹḾŃ'],
    ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
]

describe('CLIENT: Argument is 0-20 characters in length, is any ASCII character', () => {
    test.each(client_cases)('Should throw an error if criteria is not met', (input) => {
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

describe("CLIENT: return the sum of two numbers", () => {
    test.each([ ["2 + 2", "4"], ["5 + 6", "11"], ["-9 + 10", "1"], ["-2 + -2", "-4"]])("%s should equal %s", (equation , sum) => {
        expect(calculation(equation)).toEqual(sum)
    })
})

// eval(input.replace(/[^0-9\(\)\+\-\*\/\.]/g, ""));