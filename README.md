# webpack-closure-compiler
Google Closure Compiler plugin for Webpack

<a href="https://travis-ci.org/roman01la/webpack-closure-compiler">
  <img src="https://img.shields.io/travis/roman01la/webpack-closure-compiler.svg?style=flat-square" />
</a>
<a href="https://www.npmjs.com/package/webpack-closure-compiler">
  <img src="https://img.shields.io/npm/v/webpack-closure-compiler.svg?style=flat-square" />
</a>

![Webpack Closure Compiler logo](logo.png)

## Installation

```
npm i -D webpack-closure-compiler
```

## Usage

### Options

#### compiler

A hash of options to pass to
[google-closure-compiler](https://github.com/chadkillingsworth/closure-compiler-npm#specifying-options).

#### concurrency

The maximum number of compiler instances to run in parallel, defaults to `1`.

#### test

Process only files which filename satisfies specified RegExp, defaults to `/\.js($|\?)/i`.

### Example

```javascript
var path = require('path');
var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {

    entry: [
        path.join(__dirname, 'app.js')
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader?optional=runtime&stage=0&cacheDirectory'] }
        ]
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'app.min.js'
    },
    plugins: [
        new ClosureCompilerPlugin({
          compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'ADVANCED'
          },
          concurrency: 3,
        })
    ]
};
```

## License

MIT
