'use strict'

const { 
    validateEmail, 
    validateCPF,
    validateCNPJ, 
    validateTelephoneNumber,
    validateCEP,
    validateBirthdayDate
} = require('../utils/validations/index')
const { userType } = require('../enums')

module.exports = (req, res, next) => {
    const { 
        email, 
        cpfCnpj,
        userAdress, 
        birthdayDate, 
        password, 
        telephoneNumber,
        userCEP,
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
            message: 'The provided CPF/CNPJ is wrong, please, check again this field'
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
            message: 'The provided telephone Number is wrong, please, check again this field'
        })
    }

    const companyCEPIsValid = validateCEP(companyCEP)
    if(companyCEP && !companyCEPIsValid) {
        return res.status(400).json({
            message: 'The provided company CEP is wrong, please, check again this field'
        })
    }

    const userCEPIsValid = validateCEP(userCEP)
    if(!userCEPIsValid) {
        return res.status(400).json({
            message: 'The provided user CEP is wrong, please, check again this field'
        })
    }

    if(!password){
        return res.status(400).json({
            message: "No password provided"
        })
    }

    if(password.length < 6){
        return res.status(400).json({
            message: "Invalid password. The password must be at least 6 characters"
        })
    }

    const userBirthdayDateIsValid = validateBirthdayDate(birthdayDate)
    if(!userBirthdayDateIsValid) {
        return res.status(400).json({
            message: "Invalid birthday date, please, check again this field"
        })
    }

    next()
}