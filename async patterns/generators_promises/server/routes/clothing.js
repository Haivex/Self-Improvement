const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {
    // let clothingData = getClothingData((err, data) => {
    //     if(err) {
    //       console.log(err);
    //     }
    //     else {
    //       console.log('Returning data');
    //       res.send(data);
    //     }
    // })

     getClothingData()
      .then(data => {
        console.log('Returning clothing data to browser.');
        res.send(data);
      })
      .catch(error => res.status(500).send(error))
      .finally(() => console.log('All done processing promise.'));
   
    console.log('Doing more work');
  });

  function getClothingData(callback) {
   let clothingPromise = fsPromises.readFile(datafile, 'utf-8').then(data => JSON.parse(data));
  console.log(clothingPromise);
   return clothingPromise;
  
   // return new Promise((resolve, reject) => {
  //   fs.readFile(datafile, 'utf8', (err, data) => {
  //     if (err) {
  //       reject(err);
  //     }
  //     else {
  //       let clothingData = JSON.parse(data);
  //       resolve(clothingData);
  //     }
  //   });
  // });
  }

module.exports = router;
