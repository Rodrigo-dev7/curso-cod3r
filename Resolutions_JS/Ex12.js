function Fatorial(numero) {
  if (numero == 0) {
    return 1;
  } else {
    return numero * Fatorial(numero - 1);
  }
}
console.log(Fatorial(4));
console.log(Fatorial(5));
console.log(Fatorial(6));
console.log(Fatorial(7));
