# webpack-closure-compiler
Google Closure Compiler plugin for Webpack

<a href="https://travis-ci.org/roman01la/webpack-closure-compiler">
  <img src="https://img.shields.io/travis/roman01la/webpack-closure-compiler.svg?style=flat-square" />
</a>
<a href="https://www.npmjs.com/package/webpack-closure-compiler">
  <img src="https://img.shields.io/npm/v/webpack-closure-compiler.svg?style=flat-square" />
</a>

<img src="logo.png" width="140" alt="Webpack Closure Compiler Plugin"/>

## Table of Contents
- [Why use Closure Compiler instead of UglifyJS?](#why-use-closure-compiler-instead-of-uglifyjs)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Why use Closure Compiler instead of UglifyJS?
Closure Compiler is the most advanced JavaScript optimization tool. It generates smallest bundle and emits efficient JavaScript code by doing whole program analysis and optimization, removing closures and inlining function calls, as well as tree-shaking for AMD, CommonJS and ES2015 modules.

<a href="https://github.com/samccone/The-cost-of-transpiling-es2015-in-2016"><img src="stats.png"/></a>

## Installation

```bash
npm i -D webpack-closure-compiler
```

## Usage

### Options

#### compiler: &lt;Object&gt;

A hash of options to pass to
[google-closure-compiler](https://github.com/chadkillingsworth/closure-compiler-npm#specifying-options).

#### jsCompiler: &lt;Boolean&gt;

Use pure JavaScript version of Closure Compiler (no Java dependency). Note that compilation time will be around 2x slower. Default is `false`. *`concurrency` and `jsCompiler` options are mutually exclusive.*

#### concurrency: &lt;Number&gt;

The maximum number of compiler instances to run in parallel, defaults to `1`.  *`concurrency` and `jsCompiler` options are mutually exclusive.*

#### test: &lt;RegExp&gt;

Process only files which filename satisfies specified RegExp, defaults to `/\.js($|\?)/i`.

### Example

```js
import path from 'path';
import ClosureCompilerPlugin from 'webpack-closure-compiler';

module.exports = {
    entry: [
        path.join(__dirname, 'app.js')
    ],
    module: {
        loaders: [{
            test: /\.js$/, exclude: /node_modules/,
            loaders: ['babel-loader?optional=runtime&stage=0&cacheDirectory']
        }]
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

## Contributing

If you've spotted a bug, please, open an issue, and after discussion submit a pull request with a bug fix. If you would like to add a feature or change existing behaviour, open an issue and tell about what exactly you want to change/add.

## License

MIT
