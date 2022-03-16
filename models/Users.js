const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: {type: String},
    login: {type: String},
    password: {type: String}
})


module.exports = model('Users', schema)