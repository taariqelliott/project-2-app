const express = require('express');

const router = express.Router();

const Video = require('../models/videoSchema.js');


// INDEX
router.get('/', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('homepage.ejs', {
      video: foundVideo,
    });
  });
});


// NEW
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// Africa
router.get('/africa', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('continents/africa.ejs', {
      video: foundVideo,
    });
  });
});


// Asia
router.get('/asia', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('continents/asia.ejs', {
      video: foundVideo,
    });
  });
});

// Australia
router.get('/australia', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('continents/australia.ejs', {
      video: foundVideo,
    });
  });
});

// Europe
router.get('/europe', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('continents/europe.ejs', {
      video: foundVideo,
    });
  });
});

// North America
router.get('/northamerica', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('continents/northamerica.ejs', {
      video: foundVideo,
    });
  });
});

// South America
router.get('/southamerica', (req, res) => {
  Video.find({}, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('continents/southamerica.ejs', {
      video: foundVideo,
    });
  });
});



// DELETE
router.delete('/:id', (req, res) => {
  Video.findByIdAndDelete(req.params.id, (err, deletedVideo) => {
    // findByIdAndDelete will delete a document with a given id
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      // redirect to the index page if the delete is successful
      console.log(deletedVideo);
      res.redirect('/thedig');
    }
  });
});


// UPDATE
router.put('/:id', (req, res) => {
  Video.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedVideo) => {
      // findByIdAndUpdate updates a video with a given id
      // the new option means we wait get the updated video returned
      // without this flag, we will get the video before it was modified
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(updatedVideo);
        // redirect to the index route
        res.redirect(`/thedig/${updatedVideo._id}`);
      }
    }
  );
});


// CREATE
router.post('/', (req, res) => {
  Video.create(req.body, (error, createdVideo) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.redirect('/thedig');
    }
  });
});


// EDIT
router.get('/:id/edit', (req, res) => {
  Video.findById(req.params.id, (err, foundVideo) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      // make the edit form show the existing data
      res.render('edit.ejs', {
        video: foundVideo,
      });
    }
  });
});


// SHOW
router.get('/:id', (req, res) => {
  Video.findById(req.params.id, (err, foundVideo) => {
    if (err) {
      console.log(err.message);
    }
    res.render('show.ejs', {
      video: foundVideo,
    });
  });
});







// Video.find((err, videos) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(videos);
//   }
// });





module.exports = router;
