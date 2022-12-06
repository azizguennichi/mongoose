const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'please type your name !!' ]
    },
    age: Number,
    favoriteFoods: [String]
})

module.exports = mongoose.model('Person', PersonSchema)