import fs from 'fs';

fs.mkdir('./memes', function (err) {
  if (err) {
    console.log('Directory already exists.');
  } else {
    console.log('New directory successfully created.');
  }
});
