

const { text } = require('body-parser')
const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: String,
    genre: String,
    link: String,
    continent: String,
    year: String,
     
})



const Videos = mongoose.model('Videos', videoSchema)
module.exports = Videos