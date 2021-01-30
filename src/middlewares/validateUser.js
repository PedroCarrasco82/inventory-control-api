'use strict'

const { emailValidation, cpfValidation } = require('../utils/index')
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
        companyName, 
        trandingName, 
        foudantionDate,
        companyAdress,
        totalEmployees,
        companyCEP
    } = req.body;

    if(!emailValidation(email)){
        return res.status(400).json({
            message: 'The provided email is wrong, please, check again this field'
        })
    }

    const isCpf = cpfValidation(cpfCnpj)
    const isCnpj = cnpjValidation(cpfCnpj)

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



    next()
}