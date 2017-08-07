require('http').createServer((req, res) => {
  console.log(req.url)

  if (req.url === '/metrics') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`test 1
http_requests{method="get"} ${Math.random() * 100}
http_requests{method="post"} ${Math.random() * 100}
failures ${Math.random() * 100}
`)
    return
  }

  res.end('hello')
}).listen(process.env.HTTP_PORT || 8080)
