// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log('i =', i);

// **Usando let em Loop 

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log('i =', i); // Fora do escopo variavel i não está disponivel

/**
 * Usando var em loop 02
 */

// const funcs = []

// for (var i = 0; i < 10; i++){
//   funcs.push(function() {
//     console.log(i);
//   })
// }

// funcs[2]()
// funcs[8]()


/**
 * Usando let em loop 02
 */


const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(function() {
    console.log(i);
  })
}

funcs[2]()
funcs[8]()
