const devServer = {
  contentBase: './dist',
  compress: true,
  port: process.env.PORT || 8080,
  hot: true
}

module.exports = {
  devServer,
  devtool: 'inline-source-map',
  mode: 'development',
}