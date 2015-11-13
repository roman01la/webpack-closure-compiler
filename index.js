var path = require('path');
var fs = require('fs');
var gcc = require('./lib/runner');
var RawSource = require('webpack-core/lib/RawSource');
var SourceMapConsumer = require('webpack-core/lib/source-map').SourceMapConsumer;
var SourceMapSource = require('webpack-core/lib/SourceMapSource');
var temp = require('temp').track();
var async = require('async');
var ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');

function ClosureCompilerPlugin(options) {
  this.options = options;
}

ClosureCompilerPlugin.prototype.apply = function(compiler) {

  var options = this.options;
  var queue = async.queue(function(task, callback) {

    var input;
    var inputSourceMap;
    var outputSourceMapFile;

    if (options['compiler']['create_source_map'] !== false) {
      if (task.asset.sourceAndMap) {
        var sourceAndMap = task.asset.sourceAndMap();
        inputSourceMap = sourceAndMap.map;
        input = sourceAndMap.source;
      } else {
        inputSourceMap = task.asset.map();
        input = task.asset.source();
      }
      outputSourceMapFile = temp.openSync('ccwp-dump-', 'w+');
      options['compiler']['create_source_map'] = outputSourceMapFile.path;
    } else {
      input = task.asset.source();
    }

    gcc.compile(input, options['compiler'], function (err, stdout, stderr) {
      if (err) {
        task.error(new Error(task.file + ' from Closure Compiler\n' + err.message));
      } else {
        if (options['compiler']['create_source_map']) {
          var outputSourceMap = JSON.parse(fs.readFileSync(outputSourceMapFile.path));
          fs.unlinkSync(outputSourceMapFile.path);
          outputSourceMap.sources = [];
          outputSourceMap.sources.push(task.file);
          task.callback(new SourceMapSource(
            stdout, task.file, outputSourceMap, input, inputSourceMap));
        } else {
          task.callback(new RawSource(stdout));
        }
      }
      callback();
    });

  }, options['concurrency']);

  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('normal-module-loader', function(context) {
      context.minimize = true;
    });

    compilation.plugin('optimize-chunk-assets', function(chunks, callback) {
      var pending = 0;
      var matching = 0;
      chunks.forEach(function(chunk) {
        chunk.files.forEach(function(file) {
          if (ModuleFilenameHelpers.matchObject(options, file)) {
            matching ++;
            pending ++;
            function done() {
              if (-- pending === 0) {
                callback();
              }
            }
            queue.push({
              file: file,
              asset: compilation.assets[file],
              callback: function(asset) {
                compilation.assets[file] = asset;
                done();
              },
              error: function(err) {
                console.error("Caught error: ", err);
                compilation.errors.push(err);
                done();
              },
            });
          }
        });
      });
      if (matching === 0) {
        callback();
      }
    });
  });
};

module.exports = ClosureCompilerPlugin;
