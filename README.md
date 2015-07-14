# Google Closure Compiler + React
*This is not Webpack plugin, check master branch instead*

**WIP**

## Requirements

Java 7/8 😅

## Usage

Execute `npm test` to run Java task. Check output `module-gcc.js` in `test` dir.

## Restrictions

Plovr tool have no option to set CommonJS flag when executing GCC, so this package doesn't support CommonJS modules. Need to be able to run GCC with custom warnings guard and custom pass provided in `lib/react-closure-compiler`, can be done programmatically.
