var fs = require('fs')

var string = fs.readFileSync(process.argv[2]).toString()

console.log(string.split("\n").length - 1)
