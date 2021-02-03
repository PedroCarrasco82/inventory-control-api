module.exports = (strCpf) => {

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
}