const request = require('request');

// get breed name from command line argument
// format for API by cutting off everything but first 4 letters
const breed = process.argv[2];
// send request to api for information on cat breed
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  // if request fails
  if (error) {
    console.log(error);
    return;
  }

  // parse JSON
  const data = JSON.parse(body);
  console.log(data);
  // if breed not found
  if (data.length === 0) {
    console.log(`requested breed not found`);
    return;
  }

  // print breed information to console.
  console.log(data[0].breeds);
});