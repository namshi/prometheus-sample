require('http').createServer((req, res) => {
  console.log(req.url)
  
  if (req.url === '/metrics') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`test 1
http_requests{method="get"} 100
http_requests{method="post"} 50
failures 20
`)
    return
  }

  res.end('hello')
}).listen(8080)
