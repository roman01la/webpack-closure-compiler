# webpack-closure-compiler
Google Closure Compiler plugin for Webpack

**WIP**

## Installation

```
npm i -D webpack-closure-compiler
```

## Usage

### Options

- `language_in` — specifies input language, possible values are: `ECMASCRIPT3` (default), `ECMASCRIPT5`, `ECMASCRIPT5_STRICT`, `ECMASCRIPT6`, `ECMASCRIPT6_STRICT`, `ECMASCRIPT6_TYPED` (experimental).
- `language_out` — specifies output language, possible values are (defaults to the value of `language_in`): `ECMASCRIPT3`, `ECMASCRIPT5`, `ECMASCRIPT5_STRICT`, `ECMASCRIPT6_TYPED` (experimental).
- `compilation_level` — specifies the compilation level, possible values are: `WHITESPACE_ONLY`, `SIMPLE`, `ADVANCED`.

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
