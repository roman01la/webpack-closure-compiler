var path = require('path');
var ClosureCompilerPlugin = require('../index');

module.exports = [
  {

      entry: [
          path.join(__dirname, 'entry.js')
      ],
      output: {
          path: path.join(__dirname, '/'),
          filename: 'module.js'
      },
      module: {
        loaders: [{
          test: /\.css$/,
          loader: 'css'
        }]
      },
      plugins: [
          new ClosureCompilerPlugin({
              compiler: {
                  language_in: 'ECMASCRIPT5',
                  language_out: 'ECMASCRIPT5',
                  compilation_level: 'SIMPLE'
              },
          })
      ]
  },
  {

      entry: [
          path.join(__dirname, 'entry_es6.js')
      ],
      output: {
          path: path.join(__dirname, '/'),
          filename: 'module_es6.js'
      },
      plugins: [
          new ClosureCompilerPlugin({
              compiler: {
                  language_in: 'ECMASCRIPT6',
                  language_out: 'ECMASCRIPT5',
                  compilation_level: 'SIMPLE'
              },
          })
      ]
  }
];
