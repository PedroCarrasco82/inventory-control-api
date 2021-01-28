'use strict'

const router = require('express').Router()
const {validateUser} = require('../middlewares')

router.post('/signup', [validateUser])

module.exports = router