// let & const 
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a);

// Template String
const produto = 'MacOS'
console.log(`${produto} é caro  `);

// Destructuring
const [l, e, ...back] = 'Cod3r'
console.log(l, e, back);

const { nome, idade: i } = { nome: 'Ana', idade: 9 }
console.log(nome, i);
