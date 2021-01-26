'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
    return res.status(200).send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running in localhost:${PORT}`)
})