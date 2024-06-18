var opcoes = ['pedra','papel','tesoura']
var escolhaComputador = ''
var escolhaUsuario = ''



console.log('Pedra, Papel ou Tesoura?')
process.stdin.once('data', function(data){
    escolhaUsuario = data.toString().trim()
    jogar()
    process.exit()
})

function jogar(){
    escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
    console.log(`${escolhaComputador}`)
    if (escolhaUsuario == escolhaComputador) {
        console.log('Empate')
    } else if (
        escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura' ||
        escolhaUsuario == 'papel' && escolhaComputador == 'pedra' ||
        escolhaUsuario == 'tesoura' && escolhaComputador == 'papel'
    ) {
        console.log('Você venceu!')
    } else
    {
        console.log('Você perdeu!')
    }
}