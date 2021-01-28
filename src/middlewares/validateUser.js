const {emailValidation} = require('../utils/index')

module.exports = (req, res, next) => {
    const { email } = req.body;

    if(!emailValidation(email)){
        return res.status(400).json({
            message: 'The provided email is wrong, please, check again this field'
        })
    }

    next()
}