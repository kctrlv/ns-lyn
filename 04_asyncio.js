var fs = require('fs')

var str = fs.readFile(process.argv[2], 'utf8', countLines)

function countLines(err, data) {
  if(!err){
    console.log(data.split("\n").length - 1)
  }
}
