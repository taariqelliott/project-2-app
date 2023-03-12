// DEPENDENCIES

const express = require('express');
const app = express();
const methodOverride = require('method-override');
require('dotenv').config();
const VideoController = require('./controllers/video.js');
const mongoose = require('mongoose');
const Videos = require('./models/videotest.js');

// DATABASE CONNECTION
// Connect to Mongo

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongo error/success
const db = mongoose.connection;
db.on('error', (err) => console.log(`${err.message} MongoDB Not Running!`));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // req.body
app.use(express.json());
app.use(express.static('public'));
// this will allow us to make DELETE and PUT requests
app.use(methodOverride('_method'));
app.use('/thedig', VideoController);

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is WORKING ON PORT:', PORT);
});
