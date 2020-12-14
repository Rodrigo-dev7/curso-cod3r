function calculeAnoBissexto(ano) {
  if (ano <= 0) {
    return false;
  } else if (ano % 400 == 0) {
    return true;
  } else if (ano % 100 == 0) {
    return false;
  } else if (ano % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(calculeAnoBissexto(0));
console.log(calculeAnoBissexto(4));
console.log(calculeAnoBissexto(100));
console.log(calculeAnoBissexto(400));
console.log(calculeAnoBissexto(800));
console.log(calculeAnoBissexto(2020));
console.log(calculeAnoBissexto(2021));
console.log(calculeAnoBissexto(2024));
