var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)
var finished = 0

var dataList = urls.reduce(function(list, url) {
  list[url] = ''
  return list
}, {})


function appendToDataList(url, data){
  finished++
  data = data.toString()
  dataList[url] = data
  if(finished == urls.length){
    urls.forEach(function(url){
      console.log(dataList[url])
    })
  }
}


urls.forEach(function(url) {
  http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
      if (err) {
        return console.error(err)
      }
      appendToDataList(url, data)
    }))
  })
})


// Official Solution:

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
