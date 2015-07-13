# webpack-closure-compiler
Google Closure Compiler plugin for Webpack

**WIP**

## Installation

```
npm i -D webpack-closure-compiler
```

## Usage

Compiles ES5 into ES5 in `ADVANCED_OPTIMIZATIONS` mode.

[What to Watch Out for When Using ADVANCED_OPTIMIZATIONS](https://developers.google.com/closure/compiler/docs/api-tutorial3#dangers)

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
        new ClosureCompilerPlugin()
    ]
};
```
