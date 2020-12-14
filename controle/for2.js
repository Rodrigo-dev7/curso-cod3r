const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
  console.log(`Notas = ${(i, notas[i])}`);
}

const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 19,
  peso: 64,
};

console.log("========");

for (let atributos in pessoa) {
  console.log(`${atributos} = ${pessoa[atributos]}`);
}
