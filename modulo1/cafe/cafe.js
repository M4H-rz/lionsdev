let resposta
let gostaDeCafe

console.log('Você gosta de café?')
process.stdin.once('data', function(data){
    gostaDeCafe = (data.toString().trim())
    processamento(gostaDeCafe)
    process.exit()
})

function processamento(gostaDeCafe){
    if(gostaDeCafe =='sim'){
    
        resposta = true
} else {
    resposta = false
}
if (resposta == true){
    console.log ('Legal, idem!')
} else {
    console.log ('coitado(a)')
}}      