// Pegue um array de inteiros e retorne a soma de todos os elementos.

const numerosInteiros = [2, 2, 2, 8, 1, 1, 1];

const soma = numerosInteiros.reduce((acaumulado, valoratal )=> acaumulado + valoratal);

console.log(soma);


// Receba um array de aluno com as notas 4 dos bimestres, e retorne um array contendo o nome, a media de cada aluno e informaçao se o mesmo foi aprovado ou reprovado, sabendo que as notas podem variar de 0 a 10 e a média minima para aprovaçao é 7.
// ### ENTRADA EXEMPLO
const turma = [{
    nome: "Jonas",
    notas: [5, 5, 5, 5],
  },
  {
    nome: "Adam",
    notas: [12, 12, 8, 2],
  },
  {
    nome: "Marta",
    notas: [7, 7, 7, 7],
  },
]

const aprovados = turma.map((aluno) => {
  const media = gerarMedia(aluno.notas)
  const status = gerarStatus(media)

  return {
    nome: aluno.nome,
    media,
    status: status
  }
})

function gerarMedia(notas) {
  const soma = notas.reduce((acumulado , outranota) => acumulado + outranota );
  return soma / notas.length
}

function gerarStatus(media) {
  return media >= 7 ? "Aprovado" : "Reprovado"
}
console.log(aprovados)





// outra forma de fazer
const provados = turma.map(aluno => {
const media = gerarMedia(aluno.notas)
const status = gerarStatus(media)
  return {
    nome: aluno.nome,
    media: media,
    status: status
  }
})

function gerarMedia(notas){
  let media = 0

  notas.forEach(nota => {
    media += nota
  });

  return media / notas.length
}
function gerarStatus(media){
  if(media >= 7){
    return 'aprovado'
  }else{
    return 'reprovado'
  }
}
console.log(provados)





// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é
function experiencia(anos) { 

  return anos <= 1 ? "iniciante" : anos <=3 ? "Intermediário" : anos <=6 ? "Avançado" : "Jedi Master"
}

const minhaExperiencia = experiencia(3);
console.log(minhaExperiencia)
// De 0-1 ano: Iniciante
// De 2-3 anos: Intermediário
// De 4-6 anos: Avançado
// De 7 acima: Jedi Mast




// Escreva duas funções as duas receberam um array de números. Uma retornara os números pares e uma para retornar os números impares
function numerosPares() {
  return arrayNumeros.filter(numero => numero % 2 === 0)
}

function numerosImpares() {
  return arrayNumeros.filter(numero => numero % 2 === 1)
}

const arrayNumeros = [7, 2, 8, 10, 9]
const apenasPares = numerosPares(arrayNumeros);
const apenasImpares = numerosImpares(arrayNumeros);

console.log(apenasPares) 
console.log(apenasImpares)



