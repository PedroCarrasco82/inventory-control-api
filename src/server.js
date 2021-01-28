'use strict'
const app = require('./app')

const PORT = process.env.PORT || 3333

app.get('/', (req,res) => {
    return res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running in localhost:${PORT}`)
})