// ES8: Object.value / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação de Literal
const nome = 'Carla'
const pessoa = {
  nome,
  Hello() {
    return 'Fala Dev'
  }
}
console.log(pessoa.nome, pessoa.Hello());

// Class
class Animal { }
class Cachorro extends Animal {
  falar() {
    return 'Fala pai...'
  }
}

console.log(new Cachorro().falar());



