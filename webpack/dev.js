const devServer = {
  contentBase: './dist',
  compress: true,
  port: 8087,
  hot: true
}

module.exports = {
  devServer,
  devtool: 'inline-source-map',
  mode: 'development',
}