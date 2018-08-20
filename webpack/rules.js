const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  },
  {
    test: /\.scss|.css$/,
    use: [
      'css-hot-loader',
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.svg/,
    use: {
      loader: 'svg-url-loader'
    }
  }
]