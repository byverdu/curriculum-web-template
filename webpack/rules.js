const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import {
  prismTheme, rootCssClass
} from '../src/config'

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
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: "sass-loader",
      },
      { loader: "@epegzz/sass-vars-loader", options: {
        syntax: 'scss',
        vars: {
          prismTheme: `${prismTheme}`,
          rootCssClass: `${rootCssClass}`
        }
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
    use: 'base64-inline-loader'
}
]