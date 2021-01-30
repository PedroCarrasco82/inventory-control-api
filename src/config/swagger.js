'use strict'

const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    definition: {
        info: {
            title: 'Inventory Control API documentation',
            version: '0.1.0',
            description: 'This is Inventory Control API where will handle store stock informations'
        },
        servers: [`${process.env.INVENTORY_CONTROL_API_URL_ADRESS}: ${process.env.PORT || 3333}`],
    },
    apis: ['../routers/*.js']
}

const swaggerSpecs = swaggerJsdoc(options)
const swaggerServe = swaggerUI.serve
const swaggerSetup = swaggerUI.setup(swaggerSpecs)

module.exports = { swaggerServe, swaggerSetup}
