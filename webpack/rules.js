const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      MiniCssExtractPlugin.loader,
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