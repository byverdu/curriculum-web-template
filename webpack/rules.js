const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prismTheme = require('../src/config').prismTheme;
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
          data: `$prismTheme: ${prismTheme};`
        }
      }
    ],
  },
  {
    test: /\.svg(\?.*)?$/,
    use: [
      {
        loader: 'svg-url-loader'
      },{
        loader: 'svg-transform-loader'
      }
    ]
  }
]