const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad pro', preco: 4199, fragil: true },
  { nome: 'Corpo de video', preco: 12.49, fragil: true },
  { nome: 'Corpo de plátisco', preco: 18.99, fragil: false },
]

console.log(produtos.filter(p => {
  return p.preco > 2500
}));

const caro = produto => produto.preco == 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))