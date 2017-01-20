var mymodule = require("./06_modules_function")
var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function(err, list) {
  if(err){
    return console.error("Error: ", err)
  }

  list.forEach(function(file){
    console.log(file)
  })
})
