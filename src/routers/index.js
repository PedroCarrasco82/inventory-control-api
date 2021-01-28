'use strict'

const router = require('express').Router()
const {swaggerServe, swaggerSetup} = require('../config/swagger')
const users = require('./users')

router.use('/api-docs', swaggerServe)
router.get('/api-docs', swaggerSetup)

router.use('/users', users)

module.exports = router
