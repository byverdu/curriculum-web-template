import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import GoogleFontsPlugin from '@beyonk/google-fonts-webpack-plugin';
import {
  headContent as headTag,
  globalText
} from '../src/config'

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
  }),
  new GoogleFontsPlugin({
    path: '../src/sass/fonts/',
    filename: '../src/sass/fonts.scss',
    fonts: [
        { family: "BioRhyme Expanded" },
        { family: "Roboto" }
    ]
  }),
];
const prodPlugins = [
  new HtmlWebpackInlineSourcePlugin(),
];

const plugins = devMode ?
  devPlugins :
  prodPlugins;


module.exports = [
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new MiniCssExtractPlugin({
    filename: '[name].css' ,
    chunkFilename: '[id].css',
  }),
  new HtmlWebpackPlugin({ 
    template: 'src/toCopy/index.html',
    favicon: 'src/toCopy/favicon.png',
    description: headTag.description,
    author: headTag.author,
    keywords: headTag.keywords,
    textBtn: globalText.textBtn.asHtml,
    inlineSource: '.(css|js)$',
    inject: 'head',
    minify: true,
  }),
  ...plugins
];
