'use strict'

const { 
    validateEmail, 
    validateCPF,
    validateCNPJ, 
    validateTelephoneNumber,
    validateCEP 
} = require('../utils/validations/index')
const { userType } = require('../enums')

module.exports = (req, res, next) => {
    const { 
        email, 
        cpfCnpj,
        userAdress, 
        birthdayDate, 
        passsword, 
        telephoneNumber,
        userCEP,
        country, 
        companyName, 
        trandingName, 
        foudantionDate,
        companyAdress,
        totalEmployees,
        companyCEP
    } = req.body;

    if(!validateEmail(email)){
        return res.status(400).json({
            message: 'The provided email is wrong, please, check again this field'
        })
    }

    const isCpf = validateCPF(cpfCnpj)
    const isCnpj = validateCNPJ(cpfCnpj)

    if(!isCpf && !isCnpj){
        return res.status(400).json({
            message: 'The provided CPF/CNPJ is wrong, please, check againt this field'
        })
    }

    if(isCpf){
        req.userType = userType.COMPANY
    }

    if(isCnpj){
        req.userType = userType.PERSON  
    }

    const telephoneIsValid = validateTelephoneNumber(telephoneNumber)

    if(!telephoneIsValid){
        return res.status(400).json({
            message: 'The provided telephone Number is wrong, please, check againt this field'
        })
    }

    const companyCEPIsValid = validateCEP(companyCEP)
    if(companyCEP && !companyCEPIsValid) {
        return res.status(400).json({
            message: 'The provided company CEP is wrong, please, check againt this field'
        })
    }

    const userCEPIsValid = validateCEP(userCEP)
    if(!userCEPIsValid) {
        return res.status(400).json({
            message: 'The provided user CEP is wrong, please, check againt this field'
        })
    }

    next()
}