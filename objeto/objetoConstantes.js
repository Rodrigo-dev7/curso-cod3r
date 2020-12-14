const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa = {nome: 'Ana'} erro
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)