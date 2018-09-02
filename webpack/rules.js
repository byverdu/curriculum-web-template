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
    use: [{
        loader: 'css-hot-loader',
      }, {
        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
      }, {
        loader: "sass-loader",
        options: {
          data: "$theme: 'dracula';"
        }
      }
    ],
  },
  {
    test: /\.svg/,
    use: {
      loader: 'svg-url-loader'
    }
  }
]