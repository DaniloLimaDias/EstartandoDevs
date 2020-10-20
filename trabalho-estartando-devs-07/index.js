// Pegue um array de inteiros e retorne a soma de todos os elementos.

const numerosInteiros = [2, 2, 2, 8, 1, 1];
let soma = 0

numerosInteiros.forEach(item => soma += item);

console.log(`A soma é ${soma}`);


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

const alunosAprovados = turma.map((aluno) => {
  const media = gerandoMedia(aluno.notas)
  const status = gerandoStatus(media)

  return {
    nome: aluno.nome,
    media: media,
    status: status

  }

  function gerandoMedia(notas) {
    let media = 0

    notas.forEach(nota => {
      media += nota
    });
    return media / notas.length

  }

  function gerandoStatus(media) {
    if (media >= 7) {
      return "Aprovado"
    } else {
      return "Reprovado"
    }
  }
});

console.log(alunosAprovados)


// outra forma de fazer


// const provados = turma.map(aluno => {
// const media = gerarMedia(aluno.notas)
// const status = gerarStatus(media)
//   return {
//     nome: aluno.nome,
//     media: media,
//     status: status
//   }
// })

// function gerarMedia(notas){
//   let media = 0

//   notas.forEach(nota => {
//     media += nota
//   });

//   return media / notas.length
// }
// function gerarStatus(media){
//   if(media > 7){
//     return 'aprovado'
//   }else{
//     return 'reprovado'
//   }
// }
// console.log(provados)
// // console.log(media)
















// ### SAIDA EXEMPLO
// [
//   {
//     nome: "Jonas",
//     media: 5.75,
//     status: "reprovado"
//   },
//   {
//     nome: "Adam",
//     media: 6,
//     status: "reprovado"
//   },
//   {
//     nome: "Marta",
//     media: 7.5,
//     status: "aprovado"
//   },
// ];