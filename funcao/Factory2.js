function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}
console.log(criarProduto('Mac book big Sur', 50000.00))
console.log(criarProduto('Iphone', 11000.00))
console.log(criarProduto('Ipad', 1299.00))

