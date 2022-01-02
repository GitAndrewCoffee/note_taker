const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const { response } = require('express');



router.get('/notes', (req, res) => {
  
  res.json(notes);

});


router.post('/notes', (req, res) => {

  const pushMe = req.body;
  pushMe.id = notes.length + 1;
  notes.push(pushMe);
  saveNotes();
  res
    .status(200)
    .json({
      status: 'OK',
    }); 

});

function saveNotes() {

  fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
    if (err) {
      console.log("error saving file in /notes POST api");
      throw(err);      
    }
  });

}


module.exports = router;
