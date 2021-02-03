module.exports = (telephoneNumber) => {
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

    const BrazilDDDsData = require('../../data/BrazilDDDsData.json')

    if(!BrazilDDDsData.estadoPorDdd[ddd]){
        return false
    }
    
    return true
}