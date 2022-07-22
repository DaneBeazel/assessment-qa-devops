const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('tests if shuffle array is a function', () => {

        expect(typeof shuffleArray).toBe('function')
    }),

    test('checks if function returns array', () => {
        let result = shuffleArray.data
        expect(typeof result).toBe('array')
    })
})