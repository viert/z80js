const path = require('path')

module.exports = {
  entry: './src/z80.js.tmpl',
  output: {
    filename: 'z80bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js\.tmpl/,
        use: [
          {
            loader: path.resolve('loaders/tmpl-loader.js')
          }
        ]
      }
    ]
  }
}
