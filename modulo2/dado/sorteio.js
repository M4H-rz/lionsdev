const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const numeroAleatorio = Math.floor(Math.random() * 100) + 1
const maxRodadas = 10
let rodadas = 0
console.log('Bem-vindo ao jogo de adivinhação! Tente adivinhar o número que estou pensando.')
palpite()


function palpite() {
  if (rodadas >= maxRodadas) {
    console.log(`Você atingiu o número máximo de ${maxRodadas} rodadas. O número sorteado era ${numeroAleatorio}.`)
    rl.close()
    return
  }

  rl.question('Tente adivinhar o número (entre 1 e 100): ', (palpite) => {
    const palpiteNumerico = parseInt(palpite, 10)
    rodadas++

    if (palpiteNumerico < 1 || palpiteNumerico > 100) {
      console.log('Por favor, insira um número válido entre 1 e 100.') 
      palpite()
      return
    }

    switch (true) {
      case palpiteNumerico < numeroAleatorio:
        console.log('Muito baixo!')
        palpite()
        break
      case palpiteNumerico > numeroAleatorio:
        console.log('Muito alto!')
        palpite()
        break
      case palpiteNumerico === numeroAleatorio:
        console.log(`Parabéns! Você acertou em ${rodadas} rodadas!`)
        rl.close()
        break
    }
  })
}

palpite()