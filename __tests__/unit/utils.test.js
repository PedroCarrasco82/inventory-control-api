'use strict'

const { 
    validateEmail, 
    validateCPF,
    validateCNPJ, 
    validateTelephoneNumber,
    validateCEP,
    validateBirthdayDate
} = require('../../src/utils/validations')

describe('Utils', () => {
    it('Ensure emailValidation function will return false when provided email is wrong', () => {
        expect(validateEmail('pedrinho123456.com')).toBe(false)
    })

    it('Ensure emailValidation function will return true when provided email is correct', () => {
        expect(validateEmail('pedrinho123456@gatinhos.com')).toBe(true)
    })

    it('Ensure cpfValidation function will return false when provided cpf is wrong', () => {
        expect(validateCPF('743916540')).toBe(false)
    })

    it('Ensure cpfValidation function will return true when provided cpf is correct', () => {
        expect(validateCPF('45360285877')).toBe(true)
    })

    it('Ensure cnpjValidation function will return false when provided cnpj is wrong', () => {
        expect(validateCNPJ('67.548.121/0003-43')).toBe(false)
    })

    it('Ensure cnpjValidation function will return true when provided cnpj is correct', () => {
        expect(validateCNPJ('67.548.121/0001-43')).toBe(true)
    })

    it('Ensure CEPValidation function will return false when provided CEP is wrong', () => {
        expect(validateCEP('2743694553456345')).toBe(false)
    })

    it('Ensure CEPValidation function will return true when provided CEP is correct', () => {
        expect(validateCEP('79084-081')).toBe(true)
    })

    it('Ensure validateBirthdayDate function will return false when provided birthday date is wrong', () => {
        expect(validateBirthdayDate('20010-30321-12321')).toBe(false)
    })
    
    it('Ensure validateBirthdayDate function will return true when provided birthday date is correct', () => {
        expect(validateBirthdayDate('2001-01-12')).toBe(true)
    })
})