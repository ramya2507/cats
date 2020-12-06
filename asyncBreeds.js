const fs = require('fs');

const breedDetailsFromFile = function(breed,callbackFucntion) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callbackFucntion(data);
    else callbackFucntion(undefined);
   });
};

module.exports = breedDetailsFromFile;
