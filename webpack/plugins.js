const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const pathsToClean = [
  '../dist',
];
const cleanOptions = {
  verbose: true,
  allowExternal: true,
  beforeEmit: true
};

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new WriteFilePlugin({
    test: /^(?!.*(hot)).*/,
  })
];
const prodPlugins = [];

const plugins = process.env.NODE_ENV === 'development' ?
  devPlugins :
  prodPlugins;


module.exports = [
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  }),
  new GoogleFontsPlugin({
    fonts: [
      { family: "BioRhyme Expanded" },
      { family: "Roboto" }
    ]
  }),
  new CopyWebpackPlugin([
    'src/toCopy'
  ]),
  ...plugins
];
