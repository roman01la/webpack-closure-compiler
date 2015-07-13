# webpack-closure-compiler
Google Closure Compiler plugin for Webpack

**WIP**

## Installation

```
npm i -D webpack-closure-compiler
```

## Usage

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
