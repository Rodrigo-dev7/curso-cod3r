const imprimirResultado = function (nota) {
  if (nota > 7) {
    console.log(`Aprovado nota: ${nota}`)
  } else {
    console.log(`Reprovado nota: ${nota}`);
  }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado

