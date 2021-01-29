module.exports = {
    emailValidation(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return emailRegex.test(email)
    },

    cpfValidation(strCpf) {
        const splitedCpf = strCpf
            .toString()
            .replace(/([^\d])+/gim,'')
            .split('');

        if(splitedCpf.length < 11 || splitedCpf.length > 11){
            return false
        }


        let sumOfNineFirstDigits = 0
        let multiplierForNineFirstDigits = 10
        for(let i = 0; i<=8; i++){
            sumOfNineFirstDigits += parseInt(splitedCpf[i]) * multiplierForNineFirstDigits
            multiplierForNineFirstDigits--
        }

        const IsValidFirstDigit = (sumOfNineFirstDigits * 10) % 11 === parseInt(splitedCpf[9]) ? true : false

        if(!IsValidFirstDigit){
            return false
        }

        let sumOfTenFirstDigits = 0
        let multiplierForTenFirstDigits = 11
        for(let i = 0; i<=9; i++){
            sumOfTenFirstDigits += parseInt(splitedCpf[i]) * multiplierForTenFirstDigits
            multiplierForTenFirstDigits--
        }

        const IsValidSecondDigit = (sumOfTenFirstDigits * 10) % 11 === parseInt(splitedCpf[10]) ? true : false

        if(!IsValidSecondDigit){
            return false
        }

        return true
    }
}