const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const packDirName = 'packs';
const packsDir = path.resolve(__dirname, `public/${packDirName}`);

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: packsDir
  },
  plugins: [
    new CleanWebpackPlugin([packsDir]),
    new ManifestPlugin({
      fileName: path.resolve(packsDir, 'manifest.json'),
      publicPath: `/${packDirName}/`
    })
  ]
};
