module.exports = (birthdayDate) => {
    const cepRegex = /^\d{4}-\d{2}-\d{2}$/

    if(!cepRegex.test(birthdayDate)) {
        return false
    }

    const currentDate = new Date()

    const birthdayDateNormalized = new Date(birthdayDate)
    const yearDiff = (currentDate.getTime() - birthdayDateNormalized.getTime()) / 86400000

    if(yearDiff < 6570){
        return false
    }

    return true
}