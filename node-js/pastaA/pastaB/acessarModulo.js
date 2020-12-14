// const modulaA = require('../../moduloA')
// console.log(modulaA.bemVindo);

const http = require('http')
http.createServer((req, res) => {
  res.write('Hello world')
  res.end()
}).listen(8080)