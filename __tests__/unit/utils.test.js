const {emailValidation, cpfValidation} = require('../../src/utils/index')

describe('Utils', () => {
    it('Ensure emailValidation function will return false when provided email is wrong', () => {
        expect(emailValidation('pedrinho123456.com')).toBe(false)
    })

    it('Ensure emailValidation function will return true when provided email is correct', () => {
        expect(emailValidation('pedrinho123456@gatinhos.com')).toBe(true)
    })

    it('Ensure cpfCnpjValidation function will return false when provided cpf is wrong', () => {
        expect(cpfValidation('743916540')).toBe(false)
    })

    it('Ensure cpfCnpjValidation function will return true when provided cpf is correct', () => {
        expect(cpfValidation('45360285877')).toBe(true)
    })
})