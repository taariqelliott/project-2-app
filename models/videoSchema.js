

const { text } = require('body-parser')
const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    songName: {type: String, required: true},
    artist: String,
    genre: String,
    link: String,
    country: String,
    continent: String,
    year: Number,
     
})



const Videos = mongoose.model('Videos', videoSchema)
module.exports = Videos