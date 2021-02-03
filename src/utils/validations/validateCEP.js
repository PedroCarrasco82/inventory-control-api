'use strict'

module.exports = (cep) => {
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