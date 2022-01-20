const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // send request to api for information on cat breed
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // if request fails
    if (error) {
      callback(error, null);
      return;
    }

    // parse JSON
    const data = JSON.parse(body);
    // if breed not found
    if (!data.length) {
      callback(null, 'Requested Breed not found');
      return;
    }

    // send breed information to callback
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };