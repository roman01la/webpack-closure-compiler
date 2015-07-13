var path = require('path');
var gcc = require('./lib/runner');
var RawSource = require('webpack-core/lib/RawSource');

function ClosureCompilerPlugin(options) {

  if (typeof options !== 'object') {
    options = {};
  }

  options['language_in'] = 'ES5';
  options['language_out'] = 'ES5';
  options['compilation_level'] = 'ADVANCED';

  this.options = options;
}

ClosureCompilerPlugin.prototype.apply = function(compiler) {

  var options = this.options;

  compiler.plugin('compilation', function(compilation) {

    compilation.plugin('optimize-chunk-assets', function(chunks, callback) {

      var files = [];

      chunks.forEach(function(chunk) {

        chunk.files.forEach(function(file) { files.push(file); });
      });

      files.forEach(function(file) {

        gcc.compile(compilation.assets[file].source(), options, function (err, stdout, stderr) {

          if (err) {
            compilation.errors.push(new Error(file + ' from Closure Compiler\n' + err.message));
          } else {
            compilation.assets[file] = new RawSource(stdout);
          }

          callback();
        });
      });
    });
  });
};

module.exports = ClosureCompilerPlugin;
