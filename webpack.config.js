const path = require('path')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/z80.js.tmpl',
  output: {
    filename: 'z80bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Z80',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
