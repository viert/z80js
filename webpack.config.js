const path = require('path')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/z80.js.tmpl',
  output: {
    filename: 'index.js',
    path: __dirname,
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
