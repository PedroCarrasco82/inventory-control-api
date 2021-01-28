const {emailValidation} = require('../../src/utils/index')

describe('Utils', () => {
    it('Ensure emailValidation function will return false when provided email is wrong', () => {
        expect(emailValidation('pedrinho123456.com')).toBe(false)
    })

    it('Ensure emailValidation function will return true when provided email is correct', () => {
        expect(emailValidation('pedrinho123456@gatinhos.com')).toBe(true)
    })
})