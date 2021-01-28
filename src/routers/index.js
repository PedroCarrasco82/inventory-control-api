'use strict'

const router = require('express').Router()
const {swaggerServe, swaggerSetup} = require('../config/swagger')

router.use('/api-docs', swaggerServe)
router.get('/api-docs', swaggerSetup)

module.exports = router
