var net = require('net')

var server = net.createServer(function (socket) {
  var date = new Date()
  var formattedDate =
  // "2013-07-06 17:42"
    date.getFullYear().toString() + "-" +
    zFill(date.getMonth() + 1, 2) + "-" +
    zFill(date.getDate(), 2) + " " +
    zFill(date.getHours(), 2) + ":" +
    zFill(date.getMinutes(), 2)
  socket.end(formattedDate + "\n")
})

function zFill(string, padding) {
  if (string.toString().length >= padding) {
    return string.toString()
  } else {
    return zFill('0'+string, padding)
  }
}
server.listen(process.argv[2])


// Official Solution:
// var net = require('net')
//
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
