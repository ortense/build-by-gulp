var recursive = require('recursive-readdir');

// ignore files named 'foo.cs' or files that end in '.html'.
recursive('./', ['node_modules','.*'], function (err, files) {
  // Files is an array of filename
  files.forEach(function(file, index){
  	console.log(file);
  });
});