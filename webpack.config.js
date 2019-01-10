const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const packsDir = path.resolve(__dirname, 'public/packs');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: packsDir
  },
  plugins: [
    new CleanWebpackPlugin([packsDir])
  ]
};
