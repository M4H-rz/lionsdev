let resposta

console.log('Escreva um numero')
process.stdin.once('data', function(data){
    resposta = parseInt (data.toString().trim())
    processamento(resposta)
    process.exit()
})
function processamento(resposta){
    if (resposta == 0){
        console.log("O número que digitou é zero.")
    }else if (resposta %2 == 0){
        console.log("O número que digitou é par.")
    }else{
        console.log("O número que digitou é impar.")
    }
}


   