const path = require('path');

const packsDir = path.resolve(__dirname, 'public/packs')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: packsDir
  }
};
