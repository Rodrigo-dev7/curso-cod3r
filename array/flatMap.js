const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]

const getNotaDoALuno = aluno => aluno.nota
const getNotasDaTurmma = turma => turma.alunos.map(getNotaDoALuno)

const notas1 = escola.map(getNotasDaTurmma)
console.log(notas1);

Array.prototype.flatmap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatmap(getNotasDaTurmma)
console.log(nota2);