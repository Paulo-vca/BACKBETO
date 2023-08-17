// extensão do chrome JSON FORMATTER

const http = require('http')


const products = [
  {
    id: 1,
    name: 'Product 1'    
  },
  {
    id: 2,
    name: 'Product 2'
  },
  {
    id: 3,
    name: 'Product 3'
  }
]


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})

  

  // REQ GET
  if(req.url === '/products'){
    res.end(
      JSON.stringify({
        data: products
      })
    )
  }
  if(req.url === '/users'){
    res.end(
      JSON.stringify({
        data: "Users loaded!"
      })
    )
  }

  // res.end(JSON.stringify({
  //   data: 'Meu primeiro backend Node'
  // }))

})

server.listen(8000, () => {
  console.log('Server is running on port 8000')
})
































// const http = require('http')

// const products = [
//     {
//         id: 1,
//         name: 'Product 1'
//     },
//     {
//         id: 2,
//         name: 'Product 2'
//     },
//     {
//         id: 3,
//         name: 'Product 3'
//     }

// ]

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' })

//     // REQ GET
//     if (req.url === '/products') {
//         res.end(
//             JSON.stringify({
//                 data: products
//             })
//         )
//     }

//     // res.end(JSON.stringify({
//     //     data: 'Meu primeiro backend Node'
//     // }))
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000')
// })