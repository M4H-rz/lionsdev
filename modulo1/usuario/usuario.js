var nome
var idade
const ano= 2024

console.log('Como é o seu nome?')

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log('Qual é a sua idade?')

    process.stdin.once('data',function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade){
    processamento = (ano - idade)
    console.log(`Olá ${nome}, sua idade é ${idade}, e seu ano de nascimento caso já tenha feito aniversário é ${processamento}, caso não tenha feito aniversário ainda, é ${processamento - 1}`)
}
