const contadoA = require('./instanciaUnica')
const contadoB = require('./instanciaUnica')

const contadoC = require('./instanciaNova')()
const contadoD = require('./instanciaNova')()

contadoA.inc()
contadoA.inc()

console.log('Node = ' + contadoA.valor, contadoB.valor);

contadoC.inc()
contadoC.inc()

console.log('Function Factory = ' + contadoC.valor, contadoD.valor);