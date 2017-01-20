var fs = require('fs')

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, logFilteredFiles)

function logFilteredFiles(err, list) {
  if(!err){
    filtered = list.filter(function(elem){return elem.includes('.' + ext)})
    filtered.forEach(function(f){console.log(f)});
  }
}
