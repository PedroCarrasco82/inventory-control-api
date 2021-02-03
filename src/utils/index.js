'use strict'

const { default: axios } = require("axios")

module.exports = {
    emailValidation(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return emailRegex.test(email)
    },

    cpfValidation(strCpf) {

        if(/[A-Z a-z]/g.test(strCpf)){
            return false
        }

        const splitedCpf = strCpf
            .toString()
            .replace(/([^\d])+/gim,'')
            .split('');

        if(splitedCpf.length !== 11){
            return false
        }


        let sumOfNineFirstDigits = 0
        let multiplierForNineFirstDigits = 10
        for(let i = 0; i<=8; i++){
            sumOfNineFirstDigits += parseInt(splitedCpf[i]) * multiplierForNineFirstDigits
            multiplierForNineFirstDigits--
        }

        const IsValidFirstDigit = (sumOfNineFirstDigits * 10) % 11 === parseInt(splitedCpf[9])

        if(!IsValidFirstDigit){
            return false
        }

        let sumOfTenFirstDigits = 0
        let multiplierForTenFirstDigits = 11
        for(let i = 0; i<=9; i++){
            sumOfTenFirstDigits += parseInt(splitedCpf[i]) * multiplierForTenFirstDigits
            multiplierForTenFirstDigits--
        }

        const IsValidSecondDigit = (sumOfTenFirstDigits * 10) % 11 === parseInt(splitedCpf[10])

        if(!IsValidSecondDigit){
            return false
        }

        return true
    },

    cnpjValidation(strCnpj) {
        if(/[A-Z a-z]/g.test(strCnpj)){
            return false
        }

        const splitedCnpj = strCnpj
            .toString()
            .replace(/([^\d])+/gim,'')
            .split('');

        if(splitedCnpj.length !== 14){
            return false
        }


        let digitsSum = 0
        let multiplier = 2

        for(let i = 11; i>=0; i--){
            if(multiplier > 9)
            multiplier = 2

            digitsSum += parseInt(splitedCnpj[i]) * multiplier
            multiplier++
        }


        const sumOfTwelveFirstDigitsModule = 11 - (digitsSum % 11)

        let IsValidFirstDigit = 0

        if(sumOfTwelveFirstDigitsModule > 9){
            IsValidFirstDigit = (sumOfTwelveFirstDigitsModule % 10) === parseInt(splitedCnpj[12])
        }else {
            IsValidFirstDigit = sumOfTwelveFirstDigitsModule === parseInt(splitedCnpj[12])
        }
        
        if(!IsValidFirstDigit){
            return false
        }

        digitsSum = 0
        multiplier = 2
        for(let i = 12; i>=0; i--){
            if(multiplier > 9)
                multiplier = 2

                digitsSum += parseInt(splitedCnpj[i]) * multiplier
            multiplier++
        }

        let IsValidSecondDigit = false
        const sumOfThirteenFirstDigitsModule = 11 - (digitsSum % 11)

        if(digitsSum > 9){
            IsValidSecondDigit = (sumOfThirteenFirstDigitsModule % 10) === parseInt(splitedCnpj[13])
        }else {
            IsValidSecondDigit = sumOfThirteenFirstDigitsModule === parseInt(splitedCnpj[13])
        }
        
        if(!IsValidSecondDigit){
            return false
        }

        return true
    },

    telephoneNumberValidation(telephoneNumber){
        const telephoneNumberNormalized = telephoneNumber
        .toString()
        .replace(/([^\d])+/gim,'')
        .trim()
        .replace(' ','')
        .split('')

        if(telephoneNumberNormalized.length != 11) {
            return false
        }

        const ddd = telephoneNumberNormalized.slice(0, 2).join('')

        const BrazilDDDsData = require('../data/BrazilDDDsData.json')

        if(!BrazilDDDsData.estadoPorDdd[ddd]){
            return false
        }
        
        return true
    },

    CEPValidation(cep) {
        const cepNormalized = cep
        .toString()
        .replace(/([^\d])+/gim,'')
        .trim()
        .replace(' ','')
        .split('')

        if(cepNormalized.length !== 8){
            return false
        }
        
        const cepFormated = [cepNormalized.slice(0,5).join(''), '-', cepNormalized.slice(5, 8).join('')].join('')
        const cepRegex = /^\d{5}-\d{3}$/

        return cepRegex.test(cepFormated)
    }
}