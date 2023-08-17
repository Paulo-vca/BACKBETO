// config do express
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 3000;

// deconding / enconding
app.use(express.urlencoded({ extended: true }));

let products = [
  {
    id: 0,
    name: "Product 1",
  },
  {
    id: 1,
    name: "Product 2",
  },
  {
    id: 2,
    name: "Product 3",
  },
];
/**
 * Configuração de rotas
 * GET, PUT, DELETE, POST
 */
// requisição e resposta
app.get("/", (req, res) => {
  res.send("Meu Express está rodando...");
});

//products
app.get("/api", (req, res) => {
  // buscar em bd (respositorio)
  res.json(products);
});


app.get("/api/:id",(req, res) => { // recebe o param id
    res.send('ID = ' + req.params.id) //exibe o param id
})

app.get("/api/products/:id",(req, res) => {
    const id = Number(req.params.id) //falta de converter em number(pode acontecer)
    
    const product = products.find((p) => p.id === id )

    // if(!product) return res.status(404).send("Product not found!!")

    if (!product) return res.status(404).json(
        {
            status:404,
            message: "Product not found"
        }
    )

    res.json(products)
});


app.post("/api", (req, res) => {
  let name = req.body.name;
  console.log(`Name iss ${name}`);
  // adicione o produto no array
  products.push({ id: products.length + 1, name: name });

  return res.json(products);
});


app.put("/api/products/:id", (req, res) => {
    //let name = req.body.name
    let { name } = req.body;
    let id = Number(req.params.id)

    const product = products.find((p) => p.id === id )

    if (!product) return res.status(404).json(
        {
            status:404,
            message: "Product not found"
        }
    )

    products[id].name = name

    return res.json(products[id])

})


//DELETE Function

app.delete("/api/products/:id", (req, res) => {
    
    let id = Number(req.params.id)

    const product = products.find((p) => p.id === id )

    if (!product) return res.status(404).json(
        {
            status:404,
            message: "Product not found"
        }
    )

    products = products.filter(p => p.id !== id)

    return res.json({
        status: 204,
        message: " Product delected!",
    })
})



/**
 * Configuração da porta
 */
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});





































// // config do express

// const express = require('express')
// const app = express()
// const port = 3000

// // deconding / enconding
// app.use(express.urlencoded({extended:true}))

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


// // Configuração de rotas - GET, PUT, DELETE, POST
// app.get('/', (req,res) => {
//     res.send('Meu Express esta rodando...') 
// })

// // PRODUCTS
// app.get('/api', (req, res) =>{
//     // buscar em bd (repositorio)
//     res.json(products)
// })

// app.post('/api', (req, res) => {
    
//     let name = req.body.name
//     console.log(`Name is ${name}`)

//     //adicione o produto no array
//     products.post({id: products.length + 1, name: name})


//     return res.json(products)


// })

// // Configuração da porta
// app.listen(port, () => {
//     console.log(`Express is running on port ${port}`) 
// })