const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {
    let clothingData = getClothingData((err, data) => {
        if(err) {
          console.log(err);
        }
        else {
          console.log('Returning data');
          res.send(data);
        }
    })

     // getClothingData()
    //   .then(data => {
    //     console.log('Returning clothing data to browser.');
    //     res.send(data);
    //   })
    //   .catch(error => res.status(500).send(error))
    //   .finally(() => console.log('All done processing promise.'));
   
    console.log('Doing more work');
  });

  function getClothingData(callback) {
    fs.readFile(datafile, (err, data) => {
      if(err) {
        callback(err, null);
      }
      else {
        let clothingData = JSON.parse(data);
        return callback(null, clothingData);
      }
    })

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
