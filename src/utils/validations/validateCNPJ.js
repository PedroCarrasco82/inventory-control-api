module.exports = (strCnpj) => {
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
}