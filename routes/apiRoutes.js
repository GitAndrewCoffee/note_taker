const router = require('express').Router();
const notes = require('../db/db.json');


router.get('/notes', (req, res) => {
  console.log("/notes GET api Called");
  console.log("DB has:")
  const logMe = JSON.stringify(notes);
  console.log(logMe);
  res.json(notes);  
});


// router.post('/notes', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });

module.exports = router;
