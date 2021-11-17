//var nomes = ["João", "Juliana", "Alexandre", "Roberto"];
//const [primeiro, ...a] = nomes;

// function nomesComRest(...nomes){
//     console.log(nomes)
// }

// nomesComRest("Pedro", "Joana", "Alex", "Ribaltar")
// nomesComRest("João", "Juliana")

// function somarNumeros(...numeros){
//     console.log(numeros)
// }

// var numeros = [2, 2, 3]

// somarNumeros(...numeros)

const pessoa = {
  nome: 'Flávia',
  idade: 45,
  endereco: {
    cidade: 'Petrópolis',
    estado: 'Rio de janeiro'
  },
  gritar: function () {
    console.log('UUUUUUUUUUUUUU')
  }
}

const pessoa2 = { ...pessoa, endereco: { ...pessoa.endereco, cidade: 'Rio' } }

console.log(pessoa2)
