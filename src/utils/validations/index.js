'use strict'

const validateCEP = require('./validateCEP')
const validateCNPJ = require('./validateCNPJ')
const validateCPF = require('./validateCPF')
const validateEmail = require('./validateEmail')
const validateTelephoneNumber = require('./validateTelephoneNumber')

module.exports = {
    validateCEP,
    validateCNPJ,
    validateCPF,
    validateEmail,
    validateTelephoneNumber
}