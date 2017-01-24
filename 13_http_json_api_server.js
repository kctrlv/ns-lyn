var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var requestUrl = url.parse(req.url, true)
  var pathname = requestUrl.pathname
  var iso = requestUrl.query['iso']
  var date = new Date(iso)
  var time = {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })

  if(pathname == '/api/parsetime') {
    res.end(JSON.stringify(time))
  } else if (pathname == '/api/unixtime') {
    res.end(JSON.stringify({'unixtime': date.getTime()}))
  }
})

server.listen(process.argv[2])



// Official Solution:

// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
