// Higher-order function

// criar  de forma literal
function fun1() { }

// Armezener ema variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar  função como param
function run(fun) {
  fun()
}
run(function () { console.log('Executando ...') })

// Um função pode retorna/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(`Valor = ${a + b + c}`)
  }
}
soma(2, 3)(4)