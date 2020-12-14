let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function avaliaPontuacoes(stringPontuacoes) {
  let pontuacoes = stringPontuacoes.split(", ");
  let qtdeQuebraRecords = 0;
  let piorJogor = 1;
  let maiorPontuacao = pontuacoes[0];
  let menorPontucao = pontuacoes[0];

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i];
      qtdeQuebraRecords++;
    } else if (pontuacoes[i] < menorPontucao) {
      menorPontucao = pontuacoes[i];
      piorJogor = i + 1;
    }
  }
  return [qtdeQuebraRecords, piorJogor];
}

console.log(avaliaPontuacoes(stringPontuacoes));
