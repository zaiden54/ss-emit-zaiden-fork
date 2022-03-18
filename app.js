const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const path = require('path')
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/content', require('./routes/content.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', require('./routes/user.routes'))


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Successful DB connection')

        
        app.use(express.static(path.resolve(process.cwd(), 'build')))
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(process.cwd(), 'build/index.html'))
        })
       

        // app.use(express.static(__dirname + "/build"))

        // app.get("*", (req, res) => {
        //     res.sendFile(__dirname + "/build/index.html")
        // })

        app.listen(PORT, () => {console.log(`App started on port ${PORT}`)})
    } catch (err) {
        console.log(`Server error ${err.message}`)
        process.exit(1)
    }
}

start()

