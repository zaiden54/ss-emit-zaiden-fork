const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000 || process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/content', require('./routes/content.routes'))
app.use('/api/auth', require('./routes/auth.routes'))

app.get('/', (req, res) => {
    res.send('я в бэке')
})

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://snickersnasian:Moscow2021@cluster0.vtwol.mongodb.net/ss-emit?retryWrites=true&w=majority")
        console.log('Successful DB connection')

        app.listen(PORT, () => {console.log(`App started on port ${PORT}`)})
    } catch (err) {
        console.log(`Server error ${err.message}`)
        process.exit(1)
    }
}

start()

