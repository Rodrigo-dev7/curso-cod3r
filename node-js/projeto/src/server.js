const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./Database')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
  res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = db.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco

  })
  res.send(produto) // JSON
})

app.listen(4000, () => console.log(`Server is Running `))