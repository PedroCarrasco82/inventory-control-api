'use strict'

const express = require('express')
const app = express()
const routers = require('./routers')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routers)

module.exports = app;