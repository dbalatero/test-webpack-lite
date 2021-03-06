const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const railsEnv = process.env.RAILS_ENV || 'development';

const packDirName = `packs/${railsEnv}`;
const packsDir = path.resolve(__dirname, `public/${packDirName}`);

module.exports = {
  entry: {
    "index": "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
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
