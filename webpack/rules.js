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
  },
  {
    test: /\.(jpe?g|png|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
}
]