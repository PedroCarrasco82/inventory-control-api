'use strict'

const {
    emailValidation, 
    cpfValidation, 
    cnpjValidation,
    CEPValidation
} = require('../../src/utils/index')

describe('Utils', () => {
    it('Ensure emailValidation function will return false when provided email is wrong', () => {
        expect(emailValidation('pedrinho123456.com')).toBe(false)
    })

    it('Ensure emailValidation function will return true when provided email is correct', () => {
        expect(emailValidation('pedrinho123456@gatinhos.com')).toBe(true)
    })

    it('Ensure cpfValidation function will return false when provided cpf is wrong', () => {
        expect(cpfValidation('743916540')).toBe(false)
    })

    it('Ensure cpfValidation function will return true when provided cpf is correct', () => {
        expect(cpfValidation('45360285877')).toBe(true)
    })

    it('Ensure cnpjValidation function will return false when provided cnpj is wrong', () => {
        expect(cnpjValidation('67.548.121/0003-43')).toBe(false)
    })

    it('Ensure cnpjValidation function will return true when provided cnpj is correct', () => {
        expect(cnpjValidation('67.548.121/0001-43')).toBe(true)
    })

    it('Ensure CEPValidation function will return false when provided CEP is wrong', () => {
        expect(CEPValidation('2743694553456345')).toBe(true)
    })

    it('Ensure CEPValidation function will return true when provided CEP is correct', () => {
        expect(CEPValidation('79084-081')).toBe(true)
    })
})