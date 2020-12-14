function jurosSimples(CapitalInicial, taxa, tempo) {
  return CapitalInicial + CapitalInicial * taxa * tempo;
}

function jurosCompostos(CapitalInicial, taxa, tempo) {
  return CapitalInicial * (1 + taxa) ** tempo;
}

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosCompostos(100, 10 / 100, 2));
